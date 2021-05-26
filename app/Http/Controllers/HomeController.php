<?php

namespace App\Http\Controllers;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Models\PriceRange;
use App\Models\ActiveUser;
use Illuminate\Support\Facades\Auth;
class HomeController extends Controller
{
    use AuthenticatesUsers;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
  
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
    
    }
    public function logouts(Request $request,$id)
{
    $this->guard()->logout();
    $request->session()->invalidate();
    
    ActiveUser::where('user_id',  $id )->delete();
   
    return redirect('/'); 
}
    public function __construct()
    {
        $this->middleware('auth:,customer');
    }
}
