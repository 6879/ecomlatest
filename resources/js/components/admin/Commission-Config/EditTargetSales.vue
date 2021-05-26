<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Target Sales Commission Update</h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('targetSalesAmount') }">
                  <label for="exampleFormControlInput1">Amount</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Amount"
                    v-model="form.targetSalesAmount"
                    type="text"
                    name="targetSalesAmount"
                    :class="{ 'is-invalid': form.errors.has('targetSalesAmount') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="targetSalesAmount"></has-error>
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
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
      targetSalesAmount: "",     
      link: "",     
      linkAmount: "",     
      }),
     sales: [],
    };
  },
  mounted() {
    this.editTargetSales();
  },
  methods: {
   editTargetSales() {
      axios.get(`targetSales/${this.$route.params.id}/edit`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`targetSales/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "targetsales" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
   

  },
};
</script>