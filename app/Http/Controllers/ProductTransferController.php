<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\ProductTransfer;
use App\Models\BackTransfer;
use App\Models\Warehouse;
use App\Http\Resources\ProductTransfer as TransferResource;
class ProductTransferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return TransferResource::collection(ProductTransfer::orderby('id','desc')->get());
    }
    public function transferSummery($pname,$brand)
    {
        $transfer=ProductTransfer::where('pname',$pname)->where('brand',$brand)->get();       
        return ['transfer'=>$transfer];  
    }
    public function transferwarehouseSummery($location,$code)
    {
        $code1 = Warehouse::where('id', $code)->first();   
       
        $tran=ProductTransfer::where('location',$location)->where('code',$code1->id)->get();       
        $totalTrans=ProductTransfer::where('location',$location)->where('code',$code1->id)->distinct('pname','code','location','brand','total')->get(['pname','code','location','brand','total']);       
        
      
        return ['tran'=>$tran,'totalTrans'=>$totalTrans];  
    }
    public function backSummery()
    {
        $trans=BackTransfer::get();       
        return ['trans'=>$trans];  
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
    public function productTransferLimit()
    {
        $transfer=ProductTransfer::distinct('pname','brand','id','total','quan','code','location')->get(['pname','brand','total']);       
        return ['transfer'=>$transfer];  
    }
    public function tProduct()
    {
        $tProduct=ProductTransfer::distinct('brand','totalTproduct')->get(['totalTproduct','brand']);       
        return ['tProduct'=>$tProduct];  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      
        if( $request->quan > $request->totalQuantity ){
            return ['stockNotAvilable' => 'stockNotAvilable'];
        
        }else{
            $transfer=new ProductTransfer();
            $get = ProductTransfer::where('pname', $request->pname)->where('brand', $request->brand)->sum('quan');
            $transfer->quan = $request->quan;
            $transfer->preQuan = $request->quan;
            $transfer->pname = $request->pname;
            $transfer->location = $request->location;
            $transfer->code = $request->code;
            $transfer->brand = $request->brand;
           
        $transfer->save();
        ProductTransfer::where('pname',$request->pname)->where('brand', $request->brand)->update([
            'total' => $get+$request->quan,
            
          ]);
          $getTotal = ProductTransfer::where('brand', $request->brand)->sum('total');
        ProductTransfer::where('brand', $request->brand)->update([
            'totalTproduct' => $getTotal,
            
          ]);
        return new TransferResource($transfer);}
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit=ProductTransfer::where('id',$id)->first();       
        return response()->json($edit);
    }
    public function productList($id)
    {
        $getProduct=ProductTransfer::where('brand',$id)->get();       
        return ['getProduct'=>$getProduct];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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

        $transferback=new BackTransfer();
        $get = ProductTransfer::where('id', $id)->first();
        $transferback->quan = $get->quan-$request->quan;
        $transferback->backQuan = $request->quan;
        $transferback->backBy = Auth::user()->name;
        $transferback->pname = $request->pname;
        $transferback->location = $request->location;
        $transferback->code = $request->code;
        $transferback->brand = $request->brand;
        $transferback->preQuan = $get->preQuan;
        $transferback->transferId = $get->id;
        if( $request->quan>$get->quan|| $request->quan<=0){
            return ['stockNotAvilable' => 'stockNotAvilable'];
        
        }else{
        $transferback->save();};
        $get = ProductTransfer::where('pname', $request->pname)->where('brand', $request->brand)->sum('quan');
        ProductTransfer::where('pname',$request->pname)->where('brand', $request->brand)->update([
            'total' => $get-$request->quan,
            
          ]);
        $transfer=ProductTransfer::find($id);
        $get = ProductTransfer::where('id', $id)->first();
        $transfer->quan = $get->quan-$request->quan;
        $transfer->backQuan = $request->quan;
        $transfer->backBy = Auth::user()->name;
        $transfer->pname = $request->pname;
        $transfer->location = $request->location;
        $transfer->code = $request->code;
        $transfer->brand = $request->brand;
        $transfer->preQuan = $get->preQuan;
        if( $request->quan>$get->quan|| $request->quan<=0){
            return ['stockNotAvilable' => 'stockNotAvilable'];
        
        }else{
        $transfer->update();}
        $getTotal = ProductTransfer::where('brand', $request->brand)->sum('total');
        ProductTransfer::where('brand', $request->brand)->update([
            'totalTproduct' => $getTotal,
            
          ]);
        return new TransferResource($transfer);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $transfer=ProductTransfer::find($id);
        $transfer->delete(); 
    }
}
