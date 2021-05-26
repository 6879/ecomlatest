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
       Product Name List
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
              <th>Product Name</th>
              <th>Brand </th>
              <th>Sales Price</th>             
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(price, index) in prices" :key="price.id">
              <td>{{ index + 1 }}</td>
              <td  v-for="name in names"
                        :key="name.id" v-if="name.id==price.pname">
                {{ name.pname }}
              </td>
              <td  v-for="brand in brands"
                        :key="brand.id" v-if="brand.id==price.brand">
                {{ brand.brand }}
              </td>
              <td>
                {{ price.salesPrice }}
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
     view:'false',
     
    };
  },
  mounted() {
      this.viewBrand();
    this.viewType();
    this.viewPrice();
  
  this.viewProductName();
 
  
  },
  methods: {
      playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
      playSoundError() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233574/error.mp3"
      );
      audioFile.play();
    },
       viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
     viewType() {
      axios.get("productList")
       
        .then((res) => {
          this.products = res.data.productget;
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