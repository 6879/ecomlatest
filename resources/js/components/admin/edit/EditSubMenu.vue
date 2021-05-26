<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Edit Sub Menu
        </h3>
        <div class="panel-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('moduleId') }"
                >
                  <label for="exampleFormControlSelect1">Select Module</label>
                  <select
                    class="form-control"
                    v-model="form.moduleId"
                    id="exampleFormControlSelect1"
                    name="moduleId"
                   
                    :class="{ 'is-invalid': form.errors.has('moduleId') }"
                  >
                    <option
                      v-for="module in modules"
                      :key="module.id"
                      v-bind:value="module.id"
                    >
                      {{ module.moduleName }}
                    </option>
                  </select>
                  <has-error :form="form" field="moduleId"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('menuId') }"
                >
                  <label for="exampleFormControlSelect2">Select Menu</label>
                  <select
                    class="form-control"
                    v-model="form.menuId"
                    id="exampleFormControlSelect2"
                    name="menuId"
                    :class="{ 'is-invalid': form.errors.has('menuId') }"
                  >
                    <option
                      v-for="menu in menus"
                      :key="menu.id"
                      v-bind:value="menu.id"
                    >
                      {{ menu.menuName }}
                    </option>
                  </select>
                  <has-error :form="form" field="menuId"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('subMenuName') }"
                >
                  <label for="exampleFormControlInput1">Sub Menu</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Sub Menu"
                    v-model="form.subMenuName"
                    type="text"
                    name="subMenuName"
                    class="form-control"
                  />
                  <has-error :form="form" field="subMenuName"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('subMenuPosition') }"
                >
                  <label for="exampleFormControlInput1">Position</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Sub Menu Position"
                    v-model="form.subMenuPosition"                                   
                    type="text"                  
                    name="subMenuPosition"
                    class="form-control"
                  />
                  <has-error :form="form" field="subMenuPosition"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'is-invalid': form.errors.has('subMenuUrl') }"
                >
                  <label for="exampleFormControlInput1">Menu Url</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Sub Menu Url"
                    v-model="form.subMenuUrl"
                    type="text"
                    name="subMenuUrl"
                    class="form-control"
                  />
                  <has-error :form="form" field="subMenuUrl"></has-error>
                </div>
              </div>
            </div>         

            <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        moduleId: "",
        menuId: "",
        subMenuName: "",
        subMenuPosition:"",
        subMenuUrl: "",     
      }),
      modules: [],
      menus: [],
      submenus: [],
      menugets:[],
      menu:false,
    };
  },
  mounted() {
    this.viewModule();
    this.viewMenu();
    this.viewSubMenu();
    this.editsub();
  },
  methods: {
    add() {
      this.form
        .post("api/submenus", {
          method: "post",
          body: JSON.stringify(this.submenu),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.viewSubMenu();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
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
    viewMenu() {
      fetch("api/menus")
        .then((res) => res.json())
        .then((res) => {
          this.menus = res.data;
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
    menuShow(){
                axios.get(`menusget/${this.form.moduleId}`).then(res =>{
                 this.menugets = res.data.menuget ;               
                 this.menu=true;              
              })              
         } ,         
   editsub() {
      axios.get(`api/submenus/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`api/submenus/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "submenuentry" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
  },
};
</script>