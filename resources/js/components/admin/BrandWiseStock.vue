<template>
  <div class="row" data-toggle="isotope">
    <div class="col-xs-12 col-md-3"></div>
    <div
      class="col-xs-12 col-md-6 boxborder bg-white panel-body panel panel-default"
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
     Brandwise  Product List
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
              
              <th>Brand</th>
              <th>Total Quantity </th>
              <th>A.V.Transfer</th>
              <th>Action</th>
                      
             
            </tr>
          </thead>
           <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
              <td>{{ index + 1 }}</td>
            
              <td  v-for="brand in brands"
                        :key="brand.id" v-if="brand.id==product.brand">
                {{ brand.brand }}
              </td>
              <td>
                {{ product.brandTotal }}
              </td>           
              <td v-for="transfer in transfers" v-if="product.brand==transfer.brand">
                {{ product.brandTotal-transfer.totalTproduct }}
              </td>           
                 <td>
                  <router-link
                  :to="{ name: 'brandwiseproductlist', params: { id: product.brand} }"
                  class="btn btn-primary"
                  ><i class="fa fa-info"></i>&nbsp;Statement</router-link
                >
              </td>
           
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-md-3"></div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: new Form({
      quan:'',
        pname:'',
        brand:'',
        invoiceNo:'',
        unitPrice:'',
        salesPrice:'',
        profit:'',
      }),
      products: [],
      names: [],
      prices: [],
      brandshows: [],
      brands: [],
      transfers: [],
      moment: moment,
     view:'false',
     
    };
  },
  mounted() {
      this.viewBrand();
    this.viewProduct();
    this.viewPrice();
    this.viewTransfer();
  
  this.viewProductName();
 
  
  },
  methods: {
   viewTransfer() {
      axios.get("productTransferTproduct")
      
        .then((res) => {
          this.transfers = res.data.tProduct;
        })
        .catch((err) => console.log(err));
    },
       viewProduct() {
      axios.get("brandwise")
      
        .then((res) => {
          this.products = res.data.productget;
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
      fetch("priceSetup")
        .then((res) => res.json())
        .then((res) => {
          this.prices = res.data;
        })
        .catch((err) => console.log(err));
    },
     add() {
         if(this.form.unitPrice > this.form.salesPrice ){
           Toast.fire({
          icon: "error",
          title: "Please Increase Sales Price",
        })
        ;this.playSoundError();
         }
         else{
      this.form
        .post("priceSetup", {
          method: "post",
          body: JSON.stringify(this.policy),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
         
          Toast.fire({
            icon: "success",
            title: "Successfully Upload",
          });this.viewPrice();
              this.playSound();
        })
        .catch((err) => console.log(err));}
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.names = res.data;
        })
        .catch((err) => console.log(err));
    },
    productShow(){
      axios.get(`productlist/${this.form.pname}/${this.form.brand}`).then((res) => {
        this.form.invoiceNo = res.data.invoiceNo;
        this.form.quan = res.data.quan;
        this.view = true;
         this.productShow();
 
      });
    },
    brandShow(){
      axios.get(`brandlist/${this.form.pname}`).then((res) => {
     
        this.brandshows = res.data.brandshow;
        
         
 
      });
    },
    
    profit() {
      let salesPrice = this.form.salesPrice;
      let unitPrice = this.form.unitPrice;
      let profit = salesPrice - unitPrice;
      this.form.profit = profit;
    
    },
   
  deletePost(id) {
       axios.delete(`priceSetup/`+id, {
        method: "delete",
        // body: JSON.stringify(this.price),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewPrice();
         this.playSound();
      });
    },
  },
};
</script>