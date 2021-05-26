<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseProduct extends Model
{
    use HasFactory;
    protected $fillable=[
      
        'invoiceNo',
        'supplierId',
        'pname',
        'brand',
        'quan',
        'unit',
        'unitPrice',
        'totalPrice',
        'perc',
        'disPrice',
        'size',
        'color',
        'createdBy',
        'updatedBy',
    ];
}
