<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeliveryMan;
use App\Models\User;
use Image;
use Illuminate\Support\Facades\Hash;
class DeliveryManInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $member = User::orderBy('id','desc')->where('roll',8)->get();
        $deliveryMan=DeliveryMan::distinct('thanaId')->get(['thanaId',]);
        $deliveryManGet=DeliveryMan::get();
        return  ['member' => $member,'deliveryMan'=> $deliveryMan,'deliveryManGet'=>  $deliveryManGet];
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
            'email' => 'required | unique:users',
            'name'  => 'required | unique:users',
            'userId' => 'required | unique:users',            
            'password' => 'required',
            ]);       
           $userId= User::insertGetId([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => $request['password'],
                'roll' => $request['roll'],
                'userId' => $request['userId'],
                'address' => $request['address'],
                'password' => Hash::make($request['password']),
            ]);      
         
            $strpos=strpos($request->image,';' );
            $sub=substr($request->image,0,$strpos);
            $ex=explode('/',$sub)[1];
            $name=time().".".$ex;
            $img=Image::make($request->image)->resize(200,200);
            $upload_path=public_path()."/adminProfileImage/";
            $img->save($upload_path.$name ,'jpg','png');
            $form= new DeliveryMan();     
            $form->image=$name;      
            $form->deliveryManId=$userId;      
            $form->permanentAddress=$request->permanentAddress;      
            $form->phone=$request->phone;      
            $form->presentAddress=$request->presentAddress;      
            $form->skill=$request->skill;      
            $form->eduQualification=$request->eduQualification;      
            $form->exprience=$request->exprience;      
            $form->divisionId=$request->divisionId;      
            $form->districtId=$request->districtId;      
            $form->thanaId=$request->thanaId;      
            $form->unionId=$request->unionId;      
            $form->wardId=$request->wardId;      
            $form->save();      
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
