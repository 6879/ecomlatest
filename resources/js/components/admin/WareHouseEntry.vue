<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">WareHouse Location Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
             <div class="row">
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
                      v-for="location in locations"
                      :key="location.id"
                      v-bind:value="location.id"
                    >
                      {{ location.location }}
                    </option>
                  </select>
                  <has-error :form="form" field="roll"></has-error>
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-12 panel-body panel panel-default">
      <div class="table-responsive">
        <table
          data-toggle=""
          class="table table-responsive"
          cellspacing="1"
          width="200%"
        >
          <thead style="background: #e4e6ed">
            <tr>
              <th>ID</th>
              <th>Location</th>              
              <th>Code</th>              
              <th>Address</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(warehouse, index) in warehouses" :key="warehouse.id">
              <td>{{ index + 1 }}</td>
              <td  v-for="location in locations"
                      :key="location.id" v-if="location.id==warehouse.location">{{ location.location }}</td>          
              <td>{{ warehouse.code }}</td>          
              <td>{{ warehouse.address }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editwarehouse', params: { id: warehouse.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
      locations: [],
      warehouses: [],
    };
  },
  mounted() {
    this.viewLocation();
    this.viewWarehouse();
  },
  methods: {
         playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
  
  add() {
      this.form
        .post("warehouse", {
          method: "post",
          body: JSON.stringify(this.location),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewLocation();
          this.viewWarehouse();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
          this. playSound()
        })
        .catch((err) => console.log(err));
    },
    viewLocation() {
      fetch("warehouseLocation")
        .then((res) => res.json())
        .then((res) => {
          this.locations = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewWarehouse() {
      fetch("warehouse")
        .then((res) => res.json())
        .then((res) => {
          this.warehouses = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios.delete(`warehouse/${id}`, {
        method: "delete",
        body: JSON.stringify(this.location),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewLocation();
       this.viewWarehouse();
       this. playSound()
      });
    },
  },
};
</script>