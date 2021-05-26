<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnitEntry extends Model
{
    use HasFactory;
    protected $fillable=[
        'unit'
    ];
}
