 <template>
  <div>
    <!-- content category -->
   
   
         
     <div >
    <div class="container-fluid pl-0 pr-0" v-if="slider==true" >
       
                    
         
                <div class="col-12 col-md-12 col-xs-12   paddingImage hover01" v-for="menu in menus" :key="menu.id"   v-if="$route.params.id == menu.id&&menu.bannerImageType==1" >
            
                    <figure> <img class="img-fluid boxBanImage "  :src="'categoryImage/' + menu.bannerImage"> </figure>
                  
                </div>

                  <div class="col-12 col-md-12 col-xs-12 " >
                             <div class="row" v-for="menu in menus" :key="menu.id" v-if="$route.params.id == menu.id&&menu.bannerImageType==2">
                <div class="col-6 col-md-6 col-xs-6 pl-0 pr-0 hover01"   >
              <figure> <img class="img-fluid boxBanImage " width="100%"   :src="'categoryImage/' + menu.bannerImage"> </figure>
                   
                  
                </div>
                <div class="col-6 col-md-6 col-xs-6 pl-0 pr-0 hover01"    >
            
                  <figure> <img class="img-fluid boxBanImage  " :src="'categoryImage/' + menu.bannerImage2"> </figure>
                  </div>
                </div>               
                </div> 
    </div>
    </div>
  
     
  <!-- content category -->
    <div  v-if="category==true">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="$route.params.id == menu.id"
      >
        <div class="section-divider">
          <span>
            <h4>{{ menu.catName }}</h4>
          </span>
        </div>
        <div class="row">
          <div
            class="col-6 col-md-3 col-xs-4 hover01"
            v-for="catinfo in catinfos"
            :key="catinfo.id"
            v-if="catinfo.preId == $route.params.id"
          >
            <div class="col-12 col-md-12 col-xs-12">
              <router-link
                :to="{ name: 'viewthird', params: { id: catinfo.id } }"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'categoryImage/' + catinfo.catImage"
                  />
                </figure>
              </router-link>
              <center>
                <router-link
                  :to="{ name: 'viewthird', params: { id: catinfo.id } }"
                >
                  {{ catinfo.catName }}</router-link
                >
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- ./content category -->   
        <!-- Filter -->
      <!-- FilterBrand-->
    <div class=" mt-5" v-if="category==true">
      <div class="col-12 col-md-12 col-xs-12 " style="right:12px"  >
    <div class="row mr-0" >
       <!-- <div class="col-6 col-md-3 col-xs-6 " v-for="st in stats" :key="st.id" v-if="$route.params.id == st.category&&st.item==1" >
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
     </div> -->
         <!-- ./FilterBrand-->
             <!-- FilterPrice-->
       <!-- <div class="col-6 col-md-3 col-xs-6 " v-for="st in stats" :key="st.id" v-if="$route.params.id == st.category&&st.item==2"> 
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
     </div> -->
       <!-- ./FilterPrice-->
       <!-- FilterUnit-->
       <!-- <div class="col-6 col-md-3 col-xs-6 " v-for="st in stats" :key="st.id"  v-if="$route.params.id == st.category&&st.item==3"> 
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
     </div> -->
      <!-- ./FilterUnit-->
        <!-- FilterColor-->
       <!-- <div class="col-6 col-md-3 col-xs-6 " v-for="st in stats" :key="st.id" v-if="$route.params.id == st.category&&st.item==4"> 
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
     </div> -->
      <!--./ FilterColor-->
      
    </div>
    </div>
    </div>
    <!-- ./Filter -->
   <!-- .FilterProductBrandwise -->
     <!-- <div v-if="categorybrand==true">
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
                    :src="'productImage/' + prod.image"
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
 
                <b-modal   v-bind:id="'modal' + prod.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'productImage/' + prod.image"
                                  :img-zoom="'productImage/' + prod.image"
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
    </div> -->
    <!-- ./FilterProductBrandwise  -->
    <!-- .FilterProductPrice -->
     <!-- <div v-if="pricecategory==true">
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
                    :src="'productImage/' + filterprice.image"
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
               
                <b-modal   v-bind:id="'modal' + filterprice.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'productImage/' + filterprice.image"
                                  :img-zoom="'productImage/' + filterprice.image"
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
    </div> -->
    <!-- ./FilterProductPrice  -->
    <!-- .FilterUnitProduct -->
     <!-- <div v-if="unitproduct==true">
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
                    :src="'productImage/' + productUnit.image"
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
              
                <b-modal   v-bind:id="'modal' + productUnit.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'productImage/' + productUnit.image"
                                  :img-zoom="'productImage/' + productUnit.image"
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
    </div> -->
    <!-- ./FilterUnitProduct  -->
    <!-- .FilterByColorProduct -->
     <!-- <div v-if="colorproduct==true">
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
                    :src="'productImage/' + productColor.image"
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
       
                <b-modal   v-bind:id="'modal' + productColor.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'productImage/' + productColor.image"
                                  :img-zoom="'productImage/' + productColor.image"
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
    </div> -->
    <!-- ./FFilterByColorProduct  -->
    <!-- .FilterByPriceRangeProduct -->
     <!-- <div v-if="pricefilter==true">
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
                    :src="'productImage/' + rangeProduct.image"
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
            
                <b-modal   v-bind:id="'modal' + rangeProduct.productNameId" size="xl" header-bg-variant="info" title="">
                     
                      
                        <div class="modal-body">
                          <div class="row">
                            <div class="col-md-6">
                              <div  class="zoomImg">
                                <zoom-on-hover
                                  :img-normal="'productImage/' + rangeProduct.image"
                                  :img-zoom="'productImage/' + rangeProduct.image"
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
    </div> -->
    <!-- ./FFilterByPriceRangeProduct  -->
    <!-- ./content category -->
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
              class="col-6 col-md-2 col-xs-4 col-sm-4 hovereffect paddingImage2"
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
                    :src="'productImage/' + product.image"
                  />
                </figure>

                <div class="overlay">
                  <div
                    style="text-align: center"
                    v-for="offer in offers" v-if="offer.productId==product.productNameId"
                  >
                    <a class="info" @click="addCart(product, offer)"
                      >Add To Shopping Cart</a
                    >
                  </div>
                  <div style="text-align: center" v-if="product.offer == null">
                    <a class="info" @click="addCart(product, product)"
                      >Add To Shopping Cart</a
                    >
                  </div>
                  <div
                    class="hovercart"
                    v-for="cart in carts"
                    v-bind:key="cart.id"
                    v-if="cart.id == product.id"
                  >
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        class="btn btn-info"
                        @click="increment(cart)"
                      >
                        +
                      </button>
                      <button type="button" class="btn btn-info">
                        {{ cart.qun }} in Cart
                      </button>
                      <button
                        type="button"
                        class="btn btn-info"
                        @click="decrement(cart)"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div class="detail">
                    <a
                      data-toggle="modal"
                      :data-target="'#' + 'product' + product.productNameId"
                      class="btn btn-success"
                      >Details</a
                    >
                  </div>
                </div>
              
                <!-- Modal -->
                <div
                  class="modal fade"
                  :id="'product' + product.productNameId"
                  tabindex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-header" style="background: #4abfda;">
                       
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                     <div class="modal-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="zoomImg">
                          <zoom-on-hover
                            :img-normal="'productImage/' + product.image"
                            :img-zoom="'productImage/' + product.image"
                            :scale="2"
                          ></zoom-on-hover>
                        </div>
                        <br />
                      </div>
                      <div class="col-md-6 col-xs-12 product_content ml-0">
                        <h4>{{ product.product_name.pname }}</h4>
                        <div class="ml-0">
                          <span v-for="purchaseProduct in purchaseproducts">
                            <span
                              v-if="
                                purchaseProduct.pname == product.productNameId
                              "
                            >
                              <span
                                v-for="unit in units"
                                :key="unit.id"
                                v-if="purchaseProduct.unit == unit.id"
                                >{{ unit.unit }}<span></span
                              ></span>
                              &nbsp;&nbsp;Brand:&nbsp;<span
                                v-for="brand in brands"
                                :key="brand.id"
                                v-if="purchaseProduct.brand == brand.id"
                                >{{ brand.brand }}</span
                              >
                              &nbsp;&nbsp;Color:&nbsp;<span
                                v-for="color in colors"
                                :key="color.id"
                                v-if="purchaseProduct.color == color.id"
                                >{{ color.color }}
                              </span>
                            </span>
                          </span>
                        </div>
                        <p  v-for="offer in offers" :key="offer.id" v-if="offer.productId==product.productNameId">
                          <span class="dPrice cost"
                            ><span>৳</span> {{ offer.totalPrice }}</span
                          >&nbsp;&nbsp;
                          <span class="tk">৳</span
                          >&nbsp;<del class="text-muted">{{ product.salesPrice }}</del>&nbsp;&nbsp;
                          <span style="color: red">{{offer.offerPrice}}<span v-if="offer.ammountType==1">TK</span><span v-if="offer.ammountType==2">%</span>&nbsp;Off</span>
                        </p>
                        <p class="dPrice" v-if="product.offer==null">
                          <span class="cost"
                            ><span>৳</span> {{ product.salesPrice }}</span
                          >
                        </p>
                        <div class="btn-ground" v-for="offer in offers" :key="offer.id">
                          <div class="row" v-if="offer.productId==product.productNameId">
                            <div class="col-12 col-md-6 col-xs-12">
                              <div class="input-group mb-3">
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
                                    @click="addCart(product,offer)"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <div
                                class="input-group mb-3 incre"
                                v-for="cart in carts"
                                v-bind:key="cart.id"
                                v-if="cart.id == product.id"
                              >
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
                                  {{ cart.qun }} in Cart
                                </button>
                                <div class="input-group-prepend">
                                  <button
                                    class="btn btn-dark btn-sm plusbtn"
                                    id="plus-btn"
                                    @click="addCart(product,offer)"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div class="col-xs-12">
                              <button
                                type="button"
                                class="btn btn-primary buynow"
                                @click="addCart(product,offer)"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + product.productNameId)
                                "
                              >
                                <span
                                  class="glyphicon glyphicon-shopping-cart"
                                ></span>
                                Buy Now
                              </button>
                            </div>
                            <div
                              class="col-xs-12 buynowclose"
                              v-for="cart in carts"
                              v-bind:key="cart.id"
                              v-if="cart.id == product.id"
                            >
                              <button
                                type="button"
                                class="btn btn-primary buynow"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + product.productNameId)
                                "
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
                        <div class="btn-ground" >
                          <div class="row" v-if="product.offer==null">
                            <div class="col-12 col-md-6 col-xs-12">
                              <div class="input-group mb-3">
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
                                    @click="addCart(product,product)"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <div
                                class="input-group mb-3 incre"
                                v-for="cart in carts"
                                v-bind:key="cart.id"
                                v-if="cart.id == product.id"
                              >
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
                                  {{ cart.qun }} in Cart
                                </button>
                                <div class="input-group-prepend">
                                  <button
                                    class="btn btn-dark btn-sm plusbtn"
                                    id="plus-btn"
                                    @click="addCart(product,product)"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div class="col-xs-12">
                              <button
                                type="button"
                                class="btn btn-primary buynow"
                                @click="addCart(product,product)"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + product.productNameId)
                                "
                              >
                                <span
                                  class="glyphicon glyphicon-shopping-cart"
                                ></span>
                                Buy Now
                              </button>
                            </div>
                            <div
                              class="col-xs-12 buynowclose"
                              v-for="cart in carts"
                              v-bind:key="cart.id"
                              v-if="cart.id == product.id"
                            >
                              <button
                                type="button"
                                class="btn btn-primary buynow"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + product.productNameId)
                                "
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
                        <h5 class="pdetails">Product Detais</h5>

                        <div v-html="product.details"></div>

                        <h5 class="pdetails">Speciality</h5>
                        <div v-html="product.speciality"></div>
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
                            <a class="nav-link" data-toggle="tab" href="#menu1"
                              >Delivary Charge</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu2"
                              >Delivery Area</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu2"
                              >Product Return Policy</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu2"
                              >Free Family Bazar</a
                            >
                          </li>
                          <li class="nav-item" style="background: #c2d5e1">
                            <a class="nav-link" data-toggle="tab" href="#menu2"
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
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                          </div>
                          <div id="menu1" class="container tab-pane fade">
                            <br />
                            <h3>Menu 1</h3>
                            <p>
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat.
                            </p>
                          </div>
                          <div id="menu2" class="container tab-pane fade">
                            <br />
                            <h3>Menu 2</h3>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
                   <!-- Modal    -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                  v
                >
                  <p style="text-align: left">{{ getProductName(product) }}</p>
                </div>
              
                <div class="col-12 col-md-12 col-xs-12 paddingImage" v-for="offer in offers" :key="offer.id">
                  <div class="row"  v-if="offer.productId==product.productNameId">
                    <div class="col-6 col-md-4 col-xs-4 amountBox paddingImage">
                      <center>
                        <bdi>
                        <p class="amount dPrice" >
                          <span class="tk">৳</span>&nbsp;{{
                            offer.totalPrice
                          }}
                        </p>
                        </bdi>
                      </center>
                    </div>
                    <div
                      class="col-6 col-md-8 col-xs-4 discountBox paddingImage"
                    >
                      <center>
                        <p class="amountDiscount text-muted">
                          <span class="tk">৳</span>&nbsp;<del>{{
                            product.salesPrice
                          }}&nbsp;</del>
                         <small> <span class="amount ">{{ offer.offerPrice}}&nbsp;</span><span v-if="offer.ammountType==1" class="amount">TK</span><span class="amount" v-if="offer.ammountType==2">%</span>&nbsp;<span class="amount">Off</span></small>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                
                <div class="col-12 col-md-12 col-xs-12 paddingImage" >
                  <div class="row"  v-if="product.offer==null">
                    <div class="col-6 col-md-12 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount dPrice">
                          <span class="tk">৳</span>&nbsp;{{
                            product.salesPrice
                          }}
                        </p>
                      </center>
                    </div>
                   
                  </div>
                </div>
            
                <!-- <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <center>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                    <i class="fa fa-star ratting"></i>
                  </center>
                </div> -->
                <div class="col-12 col-md-12 col-xs-12 paddingImage3" v-for="offer in offers" v-if="offer.productId==product.productNameId">
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(product,offer)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
   
                <div class="col-12 col-md-12 col-xs-12 paddingImage3" v-if="product.offer==null">
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(product,product)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
   
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"
                  v-for="cart in carts"
                  v-bind:key="cart.id"
                  v-if="cart.id == product.id"
                >
                  <center>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="increment(cart)"
                      >
                        +
                      </button>
                      <button type="button" class="btn btn-danger">
                        {{ cart.qun }} in Cart
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="decrement(cart)"
                      >
                        -
                      </button>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div>
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
            >{{ totalprice }}&nbsp;Discount:<span class="tk">৳&nbsp;</span>{{discount}}
          </p>
        </div>
        <div class="col-12 col-md-12 cartml overflow-auto" style="height:362px">
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
                      :src="'productImage/' + cart.image"
                      class="cartImg mt-7"
                      style="margin-left: -9px; margin-top: -2px"
                    />
                  </figure>
                </td>
                <td class="p-0">
                  <p class="cartpname"><span v-for="pname in pnames" v-if="pname.id==cart.pname">{{ pname.pname }} </span></p>
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
        
        </div>
        <div v-if="badge!=0&& $userId!=''">
          <center><router-link    :to="{ name: 'checkout' }" class="btn btn-info" style="color:white">Please order</router-link> </center>
        </div>
        <div v-else>
          <center><router-link    :to="{ name: 'login' }" class="btn btn-info" style="color:white">Please order</router-link> </center>
        </div>
      </div>
    </div>
    <!-- ./sidebarcartbox -->
    <!-- .Footer -->
    <div >
      <footer class="footer d-md-none shadowfooter bg-white rounded">
        <div class="container-fluid">
          <div class="row p-2 mb-0">
            <div class="col-3 col-xs-3">
             <a href="www.myscapon.com">
              <i class="fa fa-home ml-2" aria-hidden="true"></i>
              <p>Home</p>
              </a>
            </div>

            <div class="col-3 col-xs-3">
            <router-link  :to="{ name: 'offerview' }">   <i class="fa fa-gift ml-2" aria-hidden="true"></i>
              <p>Offer</p></router-link>
            </div>

            <div class="col-3 col-xs-3" onclick="openNav()">
              <i class="fa fa-shopping-cart ml-2" aria-hidden="true"></i>
              <span
                :class="{ 'bounce animated': animated }"
                @animationend="animated = false"
                class="badge badge-warning"
                id="lblCartCount"
              >
                {{ badge }}
              </span>
              <p>Cart</p>
            </div>

            <div class="dropdown col-3 col-xs-3" v-if="$userId!=''" >
             <i class="fa fa-user ml-2" aria-hidden="true"></i>
             
             
            </div>
            <div class="col-3 col-xs-3" v-else >
              <router-link  :to="{ name: 'login' }">  <i class="fa fa-user ml-2" aria-hidden="true"></i>
              <p>Login</p></router-link>
            </div>
          </div>
        </div>
      </footer>
    </div>
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
      sliders: [],
      cartadd: {
        id: "",
        name: "",
        image: "",
        price: "",
        salesPrice: "",
        stock: "",
        pname: "",
          discount: "",
        offerPrice: "",
      },
      prices: [],
      menucats: [],
      menus: [],
      pcats: [],
      catinfos: [],
      logos: [],
      brandresult: [],
      searchProduct: [],
      rangeProducts: [],
       brandgets: [],
         pricern: [],
            pproducts: [],
            productUnits: [],
               purchaseproducts: [],
                   selected: {
                    brandt: '',
                    price: '',
                    color: '',
                    unit:''
                },
      rangeProducts: [],   
      productColors: [],
      cproducts: [],
      prods: [],
      stats: [],
      toggled: [],
         offers: [],
        pnames: [],
      badge: "0",
      qun: "1",
      totalprice: "0",
          discount: "0",
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
       this.viewOffer();
    this.viewProductName();
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
     viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.pnames = res.data;
        })
        .catch((err) => console.log(err));
    },   
        viewOffer() {
      axios.get("offerGet").then((res) => {
        this.offers = res.data.offer;
      });
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
        viewPurchaseProduct(){
      axios.get("purchaseProductGet")
     
        .then((res) => {
          this.purchaseproducts = res.data.productgt;
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
   viewCart() {
      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
        this.badge = this.carts.length;
        this.totalprice = this.carts.reduce((total, item) => {
          return total + this.qun * item.price;
        }, 0);
          this.discount = this.carts.reduce((total, item) => {
          return  total + this.qun * item.discount;
        }, 0);
      }
    },
    openModel() {
      this.myModl = true;
    },
       addCart(pro, p) {
      var findProduct = this.carts.find((o) =>o.pname === pro.pname);
      if (findProduct) {
        findProduct.qun++;
        findProduct.price = findProduct.qun * findProduct.salesPrice;
        this.storeCart();
        this.animated = true;
      } else {
        this.cartadd.id = pro.id;
        this.cartadd.name = pro.name;
        if(p.productId==pro.productNameId ){
        this.cartadd.discount = p.offerPrice;
        this.cartadd.offerPrice = p.offerPrice;
        this.cartadd.price = p.totalPrice;
        this.cartadd.salesPrice = p.totalPrice;
        }
        if(p.productId==pro.pname ){
        this.cartadd.discount = p.offerPrice;
        this.cartadd.offerPrice = p.offerPrice;
        this.cartadd.price = p.totalPrice;
        this.cartadd.salesPrice = p.totalPrice;
        }
        else{
        this.cartadd.price = p.salesPrice;
        this.cartadd.salesPrice = p.salesPrice;
         this.cartadd.discount = 0;
        }
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
      var findProduct = this.carts.find((o) => o.pname === pro.pname);
      findProduct.qun++;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      findProduct.discount = findProduct.qun * findProduct.offerPrice;
      this.storeCart();
      this.animated = true;
    },
    decrement(pro) {
      var findProduct = this.carts.find((o) => o.pname === pro.pname);
      if (findProduct.qun === 1) {
        alert("Negative quantity not allowed");
      } else {
        findProduct.qun--;
        findProduct.price = findProduct.qun * findProduct.salesPrice;
        findProduct.discount = findProduct.qun * findProduct.offerPrice;
        this.storeCart();
        this.animated = true;
      }
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
    viewFilteringStatus() {
      axios.get("filteringstatus")
      
        .then((res) => {
          this.stats = res.data.filstatus;
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
        viewPurchase(){
      axios.get("unitget")
     
        .then((res) => {
          this.pproducts = res.data.unitgt;
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
    viewLogo() {
      fetch("api/sliderhome/create")
        .then((res) => res.json())
        .then((res) => {
          this.logos = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
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
    viewCat() {
      axios
        .get("subCatProduct")
        .then((res) => {
          this.catinfos = res.data.menucatlistgetinfo;
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
    viewMenuCat() {
      axios
        .get("viewMenuCatList")
        .then((res) => {
          this.menus = res.data.menucatlistview;
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
    viewSlider() {
      fetch("api/sliderhome")
        .then((res) => res.json())
        .then((res) => {
          this.sliders = res.data;
        })
        .catch((err) => console.log(err));
    },
    
    stripTags(text) {
      return text.replace(/(<([^>]+)>)/gi, "");
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
