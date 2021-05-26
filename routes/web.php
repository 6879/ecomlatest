<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',  'IndexController@index' );        

Auth::routes();

Route::post('logouts/{id}', 'HomeController@logouts')->name('logouts');
Route::post('change-password', 'ChangePasswordController@store');
Route::post('changepassword', 'CustomerChangePasswordController@store');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::group(
    ['middleware' => 'auth'],
    function () {
        Route::get('/admin', function () {
            return view('admin.index');
        });        
Route::get('/menusget/{id}', 'MenuController@menusget');
Route::get('/user/{id}', 'AdminEntryController@user');
Route::get('/moduleuser/{id}', 'AdminPermissionController@moduleGet');
Route::get('/menuuser/{id}', 'AdminPermissionController@menuGet');
Route::get('/catuser/{id}', 'CategoryPermissionController@catGet');
Route::get('/submenuuser/{id}', 'AdminPermissionController@submenuGet');
Route::get('/adminpermissionmodule/{id}', 'AdminPermissionController@moduleD');
Route::get('/adminpermissionsubmenu/{id}', 'AdminPermissionController@submenuD');
Route::get('/categoryposition', 'CategoryController@catPosition');
Route::get('/categorysubposition', 'CategoryController@subCatPosition');
Route::get('/categorythirdposition', 'CategoryController@thirdCatPosition');
Route::get('/categoryfourthposition', 'CategoryController@fourthCatPosition');
Route::get('/categorylist', 'CategoryController@catList');
Route::get('/subcatshow/{id}', 'CategoryController@subCatList');
Route::get('/subcatshowList', 'CategoryController@subCatListShow');
Route::get('/subcategorylist/{id}', 'CategoryController@subCategoryShow');
Route::get('/thirdcategorylist/{id}', 'CategoryController@thirdCategoryShow');
Route::get('/subcatshowListsub', 'CategoryController@subCatListShowsub');
Route::get('/subcatshowListsubid', 'CategoryController@subCatListShowsubId');
Route::get('/thirdcatshowListsub', 'CategoryController@thirdCatListShowsub');
Route::get('/fourthcatshowListsub', 'CategoryController@fourthCatListShowsub');
Route::get('/thirdcatshowList', 'CategoryController@thirdCatListShow');
Route::get('/fourthcatshowList', 'CategoryController@fourthCatListShow');
Route::get('/thirdcatshow/{id}', 'CategoryController@thirdCatList');
Route::get('/categoryEdit/allCategory','CategoryController@categoryEditallCategory');
Route::get('/purchaseInvoiceShow','PurchaseProductController@purchaseInvoiceShow');
Route::post('/productQuantityUpdate','PurchaseProductController@productQuantityUpdate');
Route::post('/purchaseInvoice','PurchaseProductController@storeInvoice');
Route::get('/totalPurchaseValue/{invoiceNo}','PurchaseProductController@totalPurchaseValue');
Route::get('/purchaseInvoiceGet','PurchaseProductController@purchaseInvoiceGet');
Route::get('/purchaseProductTotalList','PurchaseProductController@purchaseProductTotalList');
Route::get('/productlist/{id}/{idget}','PurchaseProductController@productList');
Route::get('/purchaseProductReportList/{id}','PurchaseProductController@purchaseProductReportList');
Route::get('/warehousecode/{id}','WarehouseController@getCode');
Route::get('/priceSetup/{id}/{brandId}','PriceSetupController@getQuan');
Route::get('/getItem','PriceSetupController@getItem');
Route::get('/brandShow/{id}','PurchaseProductController@getBrand');
Route::get('/productList','PurchaseProductController@getproductList');
Route::get('/brandlist/{id}','PurchaseProductController@getbrandList');
Route::get('productcatlist','ProductNameController@productCatList');
Route::get('productTransferlimit','ProductTransferController@productTransferLimit');
Route::get('productTransferSummery/{pname}/{brand}','ProductTransferController@transferSummery');
Route::get('productTransferwarehouseSummery/{location}/{code}','ProductTransferController@transferwarehouseSummery');
Route::get('productTransferBack','ProductTransferController@backSummery');
Route::get('brandwiseProductTransfer/{id}','ProductTransferController@productList');
Route::get('productTransferTproduct','ProductTransferController@tProduct');
Route::get('brandwise','PriceSetupController@brandWise');
Route::get('salesPrice/{id}','PriceSetupController@salesPrice');
Route::resource('userInfo','UserInfoController');
Route::resource('purchaseproducts','PurchaseProductController');
Route::resource('priceSetup','PriceSetupController');
Route::resource('warehouseLocation','WarehouseLocationController');
Route::resource('warehouse','WarehouseController');
Route::resource('productTransfer','ProductTransferController');
Route::resource('catPermission','CategoryPermissionController');
Route::resource('catImage','CategoryImageController');
Route::resource('location','BangladeshLocationController');
Route::resource('deliveryLocation','DeliveryLocationController');
Route::resource('deliveryCharge','DeliveryChargeController');
Route::resource('deliveryManInfo','DeliveryManInfoController');
Route::resource('offer','OfferController');
Route::resource('commissionType','CommissionTypeController');
Route::resource('purchaseCashback','PurchaseCashbackController');
Route::resource('generationInfo','GenerationAmountController');
Route::resource('promotionCashback','PromotionalCashbackController');
Route::resource('targetSales','TargetSalesCommissionController');
Route::resource('salesSalary','SalesSalaryController');
Route::resource('incentives','IncentiveController');
Route::resource('orderManagement','OrderMAnagementController');
Route::resource('packagingSection','PackagingSectionController');
Route::resource('deliveryManagement','DeliveryManagementController');
Route::get('finishOrder/{id}','PackagingSectionController@finishOrder');
Route::get('finishOrderManagement/{id}','DeliveryManagementController@finishOrderManagement');
Route::post('cancelOrder','OrderManagementController@cancelOrder');
Route::post('returnOrderReason','DeliveryManagementController@returnOrderReason');
Route::post('returnOrder','PackagingSectionController@returnOrder');
Route::post('postDate','OrderMAnagementController@postDate');
Route::post('postTime','OrderMAnagementController@postTime');
Route::post('customize','OrderMAnagementController@customize');
Route::get('generationDelete/{id} ','GenerationAmountController@generationDelete');
Route::resource('deliveryManDeliveryTime','DeliveryManDeliveryTimeController');
Route::resource('deliveryMan','DeliveryManController');

});
//chat

Route::get('/chats', 'ChatController@index');
Route::get('/messages', 'ChatController@fetchAllMessages');
Route::get('/getSender', 'ChatController@senders');
Route::get('/getSenderInfo', 'ChatController@senderInfo');
Route::get('/getReceiver', 'ChatController@receivers');
Route::post('/messages', 'ChatController@sendMessage');
Route::get('/customerGet', 'ChatController@customers');
Route::get('/messageSeenFromDM/{id}', 'ChatController@messageSeenFromDM');
Route::get('/messageSeen/{id}', 'ChatController@messageSeen');
Route::get('/messageRead/{id}', 'ChatController@messageRead');
Route::get('/deliveryManMessageRead/{id}', 'ChatController@deliveryManMessageRead');
Route::get('/seenStatus/{id}', 'ChatController@seenStatus');
//chat
Route::resource('customer','CustomerRegistrationController');
Route::get('search','CustomerRegistrationController@search');
Route::resource('productView','ProductViewController');
Route::resource('homemenu','HomeMenuController');
Route::resource('pricerange','PriceRangeController');
Route::resource('offerGet','OfferViewController');
Route::resource('deliveryLocationWeb','DeliveryLocationWebViewController');
Route::get('wardLocation/{id}','DeliveryLocationWebViewController@viewWardLocation');
Route::get('viewMenuCat','ProductViewController@view');
Route::resource('filteringstatus','FilteringStatusController');
Route::get('viewMenuCatList','ProductViewController@viewCategory');
Route::get('subCatProduct','ProductViewController@viewSubCat');
Route::get('searchProduct/{val}','ProductViewController@searchProduct');
Route::get('searchProductView','ProductViewController@searchProductView');
Route::get('offerView','ProductViewController@offerView');
Route::get('searchBrand/{val}','ProductViewController@searchBrand');
// Route::get('productshows/{id}','ProductViewController@productshows');
Route::get('productshows/{brandt}','FilteringController@productshows');
Route::get('productShowByUnit////{unit}','FilteringController@productShowByUnitOnly');
Route::get('productShowByUnit/{brandtc}///{unit}','FilteringController@productShowByUnitAndBrand');
Route::get('productShowByUnit/{brandtc}/{price}//{unit}','FilteringController@productShowByUnitPriceAndBrand');
Route::get('productShowByUnit//{price}/{color}/{unit}','FilteringController@productShowByUnitPriceAndColor');
Route::get('productShowByUnit//{price}//{unit}','FilteringController@productShowByUnitAndPrice');
Route::get('productShowByUnit///{color}/{unit}','FilteringController@productShowByUnitAndColor');
Route::get('productShowByColor/{brandtc}///{color}','FilteringController@productShowByColor');
Route::get('productShowByColor/{brandtc}/{unit}/{price}/{color}','FilteringController@productShowByColorBrandPriceAndUnit');
Route::get('productShowByColor/{brandtc}/{unit}//{color}','FilteringController@productShowByColorBrandAndUnit');
Route::get('productShowByColor//{unit}/{price}/{color}','FilteringController@productShowByColorPriceAndUnit');
Route::get('productShowByColor//{unit}//{color}','FilteringController@productShowByColorAndUnit');
Route::get('productShowByColor///{price}/{color}','FilteringController@productShowByColorAndPrice');
Route::get('productShowByColor////{color}','FilteringController@productShowByColorOnly');
Route::get('productShowByPrice////{price}','FilteringController@productShowByPriceOnly');
Route::get('productShowByPrice/{brandtc}///{price}','FilteringController@productShowByPriceAndBrand');
Route::get('productShowByPrice//{unit}//{price}','FilteringController@productShowByPriceAndUnit');
Route::get('productShowByPrice/{brandtc}//{color}/{price}','FilteringController@productShowByPriceColorAndBrand');
Route::get('productShowByPriceRang/////{price1}/{price2}','FilteringController@productShowByPriceRangOnly');
Route::get('brandget','ProductViewController@brandGet');
Route::get('unitget','ProductViewController@unitGet');
Route::get('purchaseProductGet','ProductViewController@purchaseProductGet');
Route::get('colorget','ProductViewController@colorGet');
Route::post('priceFilter','ProductViewController@priceFilter');

Route::get('/division', 'BangladeshLocationController@division');
Route::get('/allDistrict', 'BangladeshLocationController@allDistrict');
Route::get('/allThana', 'BangladeshLocationController@allThana');
Route::get('/district/{id}', 'BangladeshLocationController@district');
Route::get('/thana/{id}', 'BangladeshLocationController@thana');
Route::get('/union/{id}', 'BangladeshLocationController@union');
Route::get('/ward/{id}', 'BangladeshLocationController@ward');
Route::get('/deliveryTime/{id}', 'BangladeshLocationController@deliveryTime');
Route::get('/deliveryTimeForWard/{id}', 'BangladeshLocationController@deliveryTimeForWard');
Route::group( ['prefix' => 'vendor'],function(){
    Route::get('/', 'Users\Admin\CustomerController@index')->name('customer.dashboard');
    Route::get('/login', 'Auth\CustomerLoginController@showLoginForm')->name('customer.login');
    Route::post('/login', 'Auth\CustomerLoginController@login')->name('customer.login.submit');
    Route::get('/register', 'Auth\CustomerRegisterController@showRegisterForm')->name('customer.register');
    Route::post('/register', 'Auth\CustomerRegisterController@register')->name('customer.register.submit');
});
Route::resource('customerInfo', 'CustomerInfoController');
Route::resource('order', 'OrderController');
Route::post('paymanetUpdate/{id}', 'OrderController@paymanetUpdate');
Route::get('searchUser', 'CustomerRegistrationController@searchUser');