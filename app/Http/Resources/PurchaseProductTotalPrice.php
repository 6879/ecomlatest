<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseProductTotalPrice extends JsonResource
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
                              
            'pname' => $this->pname,           
            'totalQuantity' => $this->totalQuantity,        
            'totalPrice' => $this->totalPrice,        
            'createBy' => $this->createBy,        
            'updateBy' => $this->updateBy,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
