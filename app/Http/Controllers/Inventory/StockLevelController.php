<?php

namespace App\Http\Controllers\Inventory;

use App\Models\StockMovements;
use App\Models\Warehouse;
use App\Models\StockLevels;
use Illuminate\Http\Request;
use App\Models\StockMovement;
use App\Models\ProductVariant;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class StockLevelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $stocks = StockLevels::with(['productVariant', 'productVariant.product', 'product.colors', 'product.sizes', 'product.categories', 'product.heelHeights'])
        // ->selectRaw('product_variant_id, SUM(quantity) as total_quantity')
        // ->groupBy('product_variant_id')
        // ->get();

        $products = ProductVariant::with(['product', 'colors', 'sizes', 'size_values', 'heelHeights', 'categories', 'stockLevels', 'stockMovements'])->get();
        // dd($products);
        return inertia('Inventory/Products/Stock/Page', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $product_variants = ProductVariant::all();
        return inertia('Inventory/Products/Stock/Add/Page', [
            'product_variants' => $product_variants,
            'warehouses' => Warehouse::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $validated = $request->validate([
            'rows' => 'required|array',
            'rows.*.id' => 'required|exists:product_variants,id',
            'rows.*.quantity' => 'required|integer|min:1',
            'rows.*.warehouse_id' => 'required|exists:warehouses,id',
        ]);
    
        DB::transaction(function () use ($validated) {
            foreach ($validated['rows'] as $row) {
                $stockLevelsToInsert = [];
                $stockMovementsToInsert = [];

                for ($i = 0; $i < $row['quantity']; $i++) {
                    // Prepare rows for stock_levels
                    $stockLevelsToInsert[] = [
                        'product_variant_id' => $row['id'],
                        'warehouse_id' => $row['warehouse_id'],
                        'quantity' => 1, // Always 1 quantity per row
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];

                    // Prepare rows for stock_movements
                    $stockMovementsToInsert[] = [
                        'product_variant_id' => $row['id'],
                        'to_warehouse_id' => $row['warehouse_id'],
                        'movement_type' => 'purchase',
                        'quantity' => 1, // Always 1 quantity per row
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];
                }

                // Bulk insert into stock_levels
                StockLevels::insert($stockLevelsToInsert);

                // Bulk insert into stock_movements
                StockMovements::insert($stockMovementsToInsert);
            }
        });

        return redirect()->route('stocks.index')->with('success', 'Product updated successfully!');
    }
    


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $products = ProductVariant::with(['product', 'colors', 'sizes', 'size_values', 'heelHeights', 'categories', 'stockLevels.warehouse', 'stockMovements.warehouse'])->find($id);
        // dd($products);
        return inertia('Inventory/Products/Stock/Page', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
