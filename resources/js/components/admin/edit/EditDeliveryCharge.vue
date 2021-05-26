<template>
    <div class="row" data-toggle="isotope">
              <div class="item col-xs-12 col-md-10 " >                
                <div class="panel panel-default">
                    <div class="panelcenter" > 
                    <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right"> Edit Delivery Charge</h3>         
                    <div style="background-color:rgba(160, 174, 178, 0.71)">                  
                     <form @submit.prevent="update"  class="col-md-offset-3" style="padding:10px 0 10px 0" >
                       <alert-error :form="form" message="There were some problems with your input."></alert-error>
                        
                                                          
                         <div class="row">
                           <div class="col-md-8">
                             <div class="form-group">
                               <label for="exampleFormControlInput1">Delivery Charge</label>
                                <input  id="exampleFormControlInput1" placeholder="Delivery Charge"  v-model="form.deliveryCharge" type="text" name="deliveryCharge"  class="form-control" />                                 
                            </div>                             
                          </div>
                        </div>                                      
                         <button :disabled="form.busy" type="submit" class=" btn btn-primary">Update</button>
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
            
              deliveryCharge:''    
            }),         
         
           DeliveryTime:false  
        }
    },
     mounted() {    
       
       this.editCharge()  ;
       
        
     },
    methods: {
           playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
        
         editCharge() {
      axios.get(`deliveryCharge/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`deliveryCharge/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "deliverycharge" });
        this.playSound();
        Toast.fire({
          icon: "success",
          title: "Successfully Updated",
        });
      });
    },
        
   
       
       
       
    }
  }
</script>