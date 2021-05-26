<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdminPermission;
use App\Models\User;
class AdminPermissionController extends Controller
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
        $roll = $request->roll;
        $admin = $request->admin;
        $moduleIds= $request->moduleId;
        $menuIds= $request->menuId;
        $subMenuIds= $request->subMenuId;
    
        foreach($moduleIds as $moduleId) {
            AdminPermission::create([
                'moduleId' => $moduleId,
                'roll' => $roll,
                'admin' => $admin,
               
            ]);
         
        foreach($menuIds as $menuId) {
            AdminPermission::create([              
                'menuId' => $menuId,
                'roll' => $roll,
                'admin' => $admin,
               
            ]);}
         
        foreach($subMenuIds as $subMenuId) {
            AdminPermission::create([
                
                'subMenuId' => $subMenuId,
                'roll' => $roll,
                'admin' => $admin,
               
            ]);
            }
        }
        
    }    
                
    
        
    public function moduleGet($id)
    {
        $getM=AdminPermission::where('admin',$id)->distinct()->get('moduleId');
        return ['getM'=>$getM];
    }
    public function menuGet($id)
    {
        $getMn=AdminPermission::where('admin',$id)->distinct()->get('menuId');
        return ['getMn'=>$getMn];
    }
    public function submenuGet($id)
    {
        $getMnsub=AdminPermission::where('admin',$id)->distinct()->get('subMenuId');
        return ['getMnsub'=>$getMnsub];
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
        $data=AdminPermission::where('menuId',$id);
        $data->delete();     
        return response()->json('successfully updated');  
        
    }
    public function moduleD($id)
    {
        $data=AdminPermission::where('moduleId',$id);
        $data->delete();     
        return response()->json('successfully updated');  
        
    }
    public function submenuD($id)
    {
        $data=AdminPermission::where('subMenuId',$id);
        $data->delete();     
        return response()->json('successfully updated');  
        
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
      
         
    }
}
