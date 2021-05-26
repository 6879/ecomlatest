<template>
  <div>
<div class="container-fluid">
<div class="col-12 col-md-12 mt-4 col-xs-12">
<center>
    <router-link :to="{ name: 'successorder' }" class="btn btn-success"><i class="fas fa-check"></i>&nbsp;Success Order</router-link>
      <router-link :to="{ name: 'cancelorder' }" class="btn btn-danger"><i class="fas fa-trash-restore-alt"></i>&nbsp;Cancel Order</router-link>
</center>
</div>
<div v-for="invoice in invoices" :key="invoice.id" class="col-12 col-md-8 mt-4 p-2 offset-md-1 col-xs-12 profilebox shadow-lg p-3 mb-5 bg-white rounded">
   <div >
    <center>
        <h5 >{{ moment(invoice.deliveryDate).format("DD-MM-YYYY") }}</h5>       
       <p class="mtop">{{invoice.deliveryTime}}</p>
       <p class="mtop"> Order #{{invoice.invoiceNo}}</p>
       <p class="mtop" v-if="invoice.status==0">Shipping Status&nbsp;<span class="badge badge-success " >Pending</span></p>
       <p class="mtop" v-if="invoice.status==1||invoice.status==2||invoice.status==3||invoice.status==5">Shipping Status&nbsp;<span class="badge badge-success " >Processing</span></p>   
       <p class="mtop"  v-if="invoice.status==4||invoice.status==6||invoice.status==7||invoice.status==9">Shipping Status&nbsp;<span class="badge badge-success ">Packaging</span></p>
       <p class="mtop"  v-if="invoice.status==8||invoice.status==10">Shipping Status&nbsp;<span class="badge badge-success ">On going Delivery</span></p>   
       <p class="mtop"  v-if="invoice.status==12">Shipping Status&nbsp;<span class="badge badge-success ">On The Way</span></p>
      
   
   
    </center>
    <table class="table d-none d-sm-block">
 
  <tbody>
    <tr  v-for="(order,index) in orders" v-if="order.invoiceNo==invoice.invoiceNo">
      <!-- <th >{{index+1}}</th> -->
      <td> <img :src="'productImage/'+order.image" class="cartImg" /></td>
      <td style="width: 193px;" v-for="pnam in pnames" v-if="pnam.id==order.pId">{{pnam.pname}}</td>
      
      <td>qty.{{order.qty}}</td>     
      <td>Dis.{{order.discount}}TK</td>
      <td>CashBack.50TK</td>
       <td>{{order.price}}.TK</td>
    </tr>
   
  
   
  </tbody>
</table>
    <div class=" d-md-none">
 
 
   
   
      <div class="col-12 col-xs-12" v-for="(order,index) in orders" v-if="order.invoiceNo==invoice.invoiceNo"> 
     <img :src="'productImage/'+order.image" class="cartImg" />
     <small v-for="pnam in pnames" v-if="pnam.id==order.pId"> {{pnam.pname}}</small>
 
        <small>qty.{{order.qty}}&nbsp;Dis.{{order.discount}}TK&nbsp;CashBack.50TK&nbsp;{{order.price}}.TK</small>
      </div>
      <hr>
      
    
</div>
<hr>
<div class="row">
<div  class="col-12 col-md-8 col-xs-12" style="text-align:center">
  
  <span v-if="invoice.status==0" class="badge badge-info" @click.prevent="cancelOrder(invoice.invoiceNo)"><i class="fas fa-times"></i>&nbsp;Cancel</span>
  <span v-if="invoice.status==0" class="badge badge-info"    data-toggle="modal"  :data-target="'#'+'postdate'+invoice.invoiceNo">Post Date</span>
  <br>
   <div class="badge badge-success" v-if="invoice.status==0||invoice.status==1||invoice.status==2||invoice.status==3||invoice.status==5" @click="messageSeen(invoice.invoiceNo)" @click.prevent="getInvoice(invoice.invoiceNo)" data-toggle="modal" :data-target="'#'+'chatoorder'+invoice.invoiceNo"> 
 <i class="fab fa-facebook-messenger"></i>
 Chat Now <span class="badge badge-danger" v-if="seen==true&&invo==invoice.invoiceNo">New</span>
 </div>
  <!-- chat with order management -->

<div class="modal fade" :id="'chatoorder'+invoice.invoiceNo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header" style="background: #2c83f2;color: wheat;">
        <h5 class="modal-title" id="exampleModalLabel">Invoice No:#{{invoice.invoiceNo}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <div class=" shadow-lg  bg-white rounded" > 

<div class="p-3 mb-1" style="height:177px; overflow-y:scroll" v-chat-scroll>
   <div  v-for="(message, index) in messages" :key="index">

    <span  v-if="message.sender_id==authUsers.id&message.sender_roll==1&message.receiver_roll==3&message.invoiceNo==invoice.invoiceNo">
    
    <div class="chatRight ">
 
    <small >
   {{ message.message }}<br>
   {{ moment(message.created_at).format("DD-MM-YYYY,h:mm:ss") }}
 </small>
    <img :src="'frontend/image/blank.png'" class="rightImg" />
</div>

   </span>


  
    <span  v-if="message.receiver_id==authUsers.id&message.sender_roll==3&message.receiver_roll==1&message.invoiceNo==invoice.invoiceNo">
         
    <div class="chatLeft ">
  
    <small >
   {{ message.message }}<br>
   {{ moment(message.created_at).format("DD-MM-YYYY,h:mm:ss") }}
 </small>
   <img :src="'frontend/image/blank2.jpg'" class="leftImg" /> 
</div>
   
   </span>
  
</div>

</div>
<div >
    
     <input
                    @keydown="sendTypingEvent"
                    @keyup.enter="sendMessage"
                    v-model="newMessage"
                    type="text"
                    name="message"
                    placeholder="Enter your message..."
                    class="form-control">
                    <span class="text-muted" v-if="activeUser" >{{ activeUser.name }} is typing...</span>
</div>
 </div>
      </div>
     
    </div>
  </div>
</div>
 
<!--./ chat with order management -->
   <div class="badge badge-dark"  v-if="invoice.deliveryManId!=null"  @click="messageSeenFromDeliveryMan(invoice.invoiceNo)" @click.prevent="getInvoiceAndDeliveryMan(invoice.invoiceNo,invoice.deliveryManId)" data-toggle="modal"  :data-target="'#'+'chatdman'+invoice.invoiceNo"> 
 <i class="fab fa-facebook-messenger"></i>
 Chat with Delivery Man <span class="badge badge-danger" v-if="seenM==true">New</span>
 </div>
 <!-- chat with Delivery Man -->
 <div class="modal fade"  :id="'chatdman' + invoice.invoiceNo"
                  tabindex="-1"
                  role="dialog"
                  :aria-labelledby="'chatdman' + invoice.invoiceNo">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header" style="background: #2c83f2;color: wheat;">
        <h5 class="modal-title" id="exampleModalLabel">Invoice No:#{{invoice.invoiceNo}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
   <div class=" shadow-lg  bg-white rounded" > 
<!-- <div class="chatBoxHeader">
   
   
</div> -->
<div class="p-3 mb-1" style="height:177px; overflow-y:scroll" v-chat-scroll>
   <div  v-for="(message, index) in messages" :key="index">

    <span  v-if="message.sender_id==authUsers.id&message.sender_roll==1&message.receiver_roll==4&message.invoiceNo==invoice.invoiceNo">
    
    <div class="chatRight ">
 
    <small >
   {{ message.message }}<br>
   {{ moment(message.created_at).format("DD-MM-YYYY,h:mm:ss") }}
 </small>
    <img :src="'frontend/image/blank.png'" class="rightImg" />
</div>

   </span>


  
    <span  v-if="message.receiver_id==authUsers.id&message.sender_roll==4&message.receiver_roll==1&message.invoiceNo==invoice.invoiceNo">
         
    <div class="chatLeft ">
  
    <small >
   {{ message.message }}<br>
   {{ moment(message.created_at).format("DD-MM-YYYY,h:mm:ss") }}
 </small>
   <img :src="'frontend/image/blank2.jpg'" class="leftImg" /> 
</div>
   
   </span>
  
</div>

</div>
<div >
    
     <input
                    @keydown="sendTypingEvent"
                    @keyup.enter="sendMessage"
                    v-model="newMessage"
                    type="text"
                    name="message"
                    placeholder="Enter your message..."
                    class="form-control">
                    <span class="text-muted" v-if="activeUser" >{{ activeUser.name }} is typing...</span>
</div>
 </div>
      </div>
     
    </div>
  </div>
</div>
 
<!--./ chat with Delivery Man -->
<!-- Modal Post DAte-->
<div class="modal fade" :id="'postdate'+invoice.invoiceNo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delivery Date And Time</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
    <div
                class="form-group"
               
              >             
              <label class="col-sm-4  ml-0">Date </label>
                <div class="col-sm-8">
                  <date-picker
                     v-model="deliveryDate"
                     value-type="format"
                  ></date-picker>
                
              
              </div>
              </div>
   <div class="form-group col-md-6">
      <label for="inputState">Time</label>
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
    </div>
  </div>
  </form>
  <button class="btn btn-primary" v-on:click="$bvModal.hide('modal'   +invoice.invoiceNo)" @click.prevent="dateUpdate(invoice.invoiceNo)">Save</button>
      </div>
   
    </div>
  </div>
</div>

  
</div>

<div class="col-12 col-md-4 mb-2 col-xs-12 " style="background:rgba(225, 238, 234, 0.64) none repeat scroll 0% 0%;
color: white;">
<table class="table">
      <tbody>
    <tr >
     
      <td style="
    padding: 5px;">Total</td>
    <td style="
    padding: 5px;" ><span >{{invoice.totalPrice}} TK</span></td>
      </tr>
      <tr>
      <td style="
    padding: 5px;">Discount</td>
      <td style="
    padding: 5px;">{{invoice.totalDiscount}} TK</td>
      </tr>
      <tr>
      <td style=" 
    padding: 5px;">Cash Back</td>
      <td style="
    padding: 5px;">300 TK</td>
    </tr>
      <tr>
      <td style=" 
    padding: 5px;">Payment Status</td>
      <td style="
    padding: 5px;">
    <span class="badge badge-warning" v-if="invoice.paymentType==1">Cash</span>
    <span class="badge badge-warning" v-if="invoice.paymentType==null"><router-link :to="{ name: 'payment',params: { id: invoice.invoiceNo } }" class="badge badge-success">Pay Now</router-link></span>
    
    </td>
    </tr>
      
  </tbody>
   
    </table>
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
     
    deliveryDate:'',
    deliveryTime:'',
      
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
   // chat
          messages: [],
                newMessage: '',
                users:[],
                receivers:[],
                authUsers:[],
                activeUsers:[],
                activeUser: false,
                seen: false,
                seenM: false,
                typingTimer: false,
                user:this.$userId,
        // chat
      badge: "0",
      qun: 1,
      pid: "",

      totalprice: "0",
      discount: "0",
      invoiceNo: '',
      deliveryMan: '',
      pnames: [],
      infos: [],
      orders: [],
   
      invoices: [],
      invo: '',
       animated: false,
     moment: moment,
       variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
     headerBgVariant: 'primary',
      headerTextVariant: 'light',
     
    };
  },
  created() {
   
            this.fetchMessages();
            this.viewCustomer();
            this.viewReceiver();
        
            Echo.join('chat')
                .here(user => {
                    this.users = user;
                       
                })
                .joining(user => {
                    this.users.push(user);
                     
                })
                .leaving(user => {
                    this.users = this.users.filter(u => u.id != user.id);
                })
                .listen('ChatEvent',(event) => {
                    this.messages.push(event.chat);  
                    this.playSoundWarning()                  
                    this.viewReceiver();
                    this.seenCount();
                    this.seenCountMessage();
                })
                .listenForWhisper('typing', user => {
                   this.activeUser = user;
                     
                    if(this.typingTimer) {
                        clearTimeout(this.typingTimer);
                    }
                   this.typingTimer = setTimeout(() => {
                       this.activeUser = false;
                   }, 1000);
                })
        },
  async mounted() {
    this.seenCount();
    this.seenCountMessage();
    this.viewCart();
    this.viewProductName();
    this.viewInfo();
    this.invoiceGet();
    this.orderGet();
    
  },

  methods: {
   seenCount(){
     axios.get("order")
      
        .then((res) => {  
  res.data.orderIn.forEach(order => {
      
  this.messages.forEach(message => {
        if (order.invoiceNo==message.invoiceNo&&message.receiver_id== this.authUsers.id&&message.receiver_roll==1&&message.status==0) {
         this.seen=true;
         this.invo=message.invoiceNo;
        }
        
  })
  })
      });
     
    },
   seenCountMessage(){
     axios.get("order")
      
        .then((res) => {  
  res.data.orderIn.forEach(order => {
    
          
  this.messages.forEach(message => {
        if (order.invoiceNo==message.invoiceNo&&message.receiver_id== this.authUsers.id&&message.receiver_roll==1&&message.status==0) {
        return  this.seenM=true;
       
        }
        
  })
  })
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

 
    invoiceGet() {
      axios.get("order").then((res) => {
        this.invoices = res.data.orderIn;
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
    
    dateUpdate(id) {
      let data = {
       
        deliveryDate: this.deliveryDate,
        deliveryTime: this.deliveryTime,
       
      };

      axios.put(`order/${id}`, data).then((res)=>{
        this.deliveryDate='',
        this.deliveryTime='',
        this.invoiceGet();
       Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
      });
    },
    cancelOrder(id){
            axios.get(`order/${id}`).then((res)=>{
    
     this.invoiceGet();
   
               Toast.fire({
            icon: "success",
            title: "Successfully Cancel Order",
          });
            })
    },
    // chat
         viewCustomer() {
                axios.get('customerGet').then(response => {
                    this.customers = response.data.allCustomer;
                    this.authUsers = response.data.auth;
                })
            },
        playSoundWarning() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233563/warning.mp3"
      );
      audioFile.play();
    },
   
    getInvoice(id) {
      this.invoiceNo=''
      this.deliveryMan=''
        return this.invoiceNo=id;
    },
    getInvoiceAndDeliveryMan(id,deliveryManId){
       this.invoiceNo=''
      return this.invoiceNo=id,this.deliveryMan=deliveryManId;
    },
     viewReceiver() {
                axios.get('getReceiver').then(response => {
                    this.receivers = response.data.getReceiver;
                   this.activeUsers=response.data.active;
                })
            },
       fetchMessages() {
                axios.get('messages').then(response => {
                    this.messages = response.data;
                  
                })
            },
            sendMessage() {
              
                axios.post('messages', {message: this.newMessage,sender:this.authUsers.id,roll:1,invoice:this.invoiceNo,deliveryMan:this.deliveryMan,receiverRoll:3}).then(res=>{

 
                this.newMessage = '';
                 axios.get("order")
      
        .then((res) => {  
  res.data.orderIn.forEach(order => {
      
  this.messages.forEach(message => {
        if (order.invoiceNo==this.invoiceNo&&message.receiver_id== this.authUsers.id&&message.receiver_roll==1&&message.status==1) {
         this.seen=false;
           this.invo=message.invoiceNo;
        }
  })
  })
     
                    })});
                
            },
            messageSeen(id) {
              
                axios.get(`messageSeen/${id}`).then(res=>{
                  axios.get("order")
      
        .then((res) => {  
  res.data.orderIn.forEach(order => {
      
  this.messages.forEach(message => {
        if (order.invoiceNo==id&&message.receiver_id== this.authUsers.id&&message.receiver_roll==1&&message.status==1) {
           this.seen=false;
           this.invo=message.invoiceNo;
        }
  })
  })
      });
                });
               
                
            },
            messageSeenFromDeliveryMan(id) {
              
                axios.get(`messageSeenFromDM/${id}`).then(res=>{
                  axios.get("order")
      
        .then((res) => {  
  res.data.orderIn.forEach(order => {
      
  this.messages.forEach(message => {
        if (order.invoiceNo==id&&message.receiver_id== this.authUsers.id&&message.receiver_roll==1&&message.status==1) {
           this.seenM=false;
           
        }
  })
  })
      });
                });
               
                
            },
            sendTypingEvent() {
                Echo.join('chat')
                    .whisper('typing', this.user);
                console.log(this.user.name + ' is typing now')
            }
    // chat
  },
};
</script>

