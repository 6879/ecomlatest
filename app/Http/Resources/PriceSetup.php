<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PriceSetup extends JsonResource
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
            'pname' => $this->pname,                       
            'salesPrice' => $this->salesPrice,        
            'profit' => $this->profit,                   
            'brand' => $this->brand,                   
            'brandTotal' => $this->brandTotal,                   
            'quan' => $this->quan,                   
            'createdBy' => $this->createdBy,        
            'updatedBy' => $this->updatedBy,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
