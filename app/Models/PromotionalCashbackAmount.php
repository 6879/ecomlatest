<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromotionalCashbackAmount extends Model
{
    use HasFactory;
    protected $fillable = [
        'generation' ,'promotionalCbackAmount'          
    ];
    public function generationGet(){
        return $this->hasOne(Generation::class,'id','generation');
    }
}
