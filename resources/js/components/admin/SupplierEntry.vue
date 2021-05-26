<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Supplier  Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
             <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('businessType') }"
                >
                  <label for="exampleFormControlSelect1">Select Supplier Business Type</label>
                  <select
                    class="form-control"
                    v-model="form.businessType"
                    id="exampleFormControlSelect1"
                    name="businessType"
                    :class="{ 'is-invalid': form.errors.has('businessType') }"
                  >
                    <option
                      v-for="type in types"
                      :key="type.id"
                      v-bind:value="type.id"
                    >
                      {{ type.businessType }}
                    </option>
                  </select>
                  <has-error :form="form" field="roll"></has-error>
                </div>
              </div>
            </div>   
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
          <tbody>
            <tr v-for="(supplier, index) in suppliers" :key="supplier.id">
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
                  :to="{ name: 'editsupplier', params: { id: supplier.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(supplier.id)"
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