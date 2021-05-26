<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Unit Entery</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('unit') }">
                  <label for="exampleFormControlInput1">Unit Entry</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Unit Entry"
                    v-model="form.unit"
                    type="text"
                    name="unit"
                    :class="{ 'is-invalid': form.errors.has('unit') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="unit"></has-error>
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
              <th>Unit</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(unit, index) in units" :key="unit.id">
              <td>{{ index + 1 }}</td>
              <td>{{ unit.unit }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editunit', params: { id: unit.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(unit.id)"
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
        unit: "",
      }),
      units: [],
    };
  },
  mounted() {
    this.viewUnit();
  },
  methods: {
  add() {
      this.form
        .post("api/units", {
          method: "post",
          body: JSON.stringify(this.unit),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewUnit();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewUnit() {
      fetch("api/units")
        .then((res) => res.json())
        .then((res) => {
          this.units = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/units/${id}`, {
        method: "delete",
        body: JSON.stringify(this.unit),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewUnit();
      });
    },
  },
};
</script>