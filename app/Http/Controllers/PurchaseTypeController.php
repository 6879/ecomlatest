<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PurchaseType;
use App\Http\Resources\PurchaseType as PurchaseTypeResource;
class PurchaseTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PurchaseTypeResource::collection(PurchaseType::all());
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
            'purchaseType' => 'required | unique:purchase_types',
           
        ]);
        $purchasetype=PurchaseType::create($request->all());
        return new PurchaseTypeResource($purchasetype);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit=PurchaseType::where('id',$id)->first();
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
            'purchaseType' => 'required | unique:purchase_types',
           
        ]);
        $purchasetype=PurchaseType::find($id);
        $purchasetype->update($request->all());
        return new PurchaseTypeResource($purchasetype);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $purchasetype=PurchaseType::find($id);
        $purchasetype->delete();
        return new PurchaseTypeResource($purchasetype);
    }
}
