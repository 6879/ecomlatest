<template>
    <div class="row" data-toggle="isotope">
              <div class="item col-xs-12 col-md-10 " >                
                <div class="panel panel-default">
                    <div class="panelcenter" > 
                    <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right"> Delivery Location</h3>         
                    <div style="background-color:rgba(160, 174, 178, 0.71)">                  
                     <form @submit.prevent="add"  class="col-md-offset-3" style="padding:10px 0 10px 0" >
                       <alert-error :form="form" message="There were some problems with your input."></alert-error>
                        
                         <div class="row">
                           <div class="col-md-8">  
                             <div class="form-group"  >
                                <label for="exampleFormControlSelect1">Select Division</label>
                                 <select class="form-control"    v-model="form.divisionId"  @change.prevent="districtShow()" id="exampleFormControlSelect1" >
                                   <option v-for="division in divisions" :key="division.id" :value="division.id">{{division.name}}</option>                                   
                                 </select>
                            </div> 
                          </div>
                        </div>
                        
                        <div class="row" v-if="districtShowForm">
                           <div class="col-md-8">  
                             <div class="form-group"  >
                                <label for="exampleFormControlSelect1">Select District</label>
                                 <select class="form-control"   v-model="form.districtId"   @change.prevent="thanaShow()" id="exampleFormControlSelect1" >
                                   <option v-for="district in districts" :key="district.id" :value="district.id" >{{district.name}}</option>                                   
                                 </select>
                            </div> 
                          </div>
                        </div> 
                       
                                                                                                 
                        <div class="row" v-if="upazila==true">
                           <div class="col-md-8">  
                             <div class="form-group"  >
                                <label for="exampleFormControlSelect1">Select Thana</label>
                                 <select class="form-control"   v-model="form.thanaId"  @change.prevent="unionShow()" id="exampleFormControlSelect1" >
                                   <option v-for="thana in thanas" :key="thana.id" :value="thana.id">{{thana.name}}</option>
                                   
                                 </select>
                            </div> 
                          </div>
                        </div>   
                        <div class="row" v-if="unionForm==true">
                           <div class="col-md-8">  
                             <div class="form-group"  >
                                <label for="exampleFormControlSelect1">Select Union</label>
                                 <select class="form-control"   v-model="form.unionId"   id="exampleFormControlSelect1" >
                                   <option v-for="union in unions" :key="union.id" v-bind:value="union.id">{{union.union}}</option>
                                   
                                 </select>
                            </div> 
                          </div>
                        </div>                                      
                        <div class="row" v-if="wardForm==true">
                           <div class="col-md-8">  
                             <div class="form-group"  >
                                <label for="exampleFormControlSelect1">Select Ward</label>
                                 <select class="form-control"   v-model="form.wardId"   id="exampleFormControlSelect1" >
                                   <option v-for="ward in wards " :key="ward.id" v-bind:value="ward.id">{{ward.ward}}</option>
                                   
                                 </select>
                            </div> 
                          </div>
                        </div>                                      
                         <div class="row">
                           <div class="col-md-8">
                             <div class="form-group">
                               <label for="exampleFormControlInput1">Delivery Time</label>
                                <input  id="exampleFormControlInput1" placeholder="Delivery Time"  v-model="form.deliveryTime" type="text" name="deliveryTime"  class="form-control" />                                 
                            </div>                             
                          </div>
                        </div>                                      
                         <button :disabled="form.busy" type="submit" class=" btn btn-primary">Submit</button>
                      </form> 
                      </div>               
                    </div>   
                 <div class=" col-xs-12 col-md-12 ">
      <div id="accordion">
        <div class="card" v-for="(thanaget,index) in thanagets" v-bind:key="thanaget.id">
          <div
            class="card-header"
            :id="`#headingOne${thanaget.id}`"
            style="background-color: #0199d7"
          >
            <h5 class="mb-0">
              <a
                class="btn btn-link collapsed"
                data-toggle="collapse"
                :data-target="`#collapseOne${thanaget.id}`"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h5 style="font-size: 20px; font-weight: 535; color: white">
                 <p v-for="allthana in allThanas" v-if="allthana.id==thanaget.thanaId"> {{ allthana.name }}</p>
                </h5>
              </a>
              
            </h5>
          </div>
          <div
            :id="`collapseOne${thanaget.id}`"
            class="collapse"
            :aria-labelledby="`headingOne${thanaget.id}`"
            data-parent="#accordion"
          >
            <div
              class="card-body"
              v-for="time in times"
              v-bind:key="time.id"
              v-if="thanaget.thanaId == time.thanaId"
            >
              <div
                class="card-header"
                :id="`#headingTwo${time.id}`"
                style="background-color: #cfdae3"
              >
            <table class="table table-striped">
  
  <tbody>
    <tr >
      <th scope="row">{{index+1}}</th>
      <td  v-if="time.all_union">{{time.all_union.union}}</td>
      <td  v-if="time.all_ward">{{time.all_ward.ward}}</td>
      <td  >{{time.deliveryTime}} </td>
      <td> <router-link
                  :to="{ name: 'editdeliverytime', params: { id: time.id } }"
                  class="btn btn-primary"
                  ><i class="fa fa-edit"></i>Edit</router-link
                ></td>
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

</template>

<script>

    export default {
        data(){
        return {
          form: new Form({                          
              divisionId:'',   
              districtId:'',
              thanaId:'',  
              unionId:'',        
              wardId:'',  
              deliveryTime:'',      
            }),         
          divisions:[],
          districts:[],
          allThanas:[],
          allDistricts:[],
          thanagets:[],
          thanas:[],
          unions:[],
           wards:[],
          districtShowForm:false,
          upazila:false,
          unionForm:false  ,
           wardForm:false  
        }
    },
     mounted() {    

          this.deliveryTime();
          this.allThana();
          this.division(); 
          this.condition(); 
          this.shop();
          this.allDistrict();
   
        
     },
    methods: {
           playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
        add(){
            this.form.post('deliveryLocation')
             .then((response) => {
          this.form.reset();  
           this.deliveryTime();
          this.playSound();       
          Toast.fire({
            icon: "success",
            title: "Successfully Upload",
          });
        })
        .catch((err) => console.log(err));
        },
         deliveryTime(){
                axios.get('/deliveryLocation').then(res =>{
                 this.times = res.data.time ;
                 this.thanagets = res.data.thanaget ;
              })
         } , 
         division(){
                axios.get('/division').then(res =>{
                 this.divisions = res.data.division ;
              })
         } , 
         allDistrict(){
                axios.get('/allDistrict').then(res =>{
                 this.allDistricts = res.data.allDistrict ;
              })
         } , 
          allThana(){
                axios.get('/allThana').then(res =>{
                 this.allThanas = res.data.allThana ;
              })
         } , 
         districtShow(){
                axios.get('/district/'+this.form.divisionId).then(res =>{
                 this.districts = res.data.district ;               
                 this.districtShowForm=true;              
              })              
         } ,       
          
        thanaShow(){
                axios.get('/thana/'+this.form.districtId).then(res =>{
                 this.thanas = res.data.thana ;               
                 this.upazila=true;              
              })              
         } ,  
         unionShow(){
                axios.get('/union/'+this.form.thanaId).then(res =>{
                 this.unions = res.data.union ;               
                 this.unionForm=true;              
              })      
                 axios.get('/ward/'+this.form.thanaId).then(res =>{
                 this.wards = res.data.ward ;               
                 this.wardForm=true;              
              })         
         } , 
      
       
        deletePost(memberId){
          axios.delete(`/member/${memberId}`).then(response => {
              Toast.fire({
                icon: 'success',
                title: 'Successfully Deleted'
              });   
            this.member();         
          });       
       }, 
       
    }
  }
</script>