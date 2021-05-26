<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Commission Type Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('cType') }">
                  <label for="exampleFormControlInput1">Commission Type Entry</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Commission Type Entry"
                    v-model="form.cType"
                    type="text"
                    name="cType"
                    :class="{ 'is-invalid': form.errors.has('cType') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="cType"></has-error>
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
              <th>Commission_Type</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(commission, index) in commissions" :key="commission.id">
              <td>{{ index + 1 }}</td>
              <td>{{ commission.cType }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editcommissiontype', params: { id: commission.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(commission.id)"
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
      cType: "",     
      }),
     commissions: [],
    };
  },
  mounted() {
    this.viewCommission();
  },
  methods: {
  add() {
      this.form
        .post("commissionType")
         .then((response) => {
          this.form.reset();
          this.viewCommission();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewCommission() {
      axios.get("commissionType")
      
        .then((res) => {
          this.commissions = res.data.getCommission;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios.get(`commissionType/${id}`
      ).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewCommission();
      });
    },
  },
};
</script>