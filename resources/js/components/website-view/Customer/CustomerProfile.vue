<template>
<div >
  <div class="container-fluid">
<div class="col-12 col-md-6 col-xs-12 offset-md-1 mt-4 profilebox pt-2 pb-2">
<h3 class="profilehead" >Your Profile</h3>
<div  style="margin-left: 26%;">
<img
              :src="'/customerImage/'+ infos.image"
              style="border-radius: 50%"
              name="image"
              height="100"
              width="99"
              alt=""
              class="img-circle"
            />
</div>
            <br>
<button class="btn btn-info mb-2 mt-2 etbu" @click.prevent="openModal()" data-toggle="modal" data-target="#exampleModalprofile" ><i class="fas fa-key"></i>&nbsp;Change Password</button> 

<!-- Modal forgate pass -->
<div class="modal fade" id="exampleModalprofile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style="background: #5da7e8;">
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form  @submit.prevent="updatePass">
                    
   
                       
                        <div class="form-group row"  :class="{ 'has-error': form.errors.has('current_password') }">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Current Password</label>
  
                            <div class="col-md-6">
                                <input id="password"  :class="{ 'is-invalid': form.errors.has('current_password') }"
                    class="form-control" type="password"  v-model="form.current_password" name="current_password" autocomplete="current-password">
                     <has-error :form="form" field="current_password"></has-error>
                            </div>
                        </div>
  
                        <div class="form-group row" :class="{ 'has-error': form.errors.has('new_password') }">
                            <label for="password" class="col-md-4 col-form-label text-md-right">New Password</label>
  
                            <div class="col-md-6">
                                <input id="new_password" type="password" class="form-control" v-model="form.new_password" name="new_password" autocomplete="current-password" :class="{ 'is-invalid': form.errors.has('new_password') }">
                                <has-error :form="form" field="new_password"></has-error>
                            </div>
                        </div>
  
                        <div class="form-group row" :class="{ 'has-error': form.errors.has('new_confirm_password') }">
                            <label for="password" class="col-md-4 col-form-label text-md-right">New Confirm Password</label>
    
                            <div class="col-md-6">
                                <input id="new_confirm_password" type="password" class="form-control" v-model="form.new_confirm_password" name="new_confirm_password" autocomplete="current-password" :class="{ 'is-invalid': form.errors.has('new_confirm_password') }">
                                <has-error :form="form" field="new_confirm_password"></has-error>
                            </div>
                        </div>
   
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </form>
      </div>
      
    </div>
  </div>
</div>

  
<table class="table table-borderless mx-auto" style="width: 61%; margin:0px auto">
  <thead>
   
  </thead>
  <tbody>
    
    <tr>
      <th scope="row">Name:</th>
      <td>{{infos.name}}</td>
     
      
    </tr>
    <tr>
      <th style="width: 37%" scope="row">FuLL Name:</th>
      <td>{{infos.fullname}}</td>
     
      
    </tr>
    
    <tr>
      <th scope="row">Email</th>
      <td>{{infos.email}}</td>
     
     
    </tr>
    <tr>
      <th scope="row">Phone</th>
      <td>{{infos.phone}}</td>
     
      <td></td>
    </tr>
    <tr>
      <th scope="row">Address</th>
      <td>{{infos.presentAddress}}</td>
     
    
    </tr>
    
  </tbody>
</table>
<button class="btn btn-info mb-4 etbu" @click.prevent="openModal()" data-toggle="modal" data-target="#exampleModaleditprofile"  ><i class="fas fa-pencil-alt"></i>&nbsp;Edit</button>   
    <!-- Modal forgate pass -->
<div class="modal fade" id="exampleModaleditprofile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style="background: #5da7e8;">
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      </div>
      
    </div>
  </div>
</div>

    
     <!-- <b-modal id="modal-name" title="Edit Profile" v-if="modal">
        <div class="col-12 col-md-12 col-xs-12 bg-white">
       
        <form @submit.prevent="update">
          <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select Division</label>
                  <select
                    class="form-control"
                    v-model="form.divisionId"
                    @change.prevent="districtShow(form.divisionId)"
                    id="exampleFormControlSelect1"
                  >
                    <option
                      v-for="division in divisions"
                      :key="division.id"
                      :value="division.id"
                    >
                      {{ division.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row" v-if="districtShowForm">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select District</label>
                  <select
                    class="form-control"
                    v-model="form.districtId"
                    @change.prevent="thanaShow()"
                    id="exampleFormControlSelect1"
                  >
                    <option
                      v-for="district in districts"
                      :key="district.id"
                      :value="district.id"
                    >
                      {{ district.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row" v-if="upazila == true">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select Thana</label>
                  <select
                    class="form-control"
                    v-model="form.thanaId"
                    @change.prevent="unionShow()"
                    id="exampleFormControlSelect1"
                  >
                    <option
                      v-for="thana in thanas"
                      :key="thana.id"
                      :value="thana.id"
                    >
                      {{ thana.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row" v-if="unionForm == true">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select Union</label>
                  <select
                    class="form-control"
                    v-model="form.unionId"
                    id="exampleFormControlSelect1"
                  >
                    <option
                      v-for="union in unions"
                      :key="union.id"
                      v-bind:value="union.id"
                    >
                      {{ union.union }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row" v-if="wardForm == true">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select Ward</label>
                  <select
                    class="form-control"
                    v-model="form.wardId"
                    id="exampleFormControlSelect1"
                  >
                    <option
                      v-for="ward in wards"
                      :key="ward.id"
                      v-bind:value="ward.id"
                    >
                      {{ ward.ward }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('name') }"
              >
                <label for="exampleFormControlInput1"> Name</label>
                <input
                  id="exampleFormControlInput1"
                  placeholder=" Name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  :class="{
                    'is-invalid': form.errors.has('name'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="name"></has-error>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('fullname') }"
              >
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  id="exampleFormControlInput1"
                  placeholder="Full Name"
                  v-model="form.fullname"
                  type="text"
                  name="fullname"
                  :class="{
                    'is-invalid': form.errors.has('fullname'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="fullname"></has-error>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('fname') }"
              >
                <label for="exampleFormControlInput1">Fathers Name</label>
                <input
                  id="exampleFormControlInput1"
                  placeholder="Fathers Name"
                  v-model="form.fname"
                  type="text"
                  name="fname"
                  :class="{
                    'is-invalid': form.errors.has('fname'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="fname"></has-error>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('mname') }"
              >
                <label for="exampleFormControlInput1">Mothers Name</label>
                <input
                  id="exampleFormControlInput1"
                  placeholder="Mothers Name"
                  v-model="form.mname"
                  type="text"
                  name="mname"
                  :class="{
                    'is-invalid': form.errors.has('mname'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="mname"></has-error>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('dob') }"
              >             
                <label class="col-sm-4  ml-0">Date of Birth</label>
                <div class="col-sm-8">
                  <date-picker
                    v-model="form.dob"
                    value-type="format"
                  ></date-picker>
                
                <has-error :form="form" field="dob"></has-error>
              </div>
              </div>
            </div>
          </div>
           <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('nid') }"
              >
                <label for="exampleFormControlInput1">NID No</label>
                <input
                  id="exampleFormControlInput1"
                  placeholder="NID No"
                  v-model="form.nid"
                  type="text"
                  name="nid"
                  :class="{
                    'is-invalid': form.errors.has('nid'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="mname"></has-error>
              </div>
            </div>
          </div>
           <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('phone') }"
              >
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  id="exampleFormControlInput1"
                  placeholder="Phone"
                  v-model="form.phone"
                  type="text"
                  name="phone"
                  :class="{
                    'is-invalid': form.errors.has('phone'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="phone"></has-error>
              </div>
            </div>
          </div>
           <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('email') }"
              >
                <label for="exampleFormControlInput1">Email</label>
                <input
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  v-model="form.email"
                  type="text"
                  name="email"
                  :class="{
                    'is-invalid': form.errors.has('email'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="email"></has-error>
              </div>
            </div>
          </div>
          
      
         
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('presentAddress') }"
                >
                  <label for="exampleFormControlInput1">Present Address</label>
                  <textarea
                    id="exampleFormControlInput1"
                    placeholder="Present Address"
                    v-model="form.presentAddress"
                    type="text"
                    name="presentAddress"
                    :class="{ 'is-invalid': form.errors.has('presentAddress') }"
                    class="form-control"
                  ></textarea>
                  <has-error :form="form" field="presentAddress"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('permanentAddress') }"
                >
                  <label for="exampleFormControlInput1"
                    >Permanent Address</label
                  >
                  <textarea
                    id="exampleFormControlInput1"
                    placeholder="Permanent Address"
                    v-model="form.permanentAddress"
                    type="text"
                    name="permanentAddress"
                    :class="{
                      'is-invalid': form.errors.has('permanentAddress'),
                    }"
                    class="form-control"
                  ></textarea>
                  <has-error :form="form" field="permanentAddress"></has-error>
                </div>
              </div>
            </div>
         
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
  </b-modal> -->
</div>

  </div>
    <!-- .Footer -->
    <div v-if="!$route.meta.hideDashboard">
      <footer class="footer d-md-none shadowfooter bg-white rounded">
        <div class="container-fluid">
          <div class="row p-2 mb-0">
            <div class="col-3 col-xs-3">
              <i class="fa fa-home ml-2" aria-hidden="true"></i>
              <p>Home</p>
            </div>

            <div class="col-3 col-xs-3">
            <router-link  :to="{ name: 'offerview' }">   <i class="fa fa-gift ml-2" aria-hidden="true"></i>
              <p>Offer</p></router-link>
            </div>

            <div class="col-3 col-xs-3" onclick="openNav()">
              <i class="fa fa-shopping-cart ml-2" aria-hidden="true"></i>
              <span
                :class="{ 'bounce animated': animated }"
                @animationend="animated = false"
                class="badge badge-warning"
                id="lblCartCount"
              >
                {{ badge }}
              </span>
              <p>Cart</p>
            </div>

            <div class="dropdown col-3 col-xs-3" v-if="$userId!=''" >
             <i class="fa fa-user ml-2" aria-hidden="true"></i>
              <p>{{infos.name}}</p>
             
            </div>
            <div class="col-3 col-xs-3" v-else >
              <router-link  :to="{ name: 'login' }">  <i class="fa fa-user ml-2" aria-hidden="true"></i>
              <p>Login</p></router-link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- ./Footer -->
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css"; 
export default {
    components: {
    DatePicker,
  },  
data(){
    return{
         form: new Form({
        sponsorId:"",
        name:"",
        fname:"",
        fullname:"",
        mname:"",
        dob:"",
        nid:"",
        email:"",
        password:"",
        phone:"",
        image: "",
        permanentAddress: "",
        presentAddress: "",
        terms:"",
        divisionId: "",
        districtId: "",
        thanaId: "",
        unionId: "",
        wardId: "",
        id:'',
      current_password: "",     
      new_password: "",     
      new_confirm_password: "", 
      }),
     infos:[],
      divisions: [],
      districtShowForm: false,
      upazila: false,
      unionForm: false,
      wardForm: false,
      modal:true,
    }
},
mounted(){
this.viewInfo();
 this.division();
},
methods:{
      update() {
      axios.put(`customerInfo/${this.form.id}`, this.form).then((res) => {
        this.$router.push({ name: "customerprofile" });
        this.viewInfo();
        this.modal=false;
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },

     updatePass() {
      this.form
        .post("changepassword", {
          method: "post",
          body: JSON.stringify(this.changepassword),
          headers: {
            "content-type": "application/json",
          },
        })
         .then((response) => {
          this.form.reset();
        
          Toast.fire({
            icon: "success",
            title: "Successfully Change  Password",
          });
        })
        .catch((err) => console.log(err));
    },
        viewInfo(){
 axios.get('customerInfo').then((res)=>{
       this.infos=res.data.customer;
        this.form.fill(res.data.customer);
      })
    },
  
    openModal(){
  this.modal=true;
    },
      division() {
      axios.get("/division").then((res) => {
        this.divisions = res.data.division;
      });
    },
          districtShow(id) {
      axios.get("/district/" + id).then((res) => {
        this.districts = res.data.district;
        this.districtShowForm = true;
      });
    },

    thanaShow() {
      axios.get("/thana/" + this.form.districtId).then((res) => {
        this.thanas = res.data.thana;
        this.upazila = true;
      });
    },
    unionShow() {
      axios.get("/union/" + this.form.thanaId).then((res) => {
        this.unions = res.data.union;
        this.unionForm = true;
      });
      axios.get("/ward/" + this.form.thanaId).then((res) => {
        this.wards = res.data.ward;
        this.wardForm = true;
      });
    },
}
}
</script>

