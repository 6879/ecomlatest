<template>
  <div>
    <div class="container-fluid mt-3">
      <div
        class="col-12 col-md-12 col-xs-12"
        v-for="offer in offers"
        :key="offer.id"
      >
        <div class="row">
          <div class="col-12 col-md-8 col-xs-12 offerMaindiv border">
            <div class="row">
              <div class="col-12 col-md-8 col-xs-12 p-2">
                <img
                  class="img-fluid"
                  :src="'offerImage/' + offer.offerImage"
                />
              </div>
              <div
                class="col-12 col-md-3 col-xs-12 p-2 hovereffect"
                v-for="product in products"
                v-if="product.productNameId == offer.productId"
              >
                <div class="card location">
                  <img
                    :src="'productImage/' + product.image"
                    width="145"
                    height="145"
                  />

                  <div class="overlay">
                    <div style="text-align: center">
                      <a class="info" @click="addCart(product)"
                        >Add To Shopping Cart</a
                      >
                    </div>
                    <div
                      class="hovercartoffer"
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
                      :data-target="'#' + 'offer' + product.productNameId"
                        class="btn btn-success"
                        >Details</a
                      >
                    </div>
                  </div>
              
                   <!-- Modal -->
                <div
                  class="modal fade"
                  :id="'offer' + product.productNameId"
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
                          <h4 v-for="pname in pnames" v-if="pname.id==product.pname">{{ pname.pname }}</h4>
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
                          <p>
                            <span class="cost"
                              ><span>৳</span> {{ product.totalPrice }}</span
                            >&nbsp;&nbsp; <span class="tk">৳</span>&nbsp;<del>{{
                              product.salesPrice
                            }}</del
                            >&nbsp;&nbsp;
                            <span style="color: red"
                              >{{ product.offerPrice
                              }}<span v-if="product.ammountType == 1">TK</span
                              ><span v-if="product.ammountType == 2">%</span
                              >&nbsp;Off</span
                            >
                          </p>
                          <div class="btn-ground">
                            <div class="row">
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
                                      @click="addCart(product)"
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
                                      @click="addCart(product)"
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
                                  @click="addCart(product)"
                                  onclick="openNav()"
                                 data-dismiss="modal"
                          aria-label="Close"
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
                                  data-dismiss="modal"
                          aria-label="Close"
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
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.
                              </p>
                            </div>
                            <div id="menu2" class="container tab-pane fade">
                              <br />
                              <h3>Menu 2</h3>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.
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
                  <div class="card-body p-1 text-center">
                    <small style="height: 100px" v-for="pname in pnames" v-if="pname.id==product.pname">
                      {{ pname.pname }}
                    </small>
                    <p style="text-align: center">
                      <span style="color: #b70901" class="cost"
                        ><span>৳</span> {{ product.totalPrice }}</span
                      >&nbsp;&nbsp; <span class="tk">৳</span>&nbsp;<del
                        class="text-muted"
                        >{{ product.salesPrice }}</del
                      >&nbsp;&nbsp;
                      <small>
                        <span style="color: red"
                          >{{ product.offerPrice
                          }}<span v-if="product.ammountType == 1">TK</span
                          ><span v-if="product.ammountType == 2">%</span
                          >&nbsp;Off</span
                        ></small
                      >
                    </p>
                    <div class="col-12 col-md-12 col-xs-12 paddingImage3">
                      <center>
                        <p class="cartBox">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i
                          >&nbsp;<span @click="addCart(product)"
                            >Add To Cart</span
                          >
                        </p>
                      </center>
                    </div>
                    <div
                      class="col-12 col-md-12 col-xs-12 paddingImage3 addcartoffer p-0 m-0"
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
      </div>
    </div>
    <!-- cartbox -->
    <div>
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
  name: "Quantity",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      offers: [],
      products: [],
      pnames: [],
      carts: [],
      purchaseproducts:[],
      badge: "0",
      qun: 1,
      totalprice: "0",    
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
        discount: "0",
      animated: false,
    };
  },
  async mounted() {
    this.viewOffer();
    this.viewProduct();
    this.viewCart();
    this.viewProductName();
  },
  methods: {
    viewOffer() {
      axios.get("offerGet").then((res) => {
        this.offers = res.data.offer;
      });
    },
    viewProduct() {
      axios
        .get("offerView")
        .then((res) => {
          this.products = res.data.offerView;
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
    storeCart(pro) {
      let parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },
    viewPurchaseProduct() {
      axios
        .get("purchaseProductGet")

        .then((res) => {
          this.purchaseproducts = res.data.productgt;
        })
        .catch((err) => console.log(err));
    },
    addCart(pro) {
      var findProduct = this.carts.find((o) => o.pname === pro.pname);
      if (findProduct) {
        findProduct.qun++;
        findProduct.price = findProduct.qun * findProduct.totalPrice;
        this.storeCart();
        this.animated = true;
      } else {
        this.cartadd.id = pro.id;
        this.cartadd.name = pro.name;
        this.cartadd.price = pro.totalPrice;
        this.cartadd.salesPrice = pro.totalPrice;
        this.cartadd.discount = pro.offerPrice;
        this.cartadd.offerPrice = pro.offerPrice;
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
      var findProduct = this.carts.find((o) =>o.pname === pro.pname);
      findProduct.qun++;
      findProduct.discount = findProduct.qun * findProduct.offerPrice;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      
      this.storeCart();
      this.animated = true;
    },
    decrement(pro) {
      var findProduct = this.carts.find((o) =>o.pname === pro.pname);
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
  },
};
</script>

