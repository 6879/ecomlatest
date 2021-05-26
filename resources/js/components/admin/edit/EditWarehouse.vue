<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">WareHouse Location Update</h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
             <div class="row" style="display:none">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('location') }"
                >
                  <label for="exampleFormControlSelect1">Select Warehouse Location</label>
                  <select
                    class="form-control"
                    v-model="form.location"
                    id="exampleFormControlSelect1"
                    name="location"
                    :class="{ 'is-invalid': form.errors.has('location') }"
                  >
                    <option      
                    >
                     {{ getlocation.location }}
                    </option>
                  </select>
                  <has-error :form="form" field="roll"></has-error>
                </div>
              </div>
            </div>     
             <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('code') }">
                  <label for="exampleFormControlInput1">WareHouse Location</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="WareHouse Code"
                :value="getlocation.location"
                    type="text"
                    name="code"
                    :class="{ 'is-invalid': form.errors.has('code') }"
                    class="form-control"
                    disabled
                  />
              
                </div>
              </div>
            </div>  
             <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('code') }">
                  <label for="exampleFormControlInput1">WareHouse Code</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="WareHouse Code"
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
            <div class="form-group">
                <label for="exampleFormControlInput1">Address</label>
                <div >
                  <textarea
                  
                    class="form-control"
                    v-model="form.address"
                    rows="5"
                  ></textarea>
                </div>
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
        location: "",     
        code: "",     
        address: "",     
        
      }),
    getlocation:[],    
    };
  },
  mounted() {
    
    this.editWarehouse();
    this.viewLocation();
    
  },
  methods: {
         playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
  
  editWarehouse() {
      axios.get(`warehouse/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`warehouse/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "warehouse" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
    viewLocation() {
      axios.get(`warehouseLocation/${this.$route.params.id}/edit`)        
        .then((res) => {
          this.getlocation = res.data;
        })
        .catch((err) => console.log(err));
    },
    
   
  },
};
</script>