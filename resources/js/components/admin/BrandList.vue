<template>
 <div class="row" data-toggle="isotope">
    <div class="col-xs-12 col-md-3"></div>
    <div
      class="col-xs-12 col-md-6 boxborder bg-white panel-body panel panel-default"
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
        Brand List
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
              <th>Brand</th>
              <th>Created Date</th>
              <th>Image</th>
            </tr>
          </thead>
           <tbody v-for="(brand, index) in brands" :key="brand.id">
            <tr  v-if="index%2==0" style="background-color: white;">
              <td>{{ index + 1 }}</td>
             
              <td>{{ brand.brand }}</td>          
                 <td>{{ moment(brand.created_at).format("DD-MM-YYYY") }}</td>
              <td>
                <img
                  :src="'/images/' + brand.image"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
              
            </tr>
            <tr  v-else style="background-color:  #e2d9d9;">
              <td>{{ index + 1 }}</td>
              
              <td>{{ brand.brand }}</td>          
                <td>{{ moment(brand.created_at).format("DD-MM-YYYY") }}</td>
              <td>
                <img
                  :src="'/images/' + brand.image"
                  class="img-responsive"
                  height="35"
                  width="70"
                />
              </td>
            </tr>
          </tbody>
         
           
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-md-3"></div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: new Form({
      brand: "", 
        image: "",    
      }),
     brands: [],
      moment: moment,
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