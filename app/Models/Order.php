<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable=[
       'invoiceNo','address','customerId','phone','status','customerStatus','reAddress','rePhone','totalPrice','totalDiscount','deliveryDate','deliveryTime'
    ];
    public function customer(){
        return $this->hasOne(Customer::class,'id','customerId');
    }
   
}
