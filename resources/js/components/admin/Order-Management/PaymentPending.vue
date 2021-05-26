<template>
  <div class="row" data-toggle="isotope">
    <!-- <div class="col-xs-12 col-md-3"></div> -->
    <div
      class="col-xs-12 col-md-12 boxborder bg-white panel-body panel panel-default"
      style="padding-left: 0; padding-right: 0"
    >
      <h1
        style="
          background: skyblue;
          margin: 0;
          padding: 10px;
          color: white;
          text-align: center;
        "
      >
    Payment Pending
      </h1>

      <div class="table-responsive">
        <table
          data-toggle=""
          class="table table-responsive"
          cellspacing="1"
          width="200%"
        >
          <thead style="background: #e4e6ed">
            <tr>
            <th>ID</th>
            <th>Message</th> 
              <th>C.Name</th>
              <th>Phone</th>
              <th>Invoice_No</th>              
              <th>Address</th>         
              <th>R.Address</th>
              <th>R.Phone</th>
              <th>D.Date</th>
              <th>D.Time</th>
              <th>Total_Price</th>
              <th>Total_Discount</th>
              <th>Total_Cashback</th>
               <th>Payment_Status</th>
              <th>Position_Status</th>             
           
             <th>C.Timeline</th>
             
            </tr>
          </thead>
          <tbody v-for="(order, index) in orders" :key="order.id">
            <tr>
              <td>{{ index + 1 }}</td>
                     <td><i class="fa fa-envelope" aria-hidden="true"></i><span class="badge badge-danger">0</span>
</td>
              <td>{{order.customer.name}}</td>
            
              <td               
              >
                {{ order.phone }}
              </td>
                <td>
                    <span  class="badge badge-primary"  data-toggle="modal" :data-target="'#'+order.invoiceNo">
 #{{order.invoiceNo}}
</span>
                    <div class="modal fade" :id="order.invoiceNo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <div >
    <center>
        <h5 >{{ order.deliveryDate }}</h5>       
        <h5 >{{ order.deliveryTime }}</h5>       
      
       <p class="mtop"> Order No #{{order.invoiceNo}}</p>
      
    </center>
    <div class="hidden-xs ">
  <table class="table table-responsive ">
 
  <tbody>
    <tr  v-for="orderget in ordergets" v-if="order.invoiceNo==orderget.invoiceNo">
      
      <td><img :src="'productImage/'+orderget.image" width="40%" /></td>
       <td v-for="pnam in pnames" v-if="pnam.id==orderget.pId" >{{pnam.pname}}</td>
       <td v-for="brand in brands" v-if="brand.id==orderget.brand.brand" >Brand.{{brand.brand}}</td>
     <td>qty.{{orderget.qty}}</td>     
      <td>Dis.{{orderget.discount}}TK</td>
      <td>C.Back.50TK</td>
       <td>{{orderget.price}}.TK</td>
    </tr>
  
  </tbody>
</table>
    </div>
       <div class="hidden-md hidden-lg">
 
 
   
   
      <div class="col-12 col-xs-12" v-for="orderget in ordergets" v-if="orderget.invoiceNo==order.invoiceNo"> 
     <img :src="'productImage/'+orderget.image" width="12%" />
     <small v-for="pnam in pnames" v-if="pnam.id==orderget.pId"> {{pnam.pname}}</small>
     <br>
  <small v-for="brand in brands" v-if="brand.id==orderget.brand.brand" >Brand.{{brand.brand}}</small>
        <small>qty.{{orderget.qty}}&nbsp;Dis.{{orderget.discount}}TK&nbsp;CashBack.50TK&nbsp;{{orderget.price}}.TK</small>
      </div>
      <hr>
      
    
</div>
<hr>
<div class="row">
<div class="col-12 col-md-8 col-xs-12">
 
</div>

<div class="col-12 col-md-4 mb-2 col-xs-12 " style="background:rgba(225, 238, 234, 0.64) none repeat scroll 0% 0%;
color: black;">
<table class="table">
      <tbody>
    <tr >
     
      <td style="
    padding: 5px;">Total</td>
    <td style="
    padding: 5px;" ><span >{{order.totalPrice}} TK</span></td>
      </tr>
      <tr>
      <td style="
    padding: 5px;">Discount</td>
      <td style="
    padding: 5px;">{{order.totalDiscount}} TK</td>
      </tr>
      <tr>
      <td style=" 
    padding: 5px;">Cash Back</td>
      <td style="
    padding: 5px;">300 TK</td>
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
             
                 
           
               </td>
                 <td>{{ order.address }}</td>
             
           
              <td>{{ order.reAddress }}</td>
              <td>{{ order.rePhone }}</td>
              <td>{{ order.deliveryDate }}</td>
              <td>{{ order.deliveryTime }}</td>
              <td>{{ order.totalPrice }}</td>
              <td>{{ order.totalDiscount }}</td>
              <td>0</td>
               <td v-if="order.paymentType==NULL">Pending</td>
                     <td >      
      <select id="inputState" class="form-control">
        <option selected>Status</option>
        <option>Accepted</option>
        <option>Cancel</option>
        <option>Post Date</option>
        <option>Post Time</option>
        <option>Customize</option>
        <option>Forward</option>
        <option>Wating</option>
      </select>
    </td>
             
             
              <td></td>
       
            <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <div class="col-xs-12 col-md-3"></div> -->
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: new Form({}),
      orders: [],
      ordergets: [],
      pnames: [], 
      brands: [], 
   
      moment: moment,
    };
  },
  mounted() {
    this.viewOrder();
    this.orderGet();
    this.viewProductName();
    this.viewBrand();
 
  },
  methods: {
    viewOrder() {
      axios.get("orderManagement")
      
        .then((res) => {
          this.orders = res.data.pending;
         
        })
        .catch((err) => console.log(err));
    },
   orderGet() {
      axios.get("order").then((res) => {
        this.ordergets = res.data.orderInfo;
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
     viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>