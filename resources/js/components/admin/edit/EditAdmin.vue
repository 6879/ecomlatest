<template>
  <div class="row" data-toggle="isotope">
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Admin  Entry</h3>  
        <div class="panel-body">
          <form @submit.prevent="update">
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
      }),
      getUsers: [],
      types: [],
    };
  },
  mounted() {
    this.viewUser();
   this.viewType();
   this.edit();
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
     edit() {
      axios.get(`api/adminentry/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
  update() {
      axios.put(`api/adminentry/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "adminentry" });
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
  },
};
</script>