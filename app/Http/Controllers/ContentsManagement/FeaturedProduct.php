<?php

namespace App\Http\Controllers\ContentsManagement;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\ContentsManagement\FeaturedProduct as ContentsManagementFeaturedProduct;

class FeaturedProduct extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ContentsManagementFeaturedProducts = ContentsManagementFeaturedProduct::with('products')->get();
        return inertia('Contents/Managements/Womens/FeaturedProducts/Page', [
            'FeaturedProducts' => $ContentsManagementFeaturedProducts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Contents/Managements/Womens/FeaturedProducts/Create/Page', [
            // 'featured_products' => $ContentsManagementFeaturedProducts
            'products' => Product::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'product_id' => 'required|integer|min:1',
            'header' => 'required|string|max:255',
            'sub_header' => 'max:255',
            'description_1' => 'required|string|max:255',
            'description_2' => 'max:255',
        ]);
    
        ContentsManagementFeaturedProduct::create([
            'product_id' => $request->product_id,
            'category' => $request->category,
            'header' => $request->header,
            'sub_header' => $request->sub_header,
            'description_1' => $request->description_1,
            'description_2' => $request->description_2,
        ]);
    
        return redirect()->route('featured_product_womens.index')->with('success', 'Product created successfully!');
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
        $ContentsManagementFeaturedProducts = ContentsManagementFeaturedProduct::with('products')->find($id);
        return inertia('Contents/Managements/Womens/FeaturedProducts/Edit/Page', [
            'FeaturedProduct' => $ContentsManagementFeaturedProducts,
            'products' => Product::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'product_id' => 'required|integer|min:1',
            'header' => 'required|string|max:255',
            'sub_header' => 'max:255',
            'description_1' => 'required|string|max:255',
            'description_2' => 'max:255',
        ]);

        $featured_product = ContentsManagementFeaturedProduct::findOrFail($id);

        $featured_product->update([
            'product_id' => $request->product_id,
            'category' => $request->category,
            'header' => $request->header,
            'sub_header' => $request->sub_header,
            'description_1' => $request->description_1,
            'description_2' => $request->description_2,
        ]);
    
        return redirect()->route('featured_product_womens.index')->with('success', 'Product created successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $FeaturedProduct = ContentsManagementFeaturedProduct::findOrFail($id);
        $FeaturedProduct->delete();

        return redirect()->route('featured_product_womens.index')->with('success', 'filters Deleted successfully!');
    }
}
