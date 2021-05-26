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
        Supplier List
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
              <th>Business_Type</th>           
              <th>Name</th>              
              <th>Code</th>              
              <th>Phone</th>                         
              <th>HotLine</th>                         
              <th>Email</th>                              
              <th>FaceBook</th>              
              <th>Web</th>              
              <th>Address</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="(supplier, index) in suppliers" :key="supplier.id">
            <tr v-if="index%2==0" style="background-color: white;">
                 <td>{{ index + 1 }}</td>
                  <td  v-for="type in types"
                      :key="type.id" v-if="type.id==supplier.businessType">{{ type.businessType }}</td>
               <td>{{ supplier.name }}</td> 
              <td>{{ supplier.code }}</td> 
              <td>{{ supplier.phone }}</td>             
              <td>{{ supplier.hotLine }}</td>            
              <td>{{ supplier.mail }}</td>            
              <td>{{ supplier.fb }}</td>            
              <td>{{ supplier.web }}</td>            
              <td>{{ supplier.address }}</td>  
               <td>
                <router-link
                  :to="{ name: 'supplierstatement', params: { id: supplier.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Statement</router-link
                >
              
              </td>       
            </tr>
            <tr v-else style="background-color: #e2d9d9;">
                 <td>{{ index + 1 }}</td>
                  <td  v-for="type in types"
                      :key="type.id" v-if="type.id==supplier.businessType">{{ type.businessType }}</td>
             <td>{{ supplier.name }}</td> 
              <td>{{ supplier.code }}</td> 
              <td>{{ supplier.phone }}</td>             
              <td>{{ supplier.hotLine }}</td>            
              <td>{{ supplier.mail }}</td>            
              <td>{{ supplier.fb }}</td>            
              <td>{{ supplier.web }}</td>            
              <td>{{ supplier.address }}</td>  
               <td>
                <router-link
                  :to="{ name: 'supplierstatement', params: { id: supplier.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Statement</router-link
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
       businessType:'',
        address: "",     
        userId: "",     
        
      }),
     types: [],
    suppliers: [],
    };
  },
  mounted() {
    this.viewSupplier();
    this.viewType();
  },
  methods: {
  add() {
      this.form
        .post("api/suppliers", {
          method: "post",        
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewSupplier();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
     viewType() {
      fetch("api/businesstypes")
        .then((res) => res.json())
        .then((res) => {
          this.types = res.data;
        })
        .catch((err) => console.log(err));
    },

    viewSupplier() {
      fetch("api/suppliers")
        .then((res) => res.json())
        .then((res) => {
          this.suppliers = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/suppliers/${id}`, {
        method: "delete",      
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewSupplier();
      });
    },
  },
};
</script>