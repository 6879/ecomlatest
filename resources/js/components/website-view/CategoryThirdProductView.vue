 <template>
  <div>
      <!-- search product result -->
            <div class="container-fluid mt-1" :style="resultDiv">
       

        <div class="col-12 col-md-12 col-xs-12"  >
          <div class="row" >
        
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2"
              v-for="res in result"
             
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
                 v-for="item in searchProduct"         
              v-bind:key="item.id"
             v-if="item.pname==res.pname"
             
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + item.image"
                  />
                </figure>

                <div class="overlay">
                  
                 
                     <div style="text-align:center">
                  <a class="info" @click="addCart(item)"
                    >Add To Shopping Cart</a
                  >
                  </div>
                   <div class="hovercart" v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==item.id">
                   <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-info">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-info" @click="decrement(cart)">-</button>
                       </div>
                  </div>
                  <div class="detail">
                 <a v-b-modal="'modal' + item.productNameId" class="btn btn-success">Details</a>
                  </div>
                </div>
                      <!-- Modal -->
                <b-modal   v-bind:id="'modal' + item.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'images/' + item.image"
                                  :img-zoom="'images/' + item.image"
                                  :scale="2"
                                ></zoom-on-hover>
                              </div>                             
                              <br />
                            </div>
                            <div class="col-md-6 col-xs-12 product_content ml-0">
                              <h4>{{ item.pname }}</h4>
                               <div class="ml-0">
                              <span  v-for="purchaseProduct in purchaseproducts" >
                              <span v-if="purchaseProduct.pname==item.productNameId" >
                                <span v-for="unit in units" :key="unit.id"   v-if="purchaseProduct.unit==unit.id" >{{unit.unit}}<span></span></span>
                                &nbsp;&nbsp;Brand:&nbsp;<span v-for="brand in brands" :key="brand.id" v-if="purchaseProduct.brand==brand.id">{{brand.brand}}</span>
                                &nbsp;&nbsp;Color:&nbsp;<span v-for="color in colors" :key="color.id" v-if="purchaseProduct.color==color.id">{{color.color}} </span>                            
                              </span>
                               </span>                             
                                </div>
                                <p>
                                <span class="cost"><span>৳</span> {{item.salesPrice}}</span
                                >&nbsp;&nbsp;
                                <span class="tk">৳</span
                                >&nbsp;<del>12400</del>&nbsp;&nbsp;
                                <span style="color: red">2%&nbsp;Off</span>
                              </p>
                              <div class="btn-ground">                              
                                  <div class="row">
                                    <div class="col-12 col-md-6 col-xs-12">
                                      <div class="input-group mb-3"   >                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                           
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        0 in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(item)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      <div class="input-group mb-3 incre" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==item.id" >
                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                            @click="decrement(cart)"
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        {{cart.qun}} in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(item)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      
                                    </div>
                                    
                                    <div class="col-xs-12" >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                         @click="addCart(item)"
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + item.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-xs-12 buynowclose" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==item.id"  >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                      
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + item.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                  </div>
                                  
                             
                              </div>
                              <h5 class="pdetails">
                                Product Detais
                              </h5>
                         
                                <div v-html="item.details"></div>
                             

                              <h5 class="pdetails">
                                Speciality
                              </h5>
                                <div v-html="item.speciality"></div>
                            </div>
                          </div>
                        </div>
                   
                      <div class="d-none d-sm-block">
                        <div class="col-md-12 toph">
                          <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#home"
                                  >Order Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu1"
                                  >Delivary Charge</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Delivery Area</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Product Return Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Free Family Bazar</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Referrence
                                </a>
                              </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                              <div id="home" class="container tab-pane">
                                <br />
                                <h3>HOME</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                                <br />
                                <h3>Menu 1</h3>
                                <p>
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                <h3>Menu 2</h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam.
                                </p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                  
</b-modal>
                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                  v
                >
                  <p style="text-align: left">{{ getProductName(item) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            item.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
                 <div class="col-12 col-md-12 col-xs-12 paddingImage3" >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(item)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"  v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==item.id" >
                  
                  <center>
                    <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-danger"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-danger">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-danger" @click="decrement(cart)">-</button>
                       </div>
                  </center>
                </div>
              
                
              </div>
            </div>
           
          </div>
        </div>
      </div>
           <!--./ search product result --> 
      
    <div >
    <div class="container-fluid pl-0 pr-0" v-if="slider==true" >
       
                    
         
                <div class="col-12 col-md-12 col-xs-12   paddingImage hover01" v-for="menu in menus" :key="menu.id"   v-if="$route.params.id == menu.id&&menu.bannerImageType==1" >
            
                    <figure> <img class="img-fluid boxBanImage  "   :src="'images/' + menu.bannerImage"> </figure>
                  
                </div>

                  <div class="col-12 col-md-12 col-xs-12 " >
                             <div class="row" v-for="menu in menus" :key="menu.id" v-if="$route.params.id == menu.id&&menu.bannerImageType==2">
                <div class="col-6 col-md-6 col-xs-6 pl-0 pr-0 hover01"   >
              <figure> <img class="img-fluid boxBanImage " width="100%"   :src="'images/' + menu.bannerImage"> </figure>
                   
                  
                </div>
                <div class="col-6 col-md-6 col-xs-6 pl-0 pr-0 hover01"    >
            
                  <figure> <img class="img-fluid boxBanImage  "  :src="'images/' + menu.bannerImage2"> </figure>
                  </div>
                </div>
               
                </div>
              
   
    </div>
    </div>
     <!-- sidenav and searchbar  -->
  <div class="col-12 col-md-12 col-xs-12  headerdesign" >
<div class="row">
      <div class="col-2 col-md-2 col-xs-1 " style="margin-top: 0.4rem !important;">
        <div v-for="logo in logos" :key="logo.id">
            <a class="navbar-brand  d-none d-sm-block" href="#">
         
          <img width="180" height="50"  :src="'images/' + logo.image"> </img>
         
        </a>
            </div>
        <div class=" mt-0 d-md-none">
          <a style="margin-top:11px" v-b-toggle.sidebar-backdrop type="button"><i class="fa fa-bars  " style="color:black;line-height: 50px;" aria-hidden="true"></i>
          </a>
        </div>
      </div>
<div class="col-8 col-md-8 col-xs-12">
         <div class="form-inline  " style="margin-top: 1.1rem !important;">
          <input class="form-control " type="text"  v-model="searchItem" placeholder="Search" aria-label="Search">
          <button class="btn my-2 my-sm-0 btnSearch" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
      </div>
       <div class="col-2 mt-2 col-md-2 col-xs-4" style="top:11px">

        <i class="fa fa-ellipsis-v d-md-none mt-2 menuHeight" data-toggle="modal" data-target="#exampleModalCenter" aria-hidden="true"></i>

      </div>
</div>
</div>


<div class="d-md-none">

    <div>


      <b-sidebar id="sidebar-backdrop"  :backdrop-variant="variant" backdrop shadow>
        <div v-for="logo in logos" :key="logo.id">
               <figure>
                  <img
                    class="img-fluid logoImg"
                    :src="'images/' + logo.image"
                   
                  />
                </figure>
        </div>
        <div class="px-3 py-2">
       <center class="mtside"> <button class="btn "><i class="fa fa-gift"></i> OFFER<span class="amount">&nbsp;<b>(45)</b></span></button></center>
          <navbar>

          </navbar>
        </div>
      </b-sidebar>
    </div>
  


</div>
 <!-- ./sidenav and searchbar  -->
    <!-- content category -->
     <!-- Filter -->
      <!-- FilterBrand-->
    <div class=" mt-5" v-if="category==true">
      <div class="col-12 col-md-12 col-xs-12 " style="right:12px" v-for="st in stats" :key="st.id" v-if="$route.params.id == st.category&&st.item==1">
    <div class="row mr-0" >
       <div class="col-6 col-md-3 col-xs-6 " >
          <div class="col-12 col-md-12 col-xs-12 "  >
        <b-dropdown id="dropdown-left" text="Filter By Brand"  class="mb-2 mr-0">
         <template slot="button-content">
        <i class="py-0 fa fa-filter"></i>
        <span v-if="selected.brandt==''">
        <em>Filter By Brand</em>
        </span>
        <span v-else>
        <span v-for="brand in brands" v-if="brand.id==selected.brandt">  
        <em>Filter By {{brand.brand}}</em>
        </span>
        </span>
       
    </template>
    <b-form-group
        id="input-group-1" >
         <b-form-input
          id="input-1"
          v-model="searchBrand"
          placeholder="Search"
        ></b-form-input>
      </b-form-group>
      <div  :style="resultbrandDiv">
     <div  v-for="resultget in brandresult" v-bind:key="resultget.id" >   
    <b-dropdown-item v-on:click="productShow(resultget.id)"><span v-for="brand in brands" v-if="resultget.id==brand.id">{{brand.brand}}</span></b-dropdown-item>
     </div>
     </div>
     <div v-if="brand==true">
      <div v-for="menu in menus" :key="menu.id" v-if="$route.params.id == menu.id " >
     <div  v-for="brandget in brandgets" v-bind:key="brandget.id" v-if="brandget.categoryId == menu.id">
    <span v-for="brand in brands" v-if="brand.id==brandget.brand" ><b-form-radio class="ml-2" :aria-describedby="ariaDescribedby"  :value="brandget.brand"  v-model="selected.brandt" >{{brand.brand}}</b-form-radio></span>
     </div>
     </div>
     </div>

  </b-dropdown>
     </div>
     </div>
         <!-- ./FilterBrand-->
             <!-- FilterPrice-->
       <div class="col-6 col-md-3 col-xs-6 " v-for="st in stats" :key="st.id" v-if="$route.params.id == st.category&&st.item==2"> 
          <div class="col-12 col-md-12 col-xs-12 "  > 
            
        <b-dropdown  id="dropdown-left" text="Filter By Price" variant="info" class="mb-2 mr-0">
         <template slot="button-content">
        <i class="py-0 fa fa-filter"></i>
          <span v-if="selected.price==''">
        <em>Filter By Price</em>
        </span>
        <span v-else>
        <span v-for="range in pricern" v-if="range.id==selected.price">  
        <em>Filter By price {{range.minprice}}-{{range.maxprice}}</em>
        </span>
        </span>
    </template>
    
  <b-form inline>
  <form >
    <b-form-input
      style="width:58px ;height: 29px;"
      id="inline-form-input-name"
      class="mb-2 ml-1 mr-sm-2 mb-sm-0"
      v-model="form.price1"
      name="price1"
      :value="form.price1"
     
    ></b-form-input>To  
      <b-form-input :value="form.price2" name="price2" v-model="form.price2" style="width:58px;height: 29px;" class=" ml-2" id="inline-form-input-username" ></b-form-input> 
    <b-dropdown-item ><b-button  class=" ml-4 mt-1" v-on:click="go"  variant="success">Go</b-button></b-dropdown-item>
  </form>
  </b-form>
    <div v-for="range in pricern" :key="range.id"> 
   
  <b-form-radio   :value="range.id"  v-model="selected.price" class="ml-2" >{{range.minprice}}-{{range.maxprice}}</b-form-radio>
   
    </div>
  </b-dropdown>
          </div>
     </div>
       <!-- ./FilterPrice-->
       <!-- FilterUnit-->
       <div class="col-6 col-md-3 col-xs-6 " v-for="st in stats" :key="st.id"  v-if="$route.params.id == st.category&&st.item==3"> 
          <div class="col-12 col-md-12 col-xs-12 "  > 
            
        <b-dropdown id="dropdown-left" text="Filter By Unit" class="mb-2 mr-0"  >
         <template slot="button-content">
        <i class="py-0 fa fa-filter"></i>
        <span v-if="selected.unit==''">
        <em>Filter By Unit</em>
        </span>
        <span v-else>
        <span v-for="unit in units" :key="unit.id" v-if="unit.id==selected.unit">  
        <em>Filter By  {{unit.unit}}</em>
        </span>
        </span>
    </template>
     
    <div v-for="menu in menus" :key="menu.id" v-if="$route.params.id == menu.id " >
     <div   v-for="pproduct in pproducts" v-bind:key="pproduct.id" v-if="pproduct.categoryId == menu.id">   
    
   <span v-for="unit in units" :key="unit.id"  v-if="unit.id == pproduct.unit"><b-form-radio   :value="pproduct.unit" name="exampleRadios" v-model="selected.unit" class="ml-2">{{unit.unit}}</b-form-radio></span>
    
     </div>
     </div>
  </b-dropdown>
          </div>
     </div>
      <!-- ./FilterUnit-->
        <!-- FilterColor-->
       <div class="col-6 col-md-3 col-xs-6 " v-for="st in stats" :key="st.id" v-if="$route.params.id == st.category&&st.item==4"> 
            <div class="col-12 col-md-12 col-xs-12 " > 
            
        <b-dropdown id="dropdown-left" variant="info" text="Filter By Color"  class="mb-2 mr-0">
         <template slot="button-content">
        <i class="py-0 fa fa-filter"></i>
         <span v-if="selected.color==''">
        <em>Filter By Color</em>
        </span>
        <span v-else>
        <span v-for="color in colors" :key="color.id" v-if="color.id==selected.color">  
        <em>Filter By  {{color.color}}</em>
        </span>
        </span>
    </template>
     
    <div v-for="menu in menus" :key="menu.id" v-if="$route.params.id == menu.id " >
     <div   v-for="cproduct in cproducts" v-bind:key="cproduct.id" v-if="cproduct.categoryId == menu.id">   
    
  <span  v-for="color in colors" :key="color.id" v-if="color.id==cproduct.color"><b-form-radio  class="ml-2"   :value="cproduct.color"  v-model="selected.color" >{{color.color}}</b-form-radio></span>
     </div>
     </div>
  </b-dropdown>
          </div>
     </div>
      <!--./ FilterColor-->
      
    </div>
    </div>
    </div>
    <!-- ./Filter -->
 <!-- .FilterProductBrandwise -->
     <div v-if="categorybrand==true">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="$route.params.id == menu.id"
      >
        <div class="col-12 col-md-12 col-xs-12">
          <div class="row">
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2 mt-5"
              v-for="prod in prods"
              v-bind:key="prod.id"
              v-if="prod.categoryId == menu.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + prod.image"
                  />
                </figure>
               <div class="overlay">
                  
                 
                     <div style="text-align:center">
                  <a class="info" @click="addCart(prod)"
                    >Add To Shopping Cart</a
                  >
                  </div>
                   <div class="hovercart" v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==prod.id">
                   <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-info">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-info" @click="decrement(cart)">-</button>
                       </div>
                  </div>
                 <div class="detail">
                 <a v-b-modal="'modal' + prod.productNameId" class="btn btn-success">Details</a>
                  </div>
                </div>
                <!-- Modal -->
                <b-modal   v-bind:id="'modal' + prod.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'images/' + prod.image"
                                  :img-zoom="'images/' + prod.image"
                                  :scale="2"
                                ></zoom-on-hover>
                              </div>                             
                              <br />
                            </div>
                            <div class="col-md-6 col-xs-12 product_content ml-0">
                              <h4>{{ prod.pname }}</h4>
                               <div class="ml-0">
                              <span  v-for="purchaseProduct in purchaseproducts" >
                              <span v-if="purchaseProduct.pname==prod.productNameId" >
                                <span v-for="unit in units" :key="unit.id"   v-if="purchaseProduct.unit==unit.id" >{{unit.unit}}<span></span></span>
                                &nbsp;&nbsp;Brand:&nbsp;<span v-for="brand in brands" :key="brand.id" v-if="purchaseProduct.brand==brand.id">{{brand.brand}}</span>
                                &nbsp;&nbsp;Color:&nbsp;<span v-for="color in colors" :key="color.id" v-if="purchaseProduct.color==color.id">{{color.color}} </span>                            
                              </span>
                               </span>                             
                                </div>
                                <p>
                                <span class="cost"><span>৳</span> {{prod.salesPrice}}</span
                                >&nbsp;&nbsp;
                                <span class="tk">৳</span
                                >&nbsp;<del>12400</del>&nbsp;&nbsp;
                                <span style="color: red">2%&nbsp;Off</span>
                              </p>
                              <div class="btn-ground">                              
                                  <div class="row">
                                    <div class="col-12 col-md-6 col-xs-12">
                                      <div class="input-group mb-3"   >                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                           
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        0 in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(prod)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      <div class="input-group mb-3 incre" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==prod.id" >
                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                            @click="decrement(cart)"
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        {{cart.qun}} in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(prod)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      
                                    </div>
                                    
                                    <div class="col-xs-12" >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                         @click="addCart(prod)"
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + prod.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-xs-12 buynowclose" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==prod.id"  >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                      
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + prod.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                  </div>
                                  
                             
                              </div>
                              <h5 class="pdetails">
                                Product Detais
                              </h5>
                         
                                <div v-html="prod.details"></div>
                             

                              <h5 class="pdetails">
                                Speciality
                              </h5>
                                <div v-html="prod.speciality"></div>
                            </div>
                          </div>
                        </div>
                   
                      <div class="d-none d-sm-block">
                        <div class="col-md-12 toph">
                          <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#home"
                                  >Order Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu1"
                                  >Delivary Charge</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Delivery Area</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Product Return Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Free Family Bazar</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Referrence
                                </a>
                              </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                              <div id="home" class="container tab-pane">
                                <br />
                                <h3>HOME</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                                <br />
                                <h3>Menu 1</h3>
                                <p>
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                <h3>Menu 2</h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam.
                                </p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                  
</b-modal>
                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                >
                  <p style="text-align: left">{{ getProductName(prod) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            prod.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
               <div class="col-12 col-md-12 col-xs-12 paddingImage3" >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(prod)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"  v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==prod.id" >
                  
                  <center>
                    <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-danger"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-danger">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-danger" @click="decrement(cart)">-</button>
                       </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./FilterProductBrandwise  -->
    <!-- .FilterProductPrice -->
     <div v-if="pricecategory==true">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="$route.params.id == menu.id"
      >
        <div class="col-12 col-md-12 col-xs-12">
          <div class="row">
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2 mt-5"
              v-for="filterprice in filterprices"
              v-bind:key="filterprice.id"
              v-if="filterprice.categoryId == menu.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + filterprice.image"
                  />
                </figure>
               <div class="overlay">
                  
                 
                     <div style="text-align:center">
                  <a class="info" @click="addCart(filterprice)"
                    >Add To Shopping Cart</a
                  >
                  </div>
                   <div class="hovercart" v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==filterprice.id">
                   <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-info">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-info" @click="decrement(cart)">-</button>
                       </div>
                  </div>
               <div class="detail">
                 <a v-b-modal="'modal' + filterprice.productNameId" class="btn btn-success">Details</a>
                  </div>
                </div>
                  <!-- Modal -->
                <b-modal   v-bind:id="'modal' + filterprice.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'images/' + filterprice.image"
                                  :img-zoom="'images/' + filterprice.image"
                                  :scale="2"
                                ></zoom-on-hover>
                              </div>                             
                              <br />
                            </div>
                            <div class="col-md-6 col-xs-12 product_content ml-0">
                              <h4>{{ filterprice.pname }}</h4>
                               <div class="ml-0">
                              <span  v-for="purchaseProduct in purchaseproducts" >
                              <span v-if="purchaseProduct.pname==filterprice.productNameId" >
                                <span v-for="unit in units" :key="unit.id"   v-if="purchaseProduct.unit==unit.id" >{{unit.unit}}<span></span></span>
                                &nbsp;&nbsp;Brand:&nbsp;<span v-for="brand in brands" :key="brand.id" v-if="purchaseProduct.brand==brand.id">{{brand.brand}}</span>
                                &nbsp;&nbsp;Color:&nbsp;<span v-for="color in colors" :key="color.id" v-if="purchaseProduct.color==color.id">{{color.color}} </span>                            
                              </span>
                               </span>                             
                                </div>
                                <p>
                                <span class="cost"><span>৳</span> {{filterprice.salesPrice}}</span
                                >&nbsp;&nbsp;
                                <span class="tk">৳</span
                                >&nbsp;<del>12400</del>&nbsp;&nbsp;
                                <span style="color: red">2%&nbsp;Off</span>
                              </p>
                              <div class="btn-ground">                              
                                  <div class="row">
                                    <div class="col-12 col-md-6 col-xs-12">
                                      <div class="input-group mb-3"   >                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                           
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        0 in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(filterprice)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      <div class="input-group mb-3 incre" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==filterprice.id" >
                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                            @click="decrement(cart)"
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        {{cart.qun}} in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(filterprice)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      
                                    </div>
                                    
                                    <div class="col-xs-12" >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                         @click="addCart(filterprice)"
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + filterprice.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-xs-12 buynowclose" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==filterprice.id"  >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                      
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + filterprice.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                  </div>
                                  
                             
                              </div>
                              <h5 class="pdetails">
                                Product Detais
                              </h5>
                         
                                <div v-html="filterprice.details"></div>
                             

                              <h5 class="pdetails">
                                Speciality
                              </h5>
                                <div v-html="filterprice.speciality"></div>
                            </div>
                          </div>
                        </div>
                   
                      <div class="d-none d-sm-block">
                        <div class="col-md-12 toph">
                          <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#home"
                                  >Order Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu1"
                                  >Delivary Charge</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Delivery Area</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Product Return Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Free Family Bazar</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Referrence
                                </a>
                              </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                              <div id="home" class="container tab-pane">
                                <br />
                                <h3>HOME</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                                <br />
                                <h3>Menu 1</h3>
                                <p>
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                <h3>Menu 2</h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam.
                                </p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                  
</b-modal>
                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                >
                  <p style="text-align: left">{{ getProductName(filterprice) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            filterprice.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
               <div class="col-12 col-md-12 col-xs-12 paddingImage3" >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(filterprice)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"  v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==filterprice.id" >
                  
                  <center>
                    <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-danger"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-danger">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-danger" @click="decrement(cart)">-</button>
                       </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./FilterProductPrice  -->
    <!-- .FilterUnitProduct -->
     <div v-if="unitproduct==true">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="$route.params.id == menu.id"
      >
        <div class="col-12 col-md-12 col-xs-12">
          <div class="row">
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2 mt-5"
              v-for="productUnit in productUnits"
              v-bind:key="productUnit.id"
              v-if="productUnit.categoryId == menu.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + productUnit.image"
                  />
                </figure>
               <div class="overlay">
                  
                 
                     <div style="text-align:center">
                  <a class="info" @click="addCart(productUnit)"
                    >Add To Shopping Cart</a
                  >
                  </div>
                   <div class="hovercart" v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==productUnit.id">
                   <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-info">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-info" @click="decrement(cart)">-</button>
                       </div>
                  </div>
               <div class="detail">
                 <a v-b-modal="'modal' + productUnit.productNameId" class="btn btn-success">Details</a>
                  </div>
                </div>
                 <!-- Modal -->
                <b-modal   v-bind:id="'modal' + productUnit.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'images/' + productUnit.image"
                                  :img-zoom="'images/' + productUnit.image"
                                  :scale="2"
                                ></zoom-on-hover>
                              </div>                             
                              <br />
                            </div>
                            <div class="col-md-6 col-xs-12 product_content ml-0">
                              <h4>{{ productUnit.pname }}</h4>
                               <div class="ml-0">
                              <span  v-for="purchaseProduct in purchaseproducts" >
                              <span v-if="purchaseProduct.pname==productUnit.productNameId" >
                                <span v-for="unit in units" :key="unit.id"   v-if="purchaseProduct.unit==unit.id" >{{unit.unit}}<span></span></span>
                                &nbsp;&nbsp;Brand:&nbsp;<span v-for="brand in brands" :key="brand.id" v-if="purchaseProduct.brand==brand.id">{{brand.brand}}</span>
                                &nbsp;&nbsp;Color:&nbsp;<span v-for="color in colors" :key="color.id" v-if="purchaseProduct.color==color.id">{{color.color}} </span>                            
                              </span>
                               </span>                             
                                </div>
                                <p>
                                <span class="cost"><span>৳</span> {{productUnit.salesPrice}}</span
                                >&nbsp;&nbsp;
                                <span class="tk">৳</span
                                >&nbsp;<del>12400</del>&nbsp;&nbsp;
                                <span style="color: red">2%&nbsp;Off</span>
                              </p>
                              <div class="btn-ground">                              
                                  <div class="row">
                                    <div class="col-12 col-md-6 col-xs-12">
                                      <div class="input-group mb-3"   >                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                           
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        0 in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(productUnit)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      <div class="input-group mb-3 incre" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==productUnit.id" >
                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                            @click="decrement(cart)"
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        {{cart.qun}} in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(productUnit)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      
                                    </div>
                                    
                                    <div class="col-xs-12" >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                         @click="addCart(productUnit)"
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + productUnit.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-xs-12 buynowclose" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==productUnit.id"  >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                      
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + productUnit.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                  </div>
                                  
                             
                              </div>
                              <h5 class="pdetails">
                                Product Detais
                              </h5>
                         
                                <div v-html="productUnit.details"></div>
                             

                              <h5 class="pdetails">
                                Speciality
                              </h5>
                                <div v-html="productUnit.speciality"></div>
                            </div>
                          </div>
                        </div>
                   
                      <div class="d-none d-sm-block">
                        <div class="col-md-12 toph">
                          <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#home"
                                  >Order Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu1"
                                  >Delivary Charge</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Delivery Area</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Product Return Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Free Family Bazar</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Referrence
                                </a>
                              </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                              <div id="home" class="container tab-pane">
                                <br />
                                <h3>HOME</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                                <br />
                                <h3>Menu 1</h3>
                                <p>
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                <h3>Menu 2</h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam.
                                </p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                  
</b-modal>
                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                >
                  <p style="text-align: left">{{ getProductName(productUnit) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            productUnit.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
               <div class="col-12 col-md-12 col-xs-12 paddingImage3" >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(productUnit)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"  v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==productUnit.id" >
                  
                  <center>
                    <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-danger"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-danger">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-danger" @click="decrement(cart)">-</button>
                       </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./FilterUnitProduct  -->
    <!-- .FilterByColorProduct -->
     <div v-if="colorproduct==true">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="$route.params.id == menu.id"
      >
        <div class="col-12 col-md-12 col-xs-12">
          <div class="row">
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2 mt-5"
              v-for="productColor in productColors"
              v-bind:key="productColor.id"
              v-if="productColor.categoryId == menu.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + productColor.image"
                  />
                </figure>
               <div class="overlay">
                  
                 
                     <div style="text-align:center">
                  <a class="info" @click="addCart(productColor)"
                    >Add To Shopping Cart</a
                  >
                  </div>
                   <div class="hovercart" v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==productColor.id">
                   <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-info">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-info" @click="decrement(cart)">-</button>
                       </div>
                  </div>
              <div class="detail">
                 <a v-b-modal="'modal' + productColor.productNameId" class="btn btn-success">Details</a>
                  </div>
                </div>
                  <!-- Modal -->
                <b-modal   v-bind:id="'modal' + productColor.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'images/' + productColor.image"
                                  :img-zoom="'images/' + productColor.image"
                                  :scale="2"
                                ></zoom-on-hover>
                              </div>                             
                              <br />
                            </div>
                            <div class="col-md-6 col-xs-12 product_content ml-0">
                              <h4>{{ productColor.pname }}</h4>
                               <div class="ml-0">
                              <span  v-for="purchaseProduct in purchaseproducts" >
                              <span v-if="purchaseProduct.pname==productColor.productNameId" >
                                <span v-for="unit in units" :key="unit.id"   v-if="purchaseProduct.unit==unit.id" >{{unit.unit}}<span></span></span>
                                &nbsp;&nbsp;Brand:&nbsp;<span v-for="brand in brands" :key="brand.id" v-if="purchaseProduct.brand==brand.id">{{brand.brand}}</span>
                                &nbsp;&nbsp;Color:&nbsp;<span v-for="color in colors" :key="color.id" v-if="purchaseProduct.color==color.id">{{color.color}} </span>                            
                              </span>
                               </span>                             
                                </div>
                                <p>
                                <span class="cost"><span>৳</span> {{productColor.salesPrice}}</span
                                >&nbsp;&nbsp;
                                <span class="tk">৳</span
                                >&nbsp;<del>12400</del>&nbsp;&nbsp;
                                <span style="color: red">2%&nbsp;Off</span>
                              </p>
                              <div class="btn-ground">                              
                                  <div class="row">
                                    <div class="col-12 col-md-6 col-xs-12">
                                      <div class="input-group mb-3"   >                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                           
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        0 in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(productColor)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      <div class="input-group mb-3 incre" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==productColor.id" >
                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                            @click="decrement(cart)"
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        {{cart.qun}} in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(productColor)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      
                                    </div>
                                    
                                    <div class="col-xs-12" >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                         @click="addCart(productColor)"
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + productColor.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-xs-12 buynowclose" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==productColor.id"  >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                      
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + productColor.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                  </div>
                                  
                             
                              </div>
                              <h5 class="pdetails">
                                Product Detais
                              </h5>
                         
                                <div v-html="productColor.details"></div>
                             

                              <h5 class="pdetails">
                                Speciality
                              </h5>
                                <div v-html="productColor.speciality"></div>
                            </div>
                          </div>
                        </div>
                   
                      <div class="d-none d-sm-block">
                        <div class="col-md-12 toph">
                          <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#home"
                                  >Order Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu1"
                                  >Delivary Charge</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Delivery Area</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Product Return Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Free Family Bazar</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Referrence
                                </a>
                              </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                              <div id="home" class="container tab-pane">
                                <br />
                                <h3>HOME</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                                <br />
                                <h3>Menu 1</h3>
                                <p>
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                <h3>Menu 2</h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam.
                                </p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                  
</b-modal>
                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                >
                  <p style="text-align: left">{{ getProductName(productColor) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            productColor.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
               <div class="col-12 col-md-12 col-xs-12 paddingImage3" >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(productColor)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"  v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==productColor.id" >
                  
                  <center>
                    <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-danger"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-danger">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-danger" @click="decrement(cart)">-</button>
                       </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./FFilterByColorProduct  -->
    <!-- .FilterByPriceRangeProduct -->
     <div v-if="pricefilter==true">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="$route.params.id == menu.id"
      >
        <div class="col-12 col-md-12 col-xs-12">
          <div class="row">
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2 mt-5"
              v-for="rangeProduct in rangeProducts"
              v-bind:key="rangeProduct.id"
              v-if="rangeProduct.categoryId == menu.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + rangeProduct.image"
                  />
                </figure>
               <div class="overlay">
                  
                 
                     <div style="text-align:center">
                  <a class="info" @click="addCart(rangeProduct)"
                    >Add To Shopping Cart</a
                  >
                  </div>
                   <div class="hovercart" v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==rangeProduct.id">
                   <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-info">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-info" @click="decrement(cart)">-</button>
                       </div>
                  </div>
              <div class="detail">
                 <a v-b-modal="'modal' + rangeProduct.productNameId" class="btn btn-success">Details</a>
                  </div>
                </div>
                  <!-- Modal -->
                <b-modal   v-bind:id="'modal' + rangeProduct.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'images/' + rangeProduct.image"
                                  :img-zoom="'images/' + rangeProduct.image"
                                  :scale="2"
                                ></zoom-on-hover>
                              </div>                             
                              <br />
                            </div>
                            <div class="col-md-6 col-xs-12 product_content ml-0">
                              <h4>{{ rangeProduct.pname }}</h4>
                               <div class="ml-0">
                              <span  v-for="purchaseProduct in purchaseproducts" >
                              <span v-if="purchaseProduct.pname==rangeProduct.productNameId" >
                                <span v-for="unit in units" :key="unit.id"   v-if="purchaseProduct.unit==unit.id" >{{unit.unit}}<span></span></span>
                                &nbsp;&nbsp;Brand:&nbsp;<span v-for="brand in brands" :key="brand.id" v-if="purchaseProduct.brand==brand.id">{{brand.brand}}</span>
                                &nbsp;&nbsp;Color:&nbsp;<span v-for="color in colors" :key="color.id" v-if="purchaseProduct.color==color.id">{{color.color}} </span>                            
                              </span>
                               </span>                             
                                </div>
                                <p>
                                <span class="cost"><span>৳</span> {{rangeProduct.salesPrice}}</span
                                >&nbsp;&nbsp;
                                <span class="tk">৳</span
                                >&nbsp;<del>12400</del>&nbsp;&nbsp;
                                <span style="color: red">2%&nbsp;Off</span>
                              </p>
                              <div class="btn-ground">                              
                                  <div class="row">
                                    <div class="col-12 col-md-6 col-xs-12">
                                      <div class="input-group mb-3"   >                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                           
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        0 in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(rangeProduct)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      <div class="input-group mb-3 incre" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==rangeProduct.id" >
                                    

                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm minusbtn"
                                            id="minus-btn"
                                            @click="decrement(cart)"
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <button
                                          type="number"
                                          id="qty_input"                                         
                                          class="form-control form-control-sm buttonInput"
                                          value="1"
                                          min="1"
                                        >
                                        {{cart.qun}} in Cart
                                        </button>
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm plusbtn"
                                            id="plus-btn"
                                           @click="addCart(rangeProduct)"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                  
                                      </div>
                                      
                                    </div>
                                    
                                    <div class="col-xs-12" >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                         @click="addCart(rangeProduct)"
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + rangeProduct.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-xs-12 buynowclose" v-for="cart in carts" v-bind:key="cart.id" v-if="cart.id==rangeProduct.id"  >
                                      <button
                                        type="button"                                       
                                        class="btn btn-primary buynow "
                                      
                                         onclick="openNav()"
                                         v-on:click="$bvModal.hide('modal' + rangeProduct.productNameId)"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                  </div>
                                  
                             
                              </div>
                              <h5 class="pdetails">
                                Product Detais
                              </h5>
                         
                                <div v-html="rangeProduct.details"></div>
                             

                              <h5 class="pdetails">
                                Speciality
                              </h5>
                                <div v-html="rangeProduct.speciality"></div>
                            </div>
                          </div>
                        </div>
                   
                      <div class="d-none d-sm-block">
                        <div class="col-md-12 toph">
                          <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#home"
                                  >Order Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu1"
                                  >Delivary Charge</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Delivery Area</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Product Return Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Free Family Bazar</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Referrence
                                </a>
                              </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                              <div id="home" class="container tab-pane">
                                <br />
                                <h3>HOME</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                                <br />
                                <h3>Menu 1</h3>
                                <p>
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                <h3>Menu 2</h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam.
                                </p>
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                  
</b-modal>
                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                >
                  <p style="text-align: left">{{ getProductName(rangeProduct) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            rangeProduct.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
               <div class="col-12 col-md-12 col-xs-12 paddingImage3" >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(rangeProduct)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"  v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==rangeProduct.id" >
                  
                  <center>
                    <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-danger"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-danger">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-danger" @click="decrement(cart)">-</button>
                       </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./FFilterByPriceRangeProduct  -->
    <!-- .FilterCategory -->
     <div v-if="produc==true">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="$route.params.id == menu.id"
      >
        <div class="col-12 col-md-12 col-xs-12">
          <div class="row">
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2 mt-5"
              v-for="prod in prods"
              v-bind:key="prod.id"
              v-if="prod.categoryId == menu.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'images/' + prod.image"
                  />
                </figure>
               <div class="overlay">
                  
                 
                     <div style="text-align:center">
                  <a class="info" @click="addCart(prod)"
                    >Add To Shopping Cart</a
                  >
                  </div>
                   <div class="hovercart" v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==prod.id">
                   <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-info"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-info">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-info" @click="decrement(cart)">-</button>
                       </div>
                  </div>
               <div class="detail">
                  <a
                    type="button"
                    class="mr-2 btn-hover-shine btn btn-shadow btn-success"
                    data-toggle="modal"
                    @click="detailsInfo(prod.productNameId)"
                    :data-target="'#product' + prod.productNameId"
                  >
                    Details
                  </a>
                  </div>
                </div>
                <!-- Modal -->
                <div
                  class="modal fade"
                  :id="'product' + prod.productNameId"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLongTitle"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header bg-primary text-light">
                        <h5
                          class="modal-title"
                          id="exampleModalLongTitle"
                          style="margin-left: 452px"
                        >
                          <i class="fa fa-phone" aria-hidden="true"></i
                          >&nbsp;1384758939
                        </h5>
                        <button
                          type="button"
                          class="close closehead"
                          data-dismiss="modal"
                          aria-label="Close"
                          style="margin-right: 10px; margin-top: -19px"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="big">
                                <zoom-on-hover
                                  :img-normal="'images/' + prod.image"
                                  :img-zoom="'images/' + prod.image"
                                  :scale="2.2"
                                ></zoom-on-hover>
                              </div>
                              <div class="small">
                                <div class="row">
                                  <img
                                    width="100"
                                    :src="'images/' + prod.image"
                                    alt="Thumbnail"
                                    class="img-thumbnail"
                                  />

                                  <img
                                    width="100"
                                    :src="'images/' + prod.image"
                                    alt="Thumbnail"
                                    class="img-thumbnail"
                                  />
                                  <img
                                    width="100"
                                    :src="'images/' + prod.image"
                                    alt="Thumbnail"
                                    class="img-thumbnail"
                                  />

                                  <img
                                    width="100"
                                    src="https://cdn.chaldal.net/_mpimage/purina-proplan-junior-nutri-savour-cat-food-85-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D53818&q=low&v=1&w=600&webp=1"
                                    alt="Thumbnail"
                                    class="img-thumbnail small"
                                  />
                                </div>
                              </div>

                              <!-- <center> <img src="http://img.bbystatic.com/BestBuy_US/images/products/5613/5613060_sd.jpg" width="150" height="auto" class="img-responsive"></center> -->
                              <br />
                            </div>
                            <div class="col-md-6 product_content">
                              <h4>{{ prod.pname }}</h4>
                              <p class="cost">
                                Unit:&nbsp;500<span>gm</span>&nbsp;&nbsp;&nbsp;Export&nbsp;&nbsp;&nbsp;Brand:&nbsp;Pran&nbsp;&nbsp;&nbsp;Size:&nbsp;12&nbsp;&nbsp;&nbsp;Color:&nbsp;Red
                              </p>
                              <p>
                                <span class="cost"><span>৳</span> 75.00</span
                                >&nbsp;&nbsp;
                                <span class="tk">৳</span
                                >&nbsp;<del>12400</del>&nbsp;&nbsp;
                                <span style="color: red">2%&nbsp;Off</span>
                              </p>
                              <div class="btn-ground">
                                <div class="container">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm"
                                            id="minus-btn"
                                            style="height: 48px; width: 44px"
                                          >
                                            <i class="fa fa-minus"></i>
                                          </button>
                                        </div>
                                        <input
                                          type="number"
                                          id="qty_input"
                                          style="
                                            height: 48px;
                                            width: 44px;
                                            text-align: center;
                                            font-weight: bold;
                                            font-size: 22px;
                                          "
                                          class="form-control form-control-sm"
                                          value="1"
                                          min="1"
                                        />
                                        <div class="input-group-prepend">
                                          <button
                                            class="btn btn-dark btn-sm"
                                            id="plus-btn"
                                            style="height: 48px; width: 44px"
                                          >
                                            <i class="fa fa-plus"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-sm-6">
                                      <button
                                        type="button"
                                        style="
                                          height: 48px;
                                          width: 126px;
                                          text-align: center;
                                        "
                                        class="btn btn-primary"
                                      >
                                        <span
                                          class="glyphicon glyphicon-shopping-cart"
                                        ></span>
                                        Buy Now
                                      </button>
                                    </div>
                                    <div class="col-sm-4"></div>
                                  </div>
                                  <h4>Ut enim ad minim veniam, quis</h4>
                                </div>
                              </div>
                              <h5 style="color: #24a6db; text-align: center">
                                Product Detais
                              </h5>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </p>

                              <h5 style="color: #24a6db; text-align: center">
                                Speciality
                              </h5>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="">
                        <div class="col-md-12 toph">
                          <div class="container">
                            <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#home"
                                  >Order Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu1"
                                  >Delivary Charge</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Delivery Area</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Product Return Policy</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Free Family Bazar</a
                                >
                              </li>
                              <li class="nav-item" style="background: #c2d5e1">
                                <a
                                  class="nav-link"
                                  data-toggle="tab"
                                  href="#menu2"
                                  >Referrence
                                </a>
                              </li>
                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                              <div id="home" class="container tab-pane">
                                <br />
                                <h3>HOME</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                              <div id="menu1" class="container tab-pane fade">
                                <br />
                                <h3>Menu 1</h3>
                                <p>
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                              <div id="menu2" class="container tab-pane fade">
                                <br />
                                <h3>Menu 2</h3>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam.
                                </p>
                              </div>
                            </div>
                            <div class="container-fluid" v>
                              <div class="section-divider">
                                <span>
                                  <h4>Speial Offer</h4>
                                </span>
                              </div>

                              <div class="col-12 col-md-12 col-xs-12">
                                <div class="row">
                                  <div v-for="menu in menus" :key="menu.id">
                                    <div
                                      class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2"
                                      style="max-width: 19.667%"
                                      v-for="product in prices"
                                      v-bind:key="product.id"
                                      v-if="product.categoryId == menu.id"
                                    >
                                      <div
                                        class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
                                      >
                                        <figure>
                                          <img
                                            class="img-fluid box3Images"
                                            :src="'images/' + product.image"
                                          />
                                        </figure>

                                        <div class="overlay">
                                          <a
                                            class="info"
                                            @click="addCart(prod)"
                                            >Add To Shopping Cart</a
                                          >
                                        </div>

                                        <div
                                          class="col-12 col-md-12 col-xs-12 paddingImage"
                                        >
                                          <center>
                                            <a>{{ prod.pname }}</a>
                                          </center>
                                        </div>

                                        <div
                                          class="col-12 col-md-12 col-xs-12 paddingImage"
                                        >
                                          <div class="row">
                                            <div
                                              class="col-6 col-md-5 col-xs-4 amountBox paddingImage"
                                            >
                                              <center>
                                                <p class="amount">
                                                  <span class="tk">৳</span
                                                  >&nbsp;{{
                                                    prod.salesPrice
                                                  }}
                                                </p>
                                              </center>
                                            </div>
                                            <div
                                              class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                                            >
                                              <center>
                                                <p class="amountDiscount">
                                                  <span class="tk">৳</span
                                                  >&nbsp;<del>12400</del>
                                                </p>
                                              </center>
                                            </div>
                                          </div>
                                        </div>

                                        <div
                                          class="col-12 col-md-12 col-xs-12 paddingImage"
                                        >
                                          <center>
                                            <i class="fa fa-star ratting"></i>
                                            <i class="fa fa-star ratting"></i>
                                            <i class="fa fa-star ratting"></i>
                                            <i class="fa fa-star ratting"></i>
                                            <i class="fa fa-star ratting"></i>
                                          </center>
                                        </div>

                                        <div
                                          class="col-12 col-md-12 col-xs-12 paddingImage3"
                                        >
                                          <center>
                                            <p class="cartBox" style="color: ">
                                              <i
                                                class="fa fa-shopping-cart"
                                                aria-hidden="true"
                                              ></i
                                              >&nbsp;<a
                                                @click="addCart(prod)"
                                                >Add TO Cart</a
                                              >
                                            </p>
                                          </center>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--./ Modal -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                >
                  <p style="text-align: left">{{ getProductName(prod) }}</p>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row">
                    <div class="col-6 col-md-5 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount">
                          <span class="tk">৳</span>&nbsp;{{
                            prod.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-7 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount">
                          <span class="tk">৳</span>&nbsp;<del>12400</del>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div>
               <div class="col-12 col-md-12 col-xs-12 paddingImage3" >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(prod)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
                <div class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"  v-for="cart in carts" v-bind:key="cart.id"  v-if="cart.id==prod.id" >
                  
                  <center>
                    <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-danger"  @click="increment(cart)">+</button>
                 <button type="button" class="btn btn-danger">{{cart.qun}} in Cart</button>
                  <button type="button" class="btn btn-danger" @click="decrement(cart)">-</button>
                       </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./FilterCategory -->
    <!-- ./content category -->
 
    <!-- cartbox -->

    <div class="container-fluid d-none d-sm-block" onclick="openNav()">
      <div
        :class="{ 'bounce animated': animated }"
        @animationend="animated = false"
        class="col-2 col-md-2 cart1 shadow-lg carthover rounded"
      >
        <i class="fa fa-shopping-bag shoppingBag" aria-hidden="true"></i>
        <p class="cartItem">Item:{{ badge }}</p>
      </div>
      <div class="col-2 col-md-2 cart2 shadow-lg rounded">
        <p class="cartItem2">
          <span class="tk">৳</span>&nbsp;<animated-number :value="totalprice" />
        </p>
      </div>
    </div>

    <!-- ./cartbox -->
    <!-- ./sidebarcartbox -->
    <div
      id="mySidebar"
      class="sidebar1 shadow-lg bg-white rounded overflow-auto"
    >
      <div class="col-12 col-xs-1" style="background-color: green">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          ><i class="fa fa-chevron-right close" aria-hidden="true"></i>
        </a>
      </div>
      <div class="col-12 col-md-12 mt-0" style="background-color: #dcd8d8">
        <p>
          <img :src="'frontend/image/cart1.png'" class="cartImg" /> Item
          {{ badge }}&nbsp;<b class="tk">৳&nbsp;</b
          >{{ totalprice }}&nbsp;Discount:<span class="tk">৳&nbsp;</span>4000
        </p>
      </div>
      <div class="col-12 col-md-12 cartml overflow-auto">
        <table class="table table-hover">
          <tbody>
            <tr v-for="(cart, index) in carts" v-bind:key="cart.id">
              <td scope="row">
                <div class="btn-group-vertical" style="left: 19px">
                  <button
                    type="button"
                    class="btn btn-secondary in1"
                    @click="increment(cart)"
                  >
                    <p class="ini">+</p>
                  </button>
                  <p class="pqun">{{ cart.qun }}</p>
                  <button
                    type="button"
                    class="btn btn-secondary dec"
                    @click="decrement(cart)"
                  >
                    <p class="dei">-</p>
                  </button>
                </div>
              </td>
              <td>
                <figure>
                  <img
                    :src="'images/' + cart.image"
                    class="cartImg mt-7"
                    style="margin-left: -9px; margin-top: -2px"
                  />
                </figure>
              </td>
              <td class="p-0">
                <p class="cartpname">{{ cart.pname }}</p>
              </td>
              <td class="p-0">
                <p class="cartprice">
                  <span class="tk">৳</span>{{ cart.price }}
                </p>
              </td>
              <td class="p-0">
                <a
                  @click="removeCart(index)"
                  style="margin-left: -29px; font-size: 15px"
                  ><i class="fa fa-times" aria-hidden="true"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <td>
              <button type="button" class="btn btn-success">Plase Order</button>
            </td>
            <td>
              <button type="button" class="btn btn-danger">
                <i class="fa fa-gift" aria-hidden="true"></i
                >&nbsp;Offer&nbsp;(37)
              </button>
            </td>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ./sidebarcartbox -->
     <!-- .Footer -->
      
      <footer class="footer d-md-none shadowfooter  bg-white rounded">
      <div class="container-fluid">
        <div class="row p-2 mb-0">
          <div class="col-3  col-xs-3">
            <i class="fa fa-home ml-2" aria-hidden="true"></i>
            <p>Home</p>
          </div>

          <div class="col-3  col-xs-3">
            <i class="fa fa-gift ml-2" aria-hidden="true"></i>
            <p>Offer</p>
          </div>

          <div class="col-3  col-xs-3" onclick="openNav()">
            <i class="fa fa-shopping-cart ml-2" aria-hidden="true"></i>
            <span :class="{ 'bounce animated': animated }" @animationend="animated = false" class='badge badge-warning' id='lblCartCount'> {{badge}} </span>
            <p>Cart</p>
          </div>

          <div class="col-3  col-xs-3">
            <i class="fa fa-user ml-2" aria-hidden="true"></i>
            <p>Login</p>
          </div>


        </div>
      </div>
    </footer>
   
    <!-- ./Footer -->
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      form: new Form({
        price1: "",
        price2: "",
      }),
      searchItem: "",
      searchBrand: "",
      products: [],
      carts: [],
      cartadd: {
        id: "",
        name: "",
        image: "",
        price: "",
        salesPrice: "",
        stock: "",
        pname: "",
      },
       selected: {
                    brandt: '',
                    price: '',
                    color: '',
                    unit:''
                },
      prices: [],
      menucats: [],
      menus: [],
      pcats: [],
      catinfos: [],
      logos: [],
      brandresult: [],
      searchProduct: [],
      prods: [],
      sliders: [],
      badge: "0",
      qun: "1",
      totalprice: "0",
      animated: false,
      category: true,
      slider: true,
      brand: true,
      produc: true,
         pricecategory: false,
      categorybrand: false,
      unitproduct: false,
      colorproduct: false,
      pricefilter:false,
      brands: [],
      searchProduct: [],
      brandgets: [],
      stats: [],
      filterprices: [],
      productColors: [],
      pproducts: [],
      cproducts: [],
      units: [],
      colors: [],
      pricern: [],
        result: [],
      productUnits: [],
      rangeProducts: [],
         purchaseproducts: [],     
      prods: [],
      resultDiv: {
        display: "none",
      },
      resultbrandDiv: {
        display: "none",
      },
    };
  },
 async mounted() {
    this.viewCat();
    this.viewMenuCat();
    this.viewPrice();
    this.viewCart();
    this.viewSearchProduct();
      this.viewMenu();
    this.viewProductCat();
    this.viewBrand();
    this.viewLogo();
      this.viewFilteringStatus();
     this. brandGet();
     this.viewPriceRange();
      this.viewPurchase();
    this.viewUnit();
    this.viewPurchaseColor();
     this.viewColor();
      this.viewPurchaseProduct();
  },
  methods: {
 go() {
      this.form
        .post("priceFilter", {
          method: "post",
          body: JSON.stringify(this.pricefilter),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          this.filterprices = res.data.filPrice;
          this.form.reset();
          this.pricecategory = true;
          this.produc = false;
          this.categorybrand = false;
          this.unitproduct = false;
          this.pricefilter = false;
        })
        .catch((err) => console.log(err));
    },
     loadBrands: function () {
               axios
        .get(`productshows/${this.selected.brandt}`)

        .then((res) => {
          this.prods = res.data.pshow;
          this.produc = false;
          this.categorybrand = true;
          
        })
        .catch((err) => console.log(err));
            },
          loadColors: function () {
               axios
        .get(`productShowByColor/${this.selected.brandt}/${this.selected.unit}/${this.selected.price}/${this.selected.color}`)

        .then((res) => {
          this.prods = res.data.pshowc;
          this.produc = false;
           this.categorybrand = true;
          this.colorproduct = false;
          this.unitproduct = false;
           this.pricefilter = false;
         
        })
        .catch((err) => console.log(err));
            },
          loadUnits: function () {
               axios
        .get(`productShowByUnit/${this.selected.brandt}/${this.selected.price}/${this.selected.color}/${this.selected.unit}`)

        .then((res) => {
         this.productUnits = res.data.pshowu;
          this.produc = false;
          this.categorybrand = false;
          this.unitproduct = true;
           this.pricefilter = false;
         
        })
        .catch((err) => console.log(err));
            },
          loadPrices: function () {
               axios
        .get(`productShowByPrice/${this.selected.brandt}/${this.selected.unit}/${this.selected.color}/${this.selected.price}`)

        .then((res) => {
          this.rangeProducts = res.data.rangeGet;
          this.produc = false;
          this.categorybrand = false; 
            this.unitproduct = false;        
          this.pricefilter = true;
        })
        .catch((err) => console.log(err));
            },
          loadPriceRange: function () {
               axios
        .get(`productShowByPriceRang/${this.selected.brandt}/${this.selected.unit}/${this.selected.color}/${this.form.price1}/${this.form.price2}`)

        .then((res) => {
           this.filterprices = res.data.filPrice;
          this.produc = false;
          this.categorybrand = false; 
            this.unitproduct = false;        
          this.pricefilter = false;
           this.pricecategory = true;
        })
        .catch((err) => console.log(err));
            },
    detailsInfo(id) {
      axios
        .get(`productView/${id}`)
        .then((res) => {
          this.informations = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewPurchaseProduct(){
      axios.get("purchaseProductGet")
     
        .then((res) => {
          this.purchaseproducts = res.data.productgt;
        })
        .catch((err) => console.log(err));
    },
    viewLogo() {
      fetch("api/sliderhome/create")
        .then((res) => res.json())
        .then((res) => {
          this.logos = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewCart() {
      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
        this.badge = this.carts.length;
        this.totalprice = this.carts.reduce((total, item) => {
          return total + this.qun * item.price;
        }, 0);
      }
    },
    openModel() {
      this.myModl = true;
    },
    addCart(pro) {
      var findProduct = this.carts.find((o) => o.id === pro.id);
      if (findProduct) {
        findProduct.qun++;
        findProduct.price = findProduct.qun * findProduct.salesPrice;
        this.storeCart();
        this.animated = true;
      } else {
        this.cartadd.id = pro.id;
        this.cartadd.name = pro.name;
        this.cartadd.price = pro.salesPrice;
        this.cartadd.salesPrice = pro.salesPrice;
        this.cartadd.qun = 1;
        this.cartadd.image = pro.image;
        this.cartadd.pname = pro.pname;
        this.carts.push(this.cartadd);
        this.cartadd = {};
        this.storeCart();
        this.animated = true;
      }
    },
    increment(pro) {
      var findProduct = this.carts.find((o) => o.id === pro.id);

      findProduct.qun++;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      this.storeCart();
      this.animated = true;
    },
    decrement(pro) {
      var findProduct = this.carts.find((o) => o.id === pro.id);
      if (findProduct.qun === 1) {
        alert("Negative quantity not allowed");
      } else {
        findProduct.qun--;
        findProduct.price = findProduct.qun * findProduct.salesPrice;
        this.storeCart();
        this.animated = true;
      }
    },
    viewMenu() {
      axios
        .get("productView/create")
        .then((res) => {
          this.menus = res.data.menulist;
        })
        .catch((err) => console.log(err));
    },
       viewPrice() {
      axios
        .get("productView")
        .then((res) => {
          this.prices = res.data.priceget;
        })
        .catch((err) => console.log(err));
    },
    viewCat() {
      axios
        .get("subCatProduct")
        .then((res) => {
          this.catinfos = res.data.menucatlistgetinfo;
        })
        .catch((err) => console.log(err));
    },
    isActive(item) {
      return this.toggled.indexOf(item) >= 0;
    },
    toggleItem(item) {
      const index = this.toggled.indexOf(item);

      if (index >= 0) {
        this.toggled.splice(index, 1);
        return;
      }

      this.toggled.push(item);
    },
    removeCart(index) {
      this.carts.splice(index, 1);
      this.storeCart();
    },
    storeCart(pro) {
      let parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },
    isActive(item) {
      return this.toggled.indexOf(item) >= 0;
    },
    toggleItem(item) {
      const index = this.toggled.indexOf(item);

      if (index >= 0) {
        this.toggled.splice(index, 1);
        return;
      }

      this.toggled.push(item);
    },
       viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
    brandGet() {
      axios
        .get("brandget")
        .then((res) => {
          this.brandgets = res.data.brandgt;
        })
        .catch((err) => console.log(err));
    },
    viewPurchase(){
      axios.get("unitget")
     
        .then((res) => {
          this.pproducts = res.data.unitgt;
        })
        .catch((err) => console.log(err));
    },
    viewPriceRange(){
     axios.get("pricerange")
        .then((res) => {
          this.pricern = res.data.range;
        })
        .catch((err) => console.log(err));
    },
    viewPurchaseColor(){
      axios.get("colorget")
     
        .then((res) => {
          this.cproducts = res.data.colorgt;
        })
        .catch((err) => console.log(err));
    },
      viewUnit() {
      fetch("api/units")
        .then((res) => res.json())
        .then((res) => {
          this.units = res.data;
        })
        .catch((err) => console.log(err));
    },

 viewColor() {
      fetch("api/colors")
        .then((res) => res.json())
        .then((res) => {
          this.colors = res.data;
        })
        .catch((err) => console.log(err));
    },
 viewFilteringStatus() {
      axios.get("filteringstatus")
      
        .then((res) => {
          this.stats = res.data.filstatus;
        })
        .catch((err) => console.log(err));
    },

      productShowByUnit(id) {
      axios
        .get(`productShowByUnit/${id}`)

        .then((res) => {
          this.productUnits = res.data.pshowu;
          this.produc = false;
          this.categorybrand = false;
          this.pricecategory = false;
          this.unitproduct = true;
            this.colorproduct = false;
              this.pricefilter = false;
        })
        .catch((err) => console.log(err));
    },
      productShowByPrice(id) {
      axios
        .get(`productShowByPrice/${id}`)

        .then((res) => {
          this.rangeProducts = res.data.rangeGet;
          this.produc = false;
          this.categorybrand = false;
          this.pricecategory = false;
          this.unitproduct = false;
            this.colorproduct = false;
          this.pricefilter = true;
        })
        .catch((err) => console.log(err));
    },
      productShowByColor(id) {
      axios
        .get(`productShowByColor/${id}`)

        .then((res) => {
          this.productColors = res.data.pshowc;
          this.produc = false;
          this.categorybrand = false;
          this.pricecategory = false;
          this.unitproduct = false;
          this.colorproduct = true;
           this.pricefilter = false;
        })
        .catch((err) => console.log(err));
    },
    search(val) {
      var app = this;
      axios.get("searchProduct/" + val).then(function (response) {
        app.result = response.data;
      });
    },
    searchBrandGet(val) {
      var app = this;
      axios.get("searchBrand/" + val).then(function (response) {
        app.brandresult = response.data;
      });
    },
    viewMenuCat() {
      axios
        .get("viewMenuCat")
        .then((res) => {
          this.menucats = res.data.menucatlist;
        })
        .catch((err) => console.log(err));
    },
    viewProductCat() {
      fetch("api/productcat")
        .then((res) => res.json())
        .then((res) => {
          this.pcats = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewSearchProduct() {
      axios
        .get("searchProductView")
        .then((res) => {
          this.searchProduct = res.data.productget;
        })
        .catch((err) => console.log(err));
    },
    getProductName(product) {
      let pname = this.stripTags(product.product_name.pname);

      return pname.length > 35 ? pname.substring(0, 35) + "..." : pname;
    },

    viewLogo() {
      fetch("api/sliderhome/create")
        .then((res) => res.json())
        .then((res) => {
          this.logos = res.data;
        })
        .catch((err) => console.log(err));
    },
    productShow(id) {
      axios
        .get(`productshows/${id}`)

        .then((res) => {
          this.prods = res.data.pshow;
            this.produc = false;
          this.categorybrand = true;
          this.pricecategory = false;
          this.unitproduct = false;
          this.colorproduct = false;
           this.pricefilter = false;
        })
        .catch((err) => console.log(err));
    },
    stripTags(text) {
      return text.replace(/(<([^>]+)>)/gi, "");
    },
  },
  watch: {
    searchItem: function (val) {
      this.search(val);
      if (!this.searchItem) {
        this.resultDiv.display = "none";
         this.slider = true;
        this.category = true;
        this.categorybrand = true;
        this.categoryItem = true;
        this.produc = true;
      } else {
        this.resultDiv.display = "block";
       this.slider = false;
        this.category = false;
        this.categoryItem = false;
        this.categorybrand = false;
        this.produc = false;
         this.unitproduct = false;
           this.colorproduct = false;
             this.pricefilter = false;
      }
    },
     '$route' (to, from) {
     this.selected.brandt="";
     this.selected.color="";
     this.selected.unit="";
     this.selected.price="";
     this.price1="";
     this.price2="";
     this.produc = true;
     this.categorybrand = false;
     this.unitproduct = false;
     this.colorproduct = false;
     this.pricefilter = false;
     this.pricefilter = false;
     this.pricecategory = false;
  
// this.$router.go('view'/$route.params.id);

      },
     selected: {
                handler: function () {
                    this.loadBrands();
                    this.loadColors();
                    this.loadUnits();
                    this.loadPrices();
                    this.loadPriceRange();
                 
                },
                deep: true
            },
    searchBrand: function (val) {
      this.searchBrandGet(val);
      if (!this.searchBrand) {
        this.resultbrandDiv.display = "none";
        this.brand = true;
      } else {
        this.resultbrandDiv.display = "block";
        this.brand = false;
      }
    },
  },
};
</script>
