 <template>
  <div>
    <div v-if="!$route.meta.hideDashboard">
      <div class="container-fluid" v-for="menu ,index in  menus" :key="menu.id">
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
              :key="product.categoryId"
              v-if="product.categoryId == menu.id"
            >
             
              <div class="col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
              
              >
         
              <div
              
                
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
            >{{ totalprice }}&nbsp;Discount:<span class="tk">৳&nbsp;</span
            >{{ discount }}
          </p>
        </div>
        <div
          class="col-12 col-md-12 cartml overflow-auto"
          style="height: 362px"
        >
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
                  <p class="cartpname">
                    <span v-for="pname in pnames" v-if="pname.id == cart.pname"
                      >{{ pname.pname }}
                    </span>
                  </p>
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
        <div v-if="badge != 0 && $userId != ''">
          <center>
            <router-link
              :to="{ name: 'checkout' }"
              class="btn btn-info"
              style="color: white"
              >Please order</router-link
            >
          </center>
        </div>
        <div v-else>
          <center>
            <router-link
              :to="{ name: 'login' }"
              class="btn btn-info"
              style="color: white"
              >Please order</router-link
            >
          </center>
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
              <a href="www.myscapon.com">
              <i class="fa fa-home ml-2" aria-hidden="true"></i>
              <p>Home</p>
              </a>
            </div>

            <div class="col-3 col-xs-3">
              <router-link :to="{ name: 'offerview' }">
                <i class="fa fa-gift ml-2" aria-hidden="true"></i>
                <p>Offer</p></router-link
              >
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

            <div class="dropdown col-3 col-xs-3" v-if="$userId != ''">
              <i class="fa fa-user ml-2" aria-hidden="true"></i>
              <p>{{ infos.name }}</p>
            </div>
            <div class="col-3 col-xs-3" v-else>
              <router-link :to="{ name: 'login' }">
                <i class="fa fa-user ml-2" aria-hidden="true"></i>
                <p>Login</p></router-link
              >
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
        discount: "",
        offerPrice: "",
      },
      prices: [],
      pnames: [],
      menucats: [],
      menus: [],
      pcats: [],

      sliders: [],

      units: [],
      colors: [],
      brands: [],

      offers: [],
      pnames: [],
      infos: [],
      limits: [],

      badge: "0",
      qun: 1,
      pid: "",

      totalprice: "0",
      discount: "0",
      animated: false,

      slider: true,
      category: true,
      categoryItem: true,

      quantity: 1,
    };
  },

   mounted() {
    this.viewMenuCat();
    this.viewPrice();
    this.viewCart();
    this.viewMenu();
    this.viewProductCat();
    this.viewProductName();

    this.viewSlider();

    this.viewColor();
    this.viewUnit();
    this.viewBrand();

    this.viewOffer();
    this.viewProductName();
    this.viewInfo();
  },

  methods: {
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
      var findProduct = this.carts.find((o) => o.pname === pro.pname);
      findProduct.qun++;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      findProduct.discount = findProduct.qun * findProduct.offerPrice;
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
          this.prices = res.data.pricegetq;
        
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

    stripTags(text) {
      return text.replace(/(<([^>]+)>)/gi, "");
    },
  },
};
</script>
