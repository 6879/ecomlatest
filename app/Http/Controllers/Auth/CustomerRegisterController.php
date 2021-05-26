<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Image;
class CustomerRegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest:customer');
    }

    public function showRegisterForm()
    {
        return view('auth.customer-register');
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'dob' => ['required', ],
            'phone' => ['required', ],
           
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
        // return redirect()->intended(route('customer.dashboard'));
    }
}
