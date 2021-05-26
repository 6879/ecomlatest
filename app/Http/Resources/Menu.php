<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Menu extends JsonResource
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
            'moduleId' => $this->moduleId,            
            'menuName' => $this->menuName,        
            'menuPosition' => $this->menuPosition,        
            'menuUrl' => $this->menuUrl,        
            'status' => $this->status,        
            'substatus' => $this->substatus,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
