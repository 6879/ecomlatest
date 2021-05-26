<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductName extends Model
{
    use HasFactory;
    protected $fillable=[
        'pname','pcode','pqrcode','keyword','createBy','updateBy',
    ];

}
