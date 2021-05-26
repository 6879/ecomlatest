<template>
  <div>
    <div class="container-fluid mt-5">
      <div
        class="col-12 col-md-9 offset-md-1 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded"
      >
        <h3 class="checkout1">Select Payment Method</h3>
           <div class="row">
  <div class="col-6 col-md-3 col-xs-6 mt-2 mb-2" @click.prevent="card">
    <div class="card">
      <div class="card-body">
         <center><img :src="'frontend/image/payment_icons.webp'" width=100%;/>
        <small> Credit/Debit Card</small>
         </center>
    </div>
  </div>
  </div>
  <div class="col-6 col-md-3 col-xs-6 mt-2 mb-2" @click.prevent="bkash">
    <div class="card">
      <div class="card-body">
         <center><img :src="'frontend/image/bkash.webp'" class="pay" />
<br>
         <small>bKash</small>

         </center>
    </div>
  </div>
  </div>
  <div class="col-6 col-md-3 col-xs-6 mt-2 mb-2" @click.prevent="cash">
    <div class="card">
      <div class="card-body">
         <center><img :src="'frontend/image/cash.png'" class="pay" />
<br>
         <small>Cash On Delivery</small>
         </center>
    </div>
  </div>
  </div>
  
  <div class="col-6 col-md-3 col-xs-6 mt-2 mb-2" @click.prevent="wallet">
    <div class="card">
      <div class="card-body">
         <center><img :src="'frontend/image/wallet.jpg'" class="pay" />
<br>
       <small>  Wallet</small>
         </center>
    </div>
  </div>
  </div>
  <div class="col-12 col-md-12 mt-3" style="text-align:center" v-if="cashShow">
 <button class="btn btn-info" @click.prevent="paymentInfo">Confirm</button>
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
   paymentType:"",
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
     
       animated: false,
     
       cashShow: false,
    };
  },

  async mounted() {
    this.viewCart();
    this.viewProductName();
    this.viewInfo();
  
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

    paymentInfo() {
      let data = {
      
        paymentType: 1,
      };

      axios.post(`paymanetUpdate/${this.$route.params.id}`, data).then((res)=>{
             
     
       this.viewCart();
        this.$router.push({ name: "customerorder" });
      
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
       viewInfo() {
      axios.get("customerInfo").then((res) => {
        this.infos = res.data.customer;
      });},
    cash() {
     this.cashShow=true;
    },
    card() {
     this.cashShow=false;
    },
    wallet() {
     this.cashShow=false;
    },
    bkash() {
     this.cashShow=false;
    },
  },
};
</script>


