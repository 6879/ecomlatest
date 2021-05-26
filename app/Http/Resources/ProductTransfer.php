<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductTransfer extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);return [
            'id' => $this->id,                
            'location' => $this->location,                 
            'code' => $this->code,                 
            'pname' => $this->pname,           
            'brand' => $this->brand,           
            'quan' => $this->quan,          
            'total' => $this->total,          
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
