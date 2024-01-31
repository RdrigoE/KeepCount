<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FolderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render(
            'Folder/Index',
            [
                'folder' => null,
                'folders' => request()->user()->folders()->where('folder_id', null)->get(),
            ],
        );
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
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'folder_id' => 'int|nullable',
        ]);

        $request->user()->folders()->create($validated);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Folder $folder)
    {
        return Inertia::render(
            'Folder/Index',
            [
                'folder' => $folder,
                'canMakeSheet' => true,
                'folders' => $folder->folders()->get(),
                'sheets' => $folder->sheets()->get(),
            ],
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Folder $folder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Folder $folder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Folder $folder)
    {
        //
    }
}
