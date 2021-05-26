<template>
  <div data-toggle="isotope">
    <div class="col-xs-12 col-md-12">
      <div class="panel panel-default">
        <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right">
          Delivery Man Entry
        </h3>
        <div class="panel-body">
          <form @submit.prevent="add">
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('roll') }"
                >
                  <label for="exampleFormControlSelect1"
                    >Select Admin Type</label
                  >
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
                    :class="{ 'is-invalid': form.errors.has('email') }"
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
                  :class="{ 'has-error': form.errors.has('phone') }"
                >
                  <label for="exampleFormControlInput1">Phone</label>
                  <input
                    id="exampleFormControlInput1"
                    placeholder="Phone"
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
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('userId') }"
                >
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
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('eduQualification') }"
                >
                  <label for="exampleFormControlInput1"
                    >Education Qualification</label
                  >
                  <textarea
                    id="exampleFormControlInput1"
                    placeholder="Education Qualification"
                    v-model="form.eduQualification"
                    type="text"
                    name="educationQualification"
                    :class="{
                      'is-invalid': form.errors.has('eduQualification'),
                    }"
                    class="form-control"
                  ></textarea>
                  <has-error :form="form" field="eduQualification"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('skill') }"
                >
                  <label for="exampleFormControlInput1">Skill</label>
                  <textarea
                    id="exampleFormControlInput1"
                    placeholder="Skill"
                    v-model="form.skill"
                    type="text"
                    name="skill"
                    :class="{ 'is-invalid': form.errors.has('skill') }"
                    class="form-control"
                  ></textarea>
                  <has-error :form="form" field="skill"></has-error>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div
                  class="form-group"
                  :class="{ 'has-error': form.errors.has('exprience') }"
                >
                  <label for="exampleFormControlInput1">Exprience</label>
                  <textarea
                    id="exampleFormControlInput1"
                    placeholder="Exprience"
                    v-model="form.exprience"
                    type="text"
                    name="exprience"
                    :class="{ 'is-invalid': form.errors.has('exprience') }"
                    class="form-control"
                  ></textarea>
                  <has-error :form="form" field="exprience"></has-error>
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
            <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-12 bg-white">
        <div id="accordion">
        <div class="card" v-for="man in getDeliveryMan" v-bind:key="man.id">
          <div
            class="card-header"
            :id="`#headingOne${man.thanaId}`"
            style="background-color: #0199d7"
          >
            <h5 class="mb-0">
              <a
                class="btn btn-link collapsed"
                data-toggle="collapse"
                :data-target="`#collapseOne${man.thanaId}`"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h5 style="font-size: 20px; font-weight: 535; color: white">
                 <p v-for="allthana in allThanas" v-if="allthana.id==man.thanaId"> {{ allthana.name }}</p>
                </h5>
              </a>
              
            </h5>
          </div>
          <div
            :id="`collapseOne${man.thanaId}`"
            class="collapse"
            :aria-labelledby="`headingOne${man.thanaId}`"
            data-parent="#accordion"
          >
          <div v-for="(manget, index) in deliveryManGets" :key="manget.id" v-if="man.thanaId==manget.thanaId">
          <div v-for="(user, index) in getUsers" :key="user.id">
            <div
              class="card-body"
             v-for="allthana in allThanas" v-if="allthana.id==man.thanaId&&manget.deliveryManId==user.id"
            
            >
              <div
                class="card-header"
                :id="`#headingTwo${man.thanaId}`"
                style="background-color: #cfdae3"
              >
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ user.roll }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>

              <td>{{ user.userId }}</td>

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
          </div>
          </div>
        </div>
        </div>
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
        deliveryManId: "",
        permanentAddress: "",
        presentAddress: "",
        skill: "",
        eduQualification: "",
        exprience: "",
        image: "",
        divisionId: "",
        districtId: "",
        thanaId: "",
        unionId: "",
        wardId: "",
        phone: "",
      }),
      getUsers: [],
      divisions: [],
      types: [],
      getDeliveryMan: [],
         allThanas:[],
         deliveryManGets:[],
      districtShowForm: false,
      upazila: false,
      unionForm: false,
      wardForm: false,
    };
  },
  mounted() {
    this.viewUser();
    this.viewType();
    this.allThana();
    this.division();

    this.allDistrict();
  },
  methods: {
    add() {
      this.form
        .post("deliveryManInfo", {
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
         allThana(){
                axios.get('/allThana').then(res =>{
                 this.allThanas = res.data.allThana ;
              })
         } ,
    viewUser() {
      axios
        .get("deliveryManInfo")
        .then((res) => {
          this.getUsers = res.data.member;
          this.getDeliveryMan = res.data.deliveryMan;
          this.deliveryManGets = res.data.deliveryManGet;
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
    viewType() {
      fetch("api/admintypes")
        .then((res) => res.json())
        .then((res) => {
          this.types = res.data;
        })
        .catch((err) => console.log(err));
    },
    division() {
      axios.get("/division").then((res) => {
        this.divisions = res.data.division;
      });
    },
    allDistrict() {
      axios.get("/allDistrict").then((res) => {
        this.allDistricts = res.data.allDistrict;
      });
    },
    allThana() {
      axios.get("/allThana").then((res) => {
        this.allThanas = res.data.allThana;
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