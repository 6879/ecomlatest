<template>
  <div class="row" data-toggle="isotope">
    <!-- <div class="col-xs-12 col-md-3"></div> -->
    <div
      class="col-xs-12 col-md-12 boxborder bg-white panel-body panel panel-default"
      style="padding-left: 0; padding-right: 0"
    >
      <h1
        style="
          background: skyblue;
          margin: 0;
          padding: 10px;
          color: white;
          text-align: center;
        "
      >
      WareHouse List
      </h1>

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
               <th>Created Date</th>
              <th>Location</th>              
              <th>Code</th>              
              <th>Address</th>              
              <th>Action</th>              
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="(warehouse, index) in warehouses" :key="warehouse.id">
              <td>{{ index + 1 }}</td>
                   <td>{{ moment(warehouse.created_at).format("DD-MM-YYYY") }}</td>
              <td  v-for="location in locations"
                      :key="location.id" v-if="location.id==warehouse.location">{{ location.location }}</td>          
              <td>{{ warehouse.code }}</td>          
              <td>{{ warehouse.address }}</td>          
                <td>
                  <router-link
                  :to="{ name: 'warehouseproductlist', params: { location: warehouse.location,code:warehouse.id} }"
                  class="btn btn-primary"
                  ><i class="fa fa-info"></i>&nbsp;Statement</router-link
                >
              </td>
           
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <div class="col-xs-12 col-md-3"></div> -->
  </div>
</template>

<script>
import moment from "moment";
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
        moment: moment,
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