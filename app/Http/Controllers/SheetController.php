<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use App\Models\Sheet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SheetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $validated = request()->validate([
            'name' => 'string|max:255|required',
            'folder_id' => 'int|required',
        ]);

        $sheet = Folder::find($validated['folder_id'])->sheets()->create($validated);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Sheet $sheet)
    {
        return Inertia::render('Sheet/Index', [
            'sheet' => $sheet,
            'entries' => $sheet->entries
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sheet $sheet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sheet $sheet)
    {
        $validated = request()->validate([
            'name' => 'string|max:255|required',
            'folder_id' => 'int|required',
        ]);

        $sheet->update($validated);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sheet $sheet)
    {
        $sheet->delete();
        return back();
    }
}
