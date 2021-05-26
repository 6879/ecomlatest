<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeliveryTime;
class DeliveryLocationWebViewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $division=DeliveryTime::with('division')->distinct('divisionId')->get('divisionId');
        return ['division'=>$division];
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $district=DeliveryTime::with('district')->where('divisionId',$id)->distinct('districtId')->get('districtId');
        return response()->json($district);
    }
    public function viewWardLocation($id)
    {
        $ward=DeliveryTime::with('ward','union','deliveryCharge')->where('thanaId',$id)->get();
        $wardview=DeliveryTime::with('ward','union','deliveryCharge')->where('thanaId',$id)->first();
        return ['ward'=>$ward,'wardview'=>$wardview];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $thana=DeliveryTime::with('thana')->where('districtId',$id)->distinct('thanaId')->get('thanaId');
        return response()->json($thana);
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
        //
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
