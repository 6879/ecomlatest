<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Promotional Cashback amount Update</h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
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
    this.editPromotion();
  },
  methods: {
       viewGeneration() {
      axios.get("generationInfo")
      
        .then((res) => {
          this.generations = res.data.getGeneration;
        })
        .catch((err) => console.log(err));
    },
   editPromotion() {
      axios.get(`promotionCashback/${this.$route.params.id}/edit`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`promotionCashback/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "promotionalcashback" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
   

  },
};
</script>