<template>
  <div>
    <div class="row" data-toggle="isotope">
      <div class="col-xs-12 col-md-2"></div>
      <div class="col-xs-12 col-md-8">
        <div class="panel panel-default">
          <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
            Offer Entry
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
                      v-model="form.productId"
                      id="exampleFormControlSelect1"
                      name="pname"
                      @change.prevent="priceShow()"
                    >
                      <option>Select One</option>
                      <option
                        v-for="price in prices"
                        :key="price.id"
                        v-bind:value="price.pname"
                      >
                        <p
                          v-for="name in names"
                          :key="name.id"
                          v-if="name.id == price.pname"
                        >
                          {{ name.pname }}
                        </p>
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Offer Start Date</label>
                <div class="col-sm-8">
                  <date-picker
                    v-model="form.startDate"
                    value-type="format"
                  ></date-picker>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Offer End Date</label>
                <div class="col-sm-8">
                  <date-picker
                    v-model="form.endDate"
                    value-type="format"
                  ></date-picker>
                </div>
              </div>
              <div class="row" v-if="view == true">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Sales Price</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Quantity"
                      type="text"
                      name="quan"
                      :value="salesPrices.salesPrice"
                      class="form-control"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  v-model="form.ammountType"
                  @change.prevent="takaShow()"
                  id="inlineRadio1"
                  :value="1"
                />
                <label class="form-check-label" for="inlineRadio1">TK</label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  v-model="form.ammountType"
                  @change.prevent="percentage()"
                  id="inlineRadio2"
                  :value="2"
                />
                <label class="form-check-label" for="inlineRadio2">%</label>
              </div>
              <div class="row" v-if="takaview">
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      id="exampleFormControlInput1"
                      placeholder="TK"
                      type="text"
                      @keyup.prevent="offerCalculate()"
                      v-model="form.offerPrice"
                      name="offerPrice"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Offer Price"
                      type="text"
                      v-model="form.totalPriceByTaka"
                      class="form-control"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="row" v-if="percentageview">
                <div class="col-md-12">
                  <div class="form-group"></div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Offer Price"
                      name="percentage"
                      type="text"
                      v-model="form.totalPriceByPercentage"
                      disabled
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlFile1"
                      >Upload Offer Image</label
                    >
                    <input
                      type="file"
                      class="form-control-file"
                      id="exampleFormControlFile1"
                      @change="changeImage($event)"
                      name="image"
                    />
                    <img
                      :src="form.offerImage"
                      class="img-responsive"
                      height="70"
                      width="90"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('details') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Privacy Details</label
                    >
                    <ckeditor
                      id="exampleFormControlInput1"
                      placeholder="Privacy Details"
                      v-model="form.details"
                    ></ckeditor>
                    <has-error :form="form" field="details"></has-error>
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
              <th>Offer_Start_Date</th>
              <th>Offer_Start_Date</th>
              <th>Discount</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(offer, index) in offers" :key="offer.id">
              <td>{{ index + 1 }}</td>
              <td
                v-for="name in names"
                :key="name.id"
                v-if="name.id == offer.productId"
              >
                {{ name.pname }}
              </td>
              <td>
                {{ offer.startDate }}
              </td>
              <td>
                {{ offer.endDate }}
              </td>
              <td>
                {{ offer.offerPrice }}<span v-if="offer.ammountType==1">Tk</span><span v-if="offer.ammountType==2">%</span>
              </td>
              <td>
               <img :src="'offerImage/'+offer.offerImage" height="100" width="200" />
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      form: new Form({
        quan: "",
        productId: "",
        startDate: "",
        endDate: "",
        offerImage: "",
        details: "",
        ammountType: "",
        totalPriceByTaka: "",
        totalPriceByPercentage: "",
        offerPrice: "",
      }),
      products: [],
      names: [],
      prices: [],
      brandshows: [],
      salesPrices: [],
      brands: [],
      offers: [],

      takaview: false,
      percentageview: false,
      view: false,
    };
  },

  mounted() {
    this.viewPrice();
    this.viewOffer();

    this.viewProductName();
  },

  methods: {
    playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },

    changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.offerImage = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
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
     
        this.form
          .post("offer", {
            method: "post",
           
          })
          .then((response) => {
            this.form.reset();
            this.playSound();
            Toast.fire({
              icon: "success",
              title: "Successfully Upload",
            });
            
          })
          .catch((err) => console.log(err));

    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.names = res.data;
        })
        .catch((err) => console.log(err));
    },
    takaShow() {
      this.takaview = true;
      this.percentageview = false;
    },
    percentage() {
      this.percentageview = true;
      this.takaview = false;
    },

    priceShow() {
      axios.get(`salesPrice/${this.form.productId}`).then((res) => {
        this.view = true;
        return (this.salesPrices = res.data);
      });
    },
    viewOffer() {
      axios.get("offer").then((res) => {
        this.offers = res.data.offer;
      });
    },
    deletePost(id) {
      axios
        .delete(`priceSetup/` + id, {
          method: "delete",
          // body: JSON.stringify(this.price),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          Toast.fire({
            icon: "success",
            title: "Successfully Deleted",
          });
          this.viewPrice();
          this.playSound();
        });
    },
    offerCalculate() {
      this.form.totalPriceByTaka =
        this.salesPrices.salesPrice - this.form.offerPrice;

      let total = (this.salesPrices.salesPrice * this.form.offerPrice) / 100;
      this.form.totalPriceByPercentage = this.salesPrices.salesPrice - total;
    },
  },
};
</script>