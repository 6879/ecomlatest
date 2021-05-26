<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\PriceSetup;
use App\Models\ProductTransfer;
use App\Models\PurchaseProduct;
use App\Models\CategoryImage;
use App\Http\Resources\PriceSetup as PriceSetupResource;
use Carbon\Carbon;

class PriceSetupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PriceSetupResource::collection(PriceSetup::all());
    }
    public function getItem()
    {
        $product = PriceSetup::distinct()->get('pname');
        return ['product' => $product];
    }
    public function brandWise()
    {
        $productget = PriceSetup::distinct('brand','brandTotal')->get(['brand','brandTotal']);
        
        return ['productget' => $productget];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      
    }
    public function getQuan($id, $brandId)
    {
        $get = PurchaseProduct::where('pname', $id)->where('brand', $brandId)->first('quan');
        $get1 = ProductTransfer::where('pname', $id)->where('brand', $brandId)->sum('quan');
        $get3 = ProductTransfer::where('pname', $id)->where('brand', $brandId)->first('quan');


        if ($get3 == '') {
            $total = $get->quan;
            return ['total' => $total];
        } else {


            $total = $get->quan - $get1;


            return ['total' => $total];
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'invoiceNo' => 'required | unique:price_setups',

        ]);
       
        PriceSetup::insert([
            'pname' => $request->pname,
            'profit' => $request->profit,
            'brand' => $request->brand,
            'salesPrice' => $request->salesPrice,
            'invoiceNo' => $request->invoiceNo,          
            'quan' => $request->quan,          
            'createdBy' => Auth::User()->id,
            'created_at' => Carbon::now(),
        ]);
        CategoryImage::insert([
            'pname' => $request->pname,          
           
        ]);
        $get = PriceSetup::where('brand', $request->brand)->sum('quan');
        PriceSetup::where('brand',$request->brand)->update([
            'brandTotal' => $get,
            
          ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    public function salesPrice($id)
    {
        $salesP=PriceSetup::where('pname',$id)->first();
        return response()->json($salesP);
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
        $delete = PriceSetup::find($id);
        $delete->delete();
        return new PriceSetupResource($delete);
    }
}
