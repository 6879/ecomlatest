<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class activeUsers
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    protected $auth;
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }
    public function handle(Request $request, Closure $next)
    {
        if(Auth::check()){
             $expireTime=Carbon::now()->addSeconds(10);            
             Cache::put('active-user'.Auth::User()->id,true,$expireTime);
        }
        return $next($request);
    }
}
