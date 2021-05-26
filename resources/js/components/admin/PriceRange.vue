<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Price Range Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
   
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
              <th>Min Price</th>              
              <th>Max Price</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(price, index) in prices" :key="price.id">
              <td>{{ index + 1 }}</td>
              <td>{{ price.minprice }}</td>          
              <td>{{ price.maxprice }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editrange', params: { id: price.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(price.id)"
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
        minprice: "",     
        maxprice: "",     
      }),
      prices: [],
    };
  },
  mounted() {
    this.viewPrice();
  },
  methods: {
  add() {
      this.form
        .post("pricerange", {
          method: "post",
         
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewPrice();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewPrice() {
      axios.get("pricerange")
        .then((res) => {
          this.prices = res.data.range;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios.get(`pricerange/${id}`, {
        method: "delete",
        body: JSON.stringify(this.price),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewPrice();
      });
    },
  },
};
</script>