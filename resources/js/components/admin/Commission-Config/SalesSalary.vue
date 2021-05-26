<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right"> Sales Salary Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('salesAmount') }">
                  <label for="exampleFormControlInput1">Amount</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Amount"
                    v-model="form.salesAmount"
                    type="text"
                    name="salesAmount"
                    :class="{ 'is-invalid': form.errors.has('salesAmount') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="salesAmount"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('link') }">
                  <label for="exampleFormControlInput1">Link</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Link"
                    v-model="form.link"
                    type="text"
                    name="link"
                    :class="{ 'is-invalid': form.errors.has('link') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="link"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('linkAmount') }">
                  <label for="exampleFormControlInput1">Link Amount</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Link amount"
                    v-model="form.linkAmount"
                    type="text"
                    name="linkAmount"
                    :class="{ 'is-invalid': form.errors.has('linkAmount') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="linkAmount"></has-error>
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
              <th>Link</th>              
              <th>Link_Amount</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sale, index) in sales" :key="sale.id">
              <td>{{ index + 1 }}</td>
              <td>{{ sale.salesAmount }}</td>          
              <td>{{ sale.link }}</td>          
              <td>{{ sale.linkAmount }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editsalessalry', params: { id: sale.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(sale.id)"
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
      salesAmount: "",     
      link: "",     
      linkAmount: "",     
      }),
     sales: [],
    };
  },
  mounted() {
    this.viewSales();
  },
  methods: {
  add() {
      this.form
        .post("salesSalary")
         .then((response) => {
          this.form.reset();
          this.viewSales();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewSales() {
      axios.get("salesSalary")
      
        .then((res) => {
          this.sales = res.data.getSales;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios.get(`salesSalary/${id}`
      ).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewSales();
      });
    },
  },
};
</script>