<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Terms extends JsonResource
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
            'image' => $this->image,                  
            'details' => $this->details,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
