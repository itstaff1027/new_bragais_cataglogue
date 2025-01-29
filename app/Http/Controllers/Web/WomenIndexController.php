<?php

namespace App\Http\Controllers\Web;

use App\Models\Filter;
use App\Models\Product;
use App\Models\Categories;
use App\Models\HeelHeight;
use Illuminate\Http\Request;
use App\Models\FilterProduct;
use App\Http\Controllers\Controller;
use App\Models\ContentsManagement\Banner;
use App\Models\ContentsManagement\NewArrival;
use App\Models\ContentsManagement\FeaturedImage;
use App\Models\ContentsManagement\FeaturedProduct as ContentsManagementFeaturedProduct;

class WomenIndexController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $featuredImages = FeaturedImage::where('category', '=', 'womens')
        ->get(columns: [
            'image_path', 
            'section_name', 
            'header',
            'sub_header',
            'description_1',
            'description_2'
        ]);

        $FeaturedProducts = ContentsManagementFeaturedProduct::with(['products', 'products:id,product_name,front_image' ])
        ->where('category', '=', 'womens')
        ->get([
            'id', // Include the foreign key for the relationship
            'product_id', // Ensure this matches your relationship's foreign key in the featured_products table
            'category',
            'header',
            'sub_header',
            'description_1',
            'description_2'
        ]);

        $NewArrivals = NewArrival::with(['products', 'products:id,product_name,front_image' ])
        ->where('category', '=', 'womens')
        ->get([
            'id', // Include the foreign key for the relationship
            'product_id', // Ensure this matches your relationship's foreign key in the featured_products table
            'category',
            'header',
            'sub_header',
            'description_1',
            'description_2'
        ]);
        
        $filteredProducts = FilterProduct::with(['products', 'products:id,product_name,front_image', 'filters', 'filters:id,filter_name,category'])
        // ->where('filters:id,category', '=', 'womens')
        ->get([
            'id',
            'product_id',
            'filter_id',
            'header',
            'sub_header',
            'description_1',
            'description_2'
        ]);

        // $banner = Banner::all();

        // dd($filteredProducts);

        return inertia('Womens/Page', [
            'featured_images' => $featuredImages,
            'featured_products' => $FeaturedProducts,
            'new_arrivals' => $NewArrivals,
            'filtered_products' => $filteredProducts,
            'filters' => Filter::all(),
            'banner' => Banner::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    public function show_all_products(Request $request)
    {
        $query = Product::with([
            'colors:id,color_name,hex',
            'sizes:id,size_name',
            'sizes.sizeValues:id,size_values,size_id',
            'heelHeights:id,name,value',
            'categories:id,category_name,category_label',
            'galleryImages:id,product_id,image_path'
        ]);
    
        // Apply category filter
        if ($request->has('category_id') && $request->category_id) {
            $query->whereHas('categories', function ($q) use ($request) {
                $q->where('categories.id', $request->category_id);
            });
        }
    
        // Apply heel height filter
        if ($request->has('heel_height_id') && $request->heel_height_id) {
            $query->whereHas('heelHeights', function ($q) use ($request) {
                $q->where('heel_heights.id', $request->heel_height_id);
            });
        }
    
        $products = $query->paginate(12)->appends($request->query()); // Maintain filter parameters in pagination links
    
        return inertia('Womens/Products/Page', [
            'products' => $products,
            'heel_heights' => HeelHeight::all(),
            'categories' => Categories::where('category_label', '=', 'womens')->get(),
            'filters' => Filter::all(),
            'banner' => Banner::all(),
            'appliedFilters' => $request->only(['category_id', 'heel_height_id']), // Send applied filters to frontend
        ]);
    }

    public function show_product(string $category, string $id)
    {

        $product = Product::with([
            'colors',
            'colors:id,color_name,hex',
            'sizes',
            'sizes.sizeValues',
            'sizes:id,size_name',
            'sizes.sizeValues:id,size_values,size_id',
            'heelHeights',
            'heelHeights:id,name,value',
            'categories',
            'categories:id,category_name,category_label',
            'galleryImages',
            'galleryImages:id,product_id,image_path'
        ])
        ->findOrFail($id, [
            'id',
            'product_name',
            'status',
            'front_image',
            'description'
        ]);
        

        // dd($product);

        return inertia('Womens/Products/Design/Page', [
            'category' => $category,
            'product' => $product
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
