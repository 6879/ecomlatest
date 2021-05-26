<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Admin  Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="add">
                 <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('roll') }"
                >
                  <label for="exampleFormControlSelect1">Select Admin Type</label>
                  <select
                    class="form-control"
                    v-model="form.roll"
                    id="exampleFormControlSelect1"
                    name="roll"
                    :class="{ 'is-invalid': form.errors.has('roll') }"
                  >
                    <option
                      v-for="type in types"
                      :key="type.id"
                      v-bind:value="type.id"
                    >
                      {{ type.adminType }}
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
                <div class="form-group" :class="{ 'has-error': form.errors.has('email') }">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    v-model="form.email"
                    type="text"
                    name="email"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="email"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('phone') }">
                  <label for="exampleFormControlInput1">Phone</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Phone"
                    v-model="form.phone"
                    type="text"
                    name="email"
                    :class="{ 'is-invalid': form.errors.has('phone') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="phone"></has-error>
                </div>
              </div>
            </div>          
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('userId') }">
                  <label for="exampleFormControlInput1">User-Id</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="User-Id"
                    v-model="form.userId"
                    type="text"
                    name="userId"
                    :class="{ 'is-invalid': form.errors.has('userId') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="userId"></has-error>
                </div>
              </div>
            </div>          
                
            <div class="row">
              <div class="col-md-12">
                <div class="form-group" :class="{ 'has-error': form.errors.has('password') }">
                  <label for="exampleFormControlInput1">Password</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Password"
                    v-model="form.password"
                    type="password"
                    name="password"
                    :class="{ 'is-invalid': form.errors.has('password') }"
                    class="form-control"
                  />
                  <has-error :form="form" field="password"></has-error>
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
              <th>Admin Type</th>
              <th>Name</th>              
              <th>Email</th>              
                        
              <th>User-Id</th>                              
              <th>Address</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in getUsers" :key="user.id">
              <td>{{ index + 1 }}</td>
              <td>{{ user.roll }}</td> 
              <td>{{ user.name }}</td> 
              <td>{{ user.email }}</td> 
            
              <td>{{ user.userId }}</td>            
              <td>{{ user.address }}</td>  
               <td>
                <router-link
                  :to="{ name: 'editadmin', params: { id: user.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  @click.prevent="deletePost(user.id)"
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
        email: "",     
        password: "",     
        address: "",     
        userId: "",     
        roll: "",     
        phone: "",     
      }),
      getUsers: [],
      types: [],
    };
  },
  mounted() {
    this.viewUser();
   this.viewType();
  },
  methods: {
  add() {
      this.form
        .post("api/adminentry", {
          method: "post",        
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
          this.viewUser();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },
    viewUser() {
       axios.get("api/adminentry")       
        .then((res) => {
          this.getUsers = res.data.member;
        })
        .catch((err) => console.log(err));
    },
    viewType() {
      fetch("api/admintypes")
        .then((res) => res.json())
        .then((res) => {
          this.types = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/adminentry/${id}`, {
        method: "delete",      
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewUser();
      });
    },
  },
};
</script>