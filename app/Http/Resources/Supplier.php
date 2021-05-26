<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Supplier extends JsonResource
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
            'name' => $this->name,                  
            'businessType' => $this->businessType,                  
            'code' => $this->code,        
            'phone' => $this->phone,        
            'hotLine' => $this->hotLine,        
            'mail' => $this->mail,        
            'fb' => $this->fb,        
            'web' => $this->web,        
            'address' => $this->address,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
