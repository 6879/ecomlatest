<template>
  <div>
    <div class="container-fluid mt-5">
        <div class="col-12 col-md-8 offset-md-2 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded">
           <div class="container">
      <div class="col-12 col-md-12 col-xs-12 offset-md-2">
     <button class="btn fb "><img :src="'frontend/image/facebook.webp'" height="40" width="50">  Login With Facebook</button>
      </div>
      <div class="col-12 col-md-12 col-xs-12 mt-2 offset-md-2" v-if="phone">
     <button class="btn email " @click.prevent="openEmail"><img :src="'frontend/image/envlope.jpg'" height="40" width="50">  Login With Email</button>
      </div>
      <div class="col-12 col-md-12 col-xs-12 mt-2 offset-md-2" v-if="emailAD">
     <button class="btn phone " @click.prevent="openPhone"><img :src="'frontend/image/phone.webp'" height="40" width="50">  Login With Mobile</button>
      </div>
    <div >
      <div v-if="phone">
         <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
               or
            PLEASE ENTER YOUR MOBILE PHONE NUMBER
     </div>
         <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
            <p> <img :src="'frontend/image/flag.png'" height="40" width="40"/>
            <input type="tel" value="+88" class="tel"  placeholder="" >
            </p>
     </div>
         <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
           <button     class="btn btn-lg btn-primary btn-block">Sign in</button>
     </div>
      </div>  
         
        <div class="col-md-12 mt-3" v-if="emailAD">
         
            <form @submit.prevent="loginInfo">            

              <div class="form-group" :class="{ 'has-error': form.errors.has('email') }">
                <label for="email"> User Name/Email Address/Phone</label>
                <input type="text" :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.email" class="form-control" name="email" placeholder="User Name/Email Address/Phone">
                 <has-error :form="form" field="email"></has-error>
              </div>
             

              <div class="form-group" :class="{ 'has-error': form.errors.has('password') }">
                <label for="password"> Password</label>
                <input type="password" :class="{ 'is-invalid': form.errors.has('password') }" v-model="form.password" class="form-control" name="password" placeholder="Password">
                  <has-error :form="form" field="password"></has-error>
              </div>

              <button     class="btn btn-lg btn-primary btn-block">Sign in</button>
            </form>
      </div>
      <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
       <center> <p> New member?<router-link  v-on:click="$bvModal.hide('modal-1' )
                                " :to="{name:'customerregi'}">Register</router-link> here.
        </p></center>
        <center>
          <span v-b-modal.modal-sms class="badge badge-info">Forgate Password?</span>
        </center>
          <b-modal id="modal-sms"  :header-bg-variant="headerBgVariant" >
 <div class="form-group">
    <label for="exampleInputEmail1">Enter User Name/Phone Number</label>
    <input type="text" class="form-control" autocomplete="off" id="exampleInputEmail1" v-on:keyup="userGet" v-model="userName" placeholder="Enter User Name/Phone Number">
   {{sms.message}}
    <button
                  class="btn btn-info mt-2"
                  @click.prevent="sendSms()"
                >
               Submit
                </button>
  </div>
  </b-modal>
              </div>
      <div class="col-12 col-md-12 col-xs-12 align-center mt-2">
       <center> <p> This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" data-reactid=".32sn2ofjqk.1.0.0.0.2.0.6.0.1">Privacy Policy</a>
        and <a href="https://policies.google.com/terms" target="_blank" data-reactid=".32sn2ofjqk.1.0.0.0.2.0.6.0.3">Terms of Service</a>
        </p></center>
              </div>
    </div>
  </div>

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
import AnimatedNumber from "animated-number-vue";
export default {
  name: "Quantity",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      form:new Form({ email: '',
      password: '',
      phone:''
      }),
      userName:'',
     
      carts: [],
      cartadd: {
        id: "",
        name: "",
        image: "",
        price: "",
        salesPrice: "",
        stock: "",
        pname: "",
        discount: "",
        offerPrice: "",
      },
      prices: [],
      pnames: [],
      menucats: [],
      menus: [],
      pcats: [],
      result: [],
      sliders: [],
      purchaseproducts: [],
      logos: [],
      searchProduct: [],
      units: [],
      colors: [],
      brands: [],
      divisions: [],
       offers: [],
       pnames: [],
       infos: [],
       getusers: [],
       sms: [],
      badge: "0",
      qun: 1,
      pid: "",
    
      totalprice: "0",
      discount: "0",
      animated: false,
      myModl: false,
      slider: true,
      category: true,
      categoryItem: true,
      login:false,
      notlogin: false,
      modal: true,
      emailAD: false,
      phone: true,
       variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
     headerBgVariant: 'warning',
      quantity: 1,
      resultDiv: {
        display: "none",
      },
   
    };
  },
 
 async mounted() {
 
    

    
   this.viewInfo();

  },

  methods: {
     loginInfo() {
      this.form
        .post('/vendor/login',
            {
              email:this.form.email,
              phone:this.form.phone,
              password:this.form.password,
            })
            .then((res) => {
            

              localStorage.setItem('usertoken', res.data.token)
                this.form.email = ''
                this.form.password = ''
                this.form.phone = ''
               this.login=true;
               this.viewInfo();
               this.notlogin=false;
               this.modal=false;
    window.location.href = "/"
            })
            .catch((err) => {
                console.log(err)
            })

          this.emitMethod()
      },
   userGet(){
              axios.get('/searchUser?q='+this.userName).then(res =>{
                if(res.data==''){
                return( this.getusers = res.data.getuser);  
              
                 }             
                else{
                (this.getusers = res.data.getuser);                
               
                }
              })
           
         },
      emitMethod() {
          EventBus.$emit('logged-in','loggedin')
      },
  
    logout() {
                axios.post('/logout')
                    .then(res => {
               window.location.href = "/"
                  this.infos.name='';
                  this.notlogin=true;
                   this.modal=true;
                    });
            },
    async sendSms(){
                this.userName="";
       Toast.fire({
            icon: "success",
            title: "Message has been sent...",
          });
        let url='http://sms.doofazit.com/api/v1/send?api_key=44515814867233291581486723&contacts='+this.getusers.phone+'&senderid=8801844532643&msg=Your password is:'+this.getusers.pass
    	 
     fetch(url);
      // const data = await res.json();
      // this.sms = data;
     
            },   
            openEmail(){
            this.emailAD=true;
            this.phone=false;
            },
            openPhone(){
            this.emailAD=false;
            this.phone=true;
            },
            viewModal(){
             this.modal=true;
            },
    viewInfo(){
 axios.get('customerInfo').then((res)=>{
       this.infos=res.data.customer;
      })
    },
   
   
    openModel() {
      this.myModl = true;
    },
    
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  
 
  },
  
};
</script>

<style>

</style>