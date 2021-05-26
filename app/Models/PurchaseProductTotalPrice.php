<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseProductTotalPrice extends Model
{
    use HasFactory;
    protected $fillable=[
      
        'pname',
        'totalQuantity',
        'totalPrice',        
        'createBy',
        'updateBy',
    ];
}
