<template>
  <div class="row" data-toggle="isotope">
        <form @submit.prevent="add"> <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-8">
      <div class="panel panel-default">
             <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">Admin Menu Permission</h3>  
        <div class="panel-body">
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
                        @change.prevent="userShow()"
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
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('admin') }"
                >
                  <label for="exampleFormControlSelect1">Select Admin</label>
                  <select
                    class="form-control"
                    v-model="form.admin"
                    id="exampleFormControlSelect1"
                    name="admin"
                    :class="{ 'is-invalid': form.errors.has('admin') }"
                  >
                    <option
                      v-for="user in users"
                      :key="user.id"
                      v-bind:value="user.id"
                    >
                      {{ user.name }}
                    </option>
                  </select>
                  <has-error :form="form" field="admin"></has-error>
                </div>
              </div>
            </div>   
        </div>
      </div>
    </div>
    <div class="item col-xs-12 col-md-2"></div>
    <div class="item col-xs-12 col-md-12 panel-body panel panel-default">
      <div id="accordion">
        <div class="card" v-for="menu in menus" v-bind:key="menu.id">
          <div
            class="card-header"
            :id="`#headingOne${menu.id}`"
            style="background-color: #0199d7"
          >
            <h5 class="mb-0">
              <a
                class="btn btn-link collapsed"
                data-toggle="collapse"
                :data-target="`#collapseOne${menu.id}`"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h5 style="font-size: 20px; font-weight: 535; color: white">
                  {{ menu.catName }}
                </h5>
              </a>
              <input
                v-model="form.categoryId" 
                v-bind:value="menu.id"
                type="checkbox"
                class="form-check-input"
                id="exampleCheck8"
                style="float: right; right: 9px; margin: 23px"
              />
            </h5>
          </div>
        
        </div>
      </div>
       <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Submit
        </button>
    </div>
    
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        admin: "",        
        roll: "",
        categoryId:[],
     
      }),
      getUsers: [],
      types: [],
   
      menus: [],
      submenus: [],
      types: [],
      users:[],
      userAdmin:false,
    };
  },
  mounted() {
    this.viewType();
  
    this.viewMenuList() ;

    this.viewType();
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
        .post("catPermission", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
         
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
          this.playSound();
        })
        .catch((err) => console.log(err));
    },
     userShow(){
                axios.get(`user/${this.form.roll}`).then(res =>{
                 this.users = res.data.user ;               
                 this.userAdmin=true;              
              })              
         } , 
    viewType() {
      fetch("api/admintypes")
        .then((res) => res.json())
        .then((res) => {
          this.types = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewMenuList() {
      axios.get("categorylist").then((res) => {
        this.menus = res.data.categoryList;
      });
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