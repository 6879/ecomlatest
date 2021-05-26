<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Incentive Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('incentiveAmount') }">
                  <label for="exampleFormControlInput1"> Amount </label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Amount "
                    v-model="form.incentiveAmount"
                    type="text"
                    name="incentiveAmount"
                    :class="{ 'is-invalid': form.errors.has('incentiveAmount') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="incentiveAmount"></has-error>
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
              <th>Amount</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(amount, index) in amounts" :key="amount.id">
              <td>{{ index + 1 }}</td>
              <td>{{ amount.incentiveAmount }}</td>          

              <td>
                
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(amount.id)"
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
      incentiveAmount: "",     
      }),
     amounts: [],
    };
  },
  mounted() {
    this.viewAmount();
  },
  methods: {
  add() {
      this.form
        .post("incentives")
         .then((response) => {
          this.form.reset();
          this.viewAmount();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewAmount() {
      axios.get("incentives")
      
        .then((res) => {
          this.amounts = res.data.getIncentive;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios.get(`incentives/${id}`
      ).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewAmount();
      });
    },
  },
};
</script>