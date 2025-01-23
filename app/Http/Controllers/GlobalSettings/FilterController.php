<?php

namespace App\Http\Controllers\GlobalSettings;

use App\Models\Filter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FilterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $filter = Filter::all();

        // dd($filter);
        return inertia('Contents/Managements/Filters/Page', [
            'Filters' => $filter
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $filter = Filter::all();
        return inertia('Contents/Managements/Filters/Create/Page', [
            // 'filters' => $filter
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
        ]);

        Filter::create([
            'filter_name' => $request->name,
            'category' => $request->category
        ]);

        return redirect()->route('settings_filters.index')->with('success', 'filters created successfully!');
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
        $filter = Filter::findOrFail($id);
        return inertia('Contents/Managements/Filters/Edit/Page', [
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
            'category' => 'required|string|max:255',
        ]);

        $filter = Filter::findOrFail($id);
        $filter->update([
            'filter_name' => $request->name,
            'category' => $request->category
        ]);

        return redirect()->route('settings_filters.index')->with('success', 'filters Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $filter = Filter::findOrFail($id);
        $filter->delete();

        return redirect()->route('settings_filters.index')->with('success', 'filters Deleted successfully!');
    }
}
