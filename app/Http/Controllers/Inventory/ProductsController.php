<?php

namespace App\Http\Controllers\Inventory;

use App\Models\Size;
use App\Models\Color;
use App\Models\Product;
use App\Models\Categories;
use App\Models\HeelHeight;
use App\Models\SizeValues;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Models\ProductVariant;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return inertia('Inventory/Products/Page', [
            'products' => $products,
        ]);
    }

    public function create()
    {
        return inertia('Inventory/Products/Create/Page', [
            'colors' => Color::all(),
            'sizes' => Size::all(),
            'heel_heights' => HeelHeight::all(),
            'categories' => Categories::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_name' => 'required|string|max:255',
            'status' => 'required|string',
            'cost' => ['required', 'numeric', 'regex:/^\d+(\.\d{1,2})?$/'],
            'srp' => ['required', 'numeric', 'regex:/^\d+(\.\d{1,2})?$/'],
            'colors' => 'array',
            'sizes' => 'array',
            'heel_heights' => 'array',
            'categories' => 'array',
            'description' => 'required|string|max:255',
            'front_image' => 'required|image|mimes:webp,jpeg,png',
            'gallery_images' => 'required|array|min:1',
            'gallery_images.*' => 'required|image|mimes:webp,jpeg,png',
        ]);
    
        $uploadedFrontImage = $request->file('front_image');
        $frontImagePath = Storage::disk('do')->putFile('product_images', $uploadedFrontImage);
    
        $product = Product::create([
            'product_name' => $validated['product_name'],
            'status' => $validated['status'],
            'cost' => $validated['cost'],
            'srp' => $validated['srp'],
            'front_image' => $frontImagePath,
            'description' => $validated['description'],
        ]);
    
        $galleryImages = $request->file('gallery_images');
        $galleryImageData = [];
        foreach ($galleryImages as $image) {
            $path = Storage::disk('do')->putFile('gallery_images', $image);
            $galleryImageData[] = ['image_path' => $path, 'is_active' => true];
        }
    
        $product->galleryImages()->createMany($galleryImageData);
    
        $colorIds = collect($validated['colors'])->pluck('id');
        $sizeIds = collect($validated['sizes'])->pluck('id');
        $heelHeightIds = collect($validated['heel_heights'])->pluck('id');
        $categoryIds = collect($validated['categories'])->pluck('id');
    
        $product->colors()->sync($colorIds);
        $product->sizes()->sync($sizeIds);
        $product->heelHeights()->sync($heelHeightIds);
        $product->categories()->sync($categoryIds);
    
        return redirect()->route('products.index')->with('success', 'Product created successfully!');
    }
    

    public function show($id){
        $product = Product::with(['colors', 'sizes:id,size_name', 'heelHeights', 'categories', 'sizes.sizeValues'])->find($id);
        $product_variants = ProductVariant::where('product_id', '=',$id)->get();
        // dd(ProductVariant::where('product_id', '=',$id)->get());
        return inertia('Inventory/Products/View/Page', [
            'product' => $product,
            'product_variants' => $product_variants ? $product_variants : [],
            'colors' => Color::all(),
            'sizes' => Size::all(),
            'size_values' => SizeValues::all(),
            'heel_heights' => HeelHeight::all(),
            'categories' => Categories::all(),
        ]);
    }

    public function store_variants(Request $request){
        // dd($request);
        ProductVariant::insert($request->product_variants);

        return redirect()->route('products.index')->with('success', 'Product updated successfully!');
    }

    public function edit($id)
    {
        $product = Product::with(['colors', 'sizes', 'heelHeights', 'categories', 'galleryImages'])->findOrFail($id);
        return inertia('Inventory/Products/Edit/Page', [
            'product' => $product,
            'colors' => Color::all(),
            'sizes' => Size::all(),
            'size_values' => SizeValues::all(),
            'heel_heights' => HeelHeight::all(),
            'categories' => Categories::all(),
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd($request);
        $validated = $request->validate([
            'product_name' => 'required|string|max:255',
            'status' => 'required|string',
            'cost' => ['required', 'numeric', 'regex:/^\d+(\.\d{1,2})?$/'],
            'srp' => ['required', 'numeric', 'regex:/^\d+(\.\d{1,2})?$/'],
            'colors' => 'array',
            'sizes' => 'array',
            'heel_heights' => 'array',
            'categories' => 'array',
            'description' => 'required|string|max:255'
        ]);

        // Extract relationships
        $colorIds = collect($validated['colors'])->pluck('id');
        $sizeIds = collect($validated['sizes'])->pluck('id');
        $heelHeightIds = collect($validated['heel_heights'])->pluck('id');
        $categoryIds = collect($validated['categories'])->pluck('id');

        $product = Product::findOrFail($id);

        // Update main product details
        $product->update([
            'product_name' => $validated['product_name'],
            'status' => $validated['status'],
            'cost' => $validated['cost'],
            'srp' => $validated['srp'],
            'description' => $request->input('description')
        ]);

        // Sync relationships
        $product->colors()->sync($colorIds);
        $product->sizes()->sync($sizeIds);
        $product->heelHeights()->sync($heelHeightIds);
        $product->categories()->sync($categoryIds);

        return redirect()->route('products.index')->with('success', 'Product updated successfully!');
    }

    public function update_front_image(Request $request)
    {

        // dd($request);
        $validated = $request->validate([
            'front_image' => 'required|image|mimes:webp,jpeg,png',
        ]);

        $product = Product::findOrFail($request->id);
        if ($product->front_image) {
            Storage::disk('do')->delete($product->front_image);
        }

        $uploadedFrontImage = $request->file('front_image');
        // dd($uploadedFrontImage);
        $path = Storage::disk('do')->putFile('product_images', $uploadedFrontImage);
        $product->update(['front_image' => $path]);

        return redirect()->back()->with('success', 'Front image updated successfully.');
    }

    public function update_gallery_images(Request $request)
    {
        $validated = $request->validate([
            'gallery_images.*' => 'required|image|mimes:webp,jpeg,png',
        ]);

        $product = Product::findOrFail($request->id);
        $galleryImageData = [];

        foreach ($request->file('gallery_images') as $image) {
            $path = Storage::disk('do')->putFile('gallery_images', $image);
            $galleryImageData[] = ['image_path' => $path, 'product_id' => $product->id];
        }

        $product->galleryImages()->createMany($galleryImageData);

        return redirect()->back()->with('success', 'Product Gallery Images successfully udpated!');
    }

    public function destroy_gallery_image(Request $request)
    {
        $image = ProductImage::findOrFail($request->id);
        Storage::disk('do')->delete($image->image_path);
        $image->delete();

        return redirect()->back()->with('success', 'Product Gallery Image successfully deleted!');
    }




    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Product deleted successfully!');
    }
}
