<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TargetSalesCommission extends Model
{
    use HasFactory;
    protected $fillable = [
        'targetSalesAmount',
        'link',
        'linkAmount',
      
        
    ];
}
