<template>
  <div>
    <div>
      <div class="container-fluid mt-1" :style="resultDiv">
        <div class="col-12 col-md-12 col-xs-12">
          <div class="row">
            <div
              class="col-6 col-md-2 col-xs-4 col-sm-12 hovereffect paddingImage2"
              v-for="res in result"
              :key="res.id"
            >
              <div
                class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
                v-for="item in searchProduct"
                v-bind:key="item.id"
                v-if="item.pname == res.id"
              >
                <figure>
                  <img
                    class="img-fluid box3Images"
                    :src="'productImage/' + item.image"
                  />
                </figure>
                <div class="overlay">
                  <div
                    style="text-align: center"
                    v-for="itemOffer in offers"
                    v-if="itemOffer.productId == item.pname"
                  >
                    <a class="info" @click="addCart(item, itemOffer)"
                      >Add To Shopping Cart</a
                    >
                  </div>
                  <div style="text-align: center" v-if="item.offer == null">
                    <a class="info" @click="addCart(item, item)"
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
                    <a   data-toggle="modal"  :data-target="'#' + 'search' +item.pname"  class="btn btn-success"
                      >Details</a
                    >
                  </div>f
                </div>
   <!-- Modal -->
                <div
                  class="modal fade"
                  :id="'search' + item.pname"
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
                    </div>
                  </div>
                </div>
                   <!-- Modal    -->
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  style="height: 85px"
                  v
                >
                  <p style="text-align: left">{{ getProductNameitem(item) }}</p>
                </div>

                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage"
                  v-for="offerItem in offers"
                  :key="offerItem.id"
                >
                  <div class="row" v-if="offerItem.productId == item.pname">
                    <div class="col-6 col-md-4 col-xs-4 amountBox paddingImage">
                      <center>
                        <bdi>
                          <p class="amount dPrice">
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
                          <span class="tk">৳</span>&nbsp;<del
                            >{{ item.salesPrice }}&nbsp;</del
                          >
                          <small>
                            <span class="amount"
                              >{{ offerItem.offerPrice }}&nbsp;</span
                            ><span
                              v-if="offerItem.ammountType == 1"
                              class="amount"
                              >TK</span
                            ><span
                              class="amount"
                              v-if="offerItem.ammountType == 2"
                              >%</span
                            >&nbsp;<span class="amount">Off</span></small
                          >
                        </p>
                      </center>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-12 col-xs-12 paddingImage">
                  <div class="row" v-if="item.offer == null">
                    <div
                      class="col-6 col-md-12 col-xs-4 amountBox paddingImage"
                    >
                      <center>
                        <p class="amount dPrice">
                          <span class="tk">৳</span>&nbsp;{{ item.salesPrice }}
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
                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage3"
                  v-for="offerItem in offers"
                  v-if="offerItem.productId == item.pname"
                >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(item, offerItem)"
                        >Add TO Cart</span
                      >
                    </p>
                  </center>
                </div>

                <div
                  class="col-12 col-md-12 col-xs-12 paddingImage3"
                  v-if="item.offer == null"
                >
                  <center>
                    <p class="cartBox" style="color: ">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i
                      >&nbsp;<span @click="addCart(item, item)"
                        >Add TO Cart</span
                      >
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
    <!--Login Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
          <span data-toggle="modal" data-target="#exampleModal1"  data-dismiss="modal" aria-label="Close" class="badge badge-info">Forgate Password?</span>
        </center>
      
              </div>
      <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
       <center> <p> This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" data-reactid=".32sn2ofjqk.1.0.0.0.2.0.6.0.1">Privacy Policy</a>
        and <a href="https://policies.google.com/terms" target="_blank" data-reactid=".32sn2ofjqk.1.0.0.0.2.0.6.0.3">Terms of Service</a>
        </p></center>
              </div>
    </div>
  </div>
      </div>
     
    </div>
  </div>
</div>
<!--./Login Modal -->
  <!--Forgate pass Modal -->
  <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style="background: #dce463;">
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
      </div>
     
    </div>
  </div>
</div>
  <!--./Forgate pass Modal -->
     <!-- ModelMobile Login -->
            <!-- Modal -->
<div class="modal fade" id="exampleModal2in" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #6898f4;">
     
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <ul
                  class="list-group"
                  style="list-style-type: none"
                  v-if="$userId != ''"
                >
                  <li
                    class="list-group-item"
                 data-dismiss="modal" aria-label="Close"
                  >
                    <router-link :to="{ name: 'customerprofile' }"
                      ><i class="fa fa-user" aria-hidden="true"></i> My
                      Profile</router-link
                    >
                  </li>
                  <li
                    class="list-group-item"
                   data-dismiss="modal" aria-label="Close"
                  >
                    <router-link :to="{ name: 'customerorder' }"
                      ><i class="fas fa-cube"></i> My Order</router-link
                    >
                  </li>
                  <li
                    class="list-group-item"
                   data-dismiss="modal" aria-label="Close"
                  >
                    <router-link :to="{ name: 'balancesheet' }"
                      ><i class="far fa-money-bill-alt"></i>

                      Balance Sheet</router-link
                    >
                  </li>
                  <li
                    class="list-group-item"
                  data-dismiss="modal" aria-label="Close"
                  >
                    <router-link :to="{ name: 'customerregi' }"
                      ><i class="fa fa-tasks" aria-hidden="true"></i>
                      Promotion</router-link
                    >
                  </li>
                  <li
                    class="list-group-item"
                   data-dismiss="modal" aria-label="Close"
                  >
                    <router-link :to="{ name: 'promotionalteam' }"
                      ><i class="fab fa-bandcamp"></i> Promotional
                      Team</router-link
                    >
                  </li>
                  <li
                    class="list-group-item"
                  data-dismiss="modal" aria-label="Close"
                  >
                    <router-link :to="{ name: 'dailycommission' }"
                      ><i class="fas fa-file-invoice-dollar"></i> Daily
                      Commission</router-link
                    >
                  </li>
                  <li
                    class="list-group-item"
                    data-dismiss="modal" aria-label="Close"
                  >
                    <router-link :to="{ name: 'customermessage' }"
                      ><i class="fa fa-envelope" aria-hidden="true"></i>
                      Message&nbsp;<span class="badge badge-danger"
                        >12</span
                      ></router-link
                    >
                  </li>
                  <li
                    class="list-group-item"
                   data-dismiss="modal" aria-label="Close"
                  >
                    <router-link :to="{ name: 'complain' }"
                      ><i class="fa fa-bug" aria-hidden="true"></i>
                      Complain</router-link
                    >
                  </li>

                  <li
                    class="list-group-item"
                   data-dismiss="modal" aria-label="Close"
                  >
                    <a href="#" @click.prevent="logout()"
                      ><i class="fas fa-sign-out-alt"></i> Logout</a
                    >
                  </li>
                </ul>
                <ul class="" style="list-style-type: none" v-if="$userId == ''">
                  <li
                data-dismiss="modal" aria-label="Close"
                    class="nav-item active"
                  >
                    <router-link :to="{ name: 'login' }" class="nav-link"
                      ><span class="sidebarColor"
                        ><i class="fa fa-user" aria-hidden="true"></i
                        >&nbsp;Login</span
                      ></router-link
                    >
                  </li>
                </ul>
      </div>
     
    </div>
  </div>
</div>
           
            <!-- ./Modal -->
    <div>
      <div class="col-12 col-md-12 col-sm-12 col-xs-12 headerdesign">
        <div class="row">
          <div
            class="col-2 col-md-2 col-sm-2 col-xs-1"
            style="margin-top: 0.4rem !important"
          >
            <div v-for="logo in logos" :key="logo.id">
              <a
                class="navbar-brand d-none d-sm-block"
                href="http://myscapon.com/"
              >
                <img width="100%" height="50" :src="'images/' + logo.image" />
              </a>
            </div>
            <div class="mt-0 d-md-none">
              <a
                style="margin-top: 11px"
                
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
            <div class="dropdown-content locationDrop">
              <div
                v-for="divi in divisions"
                :key="divi.id"
                class="locationborder"
              >
                <router-link
                  :to="{
                    name: 'districtlocation',
                    params: { id: divi.divisionId },
                  }"
                  ><p class="dlist">
                    <img src="mapImage/bdflag.webp" width="15%" height="5%" />{{
                      divi.division.name
                    }}
                  </p></router-link
                >
              </div>
            </div>
          </div>
          <div
            class="col-2 col-md-1 pt-4 pl-3 pr-1 lang col-sm-1 col-xs-12 d-none d-sm-block headerhover hdbox"
            style="padding-left: 1.5rem !important"
          >
            <p><span style="color: red">EN </span>| বাং</p>
          </div>
          <div
            v-if="infos == ''"
            class="col-2 col-md-1 pt-4 col-sm-1 col-xs-4 d-none d-sm-block headerhover hdbox"
          >
            <a @click.prevent="viewModal()" data-toggle="modal" data-target="#exampleModal">
              <i class="fa fa-user-plus" aria-hidden="true"></i
            ></a>
          </div>
          <div
            v-if="notlogin == true"
            class="col-2 col-md-1 pt-4 col-sm-1 col-xs-4 d-none d-sm-block headerhover hdbox"
          >
            <a @click.prevent="viewModal()" data-toggle="modal" data-target="#exampleModal">
              <i class="fa fa-user-plus" aria-hidden="true"></i
            ></a>
          </div>
       



          <div
            v-if="infos.name"
            class="dropdown col-2 col-md-1 pt-4 col-sm-1 col-xs-4 d-none d-sm-block headerhover hdbox"
          >
            {{ infos.name }}
            <div class="dropdown-content prof">
              <router-link :to="{ name: 'customerprofile' }"
                ><i class="fa fa-user" aria-hidden="true"></i> My
                Profile</router-link
              >
              <router-link :to="{ name: 'customerorder' }"
                ><i class="fas fa-cube"></i> My Order</router-link
              >
              <router-link :to="{ name: 'balancesheet' }"
                ><i class="far fa-money-bill-alt"></i>

                Balance Sheet</router-link
              >
              <router-link :to="{ name: 'customerregi' }"
                ><i class="fa fa-tasks" aria-hidden="true"></i>
                Promotion</router-link
              >
              <router-link :to="{ name: 'promotionalteam' }"
                ><i class="fab fa-bandcamp"></i> Promotional Team</router-link
              >
              <router-link :to="{ name: 'dailycommission' }"
                ><i class="fas fa-file-invoice-dollar"></i> Daily
                Commission</router-link
              >
              <router-link :to="{ name: 'customermessage' }"
                ><i class="fa fa-envelope" aria-hidden="true"></i>
                Message&nbsp;<span class="badge badge-danger"
                  >12</span
                ></router-link
              >
              <router-link :to="{ name: 'complain' }"
                ><i class="fa fa-bug" aria-hidden="true"></i>
                Complain</router-link
              >

              <a href="#" @click.prevent="logout()"
                ><i class="fas fa-sign-out-alt"></i> Logout</a
              >
            </div>
          </div>

          <div class="col-2 mt-2 d-md-none col-xs-4" style="top: 11px">
            <button
              style="background: #eeb243"
              class="btn btn"
              data-toggle="modal" data-target="#exampleModal2in"
            >
              <i class="fas fa-ellipsis-v d-md-none mt-2 menuHeight"></i>
            </button>
         
          </div>
        </div>
      </div>

      <div class="d-md-none">
        <div>
          <!-- <b-sidebar id="sidebar-backdrop" backdrop shadow>
            <div v-for="logo in logos" :key="logo.id">
              <figure>
                <img class="img-fluid logoImg" :src="'images/' + logo.image" />
              </figure>
            </div>
            <div class="px-3 py-2 mt-0">
              <center class="mtside">
                <router-link :to="{ name: 'offerview' }"
                  ><i class="fa fa-gift"></i> OFFER<span class="amount"
                    >&nbsp;<b>(45)</b></span
                  ></router-link
                >
              </center>
            
            </div>
          </b-sidebar> -->
        </div>
      </div>
    </div>
    <!-- ./sidenav and searchbar  -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
      form: new Form({ email: "", password: "", phone: "" }),
      userName: "",
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
      login: false,
      notlogin: false,
      modal: true,
      emailAD: false,
      phone: true,
    
     
      quantity: 1,
      resultDiv: {
        display: "none",
      },
    };
  },

   mounted() {
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
        .post("/vendor/login", {
          email: this.form.email,
          phone: this.form.phone,
          password: this.form.password,
        })
        .then((res) => {
          localStorage.setItem("usertoken", res.data.token);
          this.form.email = "";
          this.form.password = "";
          this.form.phone = "";
          this.login = true;
          this.viewInfo();
          this.notlogin = false;
          this.modal = false;
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
        });

      this.emitMethod();
    },
    userGet() {
      axios.get("/searchUser?q=" + this.userName).then((res) => {
        if (res.data == "") {
          return (this.getusers = res.data.getuser);
        } else {
          this.getusers = res.data.getuser;
        }
      });
    },
    emitMethod() {
      EventBus.$emit("logged-in", "loggedin");
    },

    logout() {
      axios.post("/logout").then((res) => {
        window.location.href = "/";
        this.infos.name = "";
        this.notlogin = true;
        this.modal = true;
      });
    },
    async sendSms() {
      this.userName = "";
      Toast.fire({
        icon: "success",
        title: "Message has been sent...",
      });
      let url =
        "http://sms.doofazit.com/api/v1/send?api_key=44515814867233291581486723&contacts=" +
        this.getusers.phone +
        "&senderid=8801844532643&msg=Your password is:" +
        this.getusers.pass;

      fetch(url);
      // const data = await res.json();
      // this.sms = data;
    },
    openEmail() {
      this.emailAD = true;
      this.phone = false;
    },
    openPhone() {
      this.emailAD = false;
      this.phone = true;
    },
    viewModal() {
      this.modal = true;
    },
    viewInfo() {
      axios.get("customerInfo").then((res) => {
        this.infos = res.data.customer;
      });
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
    viewDivision() {
      axios.get("deliveryLocationWeb").then((res) => {
        this.divisions = res.data.division;
      });
    },
    viewCart() {
      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
        this.badge = this.carts.length;

        this.totalprice = this.carts.reduce((total, item) => {
          return total + this.qun * item.price;
        }, 0);
        this.discount = this.carts.reduce((total, item) => {
          return total + this.qun * item.discount;
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
        if (p.productId == pro.productNameId) {
          this.cartadd.discount = p.offerPrice;
          this.cartadd.offerPrice = p.offerPrice;
          this.cartadd.price = p.totalPrice;
          this.cartadd.salesPrice = p.totalPrice;
        }
        if (p.productId == pro.pname) {
          this.cartadd.discount = p.offerPrice;
          this.cartadd.offerPrice = p.offerPrice;
          this.cartadd.price = p.totalPrice;
          this.cartadd.salesPrice = p.totalPrice;
        } else {
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
      var app1 = this;
      axios.get("searchProduct/" + val).then(function (response) {
        app1.result = response.data;
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
