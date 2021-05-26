<template>
  <div class="row" data-toggle="isotope">
    <!-- <div class="col-xs-12 col-md-3"></div> -->
    <div
      class="col-xs-12 col-md-12 boxborder bg-white panel-body panel panel-default"
      style="padding-left: 0; padding-right: 0"
    >
      <h1
        style="
          background: skyblue;
          margin: 0;
          padding: 10px;
          color: white;
          text-align: center;
        "
      >
       Purchase Invoice Report
      </h1>
     

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
               <th>Purchase_Date</th>
               <th>Invoice_No</th>            
               <th>Supplier_Name</th>
                <th>Purchase_Type</th>
               <th>Total_Purchase</th>
               <th>Carriage_Inward</th>
               <th>Total_Amount</th>
               <th>Discount</th>
               <th>Supplier_Payable</th>
               <th>Other_Cost</th>
               <th>Damage_And_Warranty</th>
               <th>Total_Cost</th>
               <!-- <th>Previous Due</th> -->
               <th>Current_Payable</th>
            </tr>
          </thead>
          <tbody v-for="(list, index) in lists" :key="list.id">
            <tr v-if="index%2==0" style="background-color: white;">
                 <td>{{ index + 1 }}</td>
                 <td>{{ list.purchaseDate }}</td>
                  <td>{{ list.invoiceNo }}</td>
                  <td   v-for="supplier in suppliers"
                      :key="supplier.id" v-if="supplier.id==list.supplierId">{{ supplier.name}}</td>
                 
                  <div v-if="list.purchaseTypeId==!''">
                  <td   v-for="type in types" :key="type.id"  v-if="type.id==list.purchaseTypeId">{{ type.purchaseType }}</td>
                  </div>
                  <div v-else>
                  <td ></td>
                  </div>             
              <td>{{ list.totalPurchaseValue }}</td>            
              <td>{{ list.carriageInward }}</td>            
              <td>{{ list.totalAmount }}</td>            
              <td>{{ list.discount }}</td>            
              <td>{{ list.supplierPayable }}</td>  
              <td>{{ list.otherCost }}</td>  
              <td>{{ list.damageAndWarranty }}</td>  
              <td>{{ list.totalProductCost }}</td>  
              <td>{{ list.currentPayable }}</td>  
                 
            </tr>
            <tr v-else style="background-color: #e2d9d9;">
                 <td>{{ index + 1 }}</td>
                 <td>{{ list.purchaseDate }}</td>
                  <td>{{ list.invoiceNo }}</td>
                  <td   v-for="supplier in suppliers"
                      :key="supplier.id" v-if="supplier.id==list.supplierId">{{ supplier.name}}</td>
                 
                  <div v-if="list.purchaseTypeId==!''">
                  <td   v-for="type in types" :key="type.id"  v-if="type.id==list.purchaseTypeId">{{ type.purchaseType }}</td>
                  </div>
                  <div v-else>
                  <td ></td>
                  </div>             
              <td>{{ list.totalPurchaseValue }}</td>            
              <td>{{ list.carriageInward }}</td>            
              <td>{{ list.totalAmount }}</td>            
              <td>{{ list.discount }}</td>            
              <td>{{ list.supplierPayable }}</td>  
              <td>{{ list.otherCost }}</td>  
              <td>{{ list.damageAndWarranty }}</td>  
              <td>{{ list.totalProductCost }}</td>  
              <td>{{ list.currentPayable }}</td>  
                 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <div class="col-xs-12 col-md-3"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        name: "",     
        code: "",     
        phone: "",     
        hotLine: "",     
        fb: "",     
        web: "",     
        mail: "",     
       businessType:'',
        address: "",     
        userId: "",     
        
      }),
     types: [],
     lists: [],
     suppliers: [],
    suppliers: [],
    };
  },
  mounted() {
    this.viewSupplier();
    this.viewType();
    this.purchaseInvoiceList();
  },
  methods: {
   purchaseInvoiceList(){
            axios.get('/purchaseInvoiceGet').then(res =>{
                this.lists = res.data.purchaseInvoiceList;
                // this.adminPurchaseTypeLists = res.data.adminPurchaseTypeList;
            });
         },  
    viewSupplier() {
      fetch("api/suppliers")
        .then((res) => res.json())
        .then((res) => {
          this.suppliers = res.data;
          this. totalPurchaseValue();
        })
        .catch((err) => console.log(err));
    },
      viewType() {
      fetch("api/purchasetypes")
        .then((res) => res.json())
        .then((res) => {
          this.types = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewSupplier() {
      fetch("api/suppliers")
        .then((res) => res.json())
        .then((res) => {
          this.suppliers = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      fetch(`api/suppliers/${id}`, {
        method: "delete",      
        headers: {
          "content-type": "application/json",
        },
      }).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted",
        });
        this.viewSupplier();
      });
    },
  },
};
</script>