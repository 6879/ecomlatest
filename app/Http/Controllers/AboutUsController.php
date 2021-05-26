<?php

namespace App\Http\Controllers;

use Image;
use Illuminate\Http\Request;
use App\Models\AboutUs;
use App\Http\Resources\AboutUs as AboutResource;

class AboutUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AboutResource::collection(AboutUs::all());
        
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
        $form = new AboutUs();
        $form->image = $name;
        $form->details = $request->details;       
        $form->save();
        return new AboutResource($form);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit = AboutUs::where('id', $id)->first();
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

            $form = AboutUs::find($id);
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
            return new AboutResource($form);
        } else {
            $form = AboutUs::find($id);
            $form->details = $request->details;           
            $form->update();
            return new AboutResource($form);
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
        $about = AboutUs::find($id);
        $about->delete();
        return new AboutResource($about);
    }
}
