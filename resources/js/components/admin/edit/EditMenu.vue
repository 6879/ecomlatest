<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Edit Menu
        </h3>
        <div class="panel-body">
          <form @submit.prevent="updateMenu()">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('moduleId') }"
                >
                  <label for="exampleFormControlSelect1">Select Module</label>
                  <select
                    class="form-control"
                    v-model="form.moduleId"
                    id="exampleFormControlSelect1"
                    name="designationId"
                    :class="{ 'is-invalid': form.errors.has('moduleId') }"
                  >
                    <option
                      v-for="module in modules"
                      :key="module.id"
                      v-bind:value="module.id"
                    >
                      {{ module.moduleName }}
                    </option>
                  </select>
                  <has-error :form="form" field="moduleId"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('menuName') }">
                  <label for="exampleFormControlInput1">Menu</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Menu"
                    v-model="form.menuName"
                    type="text"
                    name="menuName"
                  
                    class="form-control"
                  />
                  <has-error :form="form" field="menuName"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('menuPosition') }">
                  <label for="exampleFormControlInput1">Position</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Menu Position"
                    v-model="form.menuPosition"
                    type="text"
                    name="modulePosition"                 
                    class="form-control"
                  />
                  <has-error :form="form" field="menuPosition"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group"  :class="{ 'is-invalid': form.errors.has('menuUrl') }">
                  <label for="exampleFormControlInput1">Menu Url</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Menu Url"
                    v-model="form.menuUrl"
                    type="text"
                    name="menuUrl"
                   
                    class="form-control"
                  />
                  <has-error :form="form" field="menuUrl"></has-error>
                </div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'is-invalid': form.errors.has('substatus') }">
                  <div class="form-check form-check-inline">
                    <input
                      v-model="form.substatus"
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      name="substatus"
                      v-bind:value="10"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >Sub status</label
                    >
                  </div>
                  <has-error :form="form" field="substatus"></has-error>
                </div>
              </div>
            </div> -->
              <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'is-invalid': form.errors.has('substatus') }"
                >                 
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      v-model="form.substatus"
                      v-bind:value="1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >Sub Status</label
                    >
                  </div>                  
                  <has-error :form="form" field="substatus"></has-error>
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
        moduleId: "",
        menuName: "",
        menuPosition: "",
        menuUrl: "",
        substatus: "",
      }),
      modules: [],
      menus: [],
    };
  },
  mounted() {
    this.viewModule();
    this.editMenu()();
  },
  methods: {   
    viewModule() {
      fetch("api/modules")
        .then((res) => res.json())
        .then((res) => {
          this.modules = res.data;
        })
        .catch((err) => console.log(err));
    },
     editMenu() {
      axios.get(`api/menus/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    updateMenu() {
      axios.put(`api/menus/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "menuentry" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
    
  },
};
</script>