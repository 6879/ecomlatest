<?php

namespace App\Http\Controllers;
use Image;
use Illuminate\Http\Request;
use App\Models\Brand;
use App\Models\ProductTransfer;
use App\Http\Resources\Brand as BrandResource;
class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BrandResource::collection(Brand::all());
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
        $this->validate($request, [
            'brand' => 'required | unique:brands',

        ]);
        $strpos=strpos($request->image,';' );
        $sub=substr($request->image,0,$strpos);
        $ex=explode('/',$sub)[1];
        $name=time().".".$ex;
        $img=Image::make($request->image)->resize(200,200);
        $upload_path=public_path()."/images/";
        $img->save($upload_path.$name);
        $form= new Brand();     
        $form->image=$name;      
        $form->brand=$request->brand;      
        $form->save();
        return new BrandResource($form);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit=Brand::where('id',$id)->first();
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
        $get=ProductTransfer::where('id',$id)->first();
        $brandinfo=Brand::where('id',$get->brand)->first();
        return response()->json($brandinfo);
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

            $form = Brand::find($id);
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = time() . "." . $ex;
            $img = Image::make($request->image)->resize(200, 200);
            $upload_path = public_path() . "/images/";
            $img->save($upload_path . $name);
            $form->image = $name;
            $form->brand = $request->brand;           
            $form->update();
            return new BrandResource($form);
        } else {
            $form = Brand::find($id);
            $form->brand = $request->brand;           
            $form->update();
            return new BrandResource($form);
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
        $brand=Brand::find($id);
        $brand->delete();
        return new BrandResource($brand);
    }
}
