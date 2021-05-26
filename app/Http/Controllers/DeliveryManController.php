<?php

namespace App\Http\Controllers;
use App\Events\ChatEvent;
use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
class DeliveryManController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newOrder=Order::with('customer')->where('status',10)->orderby('id','desc')->get();
      
        $onOrder=Order::with('customer')->where('deliveryManId',Auth::User()->id)->where('status',12)->orderby('id','desc')->get();
        $onOrderGet=Order::with('customer')->where('status',12)->orderby('id','desc')->get();
      
        return ['newOrder'=>$newOrder,'onOrder'=>$onOrder,'onOrderGet'=>$onOrderGet];
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
        $chat=Order::where('invoiceNo',$id)->update([
            'status'=>11,
            'deliveryManId'=>Auth::User()->id
        ]);
        broadcast(new ChatEvent($chat))->toOthers();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        Order::where('invoiceNo',$id)->update([
            'status'=>13,
            
        ]);
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
    public function __construct()
    {
        $this->middleware('auth:,customer');
    }
}
