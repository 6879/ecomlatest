<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PriceSetup extends Model
{
    use HasFactory;
    protected $fillable=[
      
        'invoiceNo',      
        'pname',    
        'salesPrice',
        'profit',        
        'createdBy',
        'updatedBy',
        'brand',
        'brandTotal',
        'quan',
    ];
    public function productName(){
        return $this->hasOne(ProductName::class,'id','pname');
    }
    public function productImage(){
        return $this->hasOne(CategoryImage::class,'pname','pname');
    }
    public function productCategory(){
        return $this->hasOne(ProductCategory::class,'productNameId','pname');
    }
    public function purchaseProduct(){
        return $this->hasOne(PurchaseProduct::class,'pname','pname');
    }
    public function offer(){
        return $this->hasOne(Offer::class,'productId','pname');
    }
}
