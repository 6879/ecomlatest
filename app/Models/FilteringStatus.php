<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FilteringStatus extends Model
{
    use HasFactory;
    protected $fillable=[
        'category','item'
    ];
}
