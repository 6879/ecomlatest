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
        Category List
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
              <th>Category</th>

              <th>Sub Category</th>

             
            </tr>
          </thead>
          <tbody v-for="(menu, index) in menus" :key="menu.id">
            <tr v-if="index % 2 == 0" style="background-color: white">
              <td>{{ index + 1 }}</td>
              <td><span class="badge badge-success">{{ menu.catName }}</span></td>
              <td
                v-for="(subcatlistsub, index) in subcatlistssub"
                :key="subcatlistsub.id"
                v-if="subcatlistsub.preId == menu.id"
              >
                <div
                  v-for="(subcatlist, index) in subcatlists"
                  :key="subcatlist.id"
                  v-if="subcatlist.preId == menu.id"
                >
                <span class="badge badge-success">  <router-link
                  :to="{ name: 'thirdcatlist', params: { id: subcatlist.id } }"
                  > {{ subcatlist.catName }}</router-link> </span>
                </div>
              </td>
              <td
                
              >
                <div
                  v-for="(subcatlist, index) in subcatlists"
                  :key="subcatlist.id"
                  v-if="subcatlist.preId == menu.id"
                >
                <span class="badge badge-success">  <router-link
                  :to="{ name: 'thirdcatlist', params: { id: subcatlist.id } }"
                  > {{ subcatlist.catName }}</router-link></span>
                </div>
              </td>
              
              
            </tr>
            <tr v-else >
               <td>{{ index + 1 }}</td>
              <td><span class="badge badge-success">{{ menu.catName }}</span></td>
              <td
                v-for="(subcatlistsub, index) in subcatlistssub"
                :key="subcatlistsub.id"
                v-if="subcatlistsub.preId == menu.id"
              >
                <td
                  v-for="(subcatlist, index) in subcatlists"
                  :key="subcatlist.id"
                  v-if="subcatlist.preId == menu.id"
                >
                <span class="badge badge-success">   <router-link
                  :to="{ name: 'thirdcatlist', params: { id: subcatlist.id } }"
                  > {{ subcatlist.catName }}</router-link></span>
                </td>
               
           <td
               
              >
                <div
                  v-for="(subcatlist, index) in subcatlists"
                  :key="subcatlist.id"
                  v-if="subcatlist.preId == menu.id"
                >
                <span class="badge badge-success"> <router-link
                  :to="{ name: 'thirdcatlist', params: { id: subcatlist.id } }"
                  > {{ subcatlist.catName }}</router-link></span>
                </div>
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
      form: new Form({}),
      menus: [],
      subcatlistsub: [],
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
    this.submenuShowList();
    this.submenuShowListsub();
    this.thirdmenuShowList();
    this.thirdmenuShowListsub();
    this.fourthmenuShowListsub();

    this.fourthmenuShowList();
  },
  methods: {
    viewMenuList() {
      axios.get("categorylist").then((res) => {
        this.menus = res.data.categoryList;
      });
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