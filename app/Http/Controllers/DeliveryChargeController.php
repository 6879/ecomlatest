<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeliveryCharge;
class DeliveryChargeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $charge=DeliveryCharge::with('allUnion','allWard')->get();
       $thanaget=DeliveryCharge::with('allUnion','allWard')->get()->unique('thanaId');
       return ['charge'=>$charge,'thanaget'=> $thanaget];
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
        DeliveryCharge::create([
            'divisionId'=>$request->divisionId,
            'districtId'=>$request->districtId,
            'thanaId'=>$request->thanaId,
            'unionId'=>$request->unionId,
            'wardId'=>$request->wardId,
            'deliveryTimeId'=>$request->deliveryTimeId,
            'deliveryCharge'=>$request->deliveryCharge,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit=DeliveryCharge::where('id',$id)->first();
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
        DeliveryCharge::find($id)->update([
            'deliveryCharge'=>$request->deliveryCharge
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
