<?php

namespace App\Http\Controllers\GlobalSettings;

use App\Models\Filter;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\FilterProduct;
use App\Http\Controllers\Controller;

class FilterProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $filterProducts = FilterProduct::with(['filters', 'products'])->get();
        // dd($filterProducts);
        // dd($filter);
        return inertia('Contents/Managements/Filters/Products/Page', [
            'FilterProducts' => $filterProducts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $filterProducts = FilterProduct::all();
        $products = Product::where('status', '=', 'active')->get();
        $filters = Filter::all();

        return inertia('Contents/Managements/Filters/Products/Create/Page', [
            'products' => $products,
            'filters' => $filters
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'filter_id' => 'required|integer|min:1',
            'product_id' => 'required|integer|min:1',
            'header' => 'required|string|max:255',
            'sub_header' => 'max:255',
            'description_1' => 'required|string|max:255',
            'description_2' => 'max:255',
        ]);

        $filterProduct = FilterProduct::create([
            'filter_id' => $request->filter_id,
            'product_id' => $request->product_id,
            'header' => $request->header,
            'sub_header' => $request->sub_header,
            'description_1' => $request->description_1,
            'description_2' => $request->description_2
        ]);

        // $filterProduct->filters()->sync($request->filter_id);
        // $filterProduct->products()->sync($request->product_id);

        return redirect()->route('settings_filter_products.index')->with('success', 'filters created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $filter = FilterProduct::findOrFail($id);
        return inertia('Contents/Managements/Filters/Products/Edit/Page', [
            'Filters' => $filter
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // dd($request);
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $filter = FilterProduct::findOrFail($id);
        $filter->update([
            'filter_name' => $request->name,
        ]);

        return redirect()->route('settings_filter_products.index')->with('success', 'filters Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $filter = FilterProduct::findOrFail($id);
        $filter->delete();

        return redirect()->route('settings_filter_products.index')->with('success', 'filters Deleted successfully!');
    }
}
