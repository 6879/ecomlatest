<template>
  <div class="row" data-toggle="isotope">
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
        Stock Summery
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
              <th>Brand</th>
              <th>In Stock</th>
              <th>Avaialble stock</th>
              <th>In ware house</th>
              <th>Statement</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(price, index) in prices" :key="price.id">
              <td>{{ index + 1 }}</td>

              <td>
                <p
                  v-for="name in names"
                  :key="name.id"
                  v-if="name.id == price.pname"
                >
                  {{ name.pname }}
                </p>
              </td>
              <td>
                <p
                  v-for="brand in brands"
                  :key="brand.id"
                  v-if="brand.id == price.brand"
                >
                  {{ brand.brand }}
                </p>
              </td>
              <td>
                <p
                  v-for="product in products"
                  :key="product.id"
                  v-if="
                    price.invoiceNo == product.invoiceNo &&
                    price.pname == product.pname
                  "
                >
                  {{ product.quan }}
                </p>
              </td>

              <td>
                <span
                  v-for="transfer in transfers"
                  :key="transfer.id"
                  v-if="
                    transfer.brand == price.brand &&
                    price.pname == transfer.pname
                  "
                >
                  <p
                    v-for="product in products"
                    :key="product.id"
                    v-if="
                      price.invoiceNo == product.invoiceNo &&
                      price.pname == product.pname
                    "
                  >
                    {{ product.quan - transfer.total }}
                  </p></span
                >
              </td>
              <td>
                <p
                  v-for="transfer in transfers"
                  :key="transfer.id"
                  v-if="
                    transfer.brand == price.brand &&
                    price.pname == transfer.pname
                  "
                >
                 {{ transfer.total }}
                </p>
              </td>
              <td>
                  <router-link
                  :to="{ name: 'producttransfersummery', params: { pname: price.pname,brand:price.brand} }"
                  class="btn btn-primary"
                  ><i class="fa fa-info"></i>&nbsp;Details</router-link
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
      form: new Form({}),
      menus: [],
      categories: [],
      subcatlistsub: [],
      pnames: [],
      names: [],
      prices: [],
      brands: [],
      products: [],
      subcatlists: [],
      transfers: [],
      thirdcatlists: [],
      thirdcatlistssub: [],
      fourthcatlistssub: [],
      fourthcatlists: [],

      moment: moment,
    };
  },
  computed: {
  total() {
    return function (sum, transfer) {
      return sum + transfer.quan
    }
  }
},
  mounted() {
    this.viewProductName();
    this.viewPrice();
    this.viewCategory();

    this.purchaseProduct();
    this.viewBrand();

    this.productTransfer();
  },
  methods: {
    viewMenuList() {
      axios.get("categorylist").then((res) => {
        this.menus = res.data.categoryList;
      });
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
      axios.get("productTransferlimit")
        
        .then((res) => {
          this.transfers = res.data.transfer;
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
    viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },

    purchaseProduct() {
      fetch("purchaseproducts")
        .then((res) => res.json())
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewCategory() {
      axios
        .get("productcatlist")

        .then((res) => {
          this.categories = res.data.productcat;
        })
        .catch((err) => console.log(err));
    },

    fourthmenuShowListsub() {
      axios.get(`fourthcatshowListsub`).then((res) => {
        this.fourthcatlistssub = res.data.fourthcatlistsub;
      });
    },

    fourthmenuShowList() {
      axios.get(`fourthcatshowList`).then((res) => {
        this.fourthcatlists = res.data.fourthcatlist;
      });
    },
    thirdmenuShowListsub() {
      axios.get(`thirdcatshowListsub`).then((res) => {
        this.thirdcatlistssub = res.data.thirdcatlistsub;
      });
    },
    thirdmenuShowList() {
      axios.get(`thirdcatshowList`).then((res) => {
        this.thirdcatlists = res.data.thirdcatlist;
      });
    },
    submenuShowListsub() {
      axios.get(`subcatshowListsub`).then((res) => {
        this.subcatlistssub = res.data.subcatlistsub;
      });
    },
    submenuShowList() {
      axios.get(`subcatshowList`).then((res) => {
        this.subcatlists = res.data.subcatlist;
      });
    },
  },
};
</script>