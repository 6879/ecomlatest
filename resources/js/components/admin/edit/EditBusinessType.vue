<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Update Business Type Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="updateType">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('businessType') }">
                  <label for="exampleFormControlInput1">Business Type</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Business Type"
                    v-model="form.businessType"
                    type="text"
                    name="businessType"
                    :class="{ 'is-invalid': form.errors.has('businessType') }"
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
        businessType: "",     
      }),
    
    };
  },
  mounted() {
    this.editType();
  },
  methods: {
    editType() {
      axios.get(`api/businesstypes/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
  updateType() {
      axios.put(`api/businesstypes/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "businesstype" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
    
  },
};
</script>