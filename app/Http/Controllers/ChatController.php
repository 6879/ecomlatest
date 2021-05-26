<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\ChatEvent;
use App\Models\ActiveUser;
use App\Models\Chat;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
class ChatController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:,customer');
    }
    public function index()
    {
    	return view('chat.chat');
    }

    public function fetchAllMessages()
    {
    	return Chat::with('user')->get();
    }
   
    public function senders()
    {
        $getSender=Chat::distinct('sender_id','status','sender_roll')->get(['sender_id','status','sender_roll']);
    	
        $getMessage=Chat::orderby('sender_id','desc')->take(1)->get();
    	return ['getSender'=>$getSender,'getMessage'=>$getMessage];
    }
    public function senderInfo()
    {
        $getSenderInfo=User::where('id',Auth::User()->id)->first();    	
       
    	return ['getSenderInfo'=>$getSenderInfo];
    }
    public function receivers()
    {
        $getReceiver=Chat::orderby('sender_id','desc')->first();    
        $active=ActiveUser::count();  
    	return ['getReceiver'=>$getReceiver,'active'=>$active];
    }
    public function users()
    {
    	$t=Customer::where('id',Auth::User()->id)->first();
        return response()->json($t);
    }
    public function seenStatus($id)
    {
    $chat=Chat::where('sender_id',$id)->update([
        'status'=>1
    ]);
    
    }
    public function customers()
    {
      	$allCustomer=Customer::all();
        $auth=Customer::where('id',Auth::User()->id)->first();
        return ['allCustomer'=>$allCustomer,'auth'=>$auth];
    }
    public function messageSeen($id)
    {
    	
   return Chat::where('receiver_id',Auth::User()->id)->where('receiver_roll',1)->where('invoiceNo',$id)->where('status',0)
   ->update(['status'=>1]);
      
    }
    public function messageSeenFromDM($id)
    {
    	
   return Chat::where('receiver_id',Auth::User()->id)->where('receiver_roll',1)->where('invoiceNo',$id)->where('status',0)
   ->update(['status'=>1]);
      
    }
    public function messageRead($id)
    {
    	
   Chat::where('receiver_id',Auth::User()->id)->where('receiver_roll',3)->where('invoiceNo',$id)->where('status',0)
   ->update(['status'=>1]);
   Chat::where('receiver_id',NULL)->where('receiver_roll',3)->where('invoiceNo',$id)->where('status',0)
   ->update(['status'=>1]);
      
    }
    public function deliveryManMessageRead($id)
    {
    	
   Chat::where('receiver_id',Auth::User()->id)->where('receiver_roll',4)->where('invoiceNo',$id)->where('status',0)
   ->update(['status'=>1]);
   
    }

    public function sendMessage(Request $request)
    {

      if($request->roll==4){
        $chat = Chat::create([
          'message' => $request->message,
          'sender_id' => Auth::User()->id,      
          'receiver_id' =>  $request->receiver,
          'sender_roll' =>$request->roll,           
          'invoiceNo' =>$request->invoice,           
          'receiver_roll' =>1,           
          'count' =>102,           
                   
      ]);
      }
else{
      if($request->deliveryMan){
        $chat = Chat::create([
          'message' => $request->message,
          'sender_id' => Auth::User()->id,      
          'receiver_id' =>  $request->deliveryMan,
          'sender_roll' =>$request->roll,           
          'invoiceNo' =>$request->invoice,           
          'receiver_roll' =>4,           
          'count' =>102,           
                   
      ]);
   
      }
      else{
      if($request->invoice) {
       
        if( $request->sender){
           Chat::where('receiver_id',Auth::User()->id)->where('receiver_roll',1)->where('invoiceNo',$request->invoice)->where('status',0)
          ->update(['status'=>1]);
        $get=Chat::where('receiver_roll',1)->where('receiver_id',$request->sender)->where('invoiceNo',$request->invoice)->orderby('id','desc')->first();
     
        if($get==!null) {        
          
          $chat = Chat::create([
            'message' => $request->message,
            'sender_id' => Auth::User()->id,      
            'receiver_id' =>  $get->sender_id,
            'sender_roll' =>$request->roll,           
            'invoiceNo' =>$request->invoice,           
            'receiver_roll' =>$request->receiverRoll,           
            'count' =>101,           
                     
        ]);
     
          }
          else{
            $chat = Chat::create([
                'message' => $request->message,
                'sender_id' => Auth::User()->id,           
                'sender_roll' =>$request->roll,           
                'invoiceNo' =>$request->invoice,           
                'receiver_roll' =>$request->receiverRoll,           
                'count' =>101,              
            ]);  
           
          }
      }
      else{
        Chat::where('receiver_id', $request->receiver)->where('receiver_roll',3)->where('invoiceNo',$request->invoice)->where('status',0)
          ->update(['status'=>1]);
        $chat = Chat::create([
            'message' => $request->message,
            'sender_id' => Auth::User()->id,           
            'receiver_id' => $request->receiver,           
            'sender_roll' =>$request->roll,           
            'invoiceNo' =>$request->invoice,           
            'receiver_roll' =>$request->receiverRoll,           
                     
        ]);  
        
      }
    }  
      else{ 
        if($request->status!=NULL){
         $chat=Chat::where('receiver_roll',NULL)->where('sender_id',$request->status)->update([
             'status'=>1,
         ]);
         broadcast(new ChatEvent($chat))->toOthers();
        }
    
     $count=Chat::where('sender_id', Auth::User()->id)->where('receiver_id',null)->where('status',0)->count();   
        
      if( $request->sender){
          $get=Chat::where('sender_id', Auth::User()->id)->where('receiver_id',$request->sender)->orderby('id','desc')->first();
          if($get==!null) {
   $active=ActiveUser::where('user_id',$get->sender_id)->orderby('id','desc')->first();
           
         if($active==!null) {        
            $mCount=Chat::where('sender_id', Auth::User()->id)->where('receiver_id', $active->user_id)->where('sender_roll', 1)->where('receiver_roll',NULL)->count();   
          $chat = Chat::create([
            'message' => $request->message,
            'sender_id' => Auth::User()->id,      
            'receiver_id' => $active->user_id,
            'sender_roll' =>$request->roll,           
            'invoiceNo' =>$request->invoice,           
            'receiver_roll' =>$request->receiverRoll,           
            'count' =>$count,           
            'messageCount' =>$mCount,           
        ]);
          }
          else{
            $chat = Chat::create([
                'message' => $request->message,
                'sender_id' => Auth::User()->id,     
                'count' =>$count,   
                'sender_roll' =>$request->roll,
                'invoiceNo' =>$request->invoice,           
                'receiver_roll' =>$request->receiverRoll,            
            ]);
              
          }
        }
        else{
            $chat = Chat::create([
                'message' => $request->message,
                'sender_id' => Auth::User()->id,     
                'count' =>$count,   
                'sender_roll' =>$request->roll, 
                'invoiceNo' =>$request->invoice,           
                'receiver_roll' =>$request->receiverRoll,           
            ]);
              
          }
      }
    
  
      else{
    	$chat = Chat::create([
            'message' => $request->message,
            'sender_id' => Auth::User()->id,      
            'receiver_id' => $request->receiver,
            'sender_roll' =>$request->roll, 
            'invoiceNo' =>$request->invoice,           
            'receiver_roll' =>$request->receiverRoll, 
            'count' =>$count,             
        ]);
        }
    }
  }
}
    	broadcast(new ChatEvent($chat->load('user')))->toOthers();

    	return ['status' => 'Message Sent'];
    
    }
}
