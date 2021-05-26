<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-xs-12 col-md-5 offset-md-3 mt-4 p-4  profilebox">
          <center>
            <h3 class="align-center cush">
              <i class="fas fa-trash-restore-alt"></i>&nbsp; Success Order List
            </h3>
          </center>
          <table class="table table-striped table-responsive ml-5">
            <thead style="background-color: rgb(161, 200, 182)">
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Invoice_No</th>
                <th scope="col">Date</th>
                <th scope="col">Statement</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(invoice, index) in invoices" :key="invoice.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>#{{ invoice.invoiceNo }}</td>
                <td>{{ moment(invoice.created_at).format("DD-MM-YYYY") }}</td>

                <td>
                  <button
                   data-toggle="modal" :data-target="'#' +'success'+ invoice.invoiceNo"
                  
                    class="btn btn-primary"
                  >
                    Details
                  </button>
                </td>
                                       <div class="modal fade" :id="'cancel'+ invoice.invoiceNo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header" style="background-color: rgba(101, 155, 85, 0.86)">
     
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
     <div>
                    <center>
                      <h5>
                        {{ moment(invoice.created_at).format("DD-MM-YYYY") }}
                      </h5>

                      <p class="mtop">Order No #{{ invoice.invoiceNo }}</p>
                    </center>
                    <table class="table d-none d-sm-block">
                      <tbody>
                        <tr
                          v-for="(order, index) in orders"
                          v-if="order.invoiceNo == invoice.invoiceNo"
                        >
                          <!-- <th >{{index+1}}</th> -->
                          <td>
                            <img
                              :src="'productImage/' + order.image"
                              class="cartImg"
                            />
                          </td>
                          <td
                            style="width: 193px"
                            v-for="pnam in pnames"
                            v-if="pnam.id == order.pId"
                          >
                            {{ pnam.pname }}
                          </td>

                          <td>qty.{{ order.qty }}</td>
                          <td>Dis.{{ order.discount }}TK</td>
                          <td>CashBack.50TK</td>
                          <td>{{ order.price }}.TK</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="d-md-none">
                      <div
                        class="col-12 col-xs-12"
                        v-for="(order, index) in orders"
                        v-if="order.invoiceNo == invoice.invoiceNo"
                      >
                        <img
                          :src="'productImage/' + order.image"
                          class="cartImg"
                        />
                        <small
                          v-for="pnam in pnames"
                          v-if="pnam.id == order.pId"
                        >
                          {{ pnam.pname }}</small
                        >

                        <small
                          >qty.{{ order.qty }}&nbsp;Dis.{{
                            order.discount
                          }}TK&nbsp;CashBack.50TK&nbsp;{{
                            order.price
                          }}.TK</small
                        >
                      </div>
                      <hr />
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-12 col-md-8 col-xs-12"></div>

                      <div
                        class="col-12 col-md-4 mb-2 col-xs-12"
                        style="
                          background: rgba(225, 238, 234, 0.64) none repeat
                            scroll 0% 0%;
                          color: white;
                        "
                      >
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="padding: 5px">Total</td>
                              <td style="padding: 5px">
                                <span>{{ invoice.totalPrice }} TK</span>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 5px">Discount</td>
                              <td style="padding: 5px">
                                {{ invoice.totalDiscount }} TK
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 5px">Cash Back</td>
                              <td style="padding: 5px">300 TK</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
      </div>
    
    </div>
  </div>
</div>
            
              </tr>
            </tbody>
          </table>
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
          <span class="tk">৳</span>&nbsp;<animated-number :value="totalprice" />
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
      <div class="col-12 col-md-12 cartml overflow-auto" style="height: 362px">
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
      <div v-if="badge != 0">
        <center>
          <router-link
            :to="{ name: 'checkout' }"
            class="btn btn-info"
            style="color: white"
            >Please order</router-link
          >
        </center>
      </div>
    </div>
  </div>
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
  <!-- ./sidebarcartbox -->
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import DatePicker from "vue2-datepicker";
import moment from "moment";
import "vue2-datepicker/index.css";
export default {
  name: "Quantity",
  components: {
    AnimatedNumber,
    DatePicker,
  },
  data() {
    return {
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
      invoices: [],
      headerBgVariant: "info",
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerTextVariant: 'light',
      animated: false,
      moment: moment,
    };
  },

  async mounted() {
    this.viewCart();
    this.viewProductName();
    this.viewInfo();
    this.invoiceGet();
    this.orderGet();
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
    show() {
      this.showR = true;
      this.showRe = false;
      this.hideRe = true;
    },
    hide() {
      this.showR = false;
      this.showRe = true;
      this.hideRe = false;
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

    invoiceGet() {
      axios.get("order").then((res) => {
        this.invoices = res.data.orderSuccess;
      
      });
    },
    orderGet() {
      axios.get("order").then((res) => {
        this.orders = res.data.orderInfo;
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
      });
    },
  
  },
};
</script>

