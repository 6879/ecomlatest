<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Product Tranfer
        </h3>
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select Product</label>
                  <select
                    class="form-control"
                    v-model="form.pname"
                    id="exampleFormControlSelect1"
                    name="pname"
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
            <div class="row">
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
                      v-for="getbrand in getbrands"
                      :key="getbrand.id"
                      v-bind:value="getbrand.brand"
                    >
                      <p
                        v-for="brand in brands"
                        :key="brand.id"
                        v-if="brand.id == getbrand.brand"
                      >
                        {{ brand.brand }}
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
                  :class="{ 'has-error': form.errors.has('totalQuantity') }"
                >
                  <label for="exampleFormControlInput1">Total Quantity</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Total Quantity"
                    v-model="form.totalQuantity"
                    type="text"
                    name="totalQuantity"
                    :class="{ 'is-invalid': form.errors.has('totalQuantity') }"
                    class="form-control"
                    disabled
                  />

                  <has-error :form="form" field="totalQuantity"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('quan') }"
                >
                  <label for="exampleFormControlInput1">Product Transfer</label>
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
            <div class="row">
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
                      v-for="code in codes"
                      :key="code.id"
                      v-bind:value="code.id"
                    >
                      {{ code.code }}
                    </option>
                  </select>
                  <has-error :form="form" field="code"></has-error>
                </div>
              </div>
            </div>
            <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-12 panel-body panel panel-default">
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
              <th>Location</th>
              <th>Date</th>
              <th>Code</th>
              <th>Product</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transfer, index) in transfers" :key="transfer.id">
              <td>{{ index + 1 }}</td>
              <td
                v-for="location in locations"
                :key="location.id"
                v-if="location.id == transfer.location"
              >
                {{ location.location }}
              </td>
              <td>{{ moment(transfer.created_at).format("DD-MM-YYYY") }}</td>
              <td
                v-for="warehouse in warehouses"
                v-if="warehouse.id == transfer.code"
              >
                {{ warehouse.code }}
              </td>
              <td
                v-for="name in names"
                :key="name.id"
                v-if="name.id == transfer.pname"
              >
                {{ name.pname }}
              </td>
              <td
                v-for="brand in brands"
                :key="brand.id"
                v-if="brand.id == transfer.brand"
              >
                {{ brand.brand }}
              </td>
              <td>{{ transfer.quan }}</td>

              <td>
                <router-link
                  :to="{ name: 'edittransfer', params: { id: transfer.id } }"
                   class="btn btn-info"
                  ><i class="fa fa-undo"></i>&nbsp;Qty.Back</router-link
                >
             
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
      moment: moment,
    };
  },
  mounted() {
    this.viewLocation();
    this.viewTransfer();
    this.viewWarehouse();
    this.viewProduct();
    this.viewProductName();
    this.viewBrand();
    this .codeShow() ;
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
    codeShow() {
      axios.get(`warehousecode/${this.form.location}`).then((res) => {
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