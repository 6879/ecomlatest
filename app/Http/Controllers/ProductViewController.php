<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PriceSetup;
use App\Models\Category;
use App\Models\CategoryImage;
use App\Models\ProductName;
use App\Models\Brand;
use Illuminate\Support\Facades\DB;
use App\Models\PurchaseProduct;

class ProductViewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $priceget = PriceSetup::with('offer','productName')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

            ->join('product_names', 'product_names.id', '=', 'price_setups.pname')

            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
           
            ->where('status', 1)
            ->distinct('categoryId')
 
            ->get();
        $pricegetq = DB::table('product_categories')
        ->select('categoryId' ,DB::raw("CASE WHEN COUNT(*) <1 then COUNT(*) ELSE 12 END as 'productNameId'"))
        ->groupBy(['categoryId'])        
        ->get();
        
        return ['priceget' => $priceget,'pricegetq'=> $pricegetq];
    }
    public function offerView(){
        $offerView = PriceSetup::with('offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

      
        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
       
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
        ->join('offers', 'offers.productId', '=', 'price_setups.pname')
        ->distinct('productNameId')
        ->get(['price_setups.*', 'category_images.*','product_categories.productNameId', 'purchase_products.unit','offers.*']);

      

     
     
        return ['offerView'=>$offerView];
    }
    public function brandGet()
    {
        $brandgt = PriceSetup::join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')

            ->distinct('brand', 'categoryId')
            ->where('status', 1)

            ->get(['brand', 'product_categories.categoryId']);

        return ['brandgt' => $brandgt];
    }
    public function unitGet()
    {
        $unitgt = PriceSetup::join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')

            ->distinct('unit', 'categoryId')
            ->where('status', 1)

            ->get(['unit', 'product_categories.categoryId']);

        return ['unitgt' => $unitgt];
    }
    public function purchaseProductGet()
    {
        $productgt = PurchaseProduct::get();

        return ['productgt' => $productgt];
    }
    public function colorGet()
    {
        $colorgt = PriceSetup::join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')

            ->distinct('color', 'categoryId')
            ->where('status', 1)

            ->get(['color', 'product_categories.categoryId']);

        return ['colorgt' => $colorgt];
    }
    public function searchProductView()
    {
        $productget = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
            ->join('product_names', 'product_names.id', '=', 'price_setups.pname')   
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
          
            ->where('status', 1)
       
            ->get();

        return ['productget' => $productget];
    }
    public function searchBrand($val)
    {
        return Brand::where('brand', 'like', '%' .  $val . '%')
            ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $menulist = Category::where('lavel', 1)->orderby('catPosition', 'asc')->get();
        return ['menulist' => $menulist];
    }
    public function view()
    {
        $menucatlist = Category::where('lavel', 1)->orderby('catPosition', 'asc')->get();
        return ['menucatlist' => $menucatlist];
    }
    public function viewCategory()
    {
        $menucatlistview = Category::orderby('catPosition', 'asc')->get();
        return ['menucatlistview' => $menucatlistview];
    }
 
    public function searchProduct($val)
    {

        return ProductName::where('pname', 'like', '%' .  $val . '%')
            ->orWhere('keyword', 'like', '%' .  $val . '%')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }
    public function priceFilter(Request $request)
    {
        $minprice=(int)$request->input('price1');
        $maxprice=(int)$request->input('price2');
        $filPrice = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
           
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->where('status', 1)->whereBetween('salesPrice', [$minprice,$maxprice])
            ->get();
        return ['filPrice' => $filPrice];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $detailsInformation = CategoryImage::where('pname', $id)->first();
        return response()->json($detailsInformation);
    }
    public function viewSubCat()
    {
        $menucatlistgetinfo = Category::orderby('catPosition', 'asc')->get();
        return ['menucatlistgetinfo' => $menucatlistgetinfo];
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
