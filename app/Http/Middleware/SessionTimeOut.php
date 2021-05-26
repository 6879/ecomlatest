<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class SessionTimeOut
{
    

    public function handle($request, Closure $next)
    {
      // If user is not logged in...
      if (!Auth::check()) {
        return $next($request);
      }
   
      $user = Auth::guard()->user();
   
      $now = Carbon::now();
   
      $last_seen = Carbon::parse($user->last_seen_at);
   
      $absence = $now->diffInMinutes($last_seen);
   
      // If user has been inactivity longer than the allowed inactivity period
      if ($absence > config('session.lifetime')) {

        Auth::guard()->logout();

      
        $request->session()->invalidate();
   
        return $next($request);
      }
   
   
   
      return $next($request);
    }
}
