<template>
    <div class="row" data-toggle="isotope">
              <div class="item col-xs-12 col-md-10 " >                
                <div class="panel panel-default">
                    <div class="panelcenter" > 
                    <h3 class="text-h1 ribbon-heading ribbon-primary bottom-left-right"> Edit Delivery Time</h3>         
                    <div style="background-color:rgba(160, 174, 178, 0.71)">                  
                     <form @submit.prevent="update"  class="col-md-offset-3" style="padding:10px 0 10px 0" >
                       <alert-error :form="form" message="There were some problems with your input."></alert-error>
                        
                                                          
                         <div class="row">
                           <div class="col-md-8">
                             <div class="form-group">
                               <label for="exampleFormControlInput1">Delivery Time</label>
                                <input  id="exampleFormControlInput1" placeholder="Delivery Time"  v-model="form.deliveryTime" type="text" name="deliveryTime"  class="form-control" />                                 
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
            
              deliveryTime:''    
            }),         
         
   
        }
    },
     mounted() {    
       
       this.editTime()  ;
       
        
     },
    methods: {
           playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
        
         editTime() {
      axios.get(`deliveryLocation/${this.$route.params.id}`).then((res) => {
        this.form.fill(res.data);
      });
    },
    update() {
      axios.put(`deliveryLocation/${this.$route.params.id}`, this.form).then((res) => {
        this.$router.push({ name: "deliverylocation" });
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