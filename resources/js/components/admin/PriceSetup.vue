<template>
 <div>
    <div class="row" data-toggle="isotope">
      <div class="col-xs-12 col-md-2"></div>
      <div class="col-xs-12 col-md-8">
        <div class="panel panel-default">
          <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
           Product Price Setup
          </h3>
          <div class="panel-body">
            <form @submit.prevent="add">
              
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1"
                      >Select Product</label
                    >
                    <select
                      class="form-control"
                      v-model="form.pname"
                      id="exampleFormControlSelect1"
                      name="pname"
                      @change.prevent="brandShow()"
                    >
                    <option
                                           >
                       Select One
                      </option>
                      <option
                        v-for="product in products"
                        :key="product.id"
                        v-bind:value="product.pname"
                      >
                       <p   v-for="name in names"
                        :key="name.id" v-if="name.id==product.pname"> {{ name.pname }}</p>
                      </option>
                    </select>
                  </div>
                </div>
              </div>           
<div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1"
                      >Select Brand</label
                    >
                    <select
                      class="form-control"
                      v-model="form.brand"
                      id="exampleFormControlSelect1"
                      name="brand"
                      @change.prevent="productShow()"
                    >
                    <option
                                           >
                       Select One
                      </option>
                      <option
                        v-for="brandshow in brandshows"
                        :key="brandshow.id"
                        v-bind:value="brandshow.brandId"
                      >
                       <p   v-for="brand in brands"
                        :key="brand.id" v-if="brand.id==brandshow.brandId"> {{ brand.brand }}</p>
                      </option>
                    </select>
                  </div>
                </div>
              </div>           
            
              <div class="row" v-if="view==true">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('invoiceNo') }"
                  >
                    <label for="exampleFormControlInput1">Invoice No</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Invoice No"
                      v-model="form.invoiceNo"
                      type="text"
                      name="invoiceNo"
                      class="form-control"
                        disabled
                    />
                    <has-error :form="form" field="invoiceNo"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" v-if="view==true">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('quan') }"
                  >
                    <label for="exampleFormControlInput1">Quantity</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Quantity"
                      v-model="form.quan"
                      type="text"
                      name="quan"
                      class="form-control"
                      disabled
                    />
                    <has-error :form="form" field="quan"></has-error>
                  </div>
                </div>
              </div>

              <div class="row" style="display:none">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('unitPrice') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Unit Price</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Unit Price"
                      v-model="form.unitPrice"
                      type="text"
                      name="unitPrice"
                      class="form-control"
                        @keyup.prevent="profit()"
                    />
                    <has-error :form="form" field="unitPrice"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" >
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('salesPrice') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Sales Price</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Sales Price"
                      v-model="form.salesPrice"
                      type="text"
                      name="salesPrice"
                       @keyup.prevent="profit()"
                      class="form-control"
                    />
                    <has-error :form="form" field="salesPrice"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" style="display:none">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('profit') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Profit</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Profit"
                      v-model="form.profit"
                      type="text"
                      name="profit"
                      class="form-control"
                    />
                    <has-error :form="form" field="profit"></has-error>
                  </div>
                </div>
              </div>

              <button
                :disabled="form.busy"
                type="submit"
                class="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-2"></div>
    </div>
    <div class="col-xs-12 col-md-12 panel-body panel panel-default">
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
              <th>Action</th>
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

              <td>
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(price.id)"
                >
                  <i class="fa fa-trash"></i>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
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
     productTransfer() {
      fetch("productTransfer")
        .then((res) => res.json())
        .then((res) => {
          this.transfers = res.data;
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