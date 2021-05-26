<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Delivery Time Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
            <div>
                          <div class="form-group col-md-6">
                            <label for="inputState">Time</label>
                            <select
                              v-model="form.deliveryTime"
                              id="inputState"
                              class="form-control"
                            >
                              <option value="8:00AM-9:00AM ">
                                8:00&nbsp;AM-9:00&nbsp;AM
                              </option>
                              <option value="9:00AM-10:00AM">
                                9:00&nbsp;AM-10:00&nbsp;AM
                              </option>
                              <option value="10:00AM-11:00AM">
                                10:00&nbsp;AM-11:00&nbsp;AM
                              </option>
                              <option value="11:00AM-12:00PM">
                                11:00&nbsp;AM-12:00&nbsp;PM
                              </option>
                              <option value="12:00PM-1:00PM">
                                12:00&nbsp;PM-1:00&nbsp;PM
                              </option>
                              <option value="1:00PM-2:00PM">
                                1:00&nbsp;PM-2:00&nbsp;PM
                              </option>
                              <option value="2:00PM-3:00PM">
                                2:00&nbsp;PM-3:00&nbsp;PM
                              </option>
                              <option value="3:00PM-4:00PM">
                                3:00&nbsp;PM-4:00&nbsp;PM
                              </option>
                              <option value="4:00PM-5:00PM">
                                4:00&nbsp;PM-5:00&nbsp;PM
                              </option>
                              <option value="5:00PM-6:00PM">
                                5:00&nbsp;PM-6:00&nbsp;PM
                              </option>
                              <option value="6:00PM-7:00PM">
                                6:00&nbsp;PM-7:00&nbsp;PM
                              </option>
                              <option value="7:00PM-8:00PM">
                                7:00&nbsp;PM-8:00&nbsp;PM
                              </option>
                              <option value="8:00PM-9:00PM">
                                8:00&nbsp;PM-9:00&nbsp;PM
                              </option>
                              <option value="9:00PM-10:00PM">
                                9:00&nbsp;PM-10:00&nbsp;PM
                              </option>
                            </select>
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
              <th>Time</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dtime, index) in dtimes" :key="dtime.id">
              <td>{{ index + 1 }}</td>
              <td>{{ dtime.deliveryTime }}</td>          

              <td>
             
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(dtime.id)"
                >
                  <i class="fa fa-trash"></i>Delete
                </button>
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
      deliveryTime: "",     
      }),
     dtimes: [],
    };
  },
  mounted() {
    this.viewTime();
  },
  methods: {
  add() {
      this.form
        .post("deliveryManDeliveryTime")
         .then((response) => {
          this.form.reset();
          this.viewTime();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewTime() {
      axios.get("deliveryManDeliveryTime")
      
        .then((res) => {
          this.dtimes = res.data.time;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
     axios.get(`deliveryManDeliveryTime/${id}`).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewTime();
      });
    },
  },
};
</script>