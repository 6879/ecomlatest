<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryTime extends Model
{
    use HasFactory;
    protected $fillable=[
        'divisionId','districtId',  'thanaId','unionId','wardId','deliveryTime'
    ];
    public function allUnion(){
        return $this->hasOne(Union::class,'id','unionId');
    }
    public function allWard(){
        return $this->hasOne(Ward::class,'id','wardId');
    }
    public function division(){
        return $this->hasOne(Division::class,'id','divisionId');
    }
    public function district(){
        return $this->hasOne(District::class,'id','districtId');
    }
    public function thana(){
        return $this->hasOne(Upazila::class,'id','thanaId');
    }
    public function ward(){
        return $this->hasOne(Ward::class,'id','wardId');
    }
    public function union(){
        return $this->hasOne(Union::class,'id','unionId');
    }
    public function deliveryCharge(){
        return $this->hasOne(DeliveryCharge::class,'thanaId','thanaId');
    }
  
}
