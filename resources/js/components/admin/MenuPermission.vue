<template>
  <div class="row" data-toggle="isotope">
        <form @submit.prevent="add"> <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Admin Menu Permission</h3>  
        <div class="panel-body">
           <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('roll') }"
                >
                  <label for="exampleFormControlSelect1">Select Admin Type</label>
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
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-12 panel-body panel panel-default">
      <div id="accordion">
        <div class="card" v-for="module in modules" v-bind:key="module.id">
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
                  {{ module.moduleName }}
                </h5>
              </a>
              <input
                v-model="form.moduleId" 
                v-bind:value="module.id"
                type="checkbox"
                class="form-check-input"
                id="exampleCheck8"
                style="float: right; right: 9px; margin: 23px"
              />
            </h5>
          </div>
          <div
            :id="`collapseOne${module.id}`"
            class="collapse"
            :aria-labelledby="`headingOne${module.id}`"
            data-parent="#accordion"
          >
            <div
              class="card-body"
              v-for="menu in menus"
              v-bind:key="menu.id"
              v-if="module.id == menu.moduleId"
            >
              <div
                class="card-header"
                :id="`#headingTwo${menu.id}`"
                style="background-color: #cfdae3"
              >
                <h5 class="mb-0">
                  <a
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    :data-target="`#collapseTwo${menu.id}`"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h5 style="font-size: 20px; font-weight: 535">
                      {{ menu.menuName }}
                    </h5>
                  </a>
                  <input
                     v-model="form.menuId" 
                     v-bind:value="menu.id"
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck9"
                    style="float: right; right: 9px; margin: 23px"
                  />
                </h5>
              </div>
              <div
                :id="`collapseTwo${menu.id}`"
                class="collapse"
                :aria-labelledby="`headingTwo${menu.id}`"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <table class="table table-hover">
                    <tbody>
                      <tr
                        
                        v-for="submenu in submenus"
                        v-bind:key="submenu.id"
                        v-if="
                          module.id == submenu.moduleId &&
                          menu.id == submenu.menuId
                        "
                      >
                        <td>{{ submenu.subMenuName }}</td>
                        <td>
                          <div class="form-check">
                            <input
                            disabled
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1"
                              >View</label
                            >
                          </div>
                        </td>
                        <td>
                          <div class="form-check">
                            <input
                            disabled
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck2"
                            />
                            <label class="form-check-label" for="exampleCheck2"
                              >Edit</label
                            >
                          </div>
                        </td>
                        <td>
                          <div class="form-check">
                            <input
                            disabled
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck3"
                            />
                            <label class="form-check-label" for="exampleCheck3"
                              >Delete</label
                            >
                          </div>
                        </td>

                        <td>
                          <div class="form-check">
                            <input
                            disabled
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck4"
                            />
                            <label class="form-check-label" for="exampleCheck4"
                              >Full</label
                            >
                          </div>
                        </td>
                        <td>
                          <div class="form-check">
                            <input
                             v-model="form.subMenuId" 
                             v-bind:value="submenu.id"
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck4"
                            />
                            <label class="form-check-label" for="exampleCheck4"
                              ></label
                            >
                          </div>
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
       <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Submit
        </button>
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
        menuId:[],
        moduleId:[],
        subMenuId:[],
      }),
      getUsers: [],
      types: [],
      modules: [],
      menus: [],
      submenus: [],
      types: [],
      users:[],
      userAdmin:false,
    };
  },
  mounted() {
    this.viewType();
    this.viewModule();
    this.viewMenu();
    this.viewSubMenu();
    this.viewType();
  },
  methods: {
    add() {
      this.form
        .post("api/adminpermission", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
         
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
     userShow(){
                axios.get(`user/${this.form.roll}`).then(res =>{
                 this.users = res.data.user ;               
                 this.userAdmin=true;              
              })              
         } , 
    viewType() {
      fetch("api/admintypes")
        .then((res) => res.json())
        .then((res) => {
          this.types = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewMenu() {
      fetch("api/menus")
        .then((res) => res.json())
        .then((res) => {
          this.menus = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewModule() {
      fetch("api/modules")
        .then((res) => res.json())
        .then((res) => {
          this.modules = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewSubMenu() {
      fetch("api/submenus")
        .then((res) => res.json())
        .then((res) => {
          this.submenus = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewType() {
      fetch("api/admintypes")
        .then((res) => res.json())
        .then((res) => {
          this.types = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/adminentry/${id}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewUser();
      });
    },
  },
};
</script>