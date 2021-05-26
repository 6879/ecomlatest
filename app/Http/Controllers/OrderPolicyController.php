<?php

namespace App\Http\Controllers;

use Image;
use Illuminate\Http\Request;
use App\Models\OrderPolicy;
use App\Http\Resources\OrderPolicy as PolicyResource;

class OrderPolicyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PolicyResource::collection(OrderPolicy::all());
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
        $strpos = strpos($request->image, ';');
        $sub = substr($request->image, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = time() . "." . $ex;
        $img = Image::make($request->image)->resize(200, 200);
        $upload_path = public_path() . "/images/";
        $img->save($upload_path . $name);
        $form = new OrderPolicy();
        $form->image = $name;
        $form->details = $request->details;       
        $form->save();
        return new PolicyResource($form);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit = OrderPolicy::where('id', $id)->first();
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
        if ($strpos = strpos($request->image, ';')) {

            $form = OrderPolicy::find($id);
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = time() . "." . $ex;
            $img = Image::make($request->image)->resize(200, 200);
            $upload_path = public_path() . "/images/";
            $img->save($upload_path . $name);
            $form->image = $name;
            $form->details = $request->details;           
            $form->update();
            return new PolicyResource($form);
        } else {
            $form = OrderPolicy::find($id);
            $form->details = $request->details;           
            $form->update();
            return new PolicyResource($form);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $policy = OrderPolicy::find($id);
        $policy->delete();
        return new PolicyResource($policy);
    }
}
