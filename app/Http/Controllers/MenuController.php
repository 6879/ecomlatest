<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Http\Resources\Menu as MenuResource;
class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return MenuResource::collection(Menu::all());
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
            'menuName' => 'required | unique:menus',
            'menuPosition' => 'required | unique:menus',
        ]);
        $menu=Menu::create($request->all());
        return new MenuResource($menu);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit=Menu::where('id',$id)->first();
        return response()->json($edit);
    }
    public function menusget($id)
    {
        $menuget=Menu::where('moduleId',$id)->get();
        return ['menuget'=>$menuget];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data=Menu::where('id',$id)->first()->status;
        if($data==1){
            Menu::where('id',$id)->update(['status'=>0 ]);            
               return response()->json('successfully updated');  
        }
        else{
            Menu::where('id',$id)->update(['status'=>1 ]);            
            return response()->json('successfully updated'); 
        }   
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
        $menu=Menu::find($id);
        $menu->update($request->all());
        return new MenuResource($menu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $menu=Menu::find($id);
        $menu->delete();
        return new MenuResource($menu);
    }
}
