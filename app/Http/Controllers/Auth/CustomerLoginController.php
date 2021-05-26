<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Customer;
class CustomerLoginController extends Controller
{ public function __construct()
    {
        $this->middleware('guest:customer')->except('logout');
    }

    public function showLoginForm()
    {
        return view('auth.customer-login');
    }

    public function login(Request $request)
    {
        // Validate form data
        $this->validate($request, [
         
            'password' => 'required'
        ]);

        // Attempt to log the user in
        $phone=Customer::where('phone',$request->email)->first();
        $email=Customer::where('email',$request->email)->first();
        $name=Customer::where('name',$request->email)->first();
        if($email!==''){
        if(Auth::guard('customer')->attempt(['email' => $request->email ,'password' => $request->password], $request->remember))
        {
            return redirect()->intended(('/'));
        }
    }if($phone!==''){
        if(Auth::guard('customer')->attempt(['phone' => $request->email ,'password' => $request->password], $request->remember))
        {
            return redirect()->intended(('/'));
        }
    }
    if($name!==''){
        if(Auth::guard('customer')->attempt(['name' => $request->email ,'password' => $request->password], $request->remember))
        {
            return redirect()->intended(('/'));
        }
    }
        // if unsuccessful
        return redirect()->back()->withInput($request->only('email','remember'));
    }
    
}
