<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Edit Generation </h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('name') }">
                  <label for="exampleFormControlInput1">Name</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('gAmount') }">
                  <label for="exampleFormControlInput1">Amount</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Amount"
                    v-model="form.gAmount"
                    type="text"
                    name="gAmount"
                    :class="{ 'is-invalid': form.errors.has('gAmount') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="gAmount"></has-error>
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
      name: "",     
      gAmount: "",     
      }),
     generations: [],
    };
  },
  mounted() {
    this.editGeneration();
  },
 methods: {
   editGeneration() {
      axios.get(`generationInfo/${this.$route.params.id}/edit`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`generationInfo/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "generation" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
   

  },
};
</script>