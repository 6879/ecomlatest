<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\ProductName;
use App\Models\ProductCategory;
use App\Models\ProductNameInfo;
use App\Http\Resources\ProductName as ProductNameResource;
use App\Http\Resources\ProductCategory as ProductCategoryResource;
class ProductNameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductNameResource::collection(ProductName::all());
    }
    public function pCatList()
    {
        return ProductCategoryResource::collection(ProductCategory::all());
    }
    public function productCatList()
    {
        $productcat=ProductCategory::all();
        return ['productcat'=>$productcat];
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
        $this->validate($request, [
            'pcode' => 'required | unique:product_names',
           
        ]);
        $productId = ProductName::insertGetId([
            'pname' => $request->pname,
            'pcode' => $request->pcode,           
            'pqrcode' => $request->pqrcode,           
            'keyword' =>  implode(",", $request->keyword),           
                      
          ]);
          if (isset($request->category)) {
            $ProductCategory = new ProductCategory();
            $ProductCategory->productNameId = $productId;
            $ProductCategory->categoryId = $request->category;           
                    
            $ProductCategory->save();
      }
      if (isset($request->subCategory)) {
            $ProductCategory = new ProductCategory();
            $ProductCategory->productNameId = $productId;
            $ProductCategory->categoryId = $request->subCategory;         
             
            $ProductCategory->save();
       } 
      if (isset($request->thirdCategory)) {
            $ProductCategory = new ProductCategory();
            $ProductCategory->productNameId = $productId;
            $ProductCategory->categoryId = $request->thirdCategory;      
          
           
            $ProductCategory->save();
       }
       ProductNameInfo::insert([
        'pname' => $productId,
                  
                  
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
        $edit = ProductName::where('id', $id)->first();
        return response()->json($edit);
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
        $name=ProductName::find($id);
        $name->update([
            'pname' => $request->pname,
            'pcode' => $request->pcode,           
            'pqrcode' => $request->pqrcode, 
            'keyword' =>  implode(",", $request->keyword),]
                       
        );
        return new ProductNameResource($name);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $size=ProductName::find($id);
        $size->delete();
       
        $cat=ProductCategory::where('productNameId',$id);
        $cat->delete();
        return new ProductNameResource($size);
        return new ProductCategoryResource($cat);
    }
}
