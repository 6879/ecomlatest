<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryImage extends JsonResource
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
            'videoUrl' => $this->videoUrl,                
            'image' => $this->image,        
            'image1' => $this->image1,        
            'image2' => $this->image2,        
            'image3' => $this->image3,            
            'image4' => $this->image4,        
            'image5' => $this->image5,        
            'image6' => $this->image6,        
            'image7' => $this->image7,        
            'image8' => $this->image8,        
            'image9' => $this->image9,        
            'details' => $this->details,        
            'speciality' => $this->speciality,               
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
