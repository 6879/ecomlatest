<template>
  <div class="row" data-toggle="isotope">
   <div class="item col-xs-12 col-md-2"></div>  
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Edit Module</h3>  
        <div class="panel-body">
          <form @submit.prevent="updateMenu()">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlInput1">Module</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Module"
                    v-model="form.moduleName"
                    type="text"
                    name="menuName"
                    :class="{ 'is-invalid': form.errors.has('moduleName') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="moduleName"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlInput1">Position</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Module Position"
                    v-model="form.modulePosition"
                    type="text"
                    name="modulePosition"
                    :class="{ 'is-invalid': form.errors.has('modulePosition') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="modulePosition"></has-error>
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
        moduleName: "",
        modulePosition: "",
      }),
    };
  },
  mounted() {
    this.editMenu();
  },
  methods: {
    editMenu() {
      axios.get(`api/modules/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    updateMenu() {
      axios.put(`api/modules/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "modulecreate" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
  },
};
</script>