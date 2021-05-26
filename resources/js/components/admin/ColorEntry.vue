<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Color Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('color') }">
                  <label for="exampleFormControlInput1">Color Entry</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Color Entry"
                    v-model="form.color"
                    type="text"
                    name="color"
                    :class="{ 'is-invalid': form.errors.has('color') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="color"></has-error>
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
              <th>Color</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(color, index) in colors" :key="color.id">
              <td>{{ index + 1 }}</td>
              <td>{{ color.color }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editcolor', params: { id: color.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(color.id)"
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
      color: "",     
      }),
     colors: [],
    };
  },
  mounted() {
    this.viewColor();
  },
  methods: {
  add() {
      this.form
        .post("api/colors", {
          method: "post",
          body: JSON.stringify(this.brand),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewColor();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewColor() {
      fetch("api/colors")
        .then((res) => res.json())
        .then((res) => {
          this.colors = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/colors/${id}`, {
        method: "delete",
        body: JSON.stringify(this.brand),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewColor();
      });
    },
  },
};
</script>