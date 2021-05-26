<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

       
Route::resource('products','ProductController');
Route::resource('modules','ModuleController');
Route::resource('menus','MenuController');
Route::resource('admintypes','AdminTypeController');
Route::resource('submenus','SubMenuController');
Route::resource('adminentry','AdminEntryController');
Route::resource('adminpermission','AdminPermissionController');
Route::resource('logos','LogoController');
Route::resource('sliders','SliderController');
Route::resource('privacys','PrivacyController');
Route::resource('terms','TermsController');
Route::resource('faqs','FAQController');
Route::resource('policys','OrderPolicyController');
Route::resource('abouts','AboutUsController');
Route::resource('category','CategoryController');
Route::resource('units','UnitEntryController');
Route::resource('brands','BrandController');
Route::resource('colors','ColorController');
Route::resource('sizes','SizeController');
Route::resource('suppliers','SupplierController');
Route::resource('productnames','ProductNameController');
Route::resource('businesstypes','BusinessTypeController');
Route::resource('purchasetypes','PurchaseTypeController');
Route::resource('purchaseproducts','PurchaseProductController');
Route::resource('priceSetup','PriceSetupController');
Route::resource('sliderhome','SliderHomeController');
Route::get('productcat','ProductNameController@pCatList');
Route::get('supplierInfo/{id}','SupplierController@supplierInfos');
Route::post('/productQuantityUpdate','PurchaseController@productQuantityUpdate');