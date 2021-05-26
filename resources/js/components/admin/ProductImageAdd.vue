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
        Product List
      </h1>
      <div class="row">
        <div class="col-md-12">
          <div
            class="form-group"
            :class="{ 'has-error': form.errors.has('roll') }"
          >
            <label for="exampleFormControlSelect1">Select Category</label>
            <select
              class="form-control"
              v-model="form.categoryId"
              @change.prevent="categoryShow()"
              id="exampleFormControlSelect1"
              name="categoryId"
            >
              <option
                v-for="cat in cats"
                :key="cat.categoryId"
                v-bind:value="cat.categoryId"
              >
                <span
                  v-for="catget in catgets"
                  v-if="catget.id == cat.categoryId"
                >
                  {{ catget.catName }}</span
                >
              </option>
            </select>
            <has-error :form="form" field="roll"></has-error>
          </div>
        </div>
      </div>
      <div
        class="table-responsive"
        v-for="(menu, index) in menus"
        :key="menu.id"
      >
        <table
          data-toggle=""
          class="table table-responsive"
          cellspacing="1"
          width="200%"
        >
          <thead style="background: #e4e6ed">
            <tr>
              <th>SN</th>
             
              <th>Product</th>
              <th>Brand</th>           
              <th>Sales Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="(price, index) in prices" :key="price.id">
            <tr
              style="background-color: white"
              v-for="category in categories"
              :key="category.id"
              v-if="
                menu.id == category.categoryId &&
                price.pname == category.productNameId
              "
            >
              <td>{{ index + 1 }}</td>
             
              <td>
                <p
                  v-for="pname in pnames"
                  :key="pname.id"
                  v-if="pname.id == category.productNameId"
                >
                  {{ pname.pname }}
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
                {{ price.salesPrice }}
              </td>
              <td>
                 <router-link
                  :to="{ name: 'productimagedetails', params: { id: price.pname } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
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
        categoryId: "",
      }),
      menus: [],
      catgets: [],
      subcatlistsub: [],
      pnames: [],
      prices: [],
      brands: [],
      cats: [],
      categories: [],
      products: [],
      subcatlists: [],
      thirdcatlists: [],
      thirdcatlistssub: [],
      fourthcatlistssub: [],
      fourthcatlists: [],

      moment: moment,
    };
  },
  mounted() {
    this.viewCatList();
    this.viewMenuList();
    this.viewProductName();
    this.viewPrice();
    this.viewCategory();
    this.submenuShowList();
    this.submenuShowListsub();
    this.thirdmenuShowList();
    this.thirdmenuShowListsub();
    this.fourthmenuShowListsub();
    this.purchaseProduct();
    this.viewBrand();
    this.fourthmenuShowList();
  },
  methods: {
    viewMenuList() {
      axios.get("categorylist").then((res) => {
        this.catgets = res.data.categoryList;
      });
    },
    viewCatList() {
      axios.get(`catPermission/create`).then((res) => {
        this.cats = res.data.catList;
      });
    },
    categoryShow() {
      axios.get(`catPermission/${this.form.categoryId}/edit`).then((res) => {
        this.menus = res.data.cateList;
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
    viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.pnames = res.data;
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