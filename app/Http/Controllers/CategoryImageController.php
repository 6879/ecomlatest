<?php

namespace App\Http\Controllers;


use Image;
use File;
use Illuminate\Http\Request;
use App\Models\CategoryImage;
use App\Models\PriceSetup;
use Illuminate\Support\Str;
class CategoryImageController extends Controller
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      
       

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit=CategoryImage::where('pname',$id)->first();
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
        $form = CategoryImage::where('pname',$id)->first();
       
        if($strpos = strpos($request->image, ';')){
            $usersImage = public_path("/productImage/{$form->image}"); // get previous image from folder
            if($form->image!==NULL){
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image, ';');
        $sub = substr($request->image, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = time() . "." . $ex;
        $img = Image::make($request->image)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image = $name;
        }
        if($request->image==''){
            $form->image = '';
        }
        if($request->image1==''){
            $form->image1 = '';
        }
        if($request->image2==''){
            $form->image2 = '';
        }
        if($request->image3==''){
            $form->image3 = '';
        }
        if($request->image4==''){
            $form->image4 = '';
        }
        if($request->image5==''){
            $form->image5 = '';
        }
        if($request->image6==''){
            $form->image6 = '';
        }
        if($request->image7=''){
            $form->image7 = '';
        }
        if($request->image8=''){
            $form->image8= '';
        }
        if($request->image9=''){
            $form->image9= '';
        }
        if($strpos = strpos($request->image1, ';')){
            if($form->image1!==NULL){
            $usersImage = public_path("/productImage/{$form->image1}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image1, ';');
        $sub = substr($request->image1, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image1)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image1 = $name;
        }
        if($strpos = strpos($request->image2, ';')){
            if($form->image2!==NULL){
            $usersImage = public_path("/productImage/{$form->image2}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image2, ';');
        $sub = substr($request->image2, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image2)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image2 = $name;
        }
        if($strpos = strpos($request->image3, ';')){
            if($form->image3!==NULL){
            $usersImage = public_path("/productImage/{$form->image3}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image3, ';');
        $sub = substr($request->image3, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image3)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image3= $name;
        }
        if($strpos = strpos($request->image4, ';')){
            if($form->image4!==NULL){
            $usersImage = public_path("/productImage/{$form->image}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image4, ';');
        $sub = substr($request->image4, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image4)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image4= $name;
        }
        if($strpos = strpos($request->image5, ';')){
            if($form->image5!==NULL){
            $usersImage = public_path("/productImage/{$form->image5}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image5, ';');
        $sub = substr($request->image5, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image5)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image5= $name;
        }
        if($strpos = strpos($request->image6, ';')){
            if($form->image6!==NULL){
            $usersImage = public_path("/productImage/{$form->image6}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image6, ';');
        $sub = substr($request->image6, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image6)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image6= $name;
        }
        if($strpos = strpos($request->image7, ';')){
           
            if($form->image7!==NULL){ $usersImage = public_path("/productImage/{$form->image7}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image7, ';');
        $sub = substr($request->image7, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image7)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image7= $name;
        }
        if($strpos = strpos($request->image8, ';')){
            if($form->image8!==NULL){
            $usersImage = public_path("/productImage/{$form->image8}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image8, ';');
        $sub = substr($request->image8, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image8)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image8= $name;
        }
        if($strpos = strpos($request->image9, ';')){
           
            if($form->image9!==NULL){ $usersImage = public_path("/productImage/{$form->image9}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
        $strpos = strpos($request->image9, ';');
        $sub = substr($request->image9, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image9)->resize(600, 600);
        $upload_path = public_path() . "/productImage/";
        $img->save($upload_path . $name);
        $form->image9= $name;
        }
        $form->videoUrl = $request->videoUrl;       
        $form->details = $request->details;       
        $form->speciality = $request->speciality;  
       
        $form->update();
        PriceSetup::where('pname',$id)->update([
            'status'=>1
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
