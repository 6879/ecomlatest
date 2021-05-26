<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductName extends JsonResource
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
            'keyword' => $this->keyword,          
            'pcode' => $this->pcode,          
            'pqrcode' => $this->pqrcode,      
            'createby' => $this->createby,        
            'updateby' => $this->updateby,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
