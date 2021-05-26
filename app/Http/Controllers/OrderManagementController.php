<?php

namespace App\Http\Controllers;
use App\Models\OrderProduct;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Offer;
use App\Models\Customer;

use App\Models\PurchaseProduct;
use App\Models\PriceSetup;

class OrderManagementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newOrder=Order::with('customer')->where('paymentType','!=',NULL)->where('status',1)->orwhere('status',0)->orderby('id','desc')->get();
        $returnOrder=Order::with('customer')->where('paymentType','!=',NULL)->where('status',5)->orderby('id','desc')->get();
       
        $pending=Order::with('customer')->where('paymentType','=',NULL)->where('status',0)->orderby('id','desc')->get();
       
        return ['newOrder'=>$newOrder,'pending'=>$pending,'returnOrder'=> $returnOrder];
    
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
            'status'=>1
        ]);
    }
    public function cancelOrder(Request $request)
    {
        Order::where('invoiceNo',$request->invoice)->update([
            'status'=>$request->status,
            'cancelReason'=>$request->reason
        ]);
    }
    public function postDate(Request $request)
    {
        Order::where('invoiceNo',$request->invoice)->update([
       
            'deliveryDate'=>$request->date
        ]);
    }
    public function postTime(Request $request)
    {
        Order::where('invoiceNo',$request->invoice)->update([
       
            'deliveryTime'=>$request->time
        ]);
    }
    public function customize(Request $request)
    {
       $qun= PurchaseProduct::where('pname',$request->product)->first();
        if( $qun->quan<$request->qty){
            return ['notAvil' => ' Product Not Avilable'];
        }
else{
        if($request->product){
            $ids= $request->idGet;
            $offer=Offer::where('productId',$request->product)->get();
            if($offer==!NULL){
                foreach($offer as $offers){
             OrderProduct::where('id',$ids)->where('invoiceNo',$request->invoice)->update([
    
                 'qty'=>$request->qty,
                 'discount'=>$offers->offerPrice*$request->qty,
                 'price'=>$offers->totalPrice*$request->qty
             ]);
             $total=OrderProduct::where('invoiceNo',$request->invoice)->sum('price');
             $totalDiscount=OrderProduct::where('invoiceNo',$request->invoice)->sum('discount');
             Order::where('invoiceNo',$request->invoice)->update([
    
                
                 'totalPrice'=>$total,
                 'totalDiscount'=>$totalDiscount,
             ]);
            }
         }
         else{
             $price=PriceSetup::where('pname',$request->product)->get();
             foreach($price as $prices){
                 OrderProduct::where('id',$ids)->where('invoiceNo',$request->invoice)->update([
        
                     'qty'=>$request->qty,
                     'discount'=>0*$request->qty,
                     'price'=>$prices->salesPrice*$request->qty
                 ]);
                 $total=OrderProduct::where('invoiceNo',$request->invoice)->sum('price');
                 $totalDiscount=OrderProduct::where('invoiceNo',$request->invoice)->sum('discount');
                 Order::where('invoiceNo',$request->invoice)->update([
        
                    'totalDiscount'=>$totalDiscount,
                     'totalPrice'=>$total
                 ]);
                }
         }

        }
        else{
        $ids= $request->idGet;
      
           $p=OrderProduct::where('id',$ids)->where('invoiceNo',$request->invoice)->get();
           foreach($p as $pr){
               $offer=Offer::where('productId',$pr->pId)->get();
               if($offer==!NULL){
                   foreach($offer as $offers){
                OrderProduct::where('id',$ids)->where('invoiceNo',$request->invoice)->update([
       
                    'qty'=>$request->qty,
                    'discount'=>$offers->offerPrice*$request->qty,
                    'price'=>$offers->totalPrice*$request->qty
                ]);
                $total=OrderProduct::where('invoiceNo',$request->invoice)->sum('price');
                $totalDiscount=OrderProduct::where('invoiceNo',$request->invoice)->sum('discount');
                Order::where('invoiceNo',$request->invoice)->update([
       
                   'totalDiscount'=>$totalDiscount,
                    'totalPrice'=>$total
                ]);
               }
            }
            else{
                $price=PriceSetup::where('pname',$pr->pId)->get();
                foreach($price as $prices){
                    OrderProduct::where('id',$ids)->where('invoiceNo',$request->invoice)->update([
           
                        'qty'=>$request->qty,
                        'discount'=>0*$request->qty,
                        'price'=>$prices->salesPrice*$request->qty
                    ]);
                    $total=OrderProduct::where('invoiceNo',$request->invoice)->sum('price');
                    $totalDiscount=OrderProduct::where('invoiceNo',$request->invoice)->sum('discount');
                    Order::where('invoiceNo',$request->invoice)->update([
           
                       'totalDiscount'=>$totalDiscount,
                        'totalPrice'=>$total
                    ]);
                   }
            }
           }
     
        }
    }
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
            'status'=>3
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
