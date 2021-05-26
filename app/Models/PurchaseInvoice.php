<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseInvoice extends Model
{
    use HasFactory;
    protected $fillable=[
      
        'purchaseDate',
        'invoiceNo',
        'purchaseTypeId',
        'supplierId',
        'totalPurchaseValue',
        'carriageInward',
        'totalAmount',
        'discount',
        'supplierPayable',
        'otherCost',
        'damageAndWarranty',
        'totalProductCost',
        'previousPayableDue',
        'currentPayable',
        'createdBy',
        'updatedBy',
    ];
}
