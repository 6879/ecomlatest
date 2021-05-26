<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Create Module</h3>  
        <div class="panel-body">
          <form @submit.prevent="addModule">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('moduleName') }">
                  <label for="exampleFormControlInput1">Module</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Module"
                    v-model="form.moduleName"
                    type="text"
                    name="menuName"
                    :class="{ 'is-invalid': form.errors.has('moduleName') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="moduleName"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('modulePosition') }">
                  <label for="exampleFormControlInput1">Position</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Module Position"
                    v-model="form.modulePosition"
                    type="text"
                    name="modulePosition"
                    :class="{ 'is-invalid': form.errors.has('modulePosition') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="modulePosition"></has-error>
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
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(module, index) in modules" :key="module.id">
              <td>{{ index + 1 }}</td>
              <td>{{ module.moduleName }}</td>
              <td>{{ module.modulePosition }}</td>

              <td>
                <router-link
                  :to="{ name: 'editModule', params: { id: module.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(module.id)"
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
        moduleName: "",
        modulePosition: "",
      }),
      modules: [],
    };
  },
  mounted() {
    this.viewModule();
  },
  methods: {
    addModule() {
      this.form
        .post("api/modules", {
          method: "post",
          body: JSON.stringify(this.module),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.viewModule();
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

    deletePost(id) {
      fetch(`api/modules/${id}`, {
        method: "delete",
        body: JSON.stringify(this.module),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewModule();
      });
    },
  },
};
</script>