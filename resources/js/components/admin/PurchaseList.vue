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
        Purchase Product List
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
              <th>Purchase Date</th>
              <th>Supplier Name</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Discount</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="(list, index) in lists" :key="list.id">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ moment(list.created_at).format("DD-MM-YYYY") }}</td>
              <td
                v-for="supplier in suppliers"
                :key="supplier.id"
                v-if="supplier.id == list.supplierId"
              >
                {{ supplier.name }}
              </td>
              <td v-for="name in names" v-if="list.pname == name.id">
                {{ name.pname }}
              </td>
                 <td  v-for="brand in brands" :key="brand.id"  v-if="brand.id==list.brand">{{ brand.brand }}</td>
              <td>{{ list.quan }}</td>
              <td>{{ list.unitPrice }}</td>
              <td>{{ list.perc }}%({{list.disPrice}}TK)</td>
              <td>{{ list.totalPrice }}</td>
              <td>View</td>
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
      products: [],
      names: [],
      prices: [],
      brandshows: [],
      brands: [],
      lists: [],
      pnames: [],
      suppliers: [],
      view: "false",
      moment: moment,
    };
  },
  mounted() {
    this.viewBrand();
    this.viewType();
    this.viewPrice();
    this.productShow();
    this.viewSupplier();
    this.viewProductName();
  },
  methods: {
    viewSupplier() {
      fetch("api/suppliers")
        .then((res) => res.json())
        .then((res) => {
          this.suppliers = res.data;
          this.totalPurchaseValue();
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
    viewType() {
      axios
        .get("productList")

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

    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.names = res.data;
        })
        .catch((err) => console.log(err));
    },
    productShow() {
      fetch("api/purchaseproducts")
        .then((res) => res.json())
        .then((res) => {
          this.lists = res.data;
        })
        .catch((err) => console.log(err));
    },
    brandShow() {
      axios.get(`brandlist/${this.form.pname}`).then((res) => {
        this.brandshows = res.data.brandshow;
      });
    },
  },
};
</script>