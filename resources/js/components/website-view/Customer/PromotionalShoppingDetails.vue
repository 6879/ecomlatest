<template>
  <div >
<div class="container-fluid">
    <div class="col-12 col-xs-12 col-md-9 p-4 offset-md-1 mt-4 profilebox">
          <center><h3 class="align-center cush"><i class="fas fa-shopping-bag"></i>&nbsp; Promotional Shopping Details</h3></center>
        <table class="table table-striped table-responsive">
  <thead style="background-color: rgb(210, 200, 202);">
    <tr>
      <th scope="col">SN</th>
      <th scope="col">User_Name</th>
      <th scope="col">Invoice</th>
      <th scope="col">Date</th>
      <th scope="col">Shopping_Item</th>
      <th scope="col">Unit_Price</th>
      <th scope="col">QunT</th>
      <th scope="col">Payment_Type</th>
  
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">1</th>
      <td>Nahid</td>
      <td> <span class="badge badge-warning">#12455</span></td>
      <td>21-03-2021</td>
      <td>Dragon Fruit</td>
      <td>900</td>
      <td>45</td>      
      <td>Cash</td>   
    </tr>
   
    <tr >
      <th scope="row">1</th>
      <td>Nahid</td>
        <td> <span class="badge badge-warning">#12455</span></td>
      <td>21-03-2021</td>
      <td>Dragon Fruit</td>
      <td>900</td>
      <td>45</td>      
      <td>Cash</td>   
    </tr>
   
    <tr >
      <th scope="row">1</th>
      <td>Nahid</td>
        <td> <span class="badge badge-warning">#12455</span></td>
      <td>21-03-2021</td>
      <td>Dragon Fruit</td>
      <td>900</td>
      <td>45</td>      
      <td>Cash</td>   
    </tr>
   
   
  </tbody>
</table>

</div >
</div >
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
</div >
</template>

<script>
export default {
data(){
    return{
   infos:[]
    }
},
mounted(){
    this.viewInfo()
},
methods:{
viewInfo(page=1){
    axios.get("customerInfo/create?page="+ page).then((res)=>{
        this.infos=res.data.customer
    })
},
}
}
</script>
