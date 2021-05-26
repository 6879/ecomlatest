<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\PriceSetup;
use App\Models\Offer;
use App\Models\Slider;
use App\Models\Logo;
use App\Models\Category;
use App\Models\DeliveryTime;
class IndexController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $prices = PriceSetup::with('offer','productName')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

        ->join('product_names', 'product_names.id', '=', 'price_setups.pname')

        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
       
        ->where('status', 1)
        ->distinct('productNameId')
        ->get();
        $offers=Offer::get();
        $sliders=Slider::get();
        $logo=Logo::first();
        $division=DeliveryTime::with('division')->distinct('divisionId')->get('divisionId');
        $menus =  Category::orderby('id','desc')->where('lavel',1)->get();
        $submenus =  Category::orderby('id','desc')->where('lavel',2)->get();
        $thirdmenus =  Category::orderby('id','desc')->where('lavel',3)->get();
    return view('index')->with('prices',$prices)->with('offers',$offers)->with('sliders',$sliders)->with('logo',$logo)->with('division',$division)->with('menus',$menus)->with('submenus',$submenus)->with('thirdmenus',$thirdmenus);
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
        //
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
        //
    }
}
