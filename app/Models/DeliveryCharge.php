<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryCharge extends Model
{
    use HasFactory;
    protected $fillable=[
        'divisionId','districtId',  'thanaId','unionId','wardId','deliveryTimeId','deliveryCharge'
    ];
    public function allUnion(){
        return $this->hasOne(Union::class,'id','unionId');
    }
    public function allWard(){
        return $this->hasOne(Ward::class,'id','wardId');
    }

}
