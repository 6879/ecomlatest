<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use File;
use App\Models\User;
use App\Models\DeliveryMan;
use Image;

class UserInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user=User::with('designation')->where('id',Auth::user()->id)->first();
        $userDetails=DeliveryMan::where('deliveryManId',Auth::user()->id)->first();
        return ['user'=>$user, 'userDetails'=>$userDetails];
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
        $form= DeliveryMan::find($id);  
        $usersImage = public_path("/adminProfileImage/{$form->image}"); // get previous image from folder
        if (File::exists($usersImage)) {
            unlink($usersImage);
        }
        ($strpos=strpos($request->image,';' ));
        $sub=substr($request->image,0,$strpos);
        $ex=explode('/',$sub)[1];
        $name=time().".".$ex;
        $img=Image::make($request->image)->resize(200,200);
        $upload_path=public_path()."/adminProfileImage/";
        $img->save($upload_path.$name,'jpg','png');
         
        $form->image=$name;  
        $form->update(); 
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
