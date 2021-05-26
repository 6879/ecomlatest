<?php

namespace App\Http\Controllers;
use Image;
use Illuminate\Http\Request;
use App\Models\Terms;
use App\Http\Resources\Terms as TermsResource;
class TermsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TermsResource::collection(Terms::all());
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
        $form = new Terms();
        $form->image = $name;
        $form->details = $request->details;       
        $form->save();
        return new TermsResource($form);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit = Terms::where('id', $id)->first();
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

            $form = Terms::find($id);
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
            return new TermsResource($form);
        } else {
            $form = Terms::find($id);
            $form->details = $request->details;           
            $form->update();
            return new TermsResource($form);
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
        $terms = Terms::find($id);
        $terms->delete();
        return new TermsResource($terms);
    }
}
