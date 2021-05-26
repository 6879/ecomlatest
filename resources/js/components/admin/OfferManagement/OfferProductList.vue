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
        Category With Product Offer List
      </h1>

      <div
        class="table-responsive"
        v-for="(menu, index) in menus"
        :key="menu.id"
      >
        <center>
          <h2 style="color: skyblue; font-width: bold">{{ menu.catName }}</h2>
        </center>
        <table
          data-toggle=""
          class="table table-responsive"
          cellspacing="1"
          width="200%"
        >
          <thead style="background: #e4e6ed">
            <tr>
              <th>SN</th>
              <th>Created_Date</th>
              <th>Product</th>
              <th>Start_Date</th>
              <th>End_Date</th>
              <th>Remaining</th>
              <th>Sales_Price</th>
              <th>Offer</th>
              <th>After_Offer_Price</th>
              <th>Image</th>
             
            </tr>
          </thead>
          <tbody v-for="(offer, index) in offers" :key="offer.id">
            <tr
              style="background-color: white"
              v-for="category in categories"
              :key="category.id"
              v-if="
                menu.id == category.categoryId &&
                offer.productId == category.productNameId
              "
            >
              <td>{{ index + 1 }}</td>
              <td>{{ moment(offer.created_at).format("DD-MM-YYYY") }}</td>
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
                  {{offer.startDate}}
              </td>
              <td>
                  {{offer.endDate}}
              </td>
              <td>
                 {{ parseDate( offer.endDate ,offer.startDate) }} Days Left
              </td>
              <td>
                  {{offer.sales_price.salesPrice}}
              </td>
              <td>
                  {{offer.offerPrice}}<span v-if="offer.ammountType==1">TK</span><span v-if="offer.ammountType==2">%</span>
              </td>
               <td>
                  {{offer.totalPrice}}
              </td>
               <td>
               <img :src="'offerImage/'+offer.offerImage" height="50" width="80"/>
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
      offers: [],
      brands: [],
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
    this.viewMenuList();
    this.viewProductName();
    this.viewOffer();
    this.viewCategory();
    this.submenuShowList();
    this.submenuShowListsub();
    this.thirdmenuShowList();
    this.thirdmenuShowListsub();
    this.fourthmenuShowListsub();
    this.purchaseProduct();

    this.fourthmenuShowList();
  },
  methods: {
    viewMenuList() {
      axios.get("categorylist").then((res) => {
        this.menus = res.data.categoryList;
      });
    },
     parseDate (start, end) {
        return moment(start, 'YYYY-MM-DD ').diff(moment(end, 'YYYY-MM-DD '), "days")
    },
    viewOffer() {
      axios.get("offer").then((res) => {
        this.offers = res.data.offer;
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