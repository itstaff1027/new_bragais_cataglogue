<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ContentsManagement\FeaturedImage;

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
        // dd($featuredImages);
        return inertia('Womens/Page', [
            'featured_images' => $featuredImages
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
