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
                <div class="form-group" :class="{ 'has-error': form.errors.has('location') }">
                  <label for="exampleFormControlInput1">WareHouse Location</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="WareHouse Location"
                    v-model="form.location"
                    type="text"
                    name="location"
                    :class="{ 'is-invalid': form.errors.has('location') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="location"></has-error>
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
              <th>location</th>              
             
            </tr>
          </thead>
          <tbody>
            <tr v-for="(location, index) in locations" :key="location.id">
              <td>{{ index + 1 }}</td>
              <td>{{ location.location }}</td>          

              <td>
                
                <!-- <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(location.id)"
                >
                  <i class="fa fa-trash"></i>Delete
                </button> -->
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
      }),
      locations: [],
    };
  },
  mounted() {
    this.viewLocation();
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
        .post("warehouseLocation", {
          method: "post",
          body: JSON.stringify(this.location),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewLocation();
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

    deletePost(id) {
      axios.delete(`warehouseLocation/${id}`, {
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
       this. playSound()
      });
    },
  },
};
</script>