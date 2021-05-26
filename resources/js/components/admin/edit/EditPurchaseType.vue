<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Update Purchase Type </h3>  
        <div class="panel-body">
          <form @submit.prevent="updateType">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has(' purchaseType') }">
                  <label for="exampleFormControlInput1">Purchase Type</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Purchase Type"
                    v-model="form.purchaseType"
                    type="text"
                    name=" purchaseType"
                    :class="{ 'is-invalid': form.errors.has(' purchaseType') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="businessType"></has-error>
                </div>
              </div>
            </div>          
            <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        purchaseType: "",     
      }),
    
    };
  },
  mounted() {
    this.editType();
  },
  methods: {
    editType() {
      axios.get(`api/purchasetypes/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
  updateType() {
      axios.put(`api/purchasetypes/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "purchasetype" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
    
  },
};
</script>