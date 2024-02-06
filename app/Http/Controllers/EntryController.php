<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use App\Models\Sheet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class EntryController extends Controller
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
        $validated = $request->validate([
            'item' => 'string|max:255|min:3',
            'price' => 'required|numeric|between:1,99999999999999',
            'quantity' => 'int',
            'sheet_id' => 'int'
        ]);

        $entry = Sheet::find($validated['sheet_id'])->entries()->create($validated);

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Entry $entry)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Entry $entry)
    {

        $validated = request()->validate([
            'item' => 'string|max:255|min:3',
            'price' => 'required|numeric|between:1,99999999999999',
            'quantity' => 'int',
        ]);

        $entry = $entry->update($validated);

        return back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Entry $entry)
    {
        $validated = $request->validate([
            'item' => 'string|max:255|min:3',
            'price' => 'required|numeric|between:1,99999999999999',
            'quantity' => 'int',
            'sheet_id' => 'int'
        ]);

        $entry->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Entry $entry)
    {
        //
    }
}
