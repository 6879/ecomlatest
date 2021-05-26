<template>
  <div >
<div class="container-fluid">
    <div class="col-12 col-xs-12 col-md-8 p-4 offset-md-1 mt-4 profilebox">
          <center><h3 class="align-center cush"><i class="far fa-sticky-note"></i>&nbsp; Complain</h3></center>
       <div class="form-group row col-md-8">
      <label for="inputState">Problem Type</label>
      <select id="inputState" v-model="complainId"  @change.prevent="complainFormShow()" class="form-control">
        <option selected>Choose...</option>
        <option :value="1">Product Delivery</option>
        <option :value="2">Sales Commission</option>
        <option :value="3">Delivery Man</option>
        <option :value="4">Product Quality</option>
        <option :value="5">Suggestion</option>
      </select>
    </div>
    <div v-if="productDelivery">
          <div class="row">
            <div class="col-md-12 " style="margin-left:-15px">
              <div
                class="form-group"
              >             
                <label class="col-sm-4  ml-0">Date </label>
                <div class="col-sm-8">
                  <date-picker
                   
                    value-type="format"
                  ></date-picker>
                
          
              </div>
              </div>
            </div>
          </div>
            <div class="form-group row col-md-4">
      <label for="inputState">Order No</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>#25467766</option>
        <option>#25467766</option>
        <option>#25467766</option>
        <option>#25467766</option>
        
      </select>
    </div>
     <div class="form-group">
    <label for="exampleFormControlTextarea1">Problem</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <button type="submit" class="btn btn-primary ">Submit</button>
</div>
    <div v-if="salesCommission">
          <div class="row">
            <div class="col-md-12 " style="margin-left:-15px">
              <div
                class="form-group"
              >             
                <label class="col-sm-4  ml-0">Date </label>
                <div class="col-sm-8">
                  <date-picker
                   
                    value-type="format"
                  ></date-picker>
                
          
              </div>
              </div>
            </div>
          </div>
              <div class="form-group row col-md-4">
      <label for="inputState">Select Id</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Arif</option>
        <option>Nahid</option>
        <option>Jahid</option>
        
        
      </select>
    </div>
     <div class="form-group">
    <label for="exampleFormControlTextarea1">Problem</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <button type="submit" class="btn btn-primary ">Submit</button>
</div>
    <div v-if="delivery">
          <div class="row">
            <div class="col-md-12 " style="margin-left:-15px">
              <div
                class="form-group"
              >             
                <label class="col-sm-4  ml-0">Date </label>
                <div class="col-sm-8">
                  <date-picker
                   
                    value-type="format"
                  ></date-picker>
                
          
              </div>
              </div>
            </div>
          </div>
       
       <div class="form-group row col-md-4">
      <label for="inputState">Delivery Man</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Arif</option>
        <option>Nahid</option>
        <option>Jahid</option>
        
        
      </select>
    </div>
     <div class="form-group">
    <label for="exampleFormControlTextarea1">Problem</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <button type="submit" class="btn btn-primary ">Submit</button>
</div>
    <div v-if="quality">
          <div class="row">
            <div class="col-md-12 " style="margin-left:-15px">
              <div
                class="form-group"
              >             
                <label class="col-sm-4  ml-0">Date </label>
                <div class="col-sm-8">
                  <date-picker
                   
                    value-type="format"
                  ></date-picker>
                
          
              </div>
              </div>
            </div>
          </div>
            <div class="form-group row col-md-4">
      <label for="inputState">Invoice No</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>#1245656</option>      
        <option>#1245656</option>        
        <option>#1245656</option>       
        
      </select>
    </div>
            <div class="form-group row col-md-4">
      <label for="inputState">Select product</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Dragon Fruit</option>      
        <option>Milkj</option>        
        <option>Egg</option>       
        
      </select>
    </div>
     <div class="form-group">
    <label for="exampleFormControlTextarea1">Problem</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <button type="submit" class="btn btn-primary ">Submit</button>
</div>
    <div v-if="suggest">
          <div class="row">
            <div class="col-md-12 " style="margin-left:-15px">
              <div
                class="form-group"
              >             
                <label class="col-sm-4  ml-0">Date </label>
                <div class="col-sm-8">
                  <date-picker
                   
                    value-type="format"
                  ></date-picker>
                
          
              </div>
              </div>
            </div>
          </div>
        
     <div class="form-group">
    <label for="exampleFormControlTextarea1">Suggest</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <button type="submit" class="btn btn-primary ">Submit</button>
</div>
</div >
</div >
</div >
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
   complainId:'',
   productDelivery:false,
   salesCommission:false,
   delivery:false,
   quality:false,
   suggest:false,
    }
},
mounted(){
   
},
methods:{
complainFormShow(){
   if(this.complainId==1) {
       this.productDelivery=true;
       this.salesCommission=false;
       this.delivery=false;
       this.quality=false;
          this.suggest=false;
   }
   if(this.complainId==2) {
       this.productDelivery=false;
       this.salesCommission=true;
        this.delivery=false;
          this.quality=false;
             this.suggest=false;
   }
   if(this.complainId==3) {
       this.productDelivery=false;
       this.salesCommission=false;
        this.delivery=true;
          this.quality=false;
             this.suggest=false;
   }
   if(this.complainId==4) {
       this.productDelivery=false;
       this.salesCommission=false;
        this.delivery=false;
          this.quality=true;
          this.suggest=false;
   }
   if(this.complainId==5) {
       this.productDelivery=false;
       this.salesCommission=false;
       this.delivery=false;
       this.quality=false;
       this.suggest=true;
   }
}
}
}
</script>
