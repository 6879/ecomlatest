<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UnitEntry;
use App\Http\Resources\UnitEntry as UnitResource;
class UnitEntryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UnitResource::collection(UnitEntry::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'unit' => 'required | unique:unit_entries',

        ]);
        $unit=UnitEntry::create($request->all());
        return new UnitResource($unit);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit=UnitEntry::where('id',$id)->first();
        return response()->json($edit);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'unit' => 'required | unique:unit_entries',

        ]);
        $unit=UnitEntry::find($id);
        $unit->update($request->all());
        return new UnitResource($unit);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $unit=UnitEntry::find($id);
        $unit->delete();
        return new UnitResource($unit);
    }
}
