<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseInvoice extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,                
            'purchaseDate' => $this->purchaseDate,                  
            'invoiceNo' => $this->invoiceNo,                  
            'purchaseTypeId' => $this->purchaseTypeId,        
            'supplierId' => $this->supplierId,        
            'totalPurchaseValue' => $this->totalPurchaseValue,        
            'carriageInward' => $this->carriageInward,        
            'totalAmount' => $this->totalAmount,        
            'discount' => $this->discount,        
            'supplierPayable' => $this->supplierPayable,        
            'otherCost' => $this->otherCost,        
            'damageAndWarranty' => $this->damageAndWarranty,        
            'totalProductCost' => $this->totalProductCost,        
            'previousPayableDue' => $this->previousPayableDue,        
            'currentPayable' => $this->currentPayable,        
            'createBy' => $this->createdBy,        
            'updateBy' => $this->updatedBy,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
