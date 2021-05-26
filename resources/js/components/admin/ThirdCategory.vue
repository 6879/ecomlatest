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
Third Category List
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
              <th>Sub Category</th>

              <th>3rd Category</th>

             
            </tr>
          </thead>
          <tbody v-for="(menu, index) in menus" :key="menu.id">
            <tr v-if="index % 2 == 0" style="background-color: white">
              <td>{{ index + 1 }}</td>
              <td><span class="badge badge-success">{{ menu.catName }}</span></td>
              <td
                v-for="subcatlistsub in subcatlistssub"
                :key="subcatlistsub.id"
               
              >
<span class="badge badge-success"><router-link
                  :to="{ name: 'fourthcatlist', params: { id: subcatlistsub.id } }"
                  >{{ subcatlistsub.catName }}</router-link></span>
              </td>
                       
              
            </tr>
            <tr v-else >
               <td>{{ index + 1 }}</td>
              <td><span class="badge badge-success">{{ menu.catName }}</span></td>
              <td
                v-for="subcatlistsub in subcatlistssub"
                :key="subcatlistsub.id"
               
              >
<span class="badge badge-success"><router-link
                  :to="{ name: 'fourthcatlist', params: { id: subcatlistsub.id } }"
                  >{{ subcatlistsub.catName }}</router-link></span>
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
      subcatlistssub: [],
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
   
    this.submenuShowListsub();
  

    this.fourthmenuShowList();
  },
  methods: {
    viewMenuList() {
      axios.get(`subcategorylist/${this.$route.params.id}`).then((res) => {
        this.menus = res.data.subcategoryList;
      });
    },
   
    
    submenuShowListsub() {
      axios.get(`thirdcategorylist/${this.$route.params.id}`).then((res) => {
        this.subcatlistssub = res.data.subcatlistsub;
      });
    },
 
  },
};
</script>