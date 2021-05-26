<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Division;
use App\Models\District;
use App\Models\Upazila;
use App\Models\Union;
use App\Models\Ward;
use App\Models\DeliveryTime;
class BangladeshLocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function division()
    {
        $division=Division::get();
        return ['division'=>$division];
    }
    public function district($id)
    {
        $district=District::where('division_id',$id)->get();
        return ['district'=>$district];
    }
    public function allDistrict()
    {
        $allDistrict=District::get();
        return ['allDistrict'=>$allDistrict];
    }
    public function allThana()
    {
        $allThana=Upazila::get();
        return ['allThana'=>$allThana];
    }
    public function thana($id)
    {
        $thana=Upazila::where('district_id',$id)->get();
        return ['thana'=>$thana];
    }
    public function union($id)
    {
        $union=Union::where('thanaId',$id)->get();
        return ['union'=>$union];
    }
    public function ward($id)
    {
        $ward=Ward::where('thanaId',$id)->get();
        return ['ward'=>$ward];
    }
    public function deliveryTime($id)
    {
        $time=DeliveryTime::where('unionId',$id)->get();
        return ['time'=>$time];
    }
    public function deliveryTimeForWard($id)
    {
        $time=DeliveryTime::where('wardId',$id)->get();
        return ['time'=>$time];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->union==!''&&$request->ward==''){
            Union::create([
                'thanaId'=>$request->thanaId,
                'union'=>$request->union,
                
            ]);
        }
        if($request->ward==!''&&$request->union==''){
            Ward::create([
                'thanaId'=>$request->thanaId,
                'ward'=>$request->ward,
                
            ]);
        }
        if($request->ward==!''&&$request->union==!''){
            Union::create([
                'thanaId'=>$request->thanaId,
                'union'=>$request->union,
                
            ]);
            Ward::create([
                'thanaId'=>$request->thanaId,
                'ward'=>$request->ward,
                
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
