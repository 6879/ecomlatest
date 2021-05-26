<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Admin Type Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('adminType') }">
                  <label for="exampleFormControlInput1">Admin Type</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Admin Type"
                    v-model="form.adminType"
                    type="text"
                    name="adminType"
                    :class="{ 'is-invalid': form.errors.has('adminType') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="adminType"></has-error>
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
              <th>Admin Type</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(type, index) in types" :key="type.id">
              <td>{{ index + 1 }}</td>
              <td>{{ type.adminType }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editadmintype', params: { id: type.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(type.id)"
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
        adminType: "",     
      }),
      types: [],
    };
  },
  mounted() {
    this.viewType();
  },
  methods: {
  add() {
      this.form
        .post("api/admintypes", {
          method: "post",
          body: JSON.stringify(this.admintype),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewType();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
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
      fetch(`api/admintypes/${id}`, {
        method: "delete",
        body: JSON.stringify(this.admintype),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewType();
      });
    },
  },
};
</script>