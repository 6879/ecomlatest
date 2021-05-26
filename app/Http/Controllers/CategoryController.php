<?php

namespace App\Http\Controllers;
use File;
use Image;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;
use App\Http\Resources\Category as CategoryResource;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CategoryResource::collection(Category::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    public function catPosition()
    {
        $categorylabel = Category::where('lavel', 1)->get()->count();
        $positionIn = $categorylabel + 1;
        return ['positionIn' => $positionIn];
    }
    public function subCatPosition()
    {
        $categorylabel = Category::where('lavel', 2)->get()->count();
        $subpositionIn = $categorylabel + 1;
        return ['subpositionIn' => $subpositionIn];
    }
    public function thirdCatPosition()
    {
        $categorylabel = Category::where('lavel', 3)->get()->count();
        $thirdpositionIn = $categorylabel + 1;
        return ['thirdpositionIn' => $thirdpositionIn];
    }
    public function fourthCatPosition()
    {
        $categorylabel = Category::where('lavel', 4)->get()->count();
        $fourthpositionIn = $categorylabel + 1;
        return ['fourthpositionIn' => $fourthpositionIn];
    }
    public function catList()
    {
        $categoryList = Category::where('lavel', 1)->orderby('catPosition','asc')->get();
        return ['categoryList' => $categoryList];
    }
    public function subCatList($id)
    {
        $subcat = Category::where('lavel', 2)->where('preId', $id)->get();
        return ['subcat' => $subcat];
    }
    public function subCatListShow()
    {
        $subcatlist = Category::where('lavel', 2)->orderby('subCatPosition','asc')->get();
        return ['subcatlist' => $subcatlist];
    }
    public function subCatListShowsub()
    {
        $subcatlistsub = Category::where('lavel', 2)->distinct()->get('preId');
        return ['subcatlistsub' => $subcatlistsub];
    }
    public function subCatListShowsubId()
    {
        $subcatlistsubid = Category::where('lavel', 2)->distinct()->get('preId');
        return ['subcatlistsubid' => $subcatlistsubid];
    }
    public function thirdCatListShowsub()
    {
        $thirdcatlistsub = Category::where('lavel', 3)->orderby('thirdCatPosition','asc')->get();
        return ['thirdcatlistsub' => $thirdcatlistsub];
    }
    public function thirdCatListShow()
    {
        $thirdcatlist = Category::where('lavel', 3)->distinct()->get('preId');
        return ['thirdcatlist' => $thirdcatlist];
    }
    public function fourthCatListShowsub()
    {
        $fourthcatlistsub = Category::where('lavel', 4)->distinct()->get('preId');
        return ['fourthcatlistsub' => $fourthcatlistsub];
    }
    public function fourthCatListShow()
    {
        $fourthcatlist = Category::where('lavel', 4)->orderby('fourthCatPosition','asc')->get();
        return ['fourthcatlist' => $fourthcatlist];
    }
    public function thirdCatList($id)
    {
        $thirdcat = Category::where('lavel', 3)->where('preId', $id)->get();
        return ['thirdcat' => $thirdcat];
    }
    public function subCategoryShow($id)
    {
        $subcategoryList = Category::where('id', $id)->get();
        return ['subcategoryList' => $subcategoryList];
    }
    public function thirdCategoryShow($id)
    {
        $subcatlistsub = Category::where('preId', $id)->get();
        return ['subcatlistsub' => $subcatlistsub];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'catName' => 'required | unique:categories',
           
        ]);
        if (isset($request->thirdCategory)) {

            $form = new Category();

            $form->catName = $request->catName;
            $form->url = $request->url;
            $form->bannerImageUrl = $request->bannerImageUrl;
            $form->bannerImage2Url = $request->bannerImage2Url;
            $form->fourthCatPosition = $request->fourthCatPosition;
            $form->bannerImageType = $request->bannerImageType;
            $form->subStatus = $request->subStatus;
            if (isset($request->thirdCategory)) {
                $label = Category::where('id', $request->thirdCategory)->first()->lavel;
                $incrementLabel = $label + 1;
                $form->lavel = $incrementLabel;
            }
            if (isset($request->thirdCategory)) {
                $form->preId = $request->thirdCategory;
            }
            if($request->catImage){
                $strpos = strpos($request->catImage, ';');
                $sub = substr($request->catImage, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                $img = Image::make($request->catImage)->resize(200, 200);
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->catImage = $name;
                }
            if($request->bannerImage){
                $strpos = strpos($request->bannerImage, ';');
                $sub = substr($request->bannerImage, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                if($request->bannerImageType==1){
                    $img = Image::make($request->bannerImage)->resize(1094, 235);}
                    else{
                        $img = Image::make($request->bannerImage)->resize(563,173);  
                    };
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->bannerImage = $name;
                }
            if($request->bannerImage2){
                $strpos = strpos($request->bannerImage2, ';');
                $sub = substr($request->bannerImage2, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                $img = Image::make($request->bannerImage2)->resize(1094, 256);
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->bannerImage2 = $name;
                }
            $form->save();
            return new CategoryResource($form);
        }
        if (isset($request->subCategory)) {

            $form = new Category();

            $form->catName = $request->catName;
            $form->url = $request->url;
            $form->bannerImageType = $request->bannerImageType;
            $form->bannerImageUrl = $request->bannerImageUrl;
            $form->bannerImage2Url = $request->bannerImage2Url;
            $form->thirdCatPosition = $request->thirdCatPosition;
            $form->bannerImageType = $request->bannerImageType;
            $form->subStatus = $request->subStatus;
            if (isset($request->subCategory)) {
                $label = Category::where('id', $request->subCategory)->first()->lavel;
                $incrementLabel = $label + 1;
                $form->lavel = $incrementLabel;
            }
            if (isset($request->subCategory)) {
                $form->preId = $request->subCategory;
            }
            if($request->catImage){
                $strpos = strpos($request->catImage, ';');
                $sub = substr($request->catImage, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                $img = Image::make($request->catImage)->resize(200, 200);
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->catImage = $name;
                }
            if($request->bannerImage){
                $strpos = strpos($request->bannerImage, ';');
                $sub = substr($request->bannerImage, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                if($request->bannerImageType==1){
                    $img = Image::make($request->bannerImage)->resize(1094, 235);}
                    else{
                        $img = Image::make($request->bannerImage)->resize(563,173);  
                    };
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->bannerImage = $name;
                }
            if($request->bannerImage2){
                $strpos = strpos($request->bannerImage2, ';');
                $sub = substr($request->bannerImage2, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                $img = Image::make($request->bannerImage2)->resize(1094, 256);
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->bannerImage2 = $name;
                }
            $form->save();
            return new CategoryResource($form);
        }
        if (isset($request->category)) {

            $form = new Category();
            $form->catName = $request->catName;
            $form->url = $request->url;
            $form->bannerImageUrl = $request->bannerImageUrl;
            $form->bannerImage2Url = $request->bannerImage2Url;
            $form->bannerImageType = $request->bannerImageType;
            $form->subCatPosition = $request->subCatPosition;
            $form->subStatus = $request->subStatus;
            if (isset($request->category)) {
                $label = Category::where('id', $request->category)->first()->lavel;
                $incrementLabel = $label + 1;
                $form->lavel = $incrementLabel;
            }
            if (isset($request->category)) {
                $form->preId = $request->category;
            }
            if($request->catImage){
                $strpos = strpos($request->catImage, ';');
                $sub = substr($request->catImage, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                $img = Image::make($request->catImage)->resize(200, 200);
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->catImage = $name;
                }
            if($request->bannerImage){
                $strpos = strpos($request->bannerImage, ';');
                $sub = substr($request->bannerImage, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                if($request->bannerImageType==1){
                    $img = Image::make($request->bannerImage)->resize(1094, 235);}
                    else{
                        $img = Image::make($request->bannerImage)->resize(563,173);  
                    };
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->bannerImage = $name;
                }
            if($request->bannerImage2){
                $strpos = strpos($request->bannerImage2, ';');
                $sub = substr($request->bannerImage2, 0, $strpos);
                $ex = explode('/', $sub)[1];
                $name =Str::random(5).time() . "." . $ex;
                $img = Image::make($request->bannerImage2)->resize(1094, 256);
                $upload_path = public_path() . "/categoryImage/";
                $img->save($upload_path . $name,'jpg','png');
                $form->bannerImage2 = $name;
                }
            $form->save();
            return new CategoryResource($form);
        }
        $form = new Category();
        if($request->image){
        $strpos = strpos($request->image, ';');
        $sub = substr($request->image, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name =Str::random(5).time() . "." . $ex;
        $img = Image::make($request->image)->resize(200, 200);
        $upload_path = public_path() . "/categoryImage/";
        $img->save($upload_path . $name,'jpg','png');
        $form->image = $name;
        }
     
        if($request->catImage){
            $strpos = strpos($request->catImage, ';');
            $sub = substr($request->catImage, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name =Str::random(5).time() . "." . $ex;
            $img = Image::make($request->catImage)->resize(200, 200);
            $upload_path = public_path() . "/categoryImage/";
            $img->save($upload_path . $name,'jpg','png');
            $form->catImage = $name;
            }
        if($request->bannerImage){
            $strpos = strpos($request->bannerImage, ';');
            $sub = substr($request->bannerImage, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name =Str::random(5).time() . "." . $ex;
            if($request->bannerImageType==1){
                $img = Image::make($request->bannerImage)->resize(1094, 235);}
                else{
                    $img = Image::make($request->bannerImage)->resize(563,173);  
                };
            $upload_path = public_path() . "/categoryImage/";
            $img->save($upload_path . $name,'jpg','png');
            $form->bannerImage = $name;
            }     
        if($request->bannerImage2){
            $strpos = strpos($request->bannerImage2, ';');
            $sub = substr($request->bannerImage2, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name =Str::random(5).time() . "." . $ex;
            $img = Image::make($request->bannerImage2)->resize(563,173);
            $upload_path = public_path() . "/categoryImage/";
            $img->save($upload_path . $name,'jpg','png');
            $form->bannerImage2 = $name;
            }     
     
        $form->catName = $request->catName;
        $form->url = $request->url;
        $form->bannerImageUrl = $request->bannerImageUrl;
        $form->bannerImage2Url = $request->bannerImage2Url;
        $form->catPosition = $request->catPosition;
        $form->bannerImageType = $request->bannerImageType;
        $form->subStatus = $request->subStatus;
        $form->save();
        return new CategoryResource($form);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      
        $categorySingleInfo = Category::where('id',$id)->first();
        $categoryInfo = Category::where('id', $id)->first();
        if ($categoryInfo->lavel == 4 ) {

            $thirdCategoryName = Category::where('id',$categoryInfo->preId)->first();
            $subCategoryName = Category::where('id',$thirdCategoryName->preId)->first();
            $catName = Category::where('id',$subCategoryName->preId)->first();

            return [
                'categorySingleInfo' => $categorySingleInfo, 'categoryInfo' => $categoryInfo,
                'thirdCategoryName'=> $thirdCategoryName,'subCategoryName' => $subCategoryName, 'catName' => $catName,
            ];
        }
        if ($categoryInfo->lavel == 3 ) {

            $subCategoryName = Category::where('id',$categoryInfo->preId)->first();
            $catName = Category::where('id',$subCategoryName->preId)->first();

            return [
                'categorySingleInfo' => $categorySingleInfo, 'categoryInfo' => $categoryInfo,
                'subCategoryName' => $subCategoryName, 'catName' => $catName,
            ];
        }
        if ($categoryInfo->lavel == 2 ) {

            $catName = Category::where('id',$categoryInfo->preId)->first();

            return [
                'categorySingleInfo' => $categorySingleInfo, 'categoryInfo' => $categoryInfo,
                'catName' => $catName,
            ];
        }
        if ($categoryInfo->lavel == 1 ) {

            return [
                'categorySingleInfo' => $categorySingleInfo, 'categoryInfo' => $categoryInfo,
            ];
        }
        // return response()->json($edit);
    }
    public function categoryEditallCategory()
    {
        
       
          $assetSubCategoryLists   =   Category::where('lavel',2)->get();
          $assetThirdCategoryLists   =   Category::where('lavel',3)->get();
        
          return [
            'assetSubCategoryLists' => $assetSubCategoryLists,
            'assetThirdCategoryLists' => $assetThirdCategoryLists,
            
        ];

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $form=Category::find($id);
        if($strpos = strpos($request->catImage, ';')){
            if($form->catImage!==NULL){
            $usersImage = public_path("/categoryImage/{$form->catImage}"); // get previous image from folder
            if (File::exists($usersImage)) {
                unlink($usersImage);
            }
        }
            $strpos = strpos($request->catImage, ';');
            $sub = substr($request->catImage, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = Str::random(5).time() . "." . $ex;
            $img = Image::make($request->catImage)->resize(200, 200);
            $upload_path = public_path() . "/categoryImage/";
            $img->save($upload_path . $name);
            $form->catImage = $name;
            }
        if($strpos = strpos($request->bannerImage, ';')){
            $usersImage2 = public_path("/categoryImage/{$form->bannerImage}"); // get previous image from folder
            if($form->bannerImage!==NULL){
            if (File::exists($usersImage2)) {
                unlink($usersImage2);
            }}
            $strpos = strpos($request->bannerImage, ';');
            $sub = substr($request->bannerImage, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = Str::random(5).time() . "." . $ex;
            if($request->bannerImageType==1){
            $img = Image::make($request->bannerImage)->resize(1094, 235);}
            else{
                $img = Image::make($request->bannerImage)->resize(563,173);  
            };
            $upload_path = public_path() . "/categoryImage/";
            $img->save($upload_path . $name);
            $form->bannerImage = $name;
            }
        if($strpos = strpos($request->bannerImage2, ';')){
            if($form->bannerImage2!==NULL){
            $usersImage3 = public_path("/categoryImage/{$form->bannerImage2}"); // get previous image from folder
            if (File::exists($usersImage3)) {
                unlink($usersImage3);
            }
        }
            $strpos = strpos($request->bannerImage2, ';');
            $sub = substr($request->bannerImage2, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = Str::random(5).time() . "." . $ex;
            $img = Image::make($request->bannerImage2)->resize(563, 173);
            $upload_path = public_path() . "/categoryImage/";
            $img->save($upload_path . $name);
            $form->bannerImage2 = $name;
            }
        if($strpos = strpos($request->image, ';')){
            if($form->image!==NULL){ 
            $usersImage4 = public_path("/categoryImage/{$form->image}"); // get previous image from folder
            if (File::exists($usersImage4)) {
                unlink($usersImage4);
            }
        }
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = Str::random(5).time() . "." . $ex;
            $img = Image::make($request->image)->resize(200, 200);
            $upload_path = public_path() . "/categoryImage/";
            $img->save($upload_path . $name);
            $form->image = $name;
            }
            $form->catName = $request->catName;
            $form->url = $request->url;
            $form->bannerImageUrl = $request->bannerImageUrl;
            $form->bannerImageType = $request->bannerImageType;
            $form->bannerImage2Url = $request->bannerImage2Url;
            $form->catPosition = $request->catPosition;
            $form->subStatus = $request->subStatus;
        $form->update();
        return new CategoryResource($form);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        $usersImage = public_path("/categoryImage/{$category->image}"); // get previous image from folder
        if (File::exists($usersImage)) {
            unlink($usersImage);
        }
        $usersImage2 = public_path("/categoryImage/{$category->catImage}"); // get previous image from folder
        if (File::exists($usersImage2)) {
            unlink($usersImage2);
        }
        $usersImage3 = public_path("/categoryImage/{$category->bannerImage}"); // get previous image from folder
        if (File::exists($usersImage3)) {
            unlink($usersImage3);
        }
        $usersImage4 = public_path("/categoryImage/{$category->bannerImage2}"); // get previous image from folder
        if (File::exists($usersImage4)) {
            unlink($usersImage4);
        }
        $category->delete();
        return new CategoryResource($category);
        
    }
}
