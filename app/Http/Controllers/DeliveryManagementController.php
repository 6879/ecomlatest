<?php

namespace App\Http\Controllers;
use App\Events\ChatEvent;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Models\DeliveryMan;
class DeliveryManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      
        $newOrder=Order::with('customer')->where('status',7)->orwhere('status',8)->orwhere('status',10)->orwhere('status',11)->orderby('id','desc')->get();
        $deliveryMan=User::get();
        $data=DeliveryMan::get();
        return ['newOrder'=>$newOrder,'deliveryMan'=>$deliveryMan,'data'=>$data];
    }
    public function finishOrderManagement($id)
    {
       $chat=Order::where('invoiceNo',$id)->update([
            'status'=>10
        ]);
        broadcast(new ChatEvent($chat))->toOthers();
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
        Order::where('invoiceNo',$id)->update([
            'status'=>8
        ]);
    }
    public function returnOrderReason(Request $request)
    {
        Order::where('invoiceNo',$request->invoice)->update([
            'status'=>9,
            'returnReasonFromDM'=>$request->reason
        ]);
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
            'status'=>12
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
}
