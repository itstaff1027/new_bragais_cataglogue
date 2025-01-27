<?php

namespace App\Http\Controllers\ContentsManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\ContentsManagement\Banner;

class BannerController extends Controller
{
/**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banner = Banner::all();

        // dd($banner);
        return inertia('Contents/Managements/Banners/Page', [
            'banners' => $banner
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Contents/Managements/Banners/Create/Page', [
            // 'banners' => $banner
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'bg_color' =>  'required|string|max:255',
            'button_color' => 'required|string|max:255',
            'text_color' => 'required|string|max:255',
            'name' => 'required|string|max:255', //banner_title
            'header' => 'required|string|max:255',
            'sub_header' => 'max:255',
            'description' => 'required|string|max:255',
            'sub_description' => 'max:255',
            'image' => 'required|image|mimes:webp,jpeg,png',
            'label' => 'required|string|max:255',
        ]);

        // dd($request);
    
        $uploadedImage = $request->file('image');
        $imagePath = Storage::disk('do')->putFileAs('banner_image', $uploadedImage, $uploadedImage->getClientOriginalName());
    
        Banner::create([
            'banner_title' => $request->name,
            'bg_color' => $request->bg_color,
            'text_color' => $request->text_color,
            'button_color' => $request->button_color,
            'header' => $request->header,
            'sub_header' => $request->sub_header,
            'description' => $request->description,
            'sub_description' => $request->sub_description,
            'image_path' => $imagePath,
            'label' => $request->label
        ]);
    
        return redirect()->route('content_banners.index')->with('success', 'banner created successfully!');
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
        $banner = Banner::findOrFail($id);
        return inertia('Contents/Managements/Banners/Edit/Page', [
            'Banner' => $banner
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // dd($id);     
        $request->validate([
            'bg_color' =>  'required|string|max:255',
            'button_color' => 'required|string|max:255',
            'text_color' => 'required|string|max:255',
            'name' => 'required|string|max:255', //banner_title
            'header' => 'required|string|max:255',
            'sub_header' => 'max:255',
            'description' => 'required|string|max:255',
            'sub_description' => 'max:255',
            'label' => 'required|string|max:255',           
        ]);

        $banner = Banner::find($id);

        $banner->update([
            'bg_color' =>  $request->bg_color,
            'button_color' => $request->button_color,
            'text_color' => $request->text_color,
            'banner_title' => $request->name, //banner_title
            'header' => $request->header,
            'sub_header' => $request->sub_header,
            'description' => $request->description,
            'sub_description' => $request->sub_description,
            'label' => $request->label
        ]);

        return redirect()->route('content_banners.index')->with('success', 'banner created successfully!');

    }

    public function update_banner_image(Request $request)
    {

        // dd($request);
        $validated = $request->validate([
            'image' => 'required|image|mimes:webp,jpeg,png',
        ]);

        $banner = Banner::findOrFail($request->id);
        if ($banner->image_path) {
            Storage::disk('do')->delete($banner->image_path);
        }

        $uploadedFrontImage = $request->file('image');
        // dd($uploadedFrontImage);
        $path = Storage::disk('do')->putFile('banner_image', $uploadedFrontImage);
        $banner->update(['image_path' => $path]);

        return redirect()->route('content_banners.index')->with('success', 'banner created successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $Banner = Banner::findOrFail($id);
        Storage::disk('do')->delete($Banner->image_path);
        $Banner->delete();

        return redirect()->route('content_banners.index')->with('success', 'filters Deleted successfully!');
    }
}
