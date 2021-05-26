<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Generation Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('name') }">
                  <label for="exampleFormControlInput1">Name</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('gAmount') }">
                  <label for="exampleFormControlInput1">Amount</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Amount"
                    v-model="form.gAmount"
                    type="text"
                    name="gAmount"
                    :class="{ 'is-invalid': form.errors.has('gAmount') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="gAmount"></has-error>
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
    <div class="item col-xs-12 col-md-12  panel-body panel panel-default">
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
              <th>Name</th>              
              <th>Amount</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(generation, index) in generations" :key="generation.id">
              <td>{{ index + 1 }}</td>
              <td>{{ generation.name }}</td>          
              <td>{{ generation.gAmount }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editgeneration', params: { id: generation.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(generation.id)"
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
      name: "",     
      gAmount: "",     
      }),
     generations: [],
    };
  },
  mounted() {
    this.viewGeneration();
  },
  methods: {
  add() {
      this.form
        .post("generationInfo")
         .then((response) => {
          this.form.reset();
          this.viewGeneration();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewGeneration() {
      axios.get("generationInfo")
      
        .then((res) => {
          this.generations = res.data.getGeneration;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios.get(`generationDelete/${id}`
      ).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewGeneration();
      });
    },
  },
};
</script>