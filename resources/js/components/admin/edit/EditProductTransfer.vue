<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
        Back  Product Tranfer
        </h3>
        <div class="panel-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select Product</label>
                  <select
                    class="form-control"
                    v-model="form.pname"
                    id="exampleFormControlSelect1"
                    name="pname"
                    disabled
                  @change.prevent="brandShow()"
                  >
                    <option
                      v-for="product in products"
                      :key="product.id"
                      v-bind:value="product.pname"
                    >
                      <p
                        v-for="name in names"
                        :key="name.id"
                        v-if="name.id == product.pname"
                      >
                        {{ name.pname }}
                      </p>
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row" style="display:none">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select Brand</label>
                  <select
                    class="form-control"
                    v-model="form.brand"
                    id="exampleFormControlSelect1"
                    name="brand"
                    @change.prevent="productQuanShow()"
                  >
                    <option
                     
                    >
                      <p
                        
                      >
                        {{ form.brand }}
                      </p>
                    </option>
                  </select>
                </div>
              </div>
            </div>
         
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                
                >
                  <label for="exampleFormControlInput1">Brand</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Quantity"
                   :value="getbrands.brand"
                    type="text"
                    name="quan"
                   disabled
                    class="form-control"
                  />
                
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('quan') }"
                >
                  <label for="exampleFormControlInput1">Product Back Quantity</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Quantity"
                    v-model="form.quan"
                    type="text"
                    name="quan"
                    :class="{ 'is-invalid': form.errors.has('quan') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="quan"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('location') }"
                >
                  <label for="exampleFormControlSelect1"
                    >Select Warehouse Location</label
                  >
                  <select
                    class="form-control"
                    v-model="form.location"
                    id="exampleFormControlSelect1"
                    name="location"
                    @change.prevent="codeShow()"
                    :class="{ 'is-invalid': form.errors.has('location') }"
                    disabled
                  >
                    <option
                      v-for="location in locations"
                      :key="location.id"
                      v-bind:value="location.id"
                    >
                      {{ location.location }}
                    </option>
                  </select>
                  <has-error :form="form" field="location"></has-error>
                </div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('code') }"
                >
                  <label for="exampleFormControlSelect1">Select Code</label>
                  <select
                    class="form-control"
                    v-model="form.code"
                    id="exampleFormControlSelect1"
                    name="code"
                    :class="{ 'is-invalid': form.errors.has('code') }"
                  >
                    <option
                     
                    >
                      {{ form.code }}
                    </option>
                  </select>
                  <has-error :form="form" field="code"></has-error>
                </div>
              </div>
            </div> -->
            <button v-if="button==true":disabled="form.busy" type="submit" class="btn btn-primary">
Update            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
    
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: new Form({
        location: "",
        code: "",
        pname: "",
        quan: "",
        brand: "",
        totalQuantity: "",
      }),
      locations: [],
      warehouses: [],
      products: [],
      codes: [],
      names: [],
      totals: [],
      transfers: [],
      getbrands: [],
      brands: [],
      getbrands: [],
      moment: moment,
      button:true,
    };
  },
  mounted() {
    this.editTransfer();  
    this.viewLocation();
    this.viewTransfer();
    this.viewWarehouse();
    this.viewProduct();
    this.viewProductName();
    this.viewBrand();
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
    editTransfer(){
 axios.get(`productTransfer/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
     update() {
      axios.put(`productTransfer/${this.$route.params.id}`, this.form).then((res) => {
           if (res.data.stockNotAvilable) {
            Toast.fire({
              icon: "error",
              title: "Stock is not available",
            });
            this.playSoundError();
          } else {
              this.button="false";
       this.form.reset();
        this.$router.push({ name: "producttransfer" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
          this.playSound();}
      });
    },
     viewBrand() {
      axios.get(`api/brands/${this.$route.params.id}/edit`)
       
        .then((res) => {
          this.getbrands = res.data;
        })
        .catch((err) => console.log(err));
    },
    codeShow() {
      axios.get(`warehouse/${this.form.location}`).then((res) => {
        this.codes = res.data.code;
      });
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.names = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewProduct() {
      axios.get("getItem")
   
        .then((res) => {
          this.products = res.data.product;
        })
        .catch((err) => console.log(err));
    },
    productQuanShow() {
      axios.get(`priceSetup/${this.form.pname}/${this.form.brand}`).then((res) => {
        this.form.totalQuantity = res.data.total;
      });
    this.brandShow();
    },
    brandShow() {
     
      axios.get(`brandShow/${this.form.pname}`).then((res) => {
        this.getbrands = res.data.getbrand;
      });
    },
  
    add() {
      this.form
        .post("productTransfer", {
          method: "post",
          body: JSON.stringify(this.transfer),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.stockNotAvilable) {
            Toast.fire({
              icon: "error",
              title: "Stock is not available",
            });
            this.playSoundError();
          } else {
            this.form.reset();
            this.viewLocation();
            this.viewWarehouse();
            this.viewTransfer();
            Toast.fire({
              icon: "success",
              title: "Successfully Saved",
            });
            this.playSound();
          }
        })
        .catch((err) => console.log(err));
    },
    viewLocation() {
      fetch("warehouseLocation")
        .then((res) => res.json())
        .then((res) => {
          this.locations = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewTransfer() {
      fetch("productTransfer")
        .then((res) => res.json())
        .then((res) => {
          this.transfers = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewWarehouse() {
      fetch("warehouse")
        .then((res) => res.json())
        .then((res) => {
          this.warehouses = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios
        .delete(`productTransfer/${id}`, {
          method: "delete",
          body: JSON.stringify(this.transfer),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          Toast.fire({
            icon: "success",
            title: "Successfully Deleted",
          });
          this.viewLocation();
          this.viewWarehouse();
          this.viewTransfer();
          this.playSound();
        });
    },
  },
};
</script>