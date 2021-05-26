<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PromotionalCashbackAmount;
class PromotionalCashbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $getPromotion=PromotionalCashbackAmount::with('generationGet')->get();
        return['getPromotion'=>$getPromotion];
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
        PromotionalCashbackAmount::create([
            'generation'=>$request->generation,
            'promotionalCbackAmount'=>$request->promotionalCbackAmount,
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
        PromotionalCashbackAmount::find($id)->delete();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit=PromotionalCashbackAmount::where('id',$id)->first();
        return response()->json($edit);
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
        PromotionalCashbackAmount::find($id)->update([
            'generation'=>$request->generation,
            'promotionalCbackAmount'=>$request->promotionalCbackAmount, 
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
