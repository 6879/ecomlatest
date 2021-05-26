<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Update Supplier</h3>  
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
                <div class="form-group" :class="{ 'has-error': form.errors.has('code') }">
                  <label for="exampleFormControlInput1">Supplier Code</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Supplier Code"
                    v-model="form.code"
                    type="text"
                    name="code"
                    :class="{ 'is-invalid': form.errors.has('code') }"
                    class="form-control"
                    disabled
                  />
                  <has-error :form="form" field="code"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('phone') }">
                  <label for="exampleFormControlInput1">Phone Number</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Phone Number"
                    v-model="form.phone"
                    type="text"
                    name="phone"
                    :class="{ 'is-invalid': form.errors.has('phone') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="phone"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('hotLine') }">
                  <label for="exampleFormControlInput1">Hotline</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Hotline"
                    v-model="form.hotLine"
                    type="text"
                    name="hotLine"
                    :class="{ 'is-invalid': form.errors.has('hotLine') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="hotLine"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('mail') }">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    v-model="form.mail"
                    type="text"
                    name="mail"
                    :class="{ 'is-invalid': form.errors.has('mail') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="mail"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('fb') }">
                  <label for="exampleFormControlInput1">Facebook Account</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Facebook Account"
                    v-model="form.fb"
                    type="text"
                    name="fb"
                    :class="{ 'is-invalid': form.errors.has('fb') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="fb"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('web') }">
                  <label for="exampleFormControlInput1">Web Address</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Web Address"
                    v-model="form.web"
                    type="text"
                    name="web"
                    :class="{ 'is-invalid': form.errors.has('web') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="web"></has-error>
                </div>
              </div>
            </div>          
                
                
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('address') }">
                  <label for="exampleFormControlInput1">Address</label>
                  <textarea
                    id="exampleFormControlInput1"
                    placeholder="address"
                    v-model="form.address"
                    type="address"
                    name="address"
                    :class="{ 'is-invalid': form.errors.has('address') }"
                    class="form-control"
                  ></textarea>
                  <has-error :form="form" field="address"></has-error>
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
        name: "",     
        code: "",     
        phone: "",     
        hotLine: "",     
        fb: "",     
        web: "",     
        mail: "",    
       
        address: "",     
       
        
      }),
     
   
    };
  },
  mounted() {
    this.editSupplier();
  
  },
  methods: {
  editSupplier() {
      axios.get(`api/suppliers/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`api/suppliers/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "supplier" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
  },
};
</script>