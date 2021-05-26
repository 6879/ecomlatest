<template>
  <div>
    <div class="row" data-toggle="isotope">
      <div class="col-xs-12 col-md-2"></div>
      <div class="col-xs-12 col-md-8">
        <div class="panel panel-default">
          <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Product Name Entry
          </h3>
          <div class="panel-body">
            <form @submit.prevent="add">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1"
                      >Select Category</label
                    >
                    <select
                      class="form-control"
                      v-model="form.category"
                      id="exampleFormControlSelect1"
                      name="category"
                      @change.prevent="submenuShow()"
                    >
                      <option
                        v-for="menu in menus"
                        :key="menu.id"
                        v-bind:value="menu.id"
                      >
                        {{ menu.catName }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row" v-if="subcatst">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1"
                      >Select Sub Category</label
                    >
                    <select
                      class="form-control"
                      v-model="form.subCategory"
                      id="exampleFormControlSelect1"
                      name="category"
                      @change.prevent="thirdmenuShow()"
                    >
                      <option
                        v-for="subcat in subcats"
                        :key="subcat.id"
                        v-bind:value="subcat.id"
                      >
                        {{ subcat.catName }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row" v-if="thirdcatst">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1"
                      >Select Third Category</label
                    >
                    <select
                      class="form-control"
                      v-model="form.thirdCategory"
                      id="exampleFormControlSelect1"
                      name="category"
                      @change.prevent="fourthmenuShow()"
                    >
                      <option
                        v-for="thirdcat in thirdcats"
                        :key="thirdcat.id"
                        v-bind:value="thirdcat.id"
                      >
                        {{ thirdcat.catName }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('pname') }"
                  >
                    <label for="exampleFormControlInput1">Product Name</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Product Name"
                      v-model="form.pname"
                      type="text"
                      name="pname"
                      class="form-control"
                    />
                    <has-error :form="form" field="pname"></has-error>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('pcode') }"
                  >
                    <label for="exampleFormControlInput1">Product Code</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Product Code"
                      v-model="form.pcode"
                      type="text"
                      name="pcode"
                      class="form-control"
                    />
                    <has-error :form="form" field="pcode"></has-error>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('pqrcode') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Product QR Code</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Product QR Code"
                      v-model="form.pqrcode"
                      type="text"
                      name="pqrcode"
                      class="form-control"
                    />
                    <has-error :form="form" field="pqrcode"></has-error>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    
                  >
                    <label for="exampleFormControlInput1"
                      >Product Keyword</label
                    >
                  <input-tag name="keyword[]" v-model="form.keyword"></input-tag>
                    <has-error :form="form" field="keyword"></has-error>
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
              <th>Code</th>
              <th>QR Code</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pname, index) in pnames" :key="pname.id">
              <td>{{ index + 1 }}</td>
              <td>
                {{ pname.pname }}
              </td>

              <td>{{ pname.pcode }}</td>

              <td>
                {{ pname.pqrcode }}
              </td>
              <td>
                <span
                  v-for="pcat in pcats"
                  v-if="pcat.productNameId == pname.id"
                >
                  <span
                    v-for="category in categories"
                    v-if="category.id == pcat.categoryId"
                    class="btn-hover-shine btn-success mr-1"
                    style="padding: 10px; margin: 7px"
                  >
                    {{ category.catName }}
                  </span>
                </span>
              </td>

              <td>
                <router-link
                  :to="{ name: 'editproductname', params: { id: pname.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(pname.id)"
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
        category: "",
        pname: "",
        pcode: "",
        pqrcode: "",
        keyword:[],
        subCategory: "",
        thirdCategory: "",
      }),
      categories: [],
      subcats: [],
      thirdcats: [],
      menus: [],
      pnames: [],
      pcats: [],
      submenus: [],
      menugets: [],
      subcatlists: [],
      categorieListviews: [],
      subcatlistssub: [],
      subcatlistssubid: [],
      thirdcatlistssub: [],
      fourthcatlistssub: [],
      fourthcatlists: [],
      thirdcatlists: [],
      menu: false,
      subcatst: false,
      thirdcatst: false,
      subcatpo: false,
      thirdcatpo: false,
      fourthcatpo: false,
      catpo: true,
      imageShow: true,
    };
  },
  mounted() {
    this.viewCatPosition();
    this.viewMenuList();
    this.viewMenu();
    this.submenuShowList();
    this.submenuShowListsub();
    this.submenuShowListsubid();
    this.thirdmenuShowListsub();
    this.fourthmenuShowListsub();
    this.thirdmenuShowList();
    this.fourthmenuShowList();
    this.viewCategory();
    this.subcatshow();
    this.thirdcatshow();
    this.fourthcatshow();
    this.viewProductName();
    this.viewProductCat();
    this.viewMenuList();
  },
  methods: {
    viewCatPosition() {
      axios.get("categoryposition").then((res) => {
        this.form.catPosition = res.data.positionIn;
      });
    },

    subcatshow() {
      axios.get("categorysubposition").then((res) => {
        this.form.subCatPosition = res.data.subpositionIn;
      });
    },
    thirdcatshow() {
      axios.get("categorythirdposition").then((res) => {
        this.form.thirdCatPosition = res.data.thirdpositionIn;
      });
    },
    fourthcatshow() {
      axios.get("categoryfourthposition").then((res) => {
        this.form.fourthCatPosition = res.data.fourthpositionIn;
      });
    },
    add() {
      this.form
        .post("api/productnames", {
          method: "post",
          body: JSON.stringify(this.submenu),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.viewProductName();
          this.viewProductCat();
          this.viewMenuList();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },

    viewMenu() {
      axios.get("categorylist").then((res) => {
        this.menus = res.data.categoryList;
      });
    },
    viewMenuList() {
      axios.get("categorylist").then((res) => {
        this.menus = res.data.categoryList;
      });
    },

    viewCategory() {
      fetch("api/category")
        .then((res) => res.json())
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log(err));
    },
    submenuShow() {
      axios.get(`subcatshow/${this.form.category}`).then((res) => {
        this.subcats = res.data.subcat;
        this.subcatst = true;
      });
      this.subcatshow();
      (this.catpo = false), (this.imageShow = false), (this.subcatpo = true);
    },
    submenuShowList() {
      axios.get(`subcatshowList`).then((res) => {
        this.subcatlists = res.data.subcatlist;
      });
    },
    submenuShowListsub() {
      axios.get(`subcatshowListsub`).then((res) => {
        this.subcatlistssub = res.data.subcatlistsub;
      });
    },
    submenuShowListsubid() {
      axios.get(`subcatshowListsubid`).then((res) => {
        this.subcatlistssubid = res.data.subcatlistsubid;
      });
    },
    thirdmenuShowListsub() {
      axios.get(`thirdcatshowListsub`).then((res) => {
        this.thirdcatlistssub = res.data.thirdcatlistsub;
      });
    },
    fourthmenuShowListsub() {
      axios.get(`fourthcatshowListsub`).then((res) => {
        this.fourthcatlistssub = res.data.fourthcatlistsub;
      });
    },
    thirdmenuShowList() {
      axios.get(`thirdcatshowList`).then((res) => {
        this.thirdcatlists = res.data.thirdcatlist;
      });
    },
    fourthmenuShowList() {
      axios.get(`fourthcatshowList`).then((res) => {
        this.fourthcatlists = res.data.fourthcatlist;
      });
    },
    thirdmenuShow() {
      axios.get(`thirdcatshow/${this.form.subCategory}`).then((res) => {
        this.thirdcats = res.data.thirdcat;
        this.thirdcatst = true;
      });
      this.thirdcatshow();
      (this.catpo = false), (this.subcatpo = false);
      this.thirdcatpo = true;
    },
    fourthmenuShow() {
      this.fourthcatshow();
      (this.catpo = false), (this.imageShow = false), (this.subcatpo = false);
      this.thirdcatpo = false;
      this.fourthcatpo = true;
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.pnames = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewSlider() {
      fetch("api/sliderhome")
        .then((res) => res.json())
        .then((res) => {
          this.sliders = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewProductCat() {
      fetch("api/productcat")
        .then((res) => res.json())
        .then((res) => {
          this.pcats = res.data;
        })
        .catch((err) => console.log(err));
    },
    deletePost(id) {
      Swal.fire(
        "Are You Sure Delete this Category",

        "question"
      ).then((response) => {
        fetch(`api/productnames/${id}`, {
          method: "delete",
          body: JSON.stringify(this.submenu),
          headers: {
            "content-type": "application/json",
          },
        }).then((response) => {
          Toast.fire({
            icon: "success",
            title: "Successfully Deleted",
          });
          this.viewProductName();
          this.viewProductCat();
          this.viewMenuList();
          this.viewMenuList();
          this.submenuShowList();
          this.viewCategory();
          this.thirdmenuShowList();
          this.fourthmenuShowList();
          this.thirdmenuShowListsub();
          this.fourthmenuShowListsub();
          this.submenuShowListsub();
        });
      });
    },
  },
};
</script>