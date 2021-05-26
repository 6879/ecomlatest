<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Create Sub Menu
        </h3>
        <div class="panel-body">
          <form @submit.prevent="add">
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
                    @change.prevent="menuShow()"
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
                  <label for="exampleFormControlSelect1">Select Menu</label>
                  <select
                    class="form-control"
                    v-model="form.menuId"
                    id="exampleFormControlSelect1"
                    name="menuId"
                    :class="{ 'is-invalid': form.errors.has('menuId') }"
                  >
                    <option
                      v-for="menu in menugets"
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-12 panel-body panel panel-default">
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
              <th>Module</th>
              <th>Menu</th>
              <th>Sub Menu</th>
              <th>Position</th>
              <th>Url</th>             
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(submenu, index) in submenus" :key="submenu.id">
              <td>{{ index + 1 }}</td>
              <td
                v-for="module in modules"
                :key="module.id"
                v-bind:value="module.id"
                v-if="module.id == submenu.moduleId"              >
                {{ module.moduleName }}
              </td>
              <td
                v-for="menu in menus"
                :key="menu.id"
                v-bind:value="menu.id"
                v-if="menu.id == submenu.menuId"
              >
                {{ menu.menuName }}
              </td>
              <td>{{ submenu.subMenuName }}</td>
              <td>{{ submenu.subMenuPosition }}</td>
              <td>{{ submenu.subMenuUrl }}</td>              
              <td v-if="submenu.status == 0">
                <button
                  type="button"
                  class="btn btn-success waves-effect waves-light"
                  v-on:click="changeStatus(submenu.id)"
                >
                  Active
                </button>
              </td>
              <td v-else>
                <button
                  type="button"
                  class="btn btn-danger waves-effect waves-light"
                  v-on:click="changeStatus(submenu.id)"
                >
                  <i class="mdi mdi-close"></i>Deactive
                </button>
              </td>
              <!-- <td>
               
              </td> -->

              <td>
                <router-link
                  :to="{ name: 'editSubMenu', params: { id: submenu.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(submenu.id)"
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