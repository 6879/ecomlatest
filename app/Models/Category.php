<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable=[
        'image','catName',
        'catPosition','subCatPosition',
        'thirdCatPosition','fourthCatPosition',
        'status','subStatus',
        'createdBy','preId',
        'catImage','bannerImage',
        'bannerImage2','bannerImageUrl',
        'bannerImage2Url',
        'bannerImageType',
        'bannerImageStatus',
        'lavel','url'
    ];
}
