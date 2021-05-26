<?php

namespace App\Http\Controllers;
use App\Models\PriceRange;
use Illuminate\Http\Request;
use App\Models\PriceSetup;
class FilteringController extends Controller
{
    public function productshows($brandt)
    {
        $pshow = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

          

            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')

            ->where('status', 1)
            ->where('brand',$brandt)
            ->get();

        return ['pshow' => $pshow];
    }
    public function productShowByUnitOnly($unit)
    {
        $pshowu = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

          
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')

            ->where('status', 1)
            ->where('unit', $unit)
            ->get();

        return ['pshowu' => $pshowu];
    }
    public function productShowByUnitAndBrand($brandtc,$unit)
    {
        $pshowu = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

            
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')

            ->where('status', 1)
            ->where('unit', $unit)
            ->where('brand', $brandtc)
            ->get();

        return ['pshowu' => $pshowu];
    }
    public function productShowByUnitAndPrice($price,$unit)
    {
        $range=PriceRange::where('id',$price)->first();
        $pshowu = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

          
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
            ->where('status', 1)
            ->where('unit', $unit)
            
            ->get();

        return ['pshowu' => $pshowu];
    }
    public function productShowByUnitAndColor($color,$unit)
    {
       
        $pshowu = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

          
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
          
            ->where('status', 1)
            ->where('unit', $unit)
            ->where('color', $color)
            
            ->get();

        return ['pshowu' => $pshowu];
    }
    public function productShowByUnitPriceAndBrand($brandtc,$price,$unit)
    {
        $range=PriceRange::where('id',$price)->first();
        $pshowu = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

           
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
            ->where('status', 1)
            ->where('unit', $unit)
            ->where('brand', $brandtc)
            
            ->get();

        return ['pshowu' => $pshowu];
    }
    public function productShowByUnitPriceAndColor($price,$color,$unit)
    {
        $range=PriceRange::where('id',$price)->first();
        $pshowu = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')

            
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
            ->where('status', 1)
            ->where('unit', $unit)
            ->where('color', $color)
            
            ->get();

        return ['pshowu' => $pshowu];
    }
    public function productShowByColor($brandtc , $color)
    {
        $pshowc = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
      
        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')

        ->where('status', 1)
        ->where('brand',$brandtc)
        ->where('color',$color)
        

        ->get();

         

        return ['pshowc' => $pshowc];
    }
    public function productShowByColorBrandAndUnit($brandtc ,$unit, $color)
    {
        $pshowc = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
      
        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')

        ->where('status', 1)
        ->where('brand',$brandtc)
        ->where('color',$color)
        ->where('unit',$unit)
        

        ->get();

         

        return ['pshowc' => $pshowc];
    }
    public function productShowByColorPriceAndUnit($unit,$price, $color)
    {
        $range=PriceRange::where('id',$price)->first();
        $pshowc = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
      
        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
        ->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
        ->where('status', 1)
 
        ->where('color',$color)
        ->where('unit',$unit)
        
       
        ->get();

         

        return ['pshowc' => $pshowc];
    }
    public function productShowByColorBrandPriceAndUnit($brandtc ,$unit,$price, $color)
    {
        $range=PriceRange::where('id',$price)->first();
        $pshowc = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
        
        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
        ->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
        ->where('status', 1)
        ->where('brand',$brandtc)
        ->where('color',$color)
        ->where('unit',$unit)
        

        ->get();

         

        return ['pshowc' => $pshowc];
    }
    public function productShowByColorAndPrice($price, $color)
    {
        $range=PriceRange::where('id',$price)->first();
        $pshowc = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
      
        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
        ->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
        ->where('status', 1)
       
        ->where('color',$color)
       
        

        ->get();

         

        return ['pshowc' => $pshowc];
    }
    public function productShowByColorAndUnit($unit, $color)
    {
        $pshowc = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
       
        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')

        ->where('status', 1)
     
        ->where('color',$color)
        ->where('unit',$unit)
        

        ->get();

         

        return ['pshowc' => $pshowc];
    }
    public function productShowByColorOnly($color)
    {
        $pshowc = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
        ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
        
        ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')

        ->where('status', 1)
      
        ->where('color',$color)
        

        ->get();

         

        return ['pshowc' => $pshowc];
    }
    public function productShowByPriceOnly($price)
    {
       $range=PriceRange::where('id',$price)->first();
        $rangeGet = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
           
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->where('status', 1)->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
            ->get();
        return ['rangeGet' => $rangeGet];
    }
    public function productShowByPriceAndBrand($brandtc,$price)
    {
       $range=PriceRange::where('id',$price)->first();
        $rangeGet = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
          
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->where('status', 1)->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
            ->where('brand', $brandtc)
            ->get();
        return ['rangeGet' => $rangeGet];
    }
    public function productShowByPriceAndUnit($unit,$price)
    {
       $range=PriceRange::where('id',$price)->first();
        $rangeGet = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
           
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->where('status', 1)->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
           
            ->where('unit', $unit)
            ->get();
        return ['rangeGet' => $rangeGet];
    }
    public function productShowByPriceColorAndBrand($brandtc,$color,$price)
    {
       $range=PriceRange::where('id',$price)->first();
        $rangeGet = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
           
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->where('status', 1)->whereBetween('salesPrice', [(int)$range->minprice,(int)$range->maxprice])
           
            ->where('color', $color)
            ->where('brand', $brandtc)
            ->get();
        return ['rangeGet' => $rangeGet];
    }
    public function productShowByPriceRangOnly($price1,$price2)
    {
    
        $rangeGet = PriceSetup::with('productName','offer')->join('category_images', 'price_setups.pname', '=', 'category_images.pname')
            
            ->join('purchase_products', 'purchase_products.pname', '=', 'price_setups.pname')
            ->join('product_categories', 'product_categories.productNameId', '=', 'price_setups.pname')
            ->where('status', 1)->whereBetween('salesPrice', [(int)$price1,(int)$price2])
           
           
            ->get();
        return ['rangeGet' => $rangeGet];
    }
}
