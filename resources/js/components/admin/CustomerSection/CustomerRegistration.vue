<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-2 col-xs-12"></div>
      <div class="col-12 col-md-8 col-xs-12 bg-white">
        <center><h1 class="align-center">Customer Registration</h1></center>
        <form @submit.prevent="add">
          <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Select Division</label>
                  <select
                    class="form-control"
                    v-model="form.divisionId"
                    @change.prevent="districtShow()"
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
           <p >You Have Sponsor?  <span v-if="click"><button class="badge badge-primary"   @click.prevent="clickHere(ok)">Click Here</button></span><span v-if="need"><button class="badge badge-danger"  @click.prevent="needFun(ok)">No need</button></span></p> 
           <div class="row" v-if="sponsor">
                           <div class="col-md-12">
                             <div class="form-group">
                               <label for="exampleFormControlInput1">Sponsor Id</label>
                                <input  id="exampleFormControlInput1"  v-on:keyup="sponsorGet"   placeholder="Sponsore Id" v-model="form.sponsorId" type="text" name="sponsorId"  class="form-control" >                                                               
                            </div>                             
                          </div>
                        </div>
                         <div v-if="searchresult==true">
                           <div v-for="res in result" :key="res.id">
                             <div class="row">
                               <div class="col-md-4">
                                 <div class="form-group form-control-default">
                                  <input  id="exampleFormControlInput1"  disabled  :value="res.name" type="text"   class="form-control" >                                 
                                  </div>                                                     
                                </div>
                              <div class="col-md-4">
                                <div class="form-group form-control-default">
                                  <input  id="exampleFormControlInput1"  disabled :value="res.phone" type="text"   class="form-control" >                                 
                                </div>                                                      
                             </div>
                            </div>
                          </div>
                        </div>
                        <div v-else-if="search==true">
                         <h4 style='color:red'>Invalid Username</h4>
                         </div>
           <div class="row">
            <div class="col-md-12">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('password') }"
              >
                <label for="exampleFormControlInput1">Password</label>
                <input
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  v-model="form.password"
                  type="password"
                  name="email"
                  :class="{
                    'is-invalid': form.errors.has('password'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="password"></has-error>
              </div>
            </div>
          </div>
          <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="exampleFormControlFile1"
                    >Upload Profile Image</label
                  >
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
            <div class="row">
            <div class="col-md-2">
              <div
                class="form-group"
                :class="{ 'has-error': form.errors.has('terms') }"
              >
                <label for="exampleFormControlInput1">Terms And Condition</label>
                <input             
                 value="1"
                  v-model="form.terms"
                  type="checkbox"
                  name="terms"
                  :class="{
                    'is-invalid': form.errors.has('terms'),
                  }"
                  class="form-control"
                />
                <has-error :form="form" field="terms"></has-error>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-12 col-md-2 col-xs-12"></div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css"; 
export default {
     components: {
    DatePicker,
  },
  data() {
    return {
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
       
      }),
       divisions: [],
       searchresult:false,
        search:false,
        click:true,
        need:false,
        sponsor:false,
         districtShowForm: false,
      upazila: false,
      unionForm: false,
      wardForm: false,
    };
  },
  mounted(){
  this.division();
  },
  methods:{
        playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
    add() {
      this.form
        .post("customer", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          this.form.reset();
          this.playSound();
          Toast.fire({
            icon: "success",
            title: "Successfully Saved",
          });
        })
        .catch((err) => console.log(err));
    },   
         clickHere(){
             
             this.click=false;
             this.need=true;
             this.sponsor=true;
         },
         needFun(){
             this.click=true;
             this.need=false;
              this.sponsor=false;
         },
            sponsorGet(){
              axios.get('/search?q='+this.form.sponsorId).then(res =>{
                if(res.data==''){
                 this.result = res.data;  
                 this.search=true;
                 this.searchresult=false
                 }             
                else{
                this.result = res.data;                
                this.searchresult=true;
                this.search=false;
                }
              })
           
         }, 
          division() {
      axios.get("/division").then((res) => {
        this.divisions = res.data.division;
      });
    },
          districtShow() {
      axios.get("/district/" + this.form.divisionId).then((res) => {
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
         changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        console.log(event.target.result);
      };
      reader.readAsDataURL(file);
    },
  }
};
</script>

