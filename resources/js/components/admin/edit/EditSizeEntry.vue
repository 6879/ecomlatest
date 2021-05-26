<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Update Size </h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('size') }">
                  <label for="exampleFormControlInput1">Size Entry</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Size Entry"
                    v-model="form.size"
                    type="text"
                    name="size"
                    :class="{ 'is-invalid': form.errors.has('size') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="size"></has-error>
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
      size: "",     
      }),
    sizes: [],
    };
  },
  mounted() {
    this.editSize();
  },
  methods: {
   editSize() {
      axios.get(`api/sizes/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`api/sizes/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "size" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
  },
};
</script>