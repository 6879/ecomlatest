<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Commission Type  Update</h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
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
    this.editCommissionType();
  },
   methods: {
   editCommissionType() {
      axios.get(`commissionType/${this.$route.params.id}/edit`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`commissionType/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "commissiontype" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
   

  },
};
</script>