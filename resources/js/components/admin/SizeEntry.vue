<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Size Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('size') }">
                  <label for="exampleFormControlInput1">Size Entry</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Size Entry"
                    v-model="form.size"
                    type="text"
                    name="size"
                    :class="{ 'is-invalid': form.errors.has('size') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="size"></has-error>
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
              <th>Size</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(size, index) in sizes" :key="size.id">
              <td>{{ index + 1 }}</td>
              <td>{{ size.size }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editsize', params: { id: size.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(size.id)"
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
      size: "",     
      }),
     sizes: [],
    };
  },
  mounted() {
    this.viewSize();
  },
  methods: {
  add() {
      this.form
        .post("api/sizes", {
          method: "post",
          body: JSON.stringify(this.size),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewSize();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewSize() {
      fetch("api/sizes")
        .then((res) => res.json())
        .then((res) => {
          this.sizes = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/sizes/${id}`, {
        method: "delete",
        body: JSON.stringify(this.size),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewSize();
      });
    },
  },
};
</script>