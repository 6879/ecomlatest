<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Update Unit Entery</h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('unit') }">
                  <label for="exampleFormControlInput1">Unit Entry</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Unit Entry"
                    v-model="form.unit"
                    type="text"
                    name="unit"
                    :class="{ 'is-invalid': form.errors.has('unit') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="unit"></has-error>
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
        unit: "",     
      }),
      units: [],
    };
  },
  mounted() {
    this.editUnit();
  },
  methods: {
  editUnit() {
      axios.get(`api/units/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`api/units/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "unit" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },

  
  },
};
</script>