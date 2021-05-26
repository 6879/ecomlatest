<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubMenu extends JsonResource
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
            'menuId' => $this->menuId,        
            'subMenuName' => $this->subMenuName,        
            'subMenuPosition' => $this->subMenuPosition,        
            'subMenuUrl' => $this->subMenuUrl,        
            'status' => $this->status,               
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
