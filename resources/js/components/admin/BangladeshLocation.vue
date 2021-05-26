<template>
    <div class="row" data-toggle="isotope">
              <div class="item col-xs-12 col-md-10 " >                
                <div class="panel panel-default">
                    <div class="panelcenter" > 
                    <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right"> Bangladesh Location</h3>         
                    <div style="background-color:rgba(160, 174, 178, 0.71)">                  
                     <form @submit.prevent="add"  class="col-md-offset-3" style="padding:10px 0 10px 0" >
                       <alert-error :form="form" message="There were some problems with your input."></alert-error>
                        
                         <div class="row">
                           <div class="col-md-8">  
                             <div class="form-group"  >
                                <label for="exampleFormControlSelect1">Select Division</label>
                                 <select class="form-control"    v-model="form.divisionId"  @change.prevent="districtShow()" id="exampleFormControlSelect1" >
                                   <option v-for="division in divisions" :key="division.id" :value=division.id>{{division.name}}</option>                                   
                                 </select>
                            </div> 
                          </div>
                        </div>
                        
                        <div class="row" v-if="districtShowForm">
                           <div class="col-md-8">  
                             <div class="form-group"  >
                                <label for="exampleFormControlSelect1">Select District</label>
                                 <select class="form-control"   v-model="form.districtId"   @change.prevent="thanaShow()" id="exampleFormControlSelect1" >
                                   <option v-for="district in districts" :key="district.id" v-bind:value=district.id >{{district.name}}</option>                                   
                                 </select>
                            </div> 
                          </div>
                        </div> 
                        <div class="row" v-if="upazila==true">
                           <div class="col-md-8">  
                             <div class="form-group"  >
                                <label for="exampleFormControlSelect1">Select Thana</label>
                                 <select class="form-control"   v-model="form.thanaId"   id="exampleFormControlSelect1" >
                                   <option v-for="thana in thanas" :key="thana.id" v-bind:value="thana.id">{{thana.name}}</option>
                                   
                                 </select>
                            </div> 
                          </div>
                        </div>   
                                                                                                 
                         <div class="row">
                           <div class="col-md-8">
                             <div class="form-group">
                               <label for="exampleFormControlInput1">Union</label>
                                <input  id="exampleFormControlInput1" placeholder="Union"  v-model="form.union" type="text" name="union"  class="form-control" />                                 
                            </div>                             
                          </div>
                        </div>                                      
                         <div class="row">
                           <div class="col-md-8">
                             <div class="form-group">
                               <label for="exampleFormControlInput1">Ward</label>
                                <input  id="exampleFormControlInput1" placeholder="Ward"  v-model="form.ward" type="text" name="ward"  class="form-control" />                                 
                            </div>                             
                          </div>
                        </div>                                      
                         <button :disabled="form.busy" type="submit" class=" btn btn-primary">Submit</button>
                      </form> 
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
              union:'',        
              ward:'',        
            }),         
          divisions:[],
          districts:[],
          allThanas:[],
          allDistricts:[],
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
          
          this.division(); 
          this.condition(); 
          this.shop();
          this.allDistrict();
          this.allThana();
        
     },
    methods: {
           playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
        add(){
            this.form.post('location')
             .then((response) => {
          this.form.reset();  
          this.playSound();       
          Toast.fire({
            icon: "success",
            title: "Successfully Upload",
          });
        })
        .catch((err) => console.log(err));
        },
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