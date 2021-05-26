<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseProduct extends JsonResource
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
            'invoiceNo' => $this->invoiceNo,                  
            'supplierId' => $this->supplierId,                  
            'pname' => $this->pname,        
            'brand' => $this->brand,        
            'quan' => $this->quan,        
            'unit' => $this->unit,        
            'perc' => $this->perc,        
            'disPrice' => $this->disPrice,        
            'unitPrice' => $this->unitPrice,        
            'totalPrice' => $this->totalPrice,        
            'size' => $this->size,        
            'color' => $this->color,        
            'createdBy' => $this->createdBy,        
            'updatedBy' => $this->updatedBy,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
