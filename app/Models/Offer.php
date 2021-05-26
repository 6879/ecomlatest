<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;
    public function salesPrice(){
        return $this->hasOne(PriceSetup::class,'pname','productId');
    }
}
