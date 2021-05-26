<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Price Range Update</h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
   
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Min Price</label>
    <input type="text" class="form-control" v-model="form.minprice" id="inputPassword2" placeholder="Min Price">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Max Price</label>
    <input type="text" class="form-control" v-model="form.maxprice" id="inputPassword2" placeholder="Max Price">
  </div>
  <button :disabled="form.busy" type="submit" class="btn btn-info">
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
        minprice: "",
        maxprice: "",
      }),
     
    };
  },
  mounted() {
    this.editRange();
  },
  methods: {
   editRange() {
      axios.get(`pricerange/${this.$route.params.id}/edit`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`pricerange/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "pricerange" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
   

  },
};
</script>