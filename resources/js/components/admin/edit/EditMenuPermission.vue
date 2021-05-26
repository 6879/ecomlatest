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
              v-if="module.id == view.moduleId"
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
                      {{ module.moduleName }}
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
              <div
                :id="`collapseOne${module.id}`"
                class="collapse"
                :aria-labelledby="`headingOne${module.id}`"
                data-parent="#accordion"
              >
                <div v-for="vmenu in vmenus" :key="vmenu.id">
                  <div
                    class="card-body"
                    v-for="menu in menus"
                    v-bind:key="menu.id"
                    v-if="module.id == menu.moduleId && menu.id == vmenu.menuId"
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
                        <a
                          :disabled="form.busy"
                          type="submit"
                          class="btn btn-danger"
                          v-on:click="changeStatus(menu.id)"
                          style="float: right; right: 9px; margin: 10px"
                          >Deactive
                        </a>
                      </h5>
                    </div>
                    <div
                      :id="`collapseTwo${menu.id}`"
                      class="collapse"
                      :aria-labelledby="`headingTwo${menu.id}`"
                      data-parent="#accordion"
                    >
                      <div>
                        <div class="card-body">
                          <table class="table table-hover">
                            <tbody
                              v-for="vsubmenu in vsubmenus"
                              :key="vsubmenu.id"
                            >
                              <tr
                                v-for="submenu in submenus"
                                v-bind:key="submenu.id"
                                v-if="
                                  module.id == submenu.moduleId &&
                                  menu.id == submenu.menuId &&
                                  submenu.id == vsubmenu.subMenuId
                                "
                              >
                                <td>{{ submenu.subMenuName }}</td>
                                <td>
                                  <div class="form-check">
                                    <label
                                      class="form-check-label"
                                      for="exampleCheck1"
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
                                    <label
                                      class="form-check-label"
                                      for="exampleCheck2"
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
                                    <label
                                      class="form-check-label"
                                      for="exampleCheck3"
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
                                    <label
                                      class="form-check-label"
                                      for="exampleCheck4"
                                      >Full</label
                                    >
                                  </div>
                                </td>
                                <td>
                                  <a
                                    :disabled="form.busy"
                                    type="submit"
                                    class="btn btn-danger"
                                    v-on:click="changeStatusMsub(submenu.id)"
                                    style="
                                      float: right;
                                      right: 9px;
                                      margin: 10px;
                                    "
                                    >Deactive
                                  </a>
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
            </div>
          </div>
          <button :disabled="form.busy" type="submit" class="btn btn-primary">
            Submit
          </button>
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
      menus: [],
      vmenus: [],
      vsubmenus: [],
      submenus: [],
      userAdmin: false,
    };
  },
  mounted() {
    this.viewType();
    this.viewModule();
    this.viewMenu();
    this.viewSubMenu();
  },
  methods: {
    moduleShow() {
      axios.get("/moduleuser/" + this.form.admin).then((res) => {
        this.views = res.data.getM;
      });
      axios.get("/menuuser/" + this.form.admin).then((res) => {
        this.vmenus = res.data.getMn;
      });
      axios.get("/submenuuser/" + this.form.admin).then((res) => {
        this.vsubmenus = res.data.getMnsub;
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
    changeStatus(id) {
      axios.get(`api/adminpermission/${id}/edit`).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Change Permission!!!!",
        });
        this.moduleShow();
      });
    },
    changeStatusM(id) {
      axios.get(`adminpermissionmodule/${id}`).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Change Permission!!!!",
        });
        this.moduleShow();
      });
    },
    changeStatusMsub(id) {
      axios.get(`adminpermissionsubmenu/${id}`).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Change Permission!!!!",
        });
        this.moduleShow();
      });
    },
  },
};
</script>