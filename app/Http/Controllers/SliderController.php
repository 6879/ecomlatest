<?php

namespace App\Http\Controllers;

use Image;
use Illuminate\Http\Request;
use App\Models\Slider;
use App\Http\Resources\Slider as SliderResource;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SliderResource::collection(Slider::all());
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
        if($request->up){
            $img = Image::make($request->image)->resize(950, 107);
        }
   
     
        else{
        $img = Image::make($request->image)->resize(200, 200);
        }
        $upload_path = public_path() . "/images/";
        $img->save($upload_path . $name);
        $form = new Slider();
        $form->image = $name;
        $form->url = $request->url;
        $form->up = $request->up;
        $form->left = $request->left;
        $form->right = $request->right;
        $form->notice = $request->notice;
        $form->save();
        return new SliderResource($form);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit = Slider::where('id', $id)->first();
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

            $form = Slider::find($id);
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = time() . "." . $ex;
            if($request->up){
                $img = Image::make($request->image)->resize(950, 107);
            }
       
            else{
            $img = Image::make($request->image)->resize(200, 200);
            }
            $upload_path = public_path() . "/images/";
            $img->save($upload_path . $name);
            $form->image = $name;
            $form->url = $request->url;
            $form->up = $request->up;
            $form->left = $request->left;
            $form->right = $request->right;
            $form->notice = $request->notice;
            $form->update();
            return new SliderResource($form);
        } else {
            $form = Slider::find($id);
            $form->url = $request->url;
            $form->up = $request->up;
            $form->left = $request->left;
            $form->right = $request->right;
            $form->notice = $request->notice;
            $form->update();
            return new SliderResource($form);
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
        $slider = Slider::find($id);
        $slider->delete();
        return new SliderResource($slider);
    }
}
