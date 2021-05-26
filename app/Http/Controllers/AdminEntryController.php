<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
class AdminEntryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {    
        $member = User::orderBy('id','desc')->get();
        return  ['member' => $member];
    }
    public function user($id)
    {
        $user=User::where('roll',$id)->get();
        return ['user'=>$user];
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
        'email' => 'required | unique:users',
        'name'  => 'required | unique:users',
        'userId' => 'required | unique:users',            
        'phone' => 'required ',            
        'password' => 'required',
        ]);       
        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => $request['password'],
            'roll' => $request['roll'],
            'userId' => $request['userId'],
            'address' => $request['address'],
            'phone' => $request['phone'],
            'password' => Hash::make($request['password']),
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
        $edit=User::where('id',$id)->first();
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
        $admin=User::find($id);
        $admin->update([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => $request['password'],
            'roll' => $request['roll'],
            'userId' => $request['userId'],
            'address' => $request['address'],
            'password' => Hash::make($request['password']),
        ]);       
        return response()->json('successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $admin=User::find($id);
        $admin->delete();
        return response()->json('successfully Deleted');
    }
}
