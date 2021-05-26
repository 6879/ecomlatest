<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FilteringStatus;
class FilteringStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $filstatus=FilteringStatus::distinct('category','item')->get(['category','item','id']);
        return ['filstatus' => $filstatus];
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
        if ($request->categoryMain&&$request->subCategory==""&&$request->thirdCategory=="") {
        if (FilteringStatus::where('category',$request->categoryMain)->where('item',$request->item)->exists()){
             $stget=1;
             return['ststget' => $stget ];
        }else{
        FilteringStatus::create([
            'category'=> $request->categoryMain,
            'item'=> $request->item,
        ]);}}else{
        if ($request->categoryMain&&$request->subCategory&&$request->thirdCategory=="") {
        if (FilteringStatus::where('category',$request->subCategory)->where('item',$request->item)->exists()){
             $stget=1;
             return['ststget' => $stget ];
        }else{
            FilteringStatus::create([
                'category'=> $request->subCategory,
                'item'=> $request->item,
            ]);
      }}else{
        if ($request->categoryMain&&$request->subCategory&&$request->thirdCategory) {
        if (FilteringStatus::where('category',$request->thirdCategory)->where('item',$request->item)->exists()){
             $stget=1;
             return['ststget' => $stget ];
        }else{
        FilteringStatus::create([
            'category'=>$request->thirdCategory,
            'item'=> $request->item,
        ]);}}}}
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=FilteringStatus::where('id',$id)->first();
        $delete=FilteringStatus::where('category',$data->category)->where('item',$data->item);
        $delete->delete();
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
