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
                      v-model="form.categoryMain"
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
 <label for="exampleFormControlSelect1"
                      >Filters Item</label
                    >
            <div class="form-check">
  <input class="form-check-input" type="radio" v-model="form.item" name="exampleRadios" id="exampleRadios1" :value="1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Filter By Brand
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" v-model="form.item" name="exampleRadios" id="exampleRadios2" :value="2">
  <label class="form-check-label" for="exampleRadios2">
  Filter By Price
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" v-model="form.item" name="exampleRadios" id="exampleRadios3" :value="3" >
  <label class="form-check-label" for="exampleRadios3">
   Filter By Unit
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" v-model="form.item" name="exampleRadios" id="exampleRadios3" :value="4" >
  <label class="form-check-label" for="exampleRadios3">
   Filter By Color
  </label>
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
             
              <th>Filtering Item</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sta, index) in stats" :key="sta.id">
              <td>{{ index + 1 }}</td>
              <td >
                  <span v-if="sta.item==1">
               Filtering By Brand
                  </span>
                  <span v-if="sta.item==2">
               Filtering By Price
                  </span>
                  <span v-if="sta.item==3">
               Filtering By Unit
                  </span>
                  <span v-if="sta.item==4">
               Filtering By Color
                  </span>
              </td>

            
              <td>
            
                  <span
                    v-for="category in categories"
                    v-if="category.id == sta.category"
                    class="btn-hover-shine btn-success mr-1"
                    style="padding: 10px; margin: 7px"
                  >
                    {{ category.catName }}
                  </span>
           
              </td>

              <td>
                
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(sta.id)"
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
        categoryMain: "",
        item: "",
        subCategory: "",
        thirdCategory: "",
       
      }),
      categories: [],
      subcats: [],
      thirdcats: [],
      menus: [],
      pnames: [],
      pcats: [],
      stats: [],
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
    this.viewFilteringStatus() ;
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
    add() {
      this.form
        .post("filteringstatus", {
          method: "post",
          body: JSON.stringify(this.filtering),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
            if(res.data.ststget==1){
         this.playSoundError()
          Toast.fire({
            icon: "error",
            title: "Already Saved",
          });}
          else{
          this.form.reset();
          this.viewFilteringStatus() ;
            this.playSound()
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
          }
        })
        .catch((err) => console.log(err));
    },
viewFilteringStatus() {
      axios.get("filteringstatus")
      
        .then((res) => {
          this.stats = res.data.filstatus;
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
      axios.get(`subcatshow/${this.form.categoryMain}`).then((res) => {
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
     
        axios.get(`filteringstatus/${id}`, {
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
           this.viewFilteringStatus() ;
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
      
    },
  },
};
</script>