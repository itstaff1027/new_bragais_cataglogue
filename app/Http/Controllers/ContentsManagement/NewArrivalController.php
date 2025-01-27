<?php

namespace App\Http\Controllers\ContentsManagement;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ContentsManagement\NewArrival;

class NewArrivalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $NewArrivals = NewArrival::with('products')->get();
        return inertia('Contents/Managements/Womens/NewArrivals/Page', [
            'NewArrivals' => $NewArrivals,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Contents/Managements/Womens/NewArrivals/Create/Page', [
            // 'featured_products' => $NewArrivals
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
    
        NewArrival::create([
            'product_id' => $request->product_id,
            'category' => $request->category,
            'header' => $request->header,
            'sub_header' => $request->sub_header,
            'description_1' => $request->description_1,
            'description_2' => $request->description_2,
        ]);
    
        return redirect()->route('new_arrival_product_womens.index')->with('success', 'Product created successfully!');
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
        $NewArrivals = NewArrival::with('products')->find($id);
        return inertia('Contents/Managements/Womens/NewArrivals/Edit/Page', [
            'NewArrival' => $NewArrivals,
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

        $featured_product = NewArrival::findOrFail($id);
        


        $featured_product->update([
            'product_id' => $request->product_id,
            'category' => $request->category,
            'header' => $request->header,
            'sub_header' => $request->sub_header,
            'description_1' => $request->description_1,
            'description_2' => $request->description_2,
        ]);
    
        return redirect()->route('new_arrival_product_womens.index')->with('success', 'Product created successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $NewArrival = NewArrival::findOrFail($id);
        $NewArrival->delete();

        return redirect()->route('new_arrival_product_womens.index')->with('success', 'filters Deleted successfully!');
    }
}
