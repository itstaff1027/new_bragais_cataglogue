<?php

namespace App\Http\Controllers\ContentsManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\ContentsManagement\FeaturedImage;

class WomenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $featuredImages = FeaturedImage::all();
        return inertia('Contents/Managements/Womens/Page', [
            'featured_images' => $featuredImages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Contents/Managements/Womens/Create/Page', [
            // 'featured_images' => $featuredImages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'section_name' => 'required|string|max:255',
            'header' => 'required|string|max:255',
            'sub_header' => 'max:255',
            'description_1' => 'required|string|max:255',
            'description_2' => 'max:255',
            'image' => 'required|image|mimes:webp,jpeg,png',
        ]);
    
        $uploadedImage = $request->file('image');
        $imagePath = Storage::disk('do')->putFileAs('content_images', $uploadedImage, $uploadedImage->getClientOriginalName());
    
        FeaturedImage::create([
            'section_name' => $request->section_name,
            'category' => $request->category,
            'header' => $request->header,
            'sub_header' => $request->sub_header,
            'description_1' => $request->description_1,
            'description_2' => $request->description_2,
            'image_path' => $imagePath,
        ]);
    
        return redirect()->route('content_womens.index')->with('success', 'Product created successfully!');
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
        $featuredImage = FeaturedImage::findOrFail($id);
        Storage::disk('do')->delete($featuredImage->image_path);
        $featuredImage->delete();

        return redirect()->route('content_womens.index')->with('success', 'filters Deleted successfully!');
    }
}
