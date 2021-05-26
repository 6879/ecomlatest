<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SubMenu;
use App\Http\Resources\SubMenu as GetResource;
class SubMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return GetResource::collection(SubMenu::all());
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
            'subMenuName' => 'required | unique:sub_menus',
            'subMenuPosition' => 'required | unique:sub_menus',
        ]);
        $submenu=SubMenu::create($request->all());
        return new GetResource($submenu);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edit=SubMenu::where('id',$id)->first();
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
        $data=SubMenu::where('id',$id)->first()->status;
        if($data==1){
            SubMenu::where('id',$id)->update(['status'=>0 ]);            
               return response()->json('successfully updated');  
        }
        else{
            SubMenu::where('id',$id)->update(['status'=>1 ]);            
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
        $submenu=SubMenu::find($id);
        $submenu->update($request->all());
        return new GetResource($submenu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $submenu=SubMenu::find($id);
        $submenu->delete();
        return new GetResource($submenu);
    }
}
