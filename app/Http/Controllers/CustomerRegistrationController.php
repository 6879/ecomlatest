<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Models\User;
use Image;
class CustomerRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customer=Customer::paginate(1);
        $thana=Customer::distinct('thanaId','divisionId','districtId')->get(['thanaId','districtId','divisionId']);
        return ['customer'=>$customer,'thana'=>$thana];
    }
    public function search(Request $request)
    {
       $search=$request->get('q');
       return Customer::where('name',$search)->get();

    }
    public function searchUser(Request $request)
    {
       $search=$request->get('q');
       $getuser=Customer::where('name',$search)->orWhere('phone',$search)->first();
       return ['getuser'=>$getuser];

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
            'name' => ['required', 'string', 'max:255'],
            'dob' => ['required', ],
            'phone' => ['required', ],
             'terms'=>'required',
            'email' => ['required', 'string', 'email', 'max:255', 'unique:customers'],
           
        ]);

        if ($strpos = strpos($request->image, ';')) {
        $sub=substr($request->image,0,$strpos);
        $ex=explode('/',$sub)[1];
        $name=time().".".$ex;
        $img=Image::make($request->image)->resize(200,200);
        $upload_path=public_path()."/customerImage/";
        $img->save($upload_path.$name ,'jpg','png');
        $form= new Customer();     
        $form->image=$name;      
            
        $form->permanentAddress=$request->permanentAddress;      
        $form->phone=$request->phone;      
        $form->name=$request->name;      
        $form->fname=$request->fname;      
        $form->fullname=$request->fullname;      
        $form->mname=$request->mname;      
        $form->dob=$request->dob;      
        $form->nid=$request->nid;      
        $form->presentAddress=$request->presentAddress;      
        $form->terms=$request->terms;      
        $form->email=$request->email;      
        $form->divisionId=$request->divisionId;      
        $form->districtId=$request->districtId;      
        $form->thanaId=$request->thanaId;      
        $form->unionId=$request->unionId;      
        $form->wardId=$request->wardId;      
        $form->permanentAddress=$request->permanentAddress;      
        $form->password=Hash::make($request['password']) ;  
        $form->pass=$request['password'] ;   
        $form->sponsorId=$request->sponsorId;      
        $form->save(); 
        }
        else{
            $form= new Customer();     
             
                
            $form->permanentAddress=$request->permanentAddress;      
            $form->phone=$request->phone;      
            $form->name=$request->name;      
            $form->fname=$request->fname;      
            $form->fullname=$request->fullname;      
            $form->mname=$request->mname;      
            $form->dob=$request->dob;      
            $form->nid=$request->nid;      
            $form->presentAddress=$request->presentAddress;      
            $form->terms=$request->terms;      
            $form->email=$request->email;      
            $form->divisionId=$request->divisionId;      
            $form->districtId=$request->districtId;      
            $form->thanaId=$request->thanaId;      
            $form->unionId=$request->unionId;      
            $form->wardId=$request->wardId;      
            $form->permanentAddress=$request->permanentAddress;      
            $form->password=Hash::make($request['password']) ;   
            $form->pass=$request['password'] ;   
            $form->sponsorId=$request->sponsorId;      
            $form->save(); 
        } 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer=Customer::where('thanaId',$id)->paginate(1);
        return ['customer'=> $customer];
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
