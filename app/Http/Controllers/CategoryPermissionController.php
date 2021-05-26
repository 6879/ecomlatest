<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategoryPermission;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;
class CategoryPermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       $catList= CategoryPermission::where('admin',Auth::user()->id)->distinct(1)->get(['categoryId']);
        return ['catList'=>$catList];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $roll = $request->roll;
        $admin = $request->admin;
        $categoryIds= $request->categoryId;
      
        foreach($categoryIds as $categoryId) {
            CategoryPermission::create([
                'categoryId' => $categoryId,
                'roll' => $roll,
                'admin' => $admin,
               
            ]);
         
    
        }
        
    }
    public function catGet($id)
    {
        $getM=CategoryPermission::where('admin',$id)->distinct()->get('categoryId');
        return ['getM'=>$getM];
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=CategoryPermission::where('categoryId',$id);
        $data->delete();     
        return response()->json('successfully updated'); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cateList = Category::where('id',$id)->get();
        return ['cateList' => $cateList];
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
