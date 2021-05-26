<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\PurchaseProduct;
use App\Models\PurchaseInvoice;
use App\Models\PriceSetup;
use App\Models\PurchaseProductTotalPrice;
use App\Models\PurchaseProductTotalQuantity;
use App\Http\Resources\PurchaseProduct as PurchaseProductResource;
use App\Http\Resources\PurchaseProductTotalPrice as PTotalResource;
use Carbon\Carbon;
class PurchaseProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PurchaseProductResource::collection(PurchaseProduct::all());
    }
    public function purchaseInvoiceGet()
    {
        $purchaseInvoiceList = PurchaseInvoice::get();     
        return ['purchaseInvoiceList' => $purchaseInvoiceList];
    }
    public function getproductList()
    {
        $productget = PurchaseProduct::distinct()->get('pname');     
        return ['productget' => $productget];
    }
    public function getbrandList($id)
    {
        $brandshow = PurchaseProduct::where('pname',$id)->get();     
        return ['brandshow' => $brandshow];
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
    public function getBrand($id)
    {
        $getbrand = PriceSetup::where('pname',$id)->distinct()->get('brand'); 
        return ['getbrand' =>$getbrand];
    }
    public function store(Request $request)
    {
        if (PurchaseProduct::where('invoiceNo',$request->invoiceNo)->where('pname',$request->pname)->where('brandId',$request->brandId)->exists()) {
            return ['alreadyEntry' => 'Already Product Entry'];
        }
       else{      
        
        PurchaseProduct::insert([
            'invoiceNo' => $request->invoiceNo,
            'supplierId' => $request->supplierId,
            'pname' => $request->pname,
            'brandId' => $request->brandId,
            'quan' => $request->quan,
            'unit' => $request->unit,
            'size' => $request->size,
            'color' => $request->color,
            'perc' => $request->perc,
          
            'unitPrice' => $request->unitPrice,
            'totalPrice' => $request->totalPrice, 
            'disPrice' => $request->quan*$request->unitPrice-$request->totalPrice,           
            'createdBy' => Auth::id(),
            'created_at' => Carbon::now(),
      ]);
       }
        if (PurchaseProductTotalPrice::where('pname',$request->pname)->exists()) {
              $productInfo = PurchaseProductTotalPrice::where('pname',$request->pname)->latest()->first();
              $totalQuantity = $productInfo->totalQuantity + $request->quan;
              $totalPrice = $productInfo->totalPrice + $request->totalPrice;

              PurchaseProductTotalPrice::where('pname',$request->pname)->update([
                  'totalQuantity' => $totalQuantity,
                  'totalPrice' => $totalPrice,
                  'updateBy' => Auth::User()->id,
              ]);
        }
        else {
            PurchaseProductTotalPrice::insert([
                'pname' => $request->pname,
                'totalQuantity' => $request->quan,
                'totalPrice' => $request->totalPrice,
                'createBy' => Auth::User()->id,
               
            ]);
        }
    }
    public function storeInvoice(Request $request)
   {
       
    $this->validate($request, [
        'supplierId' => 'required',
        'purchaseTypeId' => 'required',
    ],
    );

    $purchaseTypeId = implode(',', array_values($request->purchaseTypeId));

 

    $purchaseInvoice = new PurchaseInvoice();
    $purchaseInvoice->purchaseDate = $request->purchaseDate;
    $purchaseInvoice->invoiceNo = $request->invoiceNo;
    $purchaseInvoice->supplierId = $request->supplierId;
    $purchaseInvoice->purchaseTypeId = $purchaseTypeId;
    $purchaseInvoice->totalPurchaseValue = $request->totalPurchaseValue;
    $purchaseInvoice->carriageInward = $request->carriageInward;
    $purchaseInvoice->totalAmount = $request->totalAmount;
    $purchaseInvoice->discount = $request->discount;
    $purchaseInvoice->supplierPayable = $request->supplierPayable;
    $purchaseInvoice->otherCost = $request->otherCost;
    $purchaseInvoice->damageAndWarranty = $request->damageAndWarranty;
    $purchaseInvoice->totalProductCost = $request->totalProductCost;
    // if (PurchaseInvoice::where('productSupplierId',$request->supplierId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->exists()) {
    //     $previousPayableDue = PurchaseInvoice::where('productSupplierId',$request->supplierId)->where('shopId',Auth::user()->shopId)->where('shopTypeId',$shopTypeId)->latest()->first()->previousPayableDue;
    //       if ($request->currentPayable > $request->payable) {
    //         $previousPayable = $request->currentPayable - $request->payable;
    //         $totalPayableBill = $previousPayable + $previousPayableDue;
    //         $purchaseInvoice->previousPayableDue = $totalPayableBill;
    //       }
    // }
    // else {
    //     if ($request->currentPayable > $request->payable) {
    //       $previousPayable = $request->currentPayable - $request->payable;
    //       $purchaseInvoice->previousPayableDue = $previousPayable;
    //     }
    // }
    $purchaseInvoice->currentPayable = $request->currentPayable;
    // $purchaseInvoice->totalPayable = $request->payable;
    
    $purchaseInvoice->createBy = Auth::User()->id;
    $purchaseInvoice->created_at = Carbon::now();
    $purchaseInvoice->save();

      if (PurchaseProductTotalQuantity::where('supplierId',$request->supplierId)->exists()) {
          $productInfo = PurchaseProductTotalQuantity::where('supplierId',$request->supplierId)->latest()->first();
          $totalQuantity = $productInfo->totalQuantity +($request->totalProductQuantity);
          $totalPrice = $productInfo->totalPrice + ($request->supplierPayable);

          PurchaseProductTotalQuantity::where('supplierId',$request->supplierId)->update([
              'totalQuantity' => $totalQuantity,
              'totalPrice' => $totalPrice,
              'updateBy' => Auth::User()->id,
          ]);
      }
      else {
          PurchaseProductTotalQuantity::insert([
              'supplierId' => $request->supplierId,
              'totalQuantity' => $request->totalProductQuantity,
              'totalPrice' => $request->supplierPayable,
             
              'createBy' => Auth::User()->id,
              'created_at' => Carbon::now(),
          ]);
      }
   }
    public function productQuantityUpdate(Request $request){
        PurchaseProduct::where('invoiceNo',$request->invoiceNo)->where('pname',$request->pname)->update([
            'quan' => $request->quan,
            'unitPrice' => $request->unitPrice,
            'totalPrice' => $request->totalPrice,
        ]);
    }
    public function purchaseInvoiceShow()
    {

         
            $purchaseInvoice = PurchaseInvoice::where('createBy',Auth::User()->id)->get()->count();
            $purchaseInvoiceIncrement = $purchaseInvoice + 1;
            $currentDate = Carbon::now()->format('Y-m-d H:i:s');
            return ['currentDate' => $currentDate, 'purchaseInvoiceIncrement' => $purchaseInvoiceIncrement];
        
    }
    public function purchaseProductTotalList()
    {
      
         
            $purchaseProductTotalList = PurchaseProductTotalPrice::get();
          
            return ['purchaseProductTotalList' => $purchaseProductTotalList ];
        
    }
    public function totalPurchaseValue($invoiceNo)
    {
       
        $purchaseproducts = PurchaseProduct::where('invoiceNo',$invoiceNo)->get();
        return ['purchaseproducts' => $purchaseproducts];
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $purchaseproductget = PurchaseProduct::where('invoiceNo',$id)->latest()->get();
        return ['purchaseproductget' => $purchaseproductget];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $purchaseInfor = PurchaseInvoice::where('invoiceNo',$id)->latest()->first();
        return ['purchaseInfor' => $purchaseInfor];
    }
    public function purchaseProductReportList($id)
    {
      
          $purchaseProductReportList = PurchaseProduct::where('pname',$id)->get();
          return ['purchaseProductReportList' => $purchaseProductReportList];
       
    }
    public function productList($id, $idget)
    {
      
        $edit = PurchaseProduct::where('pname', $id)->where('brandId', $idget)->first();
        $invoiceNo=$edit->invoiceNo;
        $quan=$edit->quan;
        return ['invoiceNo' => $invoiceNo,'quan'=>$quan];
       
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
        $size=PurchaseProduct::find($id);
        $size->delete();
      
    }
    
}
