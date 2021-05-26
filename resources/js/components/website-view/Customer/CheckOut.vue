<template>
  <div>
    <div class="container-fluid mt-5">
      <div
        class="col-12 col-md-9 offset-md-1 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded"
      >
        <h3 class="checkout1">Check Out</h3>

        <div class="row">
          <div class="col-12 col-xs-12 col-md-8">
            <table
              class="table table-striped d-none d-sm-block"
              style="width: 100%"
            >
              <tbody>
                <tr v-for="cart in carts" :key="cart.id">
                  <td>
                    <img
                      :src="'productImage/' + cart.image"
                      height="50"
                      width="50"
                    />
                  </td>
                  <td style="width: 26%">
                    <p class="cartpname">
                      <span
                        v-for="pname in pnames"
                        v-if="pname.id == cart.pname"
                        >{{ pname.pname }}
                      </span>
                    </p>
                  </td>
                  <td>Qty.{{ cart.qun }}</td>
                  <td>Dis.{{ cart.discount }}</td>
                  <td>{{ cart.price }}TK</td>
                </tr>
              </tbody>
            </table>
   
            <center><button v-if="showRe" @click.prevent="show()" class="btn btn-info"><i class="fas fa-plus"></i>&nbsp;Receiver Information</button> 
  <button v-if="hideRe" @click.prevent="hide()" class="btn btn-info"><i class="fas fa-minus"></i>&nbsp;Receiver Information</button> 
            </center>
          <div v-if="showR">
            <div class="form-group mt-2">
              <input
                type="text"
                v-model="rePhone"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Receiver Phone Number"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                v-model="reAddress"
                placeholder=" Delivery Address"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
            <div class="col-sm-8" style="display:none">
              <input
                v-model="invoiceNo"
                type="text"
                class="form-control"
                placeholder="Invoice No"
                disabled
              />
            </div>
             <div class="row mt-3">
    <div
                class="form-group col-md-6"
               
              >             
               <label style="margin-left: 6%;">Delivery Date</label>
                <div class="col-sm-8">
                
                     <input type="date"
           v-model="deliveryDate"
                class="form-control"
                
              > 
              
              </div>
              <span v-if="ddate" style="color:red;margin-left: 6%;">Select Delivery Date </span>
              </div>
   <div class="form-group col-md-6">
      <label for="inputState">Delivery Time</label>
      <select v-model="deliveryTime" id="inputState" class="form-control">
        
        <option value="8:00AM-9:00AM ">8:00&nbsp;AM-9:00&nbsp;AM</option>
        <option value="9:00AM-10:00AM">9:00&nbsp;AM-10:00&nbsp;AM</option>
        <option value="10:00AM-11:00AM">10:00&nbsp;AM-11:00&nbsp;AM</option>
        <option value="11:00AM-12:00PM">11:00&nbsp;AM-12:00&nbsp;PM</option>
        <option value="12:00PM-1:00PM">12:00&nbsp;PM-1:00&nbsp;PM</option>
        <option value="1:00PM-2:00PM">1:00&nbsp;PM-2:00&nbsp;PM</option>
        <option  value="2:00PM-3:00PM">2:00&nbsp;PM-3:00&nbsp;PM</option>
        <option  value="3:00PM-4:00PM">3:00&nbsp;PM-4:00&nbsp;PM</option>
        <option  value="4:00PM-5:00PM">4:00&nbsp;PM-5:00&nbsp;PM</option>
        <option  value="5:00PM-6:00PM">5:00&nbsp;PM-6:00&nbsp;PM</option>
        <option  value="6:00PM-7:00PM">6:00&nbsp;PM-7:00&nbsp;PM</option>
        <option  value="7:00PM-8:00PM">7:00&nbsp;PM-8:00&nbsp;PM</option>
        <option  value="8:00PM-9:00PM">8:00&nbsp;PM-9:00&nbsp;PM</option>
        <option  value="9:00PM-10:00PM">9:00&nbsp;PM-10:00&nbsp;PM</option>
      </select>
        <span v-if="dtime" style="color:red">Select Delivery Time </span>
    </div>
  </div>
          </div>

          <div class="d-md-none">
            <div class="col-12 col-md-12 col-xs-12">
              <div v-for="cart in carts" :key="cart.id">
                <img :src="'productImage/' + cart.image" class="cartImg" />
                <small
                  ><span v-for="pname in pnames" v-if="pname.id == cart.pname"
                    >{{ pname.pname }}
                  </span></small
                >

                <small>Qty.{{ cart.qun }}&nbsp;{{ cart.price }}.TK</small>
              </div>
            </div>
          </div>

          <div
            class="col-12 col-md-4 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <h5 class="checkout">
              <i class="fas fa-map-marker-alt"></i>&nbsp;Shipping & Billing
            </h5>
            <span style="font-weight: bold; color: #b3044e94"
              ><i class="fas fa-map-marker-alt"></i>&nbsp;{{ infos.name }}</span
            ><br />
            <p>{{ infos.presentAddress }}</p>
            <hr />
            <span style="font-weight: bold; color: #b3044e94"
              ><i class="fas fa-phone"></i>&nbsp;{{ infos.phone }}</span
            ><br />
            <hr />
            <h5 class="checkout">
              <i class="far fa-sticky-note"></i>&nbsp;&nbsp;Order Summery
            </h5>

            <table class="table">
              <tbody>
                <tr>
                  <td style="padding: 5px">Discount</td>
                  <td style="padding: 5px">{{ discount }}TK</td>
                </tr>
                <tr>
                  <td style="padding: 5px">Total</td>
                  <td style="padding: 5px">{{ totalprice }} TK</td>
                </tr>
              </tbody>
            </table>
            <center>
              <button @click.prevent="order()" class="btn btn-danger">
                Proceed
              </button>
            </center>
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
        <div v-if="badge!=0">
          <center><router-link    :to="{ name: 'checkout' }" class="btn btn-info" style="color:white">Please order</router-link> </center>
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "Quantity",
  components: {
    AnimatedNumber,
    DatePicker,
  },
  data() {
    return {
       deliveryDate:'',
    deliveryTime:'',
      rePhone: "",
      reAddress: "",
      total:"",
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

      badge: "0",
      qun: 1,
      pid: "",

      totalprice: "0",
      discount: "0",
      pnames: [],
      infos: [],
      orders: [],
      invoiceNo: "",
      showR:false,
      showRe:true,
      hideRe:false,
       animated: false,
       ddate: false,
       dtime: false,
    };
  },

  async mounted() {
    this.viewCart();
    this.viewProductName();
    this.viewInfo();
    this.invoiceGet();
  },

  methods: {
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
show(){
this.showR=true;
this.showRe=false;
this.hideRe=true;
},
hide(){
this.showR=false;
this.showRe=true;
this.hideRe=false;
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

    storeCart(pro) {
      let parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },

    order() {
      let data = {
        cart: JSON.stringify(this.carts),
        invoice: this.invoiceNo,
        phone: this.rePhone,
        address: this.reAddress,
        caddress: this.infos.presentAddress ,
        cphone: this.infos.phone ,
        total: this.totalprice ,
        discount: this.discount ,
        deliveryDate: this.deliveryDate,
        deliveryTime: this.deliveryTime,
      };

      axios.post("order", data).then((res)=>{
             if (res.data.deliveryDate) {
               this.playSoundError();
            this.ddate=true;
             }    else{
             if (res.data.deliveryTime) {
                  this.playSoundError();
                   this.ddate=false;
            this.dtime=true;
             }
             else{
        this.invoiceGet();
       localStorage.removeItem("carts");
       this.viewCart();
        this.$router.push({ name: "payment",params: { id: this.invoiceNo } });
         }
             }
      });
     
    },
    invoiceGet() {
      axios.get("order").then((res) => {
        this.invoiceNo = res.data.purchaseInvoiceIncrement;
      });
    },
     playSoundError() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233574/error.mp3"
      );
      audioFile.play();
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.pnames = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewInfo() {
      axios.get("customerInfo").then((res) => {
        this.infos = res.data.customer;
      });
    },
  },
};
</script>


