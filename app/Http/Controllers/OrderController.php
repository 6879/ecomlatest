<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderProduct;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orderget=Order::orderby('id','desc')->first();
        $orderIn=Order::orderby('id','desc')->where('customerId',Auth::User()->id)->where('customerStatus',0)->where('status','!=',13)->get();
        $orderCancel=Order::orderby('id','desc')->where('customerId',Auth::User()->id)->where('customerStatus',1)->get();
        $orderSuccess=Order::orderby('id','desc')->where('customerId',Auth::User()->id)->where('status',13)->get();
        $orderCancelByManagement=Order::orderby('id','desc')->where('customerId',Auth::User()->id)->where('status',2)->get();
        $orderInfo=OrderProduct::with('brand')->get();
        if($orderget!=NULL){
        $purchaseInvoiceIncrement = $orderget->invoiceNo + 1;
        }
        else{
            $purchaseInvoiceIncrement = 1;  
        }
        return ['purchaseInvoiceIncrement'=>$purchaseInvoiceIncrement,'orderIn'=>$orderIn,'orderInfo'=>$orderInfo ,'orderCancel'=>$orderCancel,'orderCancelByManagement'=>$orderCancelByManagement,'orderSuccess'=>$orderSuccess];
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
      
      $count=Order::count();
      
      $s =$request->cart;
      $d =  json_decode($s);
      $total=count($d)-1;
     if($request->deliveryDate==''){
        return ['deliveryDate' => 'Required'];
     }else{
        if($request->deliveryTime==''){
            return ['deliveryTime' => 'Required'];
        }
        else{
        if($count==0){
             $invoice=1;           
       Order::create([
          'invoiceNo'=>$invoice,
          'totalPrice'=>$request->total,      
          'totalDiscount'=>$request->discount,    
           'customerId'=>Auth::User()->id,      
           'address'=>$request->caddress,
             'phone'=>$request->cphone, 
           'reAddress'=>$request->address,
           'rePhone'=>$request->phone ,
           'deliveryDate'=>$request->deliveryDate,
           'deliveryTime'=>$request->deliveryTime,
       ]);
       for($i = 0;$i<=$total;$i++)
       {
       OrderProduct::create([
          'invoiceNo'=>$invoice,
           'pId'=>$d[$i]->pname,      
           'image'=>$d[$i]->image,      
           'qty'=>$d[$i]->qun,      
           'price'=>$d[$i]->price,      
           'total'=>$request->total,      
           'discount'=>$d[$i]->discount,      
           
       ]);
       } 
    }
       if($count==!0){
       
        Order::create([
             'invoiceNo'=>$request->invoice,
             'totalPrice'=>$request->total,      
             'totalDiscount'=>$request->discount,      
             'customerId'=>Auth::User()->id,      
             'address'=>$request->caddress,
             'phone'=>$request->cphone, 
             'reAddress'=>$request->address,
             'rePhone'=>$request->phone,
             'deliveryDate'=>$request->deliveryDate,
             'deliveryTime'=>$request->deliveryTime,
         ]); 
         for($i = 0;$i<=$total;$i++)
         {
         OrderProduct::create([
            'invoiceNo'=>$request->invoice,
             'pId'=>$d[$i]->pname, 
             'image'=>$d[$i]->image,       
             'qty'=>$d[$i]->qun,      
             'price'=>$d[$i]->price,   
               
             'discount'=>$d[$i]->discount,      
             
         ]);
       }       
       }
    }
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
       Order::where('invoiceNo',$id)->update([
           'customerStatus'=>1
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
        Order::where('invoiceNo',$id)->update([
            'deliveryDate'=>$request->deliveryDate,
            'deliveryTime'=>$request->deliveryTime,
           ]);
    }
    public function paymanetUpdate(Request $request, $id)
    {
        Order::where('invoiceNo',$id)->update([
            'paymentType'=>$request->paymentType,
          
           ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:,customer');
    }
    public function destroy($id)
    {
        //
    }
}
