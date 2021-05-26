 <template>
  <div>
        
    <div v-if="!$route.meta.hideDashboard">
      <div class="container-fluid" v-if="slider == true">
        <div class="col-12 col-md-12 col-xs-12 mainBox">
          <div class="row">
            <div
              class="col-12 col-md-3 col-xs-12 d-none d-sm-block paddingImage hover01"
              v-for="slider in sliders"
              :key="slider.id"
              v-if="slider.left == 1"
            >
              <router-link :to="slider.url">
                <figure>
                  <img
                    class="img-fluid box1Image"
                    :src="'images/' + slider.image"
                    
                  /></figure
              ></router-link>
            </div>

            <div class="col-12 col-md-9 col-xs-12 paddingImage">
              <div
                class="col-12 col-md-12 col-xs-12 d-none d-sm-block paddingImage hover01"
                v-for="slider in sliders"
                :key="slider.id"
                v-if="slider.up == 1"
              >
                <figure>
                  <img
                    class="img-fluid "
                    :src="'images/' + slider.image"
                  />
                </figure>
              </div>
              <div class="col-12 col-md-12 col-xs-12">
                <div class="row">
                  <div
                    class="col-6 col-md-3 col-xs-4 paddingImage hover01"
                    v-for="slider in sliders"
                    :key="slider.id"
                    v-if="slider.right == 1"
                  >
                    <figure>
                      <img
                        class="img-fluid box3Image"
                        :src="'images/' + slider.image"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
<div >
     <div class="container-fluid mt-1" :style="resultDiv">
       

        <div class="col-12 col-md-12 col-xs-12"  >
          <div class="row" >
        
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2"
              v-for="res in result"
             :key="res.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
                 v-for="item in searchProduct"         
              v-bind:key="item.id"
             v-if="item.pname==res.id"
             
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'productImage/' + item.image"
                  />
                </figure>
           <div class="overlay">
                  <div style="text-align: center" v-for="itemOffer in offers" v-if="itemOffer.productId==item.pname">
                    <a class="info" @click="addCart(item,itemOffer)"
                      >Add To Shopping Cart</a
                    >
                  </div>
                  <div style="text-align: center" v-if="item.offer==null">
                    <a class="info" @click="addCart( item, item)"
                      >Add To Shopping Cart</a
                    >
                  </div>
                  <div
                    class="hovercart"
                    v-for="cart in carts"
                    v-bind:key="cart.id"
                    v-if="cart.id == item.id"
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
                      v-b-modal="'modal' + item.pname"
                      class="btn btn-success"
                      >Details</a
                    >
                  </div>
                </div>
          <!-- Modal -->
                <b-modal
                  v-bind:id="'modal' + item.pname"
                  size="xl"
                
                  title=""
                >
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="zoomImg">
                          <zoom-on-hover
                            :img-normal="'productImage/' + item.image"
                            :img-zoom="'productImage/' + item.image"
                            :scale="2"
                          ></zoom-on-hover>
                        </div>
                        <br />
                      </div>
                      <div class="col-md-6 col-xs-12 product_content ml-0">
                        <h4>{{ item.product_name.pname }}</h4>
                        <div class="ml-0">
                          <span v-for="purchaseProduct in purchaseproducts">
                            <span
                              v-if="
                                purchaseProduct.pname == item.pname
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
                        <p  v-for="itemOffer in offers" :key="itemOffer.id" v-if="itemOffer.productId==item.pname">
                          <span class="dPrice cost"
                            ><span>৳</span> {{ itemOffer.totalPrice }}</span
                          >&nbsp;&nbsp;
                          <span class="tk">৳</span
                          >&nbsp;<del class="text-muted">{{ item.salesPrice }}</del>&nbsp;&nbsp;
                          <span style="color: red">{{itemOffer.offerPrice}}<span v-if="itemOffer.ammountType==1">TK</span><span v-if="itemOffer.ammountType==2">%</span>&nbsp;Off</span>
                        </p>
                        <p class="dPrice" v-if="item.offer==null">
                          <span class="cost"
                            ><span>৳</span> {{ item.salesPrice }}</span
                          >
                        </p>
                        <div class="btn-ground" v-for="itemOffer in offers" :key="itemOffer.id">
                          <div class="row" v-if="itemOffer.productId==item.pname">
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
                                    @click="addCart(item,itemOffer)"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <div
                                class="input-group mb-3 incre"
                                v-for="cart in carts"
                                v-bind:key="cart.id"
                                v-if="cart.id == item.id"
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
                                    @click="addCart(item, itemOffer)"
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
                                @click="addCart(item, itemOffer)"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + item.pname)
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
                              v-if="cart.id == item.id"
                            >
                              <button
                                type="button"
                                class="btn btn-primary buynow"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + item.pname)
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
                          <div class="row" v-if="item.offer==null">
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
                                    @click="addCart(item,item)"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <div
                                class="input-group mb-3 incre"
                                v-for="cart in carts"
                                v-bind:key="cart.id"
                                v-if="cart.id == item.id"
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
                                    @click="addCart(item,item)"
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
                                @click="addCart(item,item)"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + item.pname)
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
                              v-if="cart.id == item.id"
                            >
                              <button
                                type="button"
                                class="btn btn-primary buynow"
                                onclick="openNav()"
                                v-on:click="
                                  $bvModal.hide('modal' + item.pname)
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

                        <div v-html="item.details"></div>

                        <h5 class="pdetails">Speciality</h5>
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
                </b-modal>
                <!--./ Modal -->      
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                  v
                >
                  <p style="text-align: left">{{ getProductNameitem(item) }}</p>
                </div>
              
                <div class="col-12 col-md-12 col-xs-12 paddingImage" v-for="offerItem in offers" :key="offerItem.id">
                  <div class="row"  v-if="offerItem.productId==item.pname">
                    <div class="col-6 col-md-4 col-xs-4 amountBox paddingImage">
                      <center>
                        <bdi>
                        <p class="amount dPrice" >
                          <span class="tk">৳</span>&nbsp;{{
                            offerItem.totalPrice
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
                            item.salesPrice
                          }}&nbsp;</del>
                         <small> <span class="amount ">{{ offerItem.offerPrice}}&nbsp;</span><span v-if="offerItem.ammountType==1" class="amount">TK</span><span class="amount" v-if="offerItem.ammountType==2">%</span>&nbsp;<span class="amount">Off</span></small>
                        </p>
                      </center>
                    </div>
                  </div>
                </div>
                
                <div class="col-12 col-md-12 col-xs-12 paddingImage" >
                  <div class="row"  v-if="item.offer==null">
                    <div class="col-6 col-md-12 col-xs-4 amountBox paddingImage">
                      <center>
                        <p class="amount dPrice">
                          <span class="tk">৳</span>&nbsp;{{
                            item.salesPrice
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
                <div class="col-12 col-md-12 col-xs-12 paddingImage3" v-for="offerItem in offers" v-if="offerItem.productId==item.pname">
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(item,offerItem)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
   
                <div class="col-12 col-md-12 col-xs-12 paddingImage3" v-if="item.offer==null">
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(item,item)">Add TO Cart</span>
                    </p>
                  </center>
                </div>
   
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage3 adcart"
                  v-for="cart in carts"
                  v-bind:key="cart.id"
                  v-if="cart.id == item.id"
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
    <!-- sidenav and searchbar  -->
    <div>
      <div class="col-12 col-md-12 col-sm-12 col-xs-12 headerdesign">
        <div class="row">
          <div
            class="col-2 col-md-2 col-sm-2 col-xs-1"
            style="margin-top: 0.4rem !important"
          >
            <div v-for="logo in logos" :key="logo.id">
              <a class="navbar-brand d-none d-sm-block" href="#">
                <img width="100%" height="50" :src="'images/' + logo.image" />
              </a>
            </div>
            <div class="mt-0 d-md-none">
              <a
                style="margin-top: 11px"
                v-b-toggle.sidebar-backdrop
                type="button"
                ><i
                  class="fa fa-bars"
                  style="color: black; line-height: 50px"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          <div class="col-8 col-md-6 col-sm-6 col-xs-12">
            <div class="form-inline" style="margin-top: 1.1rem !important">
              <input
                class="form-control"
                type="text"
                v-model="searchItem"
                placeholder="Search"
                aria-label="Search"
                @searchItem="searchItem($val)"
                autofocus
              />
              <button class="btn my-2 my-sm-0 btnSearch" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div
            class="dropdown col-2 col-sm-2 pt-4 col-md-2 col-xs-12 d-none d-sm-block headerhover hdbox"
          >
            <p class="d-md-none d-lg-block" style="font-weight: bold">
              <img src="/mapImage/map.png" style="height: 34px" />Delivery
              Location
            </p>
             <div class="dropdown-content locationDrop" >  
               <div v-for="divi in divisions" :key="divi.id" class="locationborder">  
                 <router-link :to="{ name: 'districtlocation', params: { id: divi.divisionId } }"><p class="dlist"><img src="mapImage/bdflag.webp" width="15%" height="5%"/>{{divi.division.name}}</p></router-link>
              </div>
          </div>
          </div>
          <div
            class="col-2 col-md-1 pt-4 pl-3 pr-1 lang col-sm-1 col-xs-12 d-none d-sm-block headerhover hdbox"
            style="padding-left: 1.5rem !important"
          >
            <p><span style="color: red">EN </span>| বাং</p>
          </div>
          <div v-if="infos==''"
            class=" col-2 col-md-1 pt-4 col-sm-1 col-xs-4 d-none d-sm-block headerhover hdbox"
          >
     
         <a @click.prevent="viewModal()" v-b-modal.modal-1> <i class="fa fa-user-plus" aria-hidden="true"></i></a>
     </div>
          <div v-if="notlogin==true"
            class=" col-2 col-md-1 pt-4 col-sm-1 col-xs-4 d-none d-sm-block headerhover hdbox"
          >
     
       <a @click.prevent="viewModal()" v-b-modal.modal-1> <i class="fa fa-user-plus" aria-hidden="true"></i></a>
     </div>
       <b-modal id="modal-1" title="Login" v-if="modal" >
    <div class="container">
      <div class="col-12 col-md-12 col-xs-12 offset-md-2">
     <button class="btn fb "><img :src="'frontend/image/facebook.webp'" height="40" width="50">  Login With Facebook</button>
      </div>
      <div class="col-12 col-md-12 col-xs-12 mt-2 offset-md-2" v-if="phone">
     <button class="btn email " @click.prevent="openEmail"><img :src="'frontend/image/envlope.jpg'" height="40" width="50">  Login With Email</button>
      </div>
      <div class="col-12 col-md-12 col-xs-12 mt-2 offset-md-2" v-if="emailAD">
     <button class="btn phone " @click.prevent="openPhone"><img :src="'frontend/image/phone.webp'" height="40" width="50">  Login With Mobile</button>
      </div>
    <div >
      <div v-if="phone">
         <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
               or
            PLEASE ENTER YOUR MOBILE PHONE NUMBER
     </div>
         <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
            <p> <img :src="'frontend/image/flag.png'" height="40" width="40"/>
            <input type="tel" value="+88" class="tel"  placeholder="" >
            </p>
     </div>
         <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
           <button     class="btn btn-lg btn-primary btn-block">Sign in</button>
     </div>
      </div>  
         
        <div class="col-md-12 mt-3" v-if="emailAD">
         
            <form @submit.prevent="loginInfo">            

              <div class="form-group" :class="{ 'has-error': form.errors.has('email') }">
                <label for="email"> User Name/Email Address/Phone</label>
                <input type="text" :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.email" class="form-control" name="email" placeholder="User Name/Email Address/Phone">
                 <has-error :form="form" field="email"></has-error>
              </div>
             

              <div class="form-group" :class="{ 'has-error': form.errors.has('password') }">
                <label for="password"> Password</label>
                <input type="password" :class="{ 'is-invalid': form.errors.has('password') }" v-model="form.password" class="form-control" name="password" placeholder="Password">
                  <has-error :form="form" field="password"></has-error>
              </div>

              <button     class="btn btn-lg btn-primary btn-block">Sign in</button>
            </form>
      </div>
      <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
       <center> <p> New member?<router-link  v-on:click="$bvModal.hide('modal-1' )
                                " :to="{name:'customerregi'}">Register</router-link> here.
        </p></center>
        <center>
          <span v-b-modal.modal-sms class="badge badge-info">Forgate Password?</span>
        </center>
          <b-modal id="modal-sms"  :header-bg-variant="headerBgVariant" >
 <div class="form-group">
    <label for="exampleInputEmail1">Enter User Name/Phone Number</label>
    <input type="text" class="form-control" autocomplete="off" id="exampleInputEmail1" v-on:keyup="userGet" v-model="userName" placeholder="Enter User Name/Phone Number">
   {{sms.message}}
    <button
                  class="btn btn-info mt-2"
                  @click.prevent="sendSms()"
                >
               Submit
                </button>
  </div>
  </b-modal>
              </div>
      <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
       <center> <p> This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" data-reactid=".32sn2ofjqk.1.0.0.0.2.0.6.0.1">Privacy Policy</a>
        and <a href="https://policies.google.com/terms" target="_blank" data-reactid=".32sn2ofjqk.1.0.0.0.2.0.6.0.3">Terms of Service</a>
        </p></center>
              </div>
    </div>
  </div>
  </b-modal>
          <div  v-if="infos.name"    class="dropdown col-2 col-md-1 pt-4 col-sm-1 col-xs-4 d-none d-sm-block headerhover hdbox">
         {{infos.name}}
         <div class="dropdown-content prof" >  
          <router-link :to="{ name: 'customerprofile'}"><i class="fa fa-user" aria-hidden="true"></i>
My Profile</router-link>
           <router-link :to="{ name: 'customerorder'}"><i class="fas fa-cube"></i>
My Order</router-link>
             <router-link :to="{ name: 'balancesheet'}"><i class="far fa-money-bill-alt"></i>

Balance Sheet</router-link>
           <router-link :to="{ name: 'customerregi'}"><i class="fa fa-tasks" aria-hidden="true"></i>
Promotion</router-link >
           <router-link :to="{ name: 'promotionalteam'}"><i class="fab fa-bandcamp"></i>
Promotional Team</router-link >
           <router-link :to="{ name: 'dailycommission'}"><i class="fas fa-file-invoice-dollar"></i>
Daily Commission</router-link >
           <router-link :to="{ name: 'customermessage'}"><i class="fa fa-envelope" aria-hidden="true"></i>
Message&nbsp;<span class="badge badge-danger">12</span></router-link>
          <router-link :to="{ name: 'complain'}"><i class="fa fa-bug" aria-hidden="true"></i>
Complain</router-link>

           <a href="#" @click.prevent="logout()"><i class="fas fa-sign-out-alt"></i>
Logout</a>
          </div>
        </div>
         
          <div class="col-2 mt-2 col-xs-4" style="top: 11px">
            <i
              class="fa fa-ellipsis-v d-md-none mt-2 menuHeight"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>

      <div class="d-md-none">
        <div>
          <b-sidebar
            id="sidebar-backdrop"
           
            backdrop
            shadow
          >
            <div v-for="logo in logos" :key="logo.id">
              <figure>
                <img class="img-fluid logoImg" :src="'images/' + logo.image" />
              </figure>
            </div>
            <div class="px-3 py-2 mt-0">
              <center class="mtside">
                
                       <router-link :to="{ name: 'offerview'}"><i class="fa fa-gift"></i> OFFER<span class="amount"
                    >&nbsp;<b>(45)</b></span
                  ></router-link>
                
              </center>
              <navbar> </navbar>
            </div>
          </b-sidebar>
        </div>
      </div>
    </div>
    <!-- ./sidenav and searchbar  -->

    <!-- content category -->
    <div v-if="!$route.meta.hideDashboard">
      <div class="container-fluid" v-if="category == true">
        <div class="row">
          <div
            class="col-6 col-md-3 col-xs-4 hover01"
            v-for="menucat in menucats"
            :key="menucat.id"
          >
            <div class="col-12 col-md-12 col-xs-12">
              <router-link :to="{ name: 'view', params: { id: menucat.id } }">
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'categoryImage/' + menucat.catImage"
                  />
                </figure>
              </router-link>
              <center>
                <router-link :to="{ name: 'view', params: { id: menucat.id } }">
                  {{ menucat.catName }}</router-link
                >
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!$route.meta.hideDashboard">
      <div class="container-fluid" v-if="category == true">
        <div class="row"></div>
      </div>
    </div>
    <!-- ./content category -->

    <div v-if="!$route.meta.hideDashboard">
      <div
        class="container-fluid"
        v-for="menu in menus"
        :key="menu.id"
        v-if="category == true"
      >
        <div class="section-divider">
          <span>
            <router-link :to="{ name: 'view', params: { id: menu.id } }">
              <h4>{{ menu.catName }}</h4></router-link
            >
          </span>
        </div>

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
                  <div style="text-align: center" v-for="offer in offers" v-if="offer.productId==product.productNameId">
                    <a class="info" @click="addCart(product,offer)"
                      >Add To Shopping Cart</a
                    >
                  </div>
                  <div style="text-align: center" v-if="product.offer==null">
                    <a class="info" @click="addCart(product,product)"
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
                      v-b-modal="'modal' + product.productNameId"
                      class="btn btn-success"
                      >Details</a
                    >
                  </div>
                </div>
                <!-- Modal -->
                <b-modal
                  v-bind:id="'modal' + product.productNameId"
                  size="xl"
                
                  title=""
                >
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
                </b-modal>
                <!--./ Modal -->
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
    <div v-if="!$route.meta.hideDashboard">
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
            <span class="tk">৳</span>&nbsp;<animated-number
              :value="totalprice"
            />
          </p>
        </div>
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
        <div v-if="badge!=0">
          <center><router-link    :to="{ name: 'checkout' }" class="btn btn-info" style="color:white">Please order</router-link> </center>
        </div>
      </div>
    </div>
    <!-- ./sidebarcartbox -->
    <!-- .Footer -->
    <div v-if="!$route.meta.hideDashboard">
      <footer class="footer d-md-none shadowfooter bg-white rounded">
        <div class="container-fluid">
          <div class="row p-2 mb-0">
            <div class="col-3 col-xs-3">
              <i class="fa fa-home ml-2" aria-hidden="true"></i>
              <p>Home</p>
            </div>

            <div class="col-3 col-xs-3">
              <i class="fa fa-gift ml-2" aria-hidden="true"></i>
              <p>Offer</p>
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

            <div class="col-3 col-xs-3">
              <i class="fa fa-user ml-2" aria-hidden="true"></i>
              <p>Login</p>
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
  name: "Quantity",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      form:new Form({ email: '',
      password: '',
      phone:''
      }),
      userName:'',
      searchItem: "",
      products: [],
      informations: [],
       toggled: [],
      carts: [],
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
      pnames: [],
      menucats: [],
      menus: [],
      pcats: [],
      result: [],
      sliders: [],
      purchaseproducts: [],
      logos: [],
      searchProduct: [],
      units: [],
      colors: [],
      brands: [],
      divisions: [],
       offers: [],
       pnames: [],
       infos: [],
       getusers: [],
       sms: [],
      badge: "0",
      qun: 1,
      pid: "",
    
      totalprice: "0",
      discount: "0",
      animated: false,
      myModl: false,
      slider: true,
      category: true,
      categoryItem: true,
      login:false,
      notlogin: false,
      modal: true,
      emailAD: false,
      phone: true,
       variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
     headerBgVariant: 'warning',
      quantity: 1,
      resultDiv: {
        display: "none",
      },
   
    };
  },
 
 async mounted() {
 
    

    this.viewLogo();
    this.viewMenuCat();
    this.viewPrice();
    this.viewCart();
    this.viewMenu();
    this.viewProductCat();
    this.viewProductName();
    this.viewSearchProduct();
    this.viewSlider();  
    this.viewPurchaseProduct();
    this.viewColor();
    this.viewUnit();
    this.viewBrand();
    this.viewDivision();
    this.viewOffer();
    this.viewProductName();
   this.viewInfo();

  },

  methods: {
     loginInfo() {
      this.form
        .post('/vendor/login',
            {
              email:this.form.email,
              phone:this.form.phone,
              password:this.form.password,
            })
            .then((res) => {
            

              localStorage.setItem('usertoken', res.data.token)
                this.form.email = ''
                this.form.password = ''
                this.form.phone = ''
               this.login=true;
               this.viewInfo();
               this.notlogin=false;
               this.modal=false;
    window.location.href = "/"
            })
            .catch((err) => {
                console.log(err)
            })

          this.emitMethod()
      },
   userGet(){
              axios.get('/searchUser?q='+this.userName).then(res =>{
                if(res.data==''){
                return( this.getusers = res.data.getuser);  
              
                 }             
                else{
                (this.getusers = res.data.getuser);                
               
                }
              })
           
         },
      emitMethod() {
          EventBus.$emit('logged-in','loggedin')
      },
  
    logout() {
                axios.post('/logout')
                    .then(res => {
               window.location.href = "/"
                  this.infos.name='';
                  this.notlogin=true;
                   this.modal=true;
                    });
            },
    async sendSms(){
                this.userName="";
       Toast.fire({
            icon: "success",
            title: "Message has been sent...",
          });
        let url='http://sms.doofazit.com/api/v1/send?api_key=44515814867233291581486723&contacts='+this.getusers.phone+'&senderid=8801844532643&msg=Your password is:'+this.getusers.pass
    	 
     fetch(url);
      // const data = await res.json();
      // this.sms = data;
     
            },   
            openEmail(){
            this.emailAD=true;
            this.phone=false;
            },
            openPhone(){
            this.emailAD=false;
            this.phone=true;
            },
            viewModal(){
             this.modal=true;
            },
    viewInfo(){
 axios.get('customerInfo').then((res)=>{
       this.infos=res.data.customer;
      })
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
    viewDivision(){
      axios.get('deliveryLocationWeb').then((res)=>{
       this.divisions=res.data.division;
      })
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
    viewPurchaseProduct() {
      axios
        .get("purchaseProductGet")

        .then((res) => {
          this.purchaseproducts = res.data.productgt;
        })
        .catch((err) => console.log(err));
    },
    openModel() {
      this.myModl = true;
    },
    addCart(pro, p) {
      var findProduct = this.carts.find((o) => o.id === pro.id);
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
      var findProduct = this.carts.find((o) => o.id === pro.id);
      findProduct.qun++;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      findProduct.discount = findProduct.qun * findProduct.offerPrice;
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
        findProduct.discount = findProduct.qun * findProduct.offerPrice;
        this.storeCart();
        this.animated = true;
      }
    },
    removeCart(index) {
      this.carts.splice(index, 1);
      this.storeCart();
    },
    viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
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
    storeCart(pro) {
      let parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },
    viewMenuCat() {
      axios
        .get("viewMenuCat")
        .then((res) => {
          this.menucats = res.data.menucatlist;
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
    viewSearchProduct() {
      axios
        .get("searchProductView")
        .then((res) => {
          this.searchProduct = res.data.productget;
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
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.pnames = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewMenu() {
      axios
        .get("productView/create")
        .then((res) => {
          this.menus = res.data.menulist;
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

    viewProductCat() {
      fetch("api/productcat")
        .then((res) => res.json())
        .then((res) => {
          this.pcats = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewSlider() {
      fetch("api/sliderhome")
        .then((res) => res.json())
        .then((res) => {
          this.sliders = res.data;
        })
        .catch((err) => console.log(err));
    },
    getProductName(product) {
      let pname = this.stripTags(product.product_name.pname);

      return pname.length > 35 ? pname.substring(0, 35) + "..." : pname;
    },
    getProductNameitem(item) {
      let pname = this.stripTags(item.product_name.pname);

      return pname.length > 35 ? pname.substring(0, 35) + "..." : pname;
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
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    stripTags(text) {
      return text.replace(/(<([^>]+)>)/gi, "");
    },
    search(val) {
      var app = this;
      axios.get("searchProduct/" + val).then(function (response) {
        app.result = response.data;
      });
    },
  },
  watch: {
    searchItem: function (val) {
  
          this.$router.push({ name: "searchproduct" });
    
      this.search(val);
      if (!this.searchItem) {
        this.resultDiv.display = "none";
        this.slider = true;
        this.category = true;
        this.categoryItem = true;
      } else {
        this.resultDiv.display = "block";
        this.slider = false;
        this.category = false;
        this.categoryItem = false;
      }
    },
  },
};
</script>
