<template>
  <div>
    <div class="row" data-toggle="isotope">
      <div class="col-xs-12 col-md-2"></div>
      <div class="col-xs-12 col-md-8">
        <div class="panel panel-default">
          <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
            Edit  Category
          </h3>
          <div class="panel-body">
            <form @submit.prevent="update()">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group" v-if="maincat">
                    <label for="exampleFormControlSelect1"
                      >Select Category</label
                    >
                    <select
                      class="form-control"
                      v-model="form.category"
                      id="exampleFormControlSelect1"
                      name="category"
                      @change.prevent="submenuShow()"
                      disabled
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
              <div class="row" v-if="subShow">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1"
                      >Select Sub Category</label
                    >
                    <select
                      class="form-control"
                      v-model="form.subCategory"
                      id="exampleFormControlSelect1"
                      name="subCategory"
                      @change.prevent="thirdmenuShow()"
                       disabled
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
                       disabled
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
                    :class="{ 'has-error': form.errors.has('catName') }"
                  >
                    <label for="exampleFormControlInput1">Category Name</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Category Name"
                      v-model="form.catName"
                      type="text"
                      name="catName"
                      class="form-control"
                    />
                    <has-error :form="form" field="catName"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" v-if="imageview">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlFile1"
                      >Upload Icon Image</label
                    >
                   <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    @change="changeImage($event)"
                    name="image"
                  />
                  <img
                    :src="OurPhoto()"
                    name="image"
                    class="img-responsive"
                    height="70"
                    width="90"
                  />
                  </div>
                </div>
              </div>
              <div class="row" >
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlFile1"
                      >Upload Category Image</label
                    >
                   <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    @change="changeCatImage($event)"
                    name="catImage"
                  />
                  <img
                    :src="OurCatPhoto()"
                    name="catImage"
                    class="img-responsive"
                    height="70"
                    width="90"
                  />
                  </div>
                </div>
              </div>
                
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="form.bannerImageType" @change.prevent="singleBannerShow()" id="inlineRadio1" :value="1">
  <label class="form-check-label" for="inlineRadio1">Single Banner Image</label>

  <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="form.bannerImageType" @change.prevent="multiBannerShow()" id="inlineRadio2" :value="2">
  <label class="form-check-label" for="inlineRadio2">Multi Banner Image</label>
</div>
              <div class="row"  v-if="singleBanner">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlFile1"
                      >Upload Category Banner Image</label
                    >
                   <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    @change="changeBannerImage($event)"
                    name="bannerImage"
                  />
                  <img
                      :src="form.bannerImage"
                    name="bannerImage"
                    class="img-responsive"
                    height="70"
                    width="90"
                  />
                  </div>
                </div>
              </div>
              <div class="row" v-if="multiBanner">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlFile1"
                      >Upload Category Banner Image2</label
                    >
                   <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    @change="changeBannerImage2($event)"
                    name="bannerImage2"
                  />
                  <img
                      :src="form.bannerImage2"
                    name="bannerImage2"
                    class="img-responsive"
                    height="70"
                    width="90"
                  />
                  </div>
                </div>
              </div>
              <div class="row" v-if="catPosition">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('catPosition') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Category Position</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Category Position"
                      v-model="form.catPosition"
                      type="text"
                      name="catPosition"
                      class="form-control"
                  
                    />
                    <has-error :form="form" field="catPosition"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" v-if="subcatPosition">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('subCatPosition') }"
                  >
                    <label for="exampleFormControlInput1">
                      Sub Category Position</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Sub Category Position"
                      v-model="form.subCatPosition"
                      type="text"
                      name="subCatPosition"
                      class="form-control"
                     
                    />
                    <has-error :form="form" field="subCatPosition"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" v-if="thirdcatpo">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{
                      'has-error': form.errors.has('thirdCatPosition'),
                    }"
                  >
                    <label for="exampleFormControlInput1">
                      Third Category Position</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Third Category Position"
                      v-model="form.thirdCatPosition"
                      type="text"
                      name="thirdCatPosition"
                      class="form-control"
                      
                    />
                    <has-error
                      :form="form"
                      field="thirdCatPosition"
                    ></has-error>
                  </div>
                </div>
              </div>
              <div class="row" v-if="fourthcatpo">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{
                      'has-error': form.errors.has('fourthCatPosition'),
                    }"
                  >
                    <label for="exampleFormControlInput1">
                      Fourth Category Position</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Fourth Category Position"
                      v-model="form.fourthCatPosition"
                      type="text"
                      name="fourthCatPosition"
                      class="form-control"
                   
                    />
                    <has-error
                      :form="form"
                      field="fourthCatPosition"
                    ></has-error>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'is-invalid': form.errors.has('url') }"
                  >
                    <label for="exampleFormControlInput1">Category Url</label>
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Category Url"
                      v-model="form.url"
                      type="text"
                      name="url"
                      class="form-control"
                    />
                    <has-error :form="form" field="url"></has-error>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'is-invalid': form.errors.has('subStatus') }"
                  >
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        v-model="form.subStatus"
                        value="1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >Sub Status</label
                      >
                    </div>
                    <has-error :form="form" field="subStatus"></has-error>
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
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        category: "",        
        catName: "",
        catPosition: "",
        subCatPosition: "",
        thirdCatPosition: "",
        fourthCatPosition: "",
        subCategory: "",
        thirdCategory: "",
        image: "",
        catImage: "",
        bannerImage: "",
        bannerImage2: "",
        bannerImageType: "",
        url: "",
        subStatus: "1",
      }),
      categories: [],
      subcats: [],
      thirdcats: [],
      menus: [],
      submenus: [],
      menugets: [],
      maincat:true,
      imageview:false,
      subShow:true,
      thirdcatst: true,
      catPosition:true,
      subcatPosition:true,
      // menu: false,
      // subcatst: false,
      // thirdcatst: false,
      // subcatpo: false,
      thirdcatpo: true,
      fourthcatpo: true,
      // catpo: true,
      catpo: true,
      imageShow: true,
      singleBanner: false,
      multiBanner: false,
      catImageShow: true
    };
  },
  mounted() {
     this.editCategory();
     this.viewMenu();
     this.submenuShow();      
     this.allCategoryShow()();
      
   
  },
  methods: {

    editCategory() {
      axios.get(`api/category/${this.$route.params.id}`).then((res) => {
         this.form.fill(res.data.categorySingleInfo)
          if (res.data.categoryInfo.lavel === 4 ) {
                        this.form.category    = res.data.catName.id
                        this.form.subCategory = res.data.subCategoryName.id
                        this.form.thirdCategory = res.data.thirdCategoryName.id
                         this.maincat = true;
                         this.subShow = true;
                         this.thirdcatst = true;
                         this.catPosition = false;
                         this.subcatPosition = false;
                         this.thirdcatpo = false;
                         this.fourthcatpo = true;
                    }
          if (res.data.categoryInfo.lavel === 3 ) {
                        this.form.category= res.data.catName.id
                        this.form.subCategory = res.data.subCategoryName.id
                         this.maincat = true;
                        this.subShow = true;
                        this.thirdcatst = false;
                        this.catPosition = false;
                         this.subcatPosition = false;
                         this.thirdcatpo = true;
                         this.fourthcatpo = false;
                    }
          if (res.data.categoryInfo.lavel === 2 ) {
                        this.form.category    = res.data.catName.id
                         this.maincat = true;
                         this.subShow = false;
                         this.thirdcatst = false;
                         this.catPosition = false;
                         this.subcatPosition = true;
                         this.thirdcatpo = false;
                         this.fourthcatpo = false;
                    }
         if (res.data.categoryInfo.lavel === 1 ) {
                        this.maincat = false;
                        this.imageview=true;
                         this.subShow = false;
                         this.thirdcatst = false;
                         this.catPosition = true;
                         this.subcatPosition = false;
                         this.thirdcatpo = false;
                         this.fourthcatpo = false;
                        
                    }
      });
    },
        multiBannerShow(){
       
      this.singleBanner=true;
      this.multiBanner=true;
    },
    singleBannerShow(){
      this.singleBanner=true;
      this.multiBanner=false;
    },
     allCategoryShow(){
             axios.get('/categoryEdit/allCategory').then(res =>{
                    this.subcats = res.data.assetSubCategoryLists;
                    this.thirdcats  = res.data.assetThirdCategoryLists;
                  
             });
          },
    
     viewMenu() {
      axios.get("categorylist").then((res) => {
        this.menus = res.data.categoryList;
      });
    },    
     submenuShow() {
      axios.get('subcatshow/'+this.form.category).then((res) => {
        this.subcats = res.data.subcat;
      
      });
    
  
    },thirdmenuShow() {
      axios.get(`thirdcatshow/${this.form.subCategory}`).then((res) => {
        this.thirdcats = res.data.thirdcat;
       
      });
     
    },
    update() {
      axios.put(`api/category/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "category" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
    OurPhoto(){
         let photo = this.form.image;
         if (photo.length >100 ){
              return this.form.image;
         }
         else{
           return `categoryImage/${this.form.image}`
         }
       },
    OurCatPhoto(){
         let photo = this.form.catImage;
         if (photo.length >100 ){
              return this.form.catImage;
         }
         else{
           return `categoryImage/${this.form.catImage}`
         }
       },
    OurBannerPhoto(){
         let photo = this.form.bannerImage;
         if (photo.length >100 ){
              return this.form.bannerImage;
         }
         else{
           return `categoryImage/${this.form.bannerImage}`
         }
       },
    OurBannerPhoto2(){
         let photo = this.form.bannerImage2;
         if (photo.length >100 ){
              return this.form.bannerImage2;
         }
         else{
          
          
           return `categoryImage/${this.form.bannerImage2}`
          
             
          
         }
       },
 
    changeCatImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.catImage = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    changeBannerImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.bannerImage = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    changeBannerImage2(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.bannerImage2 = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    },
   
    changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    changeStatus(id) {
      axios.get(`api/submenus/${id}/edit`).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Change Status!!!!",
        });
        this.viewSubMenu();
      });
    },
    deletePost(id) {
      fetch(`api/submenus/${id}`, {
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
        this.viewSubMenu();
      });
    },
  },
};
</script>