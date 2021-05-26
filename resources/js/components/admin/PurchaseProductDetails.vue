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
              <th>Product Name</th>

              <th>Unit</th>
              <th>Brand</th>
              <th>Color</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody v-for="(list, index) in lists" :key="list.id">
            <tr v-if="index % 2 == 0" style="background-color: white">
              <td>{{ index + 1 }}</td>
              <td>{{ moment(list.created_at).format("DD-MM-YYYY") }}</td>
              <td v-for="pname in pnames" v-if="list.pname == pname.id">
                {{ pname.pname }}
              </td>

              <div v-if="list.unit == !''">
                <td
                  v-for="unit in units"
                  :key="unit.id"
                  v-if="unit.id == list.unit"
                >
                  <p v-if="list.unit == !''">{{ unit.unit }}</p>
                  <p v-else></p>
                </td>
              </div>
              <div v-else>
                <td></td>
              </div>

              <td
                v-for="brand in brands"
                :key="brand.id"
                v-if="brand.id == list.brand"
              >
                {{ brand.brand }}
              </td>
              <td
                v-for="color in colors"
                :key="color.id"
                v-if="color.id == list.color"
              >
                {{ color.color }}
              </td>
              <td
                v-for="size in sizes"
                :key="size.id"
                v-if="size.id == list.size"
              >
                {{ size.size }}
              </td>
              <td>{{ list.quan }}</td>
              <td>{{ list.unitPrice }}</td>
              <td>{{ list.totalPrice }}</td>
            </tr>
            <tr v-else style="background-color: #e2d9d9">
              <td>{{ index + 1 }}</td>
              <td>{{ moment(list.created_at).format("DD-MM-YYYY") }}</td>
              <td v-for="pname in pnames" v-if="list.pname == pname.id">
                {{ pname.pname }}
              </td>

              <div v-if="list.unit == !''">
                <td
                  v-for="unit in units"
                  :key="unit.id"
                  v-if="unit.id == list.unit"
                >
                  {{ unit.unit }}
                </td>
              </div>
              <div v-else>
                <td></td>
              </div>

              <td
                v-for="brand in brands"
                :key="brand.id"
                v-if="brand.id == list.brand"
              >
                {{ brand.brand }}
              </td>
              <td
                v-for="color in colors"
                :key="color.id"
                v-if="color.id == list.color"
              >
                {{ color.color }}
              </td>
              <td
                v-for="size in sizes"
                :key="size.id"
                v-if="size.id == list.size"
              >
                {{ size.size }}
              </td>
              <td>{{ list.quan }}</td>
              <td>{{ list.unitPrice }}</td>
              <td>{{ list.totalPrice }}</td>
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
      form: new Form({
        name: "",
        code: "",
        phone: "",
        hotLine: "",
        fb: "",
        web: "",
        mail: "",
        businessType: "",
        address: "",
        userId: "",
      }),
      types: [],
      lists: [],
      suppliers: [],
      pnames: [],
      suppliers: [],
      brands: [],
      units: [],
      sizes: [],
      colors: [],
      moment: moment,
    };
  },
  mounted() {
    this.purchaseProductList();
    this.viewProductName();
    this.viewBrand();
    this.viewUnit();
    this.viewSize();
    this.viewColor();
  },
  methods: {
    purchaseProductList() {
      axios
        .get(`purchaseProductReportList/${this.$route.params.id}`)
        .then((res) => {
          this.lists = res.data.purchaseProductReportList;
        });
    },
    viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewUnit() {
      fetch("api/units")
        .then((res) => res.json())
        .then((res) => {
          this.units = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewSize() {
      fetch("api/sizes")
        .then((res) => res.json())
        .then((res) => {
          this.sizes = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewColor() {
      fetch("api/colors")
        .then((res) => res.json())
        .then((res) => {
          this.colors = res.data;
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
  },
};
</script>