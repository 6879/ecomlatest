<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Create Menu
        </h3>
        <div class="panel-body">
          <form @submit.prevent="addMenu">
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
                  :class="{ 'has-error': form.errors.has('menuName') }"
                >
                  <label for="exampleFormControlInput1">Menu</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Menu"
                    v-model="form.menuName"
                    type="text"
                    name="menuName"
                    class="form-control"
                  />
                  <has-error :form="form" field="menuName"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('menuPosition') }"
                >
                  <label for="exampleFormControlInput1">Position</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Menu Position"
                    v-model="form.menuPosition"
                    type="text"
                    name="modulePosition"
                    class="form-control"
                  />
                  <has-error :form="form" field="menuPosition"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'is-invalid': form.errors.has('menuUrl') }"
                >
                  <label for="exampleFormControlInput1">Menu Url</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Menu Url"
                    v-model="form.menuUrl"
                    type="text"
                    name="menuUrl"
                    class="form-control"
                  />
                  <has-error :form="form" field="menuUrl"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'is-invalid': form.errors.has('substatus') }"
                >                 
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      v-model="form.substatus"
                     value="1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >Sub Status</label
                    >
                  </div>                  
                  <has-error :form="form" field="substatus"></has-error>
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
              <th>Position</th>
              <th>Url</th>           
              <th>Sub Status</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(menu, index) in menus" :key="menu.id">
              <td>{{ index + 1 }}</td>
              <td
                v-for="module in modules"
                :key="module.id"
                v-bind:value="module.id"
                v-if="module.id == menu.moduleId"
              >
                {{ module.moduleName }}
              </td>
              <td>{{ menu.menuName }}</td>
              <td>{{ menu.menuPosition }}</td>
              <td>{{ menu.menuUrl }}</td>
              <td v-if="menu.substatus == 0">No</td>
              <td v-else>Yes</td>
              <td v-if="menu.status == 0">
                <button
                  type="button"
                  class="btn btn-success waves-effect waves-light"
                  v-on:click="changeStatus(menu.id)"
                >
                  Active
                </button>
              </td>
              <td v-else>
                <button
                  type="button"
                  class="btn btn-danger waves-effect waves-light"
                  v-on:click="changeStatus(menu.id)"
                >
                  <i class="mdi mdi-close"></i>Deactive
                </button>
              </td>
              <!-- <td>
               
              </td> -->

              <td>
                <router-link
                  :to="{ name: 'editMenu', params: { id: menu.id } }"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        moduleId: "",
        menuName: "",
        menuPosition: "",
        menuUrl: "",
        substatus: '1',
      }),
      modules: [],
      menus: [],
    };
  },
  mounted() {
    this.viewModule();
    this.viewMenu();
  },
  methods: {
    addMenu() {
      this.form
        .post("api/menus", {
          method: "post",
          body: JSON.stringify(this.menu),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.viewMenu();
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
    changeStatus(id) {
      axios.get(`api/menus/${id}/edit`).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Change Status!!!!",
        });
        this.viewMenu();
      });
    },
    deletePost(id) {
      fetch(`api/menus/${id}`, {
        method: "delete",
        body: JSON.stringify(this.menu),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewMenu();
      });
    },
  },
};
</script>