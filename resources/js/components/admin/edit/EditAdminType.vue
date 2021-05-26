<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Update Admin Type Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="updateType()">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('adminType') }">
                  <label for="exampleFormControlInput1">Admin Type</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Admin Type"
                    v-model="form.adminType"
                    type="text"
                    name="adminType"
                    :class="{ 'is-invalid': form.errors.has('adminType') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="adminType"></has-error>
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
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        adminType: "",     
      }),
    
    };
  },
  mounted() {
    this.editType();
  },
  methods: {
    editType() {
      axios.get(`api/admintypes/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
  updateType() {
      axios.put(`api/admintypes/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "admintype" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
    
  },
};
</script>