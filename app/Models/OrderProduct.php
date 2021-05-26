<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    use HasFactory;
    protected $fillable=[
        'image', 'invoiceNo', 'pId','qty','price','discount'
    ];
    public function brand(){
        return $this->hasOne(PriceSetup::class,'pname','pId');
    }
}
