<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Brand Entery</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('brand') }">
                  <label for="exampleFormControlInput1">Brand Entry</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Brand Entry"
                    v-model="form.brand"
                    type="text"
                    name="brand"
                    :class="{ 'is-invalid': form.errors.has('brand') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="brand"></has-error>
                </div>
              </div>
            </div>  
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlFile1">Upload Logo</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                    @change="changeImage($event)"
                    name="image"
                  />
                  <img
                    :src="form.image"
                    class="img-responsive"
                    height="70"
                    width="90"
                  />
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
               <th>Logo</th>
              <th>Brand</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(brand, index) in brands" :key="brand.id">
              <td>{{ index + 1 }}</td>
              <td>
                <img
                  :src="'/images/' + brand.image"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              <td>{{ brand.brand }}</td>          

              <td>
                <router-link
                  :to="{ name: 'editbrand', params: { id: brand.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(brand.id)"
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
      brand: "", 
        image: "",    
      }),
     brands: [],
    };
  },
  mounted() {
    this.viewBrand();
  },
  methods: {
  add() {
      this.form
        .post("api/brands", {
          method: "post",
          body: JSON.stringify(this.brand),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewBrand();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
 changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    deletePost(id) {
      fetch(`api/brands/${id}`, {
        method: "delete",
        body: JSON.stringify(this.brand),
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewBrand();
      });
    },
  },
};
</script>