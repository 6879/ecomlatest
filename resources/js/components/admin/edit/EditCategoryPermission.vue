<template>
  <div class="row" data-toggle="isotope">
    <form @submit.prevent="add">
      <div class="item col-xs-12 col-md-2"></div>
      <div class="item col-xs-12 col-md-8">
        <div class="panel panel-default">
          <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
            Admin Menu Permission
          </h3>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('roll') }"
                >
                  <label for="exampleFormControlSelect1"
                    >Select Admin Type</label
                  >
                  <select
                    class="form-control"
                    v-model="form.roll"
                    @change.prevent="userShow()"
                    id="exampleFormControlSelect1"
                    name="roll"
                    :class="{ 'is-invalid': form.errors.has('roll') }"
                  >
                    <option
                      v-for="type in types"
                      :key="type.id"
                      v-bind:value="type.id"
                    >
                      {{ type.adminType }}
                    </option>
                  </select>
                  <has-error :form="form" field="roll"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('admin') }"
                >
                  <label for="exampleFormControlSelect1">Select Admin</label>
                  <select
                    class="form-control"
                    v-model="form.admin"
                    @change.prevent="moduleShow()"
                    id="exampleFormControlSelect1"
                    name="admin"
                    :class="{ 'is-invalid': form.errors.has('admin') }"
                  >
                    <option
                      v-for="user in users"
                      :key="user.id"
                      v-bind:value="user.id"
                    >
                      {{ user.name }}
                    </option>
                  </select>
                  <has-error :form="form" field="admin"></has-error>
                </div>
              </div>
            </div>
            <div v-for="view in views">{{ view.id }}</div>
          </div>
        </div>
      </div>
      <div class="item col-xs-12 col-md-2"></div>
      <div class="item col-xs-12 col-md-12 panel-body panel panel-default">
        <div id="accordion">
          <div v-for="view in views" :key="view.id">
            <div
              class="card"
              v-for="module in modules"
              v-bind:key="module.id"
              v-if="module.id == view.categoryId"
            >
              <div
                class="card-header"
                :id="`#headingOne${module.id}`"
                style="background-color: #0199d7"
              >
                <h5 class="mb-0">
                  <a
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    :data-target="`#collapseOne${module.id}`"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h5 style="font-size: 20px; font-weight: 535; color: white">
                      {{ module.catName }}
                    </h5>
                  </a>
                  <a
                    :disabled="form.busy"
                    type="submit"
                    class="btn btn-danger"
                    v-on:click="changeStatusM(module.id)"
                    style="float: right; right: 9px; margin: 10px"
                    >Deactive
                  </a>
                </h5>
              </div>
             
            </div>
          </div>
         
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        admin: "",
        roll: "",
        menuId: "",
      }),
      getUsers: [],
      types: [],
      views: [],
      users: [],
      modules: [],
     
      submenus: [],
      userAdmin: false,
    };
  },
  mounted() {
    this.viewType();
    this.viewMenuList();
   
  },
  methods: {
    moduleShow() {
      axios.get("/catuser/" + this.form.admin).then((res) => {
        this.views = res.data.getM;
      });
    
    
    },

    userShow() {
      axios.get(`user/${this.form.roll}`).then((res) => {
        this.users = res.data.user;
      });
    },

    viewType() {
      fetch("api/admintypes")
        .then((res) => res.json())
        .then((res) => {
          this.types = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewMenuList() {
      axios.get("categorylist").then((res) => {
        this.modules = res.data.categoryList;
      });
    },
 
    changeStatusM(id) {
      axios.get(`catPermission/${id}`).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Change Permission!!!!",
        });
        this.moduleShow();
        this.playSound();
      });
    },

   playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },  
  },
};
</script>