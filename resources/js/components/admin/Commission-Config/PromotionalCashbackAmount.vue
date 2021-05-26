<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Promotional Cashback amount Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
               <div class="row" >
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="exampleFormControlSelect1"
                      >Select Generation</label
                    >
                    <select
                      class="form-control"
                      v-model="form.generation"
                      id="exampleFormControlSelect1"
                      name="generation"
                      
                    >
                      <option
                        v-for="generation in generations"
                        :key="generation.id"
                        v-bind:value="generation.id"
                      >
                        {{ generation.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('promotionalCbackAmount') }">
                  <label for="exampleFormControlInput1">Amount</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Amount"
                    v-model="form.promotionalCbackAmount"
                    type="text"
                    name="promotionalCbackAmount"
                    :class="{ 'is-invalid': form.errors.has('napromotionalCbackAmountme') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="promotionalCbackAmount"></has-error>
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
            <tr v-for="(promotional, index) in promotionals" :key="promotional.id">
              <td>{{ index + 1 }}</td>
              <td>{{ promotional.generation_get.name }}</td>          
              <td>{{ promotional.promotionalCbackAmount }}</td>          

              <td>
                <router-link
                  :to="{ name: 'promotionalcashbackedit', params: { id: promotional.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(promotional.id)"
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
      generation: "",     
      promotionalCbackAmount: "",     
      }),
     generations: [],
     promotionals: [],
    };
  },
  mounted() {
    this.viewGeneration();
    this.viewPromotion();
  },
  methods: {
  add() {
      this.form
        .post("promotionCashback")
         .then((response) => {
          this.form.reset();
          this.viewPromotion();
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
    viewPromotion() {
      axios.get("promotionCashback")
      
        .then((res) => {
          this.promotionals = res.data.getPromotion;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios.get(`promotionCashback/${id}`
      ).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewPromotion();
      });
    },
  },
};
</script>