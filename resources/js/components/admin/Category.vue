<template>
  <div>
    <div class="row" data-toggle="isotope">
      <div class="col-xs-12 col-md-2"></div>
      <div class="col-xs-12 col-md-8">
        <div class="panel panel-default">
          <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
            Create Category
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
              <div class="row" v-if="imageShow">
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
                      :src="form.image"
                      class="img-responsive"
                      height="70"
                      width="90"
                    />
                  </div>
                </div>
              </div>
              <div class="row" v-if="catImageShow">
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
                      :src="form.catImage"
                      class="img-responsive"
                      height="70"
                      width="90"
                    />
                  </div>
                </div>
              </div>
              
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="form.bannerImageType"  @change.prevent="singleBannerShow()" id="inlineRadio1" :value="1">
  <label class="form-check-label" for="inlineRadio1">Single Banner Image</label>

  <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="form.bannerImageType" @change.prevent="multiBannerShow()" id="inlineRadio2" :value="2">
  <label class="form-check-label" for="inlineRadio2">Multi Banner Image</label>
</div>
    <div class="row" v-if="singleBanner">
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
                      >Upload Category Banner Image 2</label
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
                      class="img-responsive"
                      height="70"
                      width="90"
                    />
                  </div>
                </div>
              </div>
              <div class="row" v-if="singleBanner">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('bannerImageUrl') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Banner Image Url</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Banner Image Url"
                      v-model="form.bannerImageUrl"
                      type="text"
                      name="bannerImageUrl"
                      class="form-control"
                    
                    />
                    <has-error :form="form" field="bannerImageUrl"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" v-if="multiBanner">
                <div class="col-md-12">
                  <div
                    class="form-group"
                    :class="{ 'has-error': form.errors.has('bannerImage2Url') }"
                  >
                    <label for="exampleFormControlInput1"
                      >Banner Image2 Url</label
                    >
                    <input
                      id="exampleFormControlInput1"
                      placeholder="Banner Image2 Url"
                      v-model="form.bannerImage2Url"
                      type="text"
                      name="bannerImage2Url"
                      class="form-control"
                    
                    />
                    <has-error :form="form" field="bannerImage2Url"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" v-if="catpo">
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
                      disabled
                    />
                    <has-error :form="form" field="catPosition"></has-error>
                  </div>
                </div>
              </div>
              <div class="row" v-if="subcatpo">
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
                      disabled
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
                      disabled
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
                      disabled
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
    <div
      class="col-xs-12 col-md-12 panel-body panel panel-default"
      v-for="menu in menus"
      :key="menu.id"
    >
      <center>
        <h2 style="color: skyblue; font-width: bold">{{ menu.catName }}</h2>
      </center>
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
              <th>Category</th>
              <th>Url</th>
              <th>Position</th>
              <th>Icon Image</th>
              <th>Category Image</th>
              <th>Category Banner Image</th>
              <th>Category Banner Image2</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ menu.id }}</td>
              <td>
                {{ menu.catName }}
              </td>

              <td>{{ menu.url }}</td>
              <td v-if="menu.lavel == 1">{{ menu.catPosition }}</td>
              <td v-if="menu.lavel == 2">
                {{ menu.subCatPosition }}
              </td>
              <td v-if="menu.lavel == 3">
                {{ menu.thirdCatPosition }}
              </td>
              <td v-if="menu.lavel == 4">
                {{ menu.fourthCatPosition }}
              </td>
              <td>
                <img
                  :src="'/categoryImage/' + menu.image"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                <img
                  :src="'/categoryImage/' + menu.catImage"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                <img
                  :src="'/categoryImage/' + menu.bannerImage"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                <img
                  :src="'/categoryImage/' + menu.bannerImage2"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>

              <td>
                <router-link
                  :to="{ name: 'editcategory', params: { id: menu.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(menu.id)"
                >
                  <i class="fa fa-trash"></i>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="table-responsive"
        v-for="(subcatlistsub, index) in subcatlistssub"
        :key="subcatlistsub.id"
        v-if="subcatlistsub.preId == menu.id"
      >
        <p>Sub Category For {{ menu.catName }}</p>
        <table
          data-toggle=""
          class="table table-responsive"
          cellspacing="1"
          width="200%"
        >
          <thead style="background: #e4e6ed">
            <tr>
              <th>ID</th>
              <th>Category</th>

              <th>Url</th>
              <th>Position</th>
              <th>Category Image</th>
              <th>Category Banner Image</th>
              <th>Category Banner Image2</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody
            v-for="(subcatlist, index) in subcatlists"
            :key="subcatlist.id"
            v-if="subcatlist.preId == menu.id"
          >
            <tr>
              <td>{{ index + 1 }}</td>
              <td>
                {{ subcatlist.catName }}
              </td>

              <td>{{ subcatlist.url }}</td>
              <td v-if="subcatlist.lavel == 1">{{ subcatlist.catPosition }}</td>
              <td v-if="subcatlist.lavel == 2">
                {{ subcatlist.subCatPosition }}
              </td>
              <td v-if="subcatlist.lavel == 3">
                {{ subcatlist.thirdCatPosition }}
              </td>
              <td v-if="subcatlist.lavel == 4">
                {{ subcatlist.fourthCatPosition }}
              </td>
              <td>
                <img
                  :src="'/categoryImage/' + subcatlist.catImage"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                <img
                  :src="'/categoryImage/' + subcatlist.bannerImage"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                <img
                  :src="'/categoryImage/' + subcatlist.bannerImage2"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>
                <router-link
                  :to="{ name: 'editcategory', params: { id: subcatlist.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(subcatlist.id)"
                >
                  <i class="fa fa-trash"></i>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="table-responsive"
          v-for="(subcatlist, index) in subcatlists"
          v-if="subcatlist.preId == menu.id"
        >
          <div
            v-for="(thirdcatlist, index) in thirdcatlists"
            :key="thirdcatlist.id"
            v-if="thirdcatlist.preId == subcatlist.id"
          >
            <p>Third Category For {{ subcatlist.catName }}</p>
            <table
              data-toggle=""
              class="table table-responsive"
              cellspacing="1"
              width="200%"
            >
              <thead style="background: #e4e6ed">
                <tr>
                  <th>ID</th>
                  <th>Category</th>

                  <th>Url</th>
                  <th>Position</th>
                  <th>Category Image</th>
                  <th>Category Banner Image</th>
                  <th>Category Banner Image2</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(thirdcatlistsub, index) in thirdcatlistssub"
                  :key="thirdcatlistsub.id"
                  v-if="thirdcatlistsub.preId == subcatlist.id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{ thirdcatlistsub.catName }}
                  </td>

                  <td>{{ thirdcatlistsub.url }}</td>
                  <td v-if="thirdcatlistsub.lavel == 1">
                    {{ thirdcatlistsub.catPosition }}
                  </td>
                  <td v-if="thirdcatlistsub.lavel == 2">
                    {{ thirdcatlistsub.subCatPosition }}
                  </td>
                  <td v-if="thirdcatlistsub.lavel == 3">
                    {{ thirdcatlistsub.thirdCatPosition }}
                  </td>
                  <td v-if="thirdcatlistsub.lavel == 4">
                    {{ thirdcatlistsub.fourthCatPosition }}
                  </td>
                    <td>
                <img
                  :src="'/categoryImage/' + thirdcatlistsub.catImage"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
                    <td>
                <img
                  :src="'/categoryImage/' + thirdcatlistsub.bannerImage"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
                    <td>
                <img
                  :src="'/categoryImage/' + thirdcatlistsub.bannerImage2"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
                  <td>
                    <router-link
                      :to="{
                        name: 'editcategory',
                        params: { id: thirdcatlistsub.id },
                      }"
                      class="btn btn-primary"
                      ><i class="fa fa-edit"></i>Edit</router-link
                    >
                    <button
                      class="btn btn-danger"
                      @click.prevent="deletePost(thirdcatlistsub.id)"
                    >
                      <i class="fa fa-trash"></i>Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="table-responsive"
          v-for="(subcatlist, index) in subcatlists"
          v-if="subcatlist.preId == menu.id"
        >
          <div
            v-for="thirdcatlistsub in thirdcatlistssub"
            :key="thirdcatlistsub.id"
            v-if="thirdcatlistsub.preId == subcatlist.id"
          >
            <div
              v-for="(fourthcatlistsub, index) in fourthcatlistssub"
              :key="fourthcatlistsub.id"
              v-if="fourthcatlistsub.preId == thirdcatlistsub.id"
            >
              <p>Fourth Category For {{ thirdcatlistsub.catName }}</p>
              <table
                data-toggle=""
                class="table table-responsive"
                cellspacing="1"
                width="200%"
              >
                <thead style="background: #e4e6ed">
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Url</th>
                    <th>Position</th>
                    <th>Category Image</th>
                    <th>Category Banner Image</th>
                    <th>Category Banner Image2</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(fourthcatlist, index) in fourthcatlists"
                    :key="fourthcatlist.id"
                    v-if="fourthcatlist.preId == thirdcatlistsub.id"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>
                      {{ fourthcatlist.catName }}
                    </td>

                    <td>{{ fourthcatlist.url }}</td>
                    <td v-if="fourthcatlist.lavel == 1">
                      {{ fourthcatlist.catPosition }}
                    </td>
                    <td v-if="fourthcatlist.lavel == 2">
                      {{ fourthcatlist.subCatPosition }}
                    </td>
                    <td v-if="fourthcatlist.lavel == 3">
                      {{ fourthcatlist.thirdCatPosition }}
                    </td>
                    <td v-if="fourthcatlist.lavel == 4">
                      {{ fourthcatlist.fourthCatPosition }}
                    </td>
                      <td>
                <img
                  :src="'/categoryImage/' + fourthcatlist.catImage"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
                      <td>
                <img
                  :src="'/categoryImage/' + fourthcatlist.bannerImage"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
                      <td>
                <img
                  :src="'/categoryImage/' + fourthcatlist.bannerImage2"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>

                    <td>
                      <router-link
                        :to="{
                          name: 'editcategory',
                          params: { id: fourthcatlist.id },
                        }"
                        class="btn btn-primary"
                        ><i class="fa fa-edit"></i>Edit</router-link
                      >
                      <button
                        class="btn btn-danger"
                        @click.prevent="deletePost(fourthcatlist.id)"
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
        catName: "",
        catPosition: "",
        subCatPosition: "",
        subCategory: "",
        thirdCategory: "",
        image: "",
        catImage: "",
        bannerImage: "",
        bannerImage2: "",
        bannerImage2Url: "",
        bannerImageUrl: "",
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
      subcatlists: [],
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
      singleBanner: false,
      multiBanner: false,
      catImageShow: true,
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
        .post("api/category", {
          method: "post",
          body: JSON.stringify(this.submenu),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.viewMenuList();
          this.submenuShowList();
          this.thirdmenuShowList();
          this.fourthmenuShowList();
          this.thirdmenuShowListsub();
          this.fourthmenuShowListsub();
          this.submenuShowListsub();
          this.viewCategory();

          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
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
    changeStatus(id) {
      axios.get(`api/submenus/${id}/edit`).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Change Status!!!!",
        });
        this.viewSubMenu();
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

    deletePost(id) {
      Swal.fire(
        "Are You Sure Delete this Category",

        "question"
      ).then((response) => {
        fetch(`api/category/${id}`, {
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