<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Category extends JsonResource
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
            'catName' => $this->catName,                  
            'image' => $this->image,        
            'catImage' => $this->catImage,        
            'bannerImage' => $this->bannerImage,        
            'bannerImage2' => $this->bannerImage2,        
            'bannerImage2Url' => $this->bannerImage2Url,        
            'bannerImageUrl' => $this->bannerImageUrl,        
            'catPosition' => $this->catPosition,        
            'subCatPosition' => $this->subCatPosition,        
            'thirdCatPosition' => $this->thirdCatPosition,        
            'fourthCatPosition' => $this->fourthCatPosition,        
            'status' => $this->status,        
            'bannerImagestatus' => $this->bannerImageStatus,        
            'subStatus' => $this->subStatus,        
            'createdBy' => $this->createdBy,        
            'preId' => $this->preId,        
            'lavel' => $this->lavel,        
            'url' => $this->url,        
            'bannerImageType' => $this->bannerImageType,        
            'created_at' => $this->created_at,        
            'updated_at' => $this->updated_at,        
            
        ];
    }
}
