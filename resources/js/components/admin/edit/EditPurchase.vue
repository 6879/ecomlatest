<template>
  <div>
    <div
      class="row boxborder bg-white"
      data-toggle="isotope"
      style="max-width: 1013px"
    >
      <div class="col-xs-12 col-md-6 shadow-lg bg-white rounded">
        <h1
          style="
            color: #1d3d4a;
            padding: 10px;
            text-align: center;
            margin-left: 22px;
          "
        >
          New Purchase Entry
        </h1>
        <div class="panel panel-default shadow-lg boxborder bg-white rounded">
          <div class="panel-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-4 control-label">Purchase Date</label>
                <div class="col-sm-8">
                  <date-picker v-model="form.purchaseDate" value-type="format" ></date-picker>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label"
                  >Purchase Invoice No</label
                >
                <div class="col-sm-8">
                  <input
                     v-model="form.invoiceNo"
                    type="text"
                    class="form-control"
                    placeholder="Invoice No"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Supplier Name</label>
                <div class="col-sm-8">
                  <select
                    class="form-control"
                    id="exampleSelect1"
                    v-model="form.supplierId"
                    @change.prevent="supplierInfo()"
                  >
                    <option>Select One</option>
                    <option
                      v-for="supplier in suppliers"
                      :key="supplier.id"
                      :value="supplier.id"
                    >
                      {{ supplier.name }}({{ supplier.code }})
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Mobile No</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Mobile No"
                    v-model="form.phone"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Address</label>
                <div class="col-sm-8">
                  <textarea
                    disabled
                    class="form-control"
                    v-model="form.address"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Purchase Type</label>
                <div class="col-sm-8">
                  <div v-for="type in types" :key="type.id"   style="float: left;margin-right: 10px;">
                          <input type="checkbox" v-model="form.purchaseTypeId"  name="purchaseTypeId" :value="type.id">
                          {{ type.purchaseType }}
                        </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6"></div>
    </div>
    <div
      class="col-xs-12 col-md-12 panel-body purcha-border boxborder panel panel-default shadow-lg rounded"
      style="
        background: rgb(231, 241, 232) none repeat scroll 0% 0%;
        max-width: 988px;
      "
    >
      <div class="pl-2" style="margin-top: 10px">
        <form action="" @submit.prevent="add()">
          <div class="form-row">
            <div class="form-group col-sm-2 col-6">
              <label>Product Name</label>
              <select
                class="form-control bg-white"
                v-model="form.pname"
                name="pname"
              >
                <option value="">Select One</option>
                <option
                  v-for="pname in pnames"
                  :key="pname.id"
                  :value="pname.id"
                >
                  {{ pname.pname }} ({{ pname.pcode }})
                </option>
              </select>
            </div>
            <div class="form-group col-sm-2 col-6">
              <label>Brand Name</label>
              <select
                class="form-control bg-white"
                v-model="form.brand"
                name="brand"
              >
                <option value="">Select One</option>
                <option
                  v-for="brand in brands"
                  :key="brand.id"
                  :value="brand.id"
                >
                  {{ brand.brand }}
                </option>
              </select>
            </div>
            <div class="form-group col-sm-2 col-6">
              <label>Unit</label>
              <select
                v-model="form.unit"
                name="unit"
                class="form-control bg-white"
              >
                <option value="">Select One</option>
                <option v-for="unit in units" :key="unit.id" :value="unit.id">
                  {{ unit.unit }}
                </option>
              </select>
            </div>
            <div class="form-group col-sm-2 col-6">
              <label>Size</label>
              <select
                v-model="form.size"
                name="size"
                class="form-control bg-white"
              >
                <option value="">Select One</option>
                <option v-for="size in sizes" :key="size.id" :value="size.id">
                  {{ size.size }}
                </option>
              </select>
            </div>
            <div class="form-group col-sm-2 col-6">
              <label>Color</label>
              <select
                v-model="form.color"
                name="color"
                class="form-control bg-white"
              >
                <option value="">Select One</option>
                <option
                  v-for="color in colors"
                  :key="color.id"
                  :value="color.id"
                >
                  {{ color.color }}
                </option>
              </select>
            </div>

            <div class="form-group col-sm-2 col-6">
              <label>Quantity</label>
              <input
                type="text"
                v-model="form.quan"
                @keyup.prevent="unitPrice()"
                name="quan"
                placeholder="Quantity"
                class="form-control bg-white"
              />
            </div>
            <div class="form-group col-sm-2 col-6">
              <label>Unit Price</label>
              <input
                type="text"
                v-model="form.unitPrice"
                @keyup.prevent="unitPrice()"
                name="unitPrice"
                placeholder="Unit Price"
                class="form-control bg-white"
              />
            </div>
            <div class="form-group col-sm-2 col-6">
              <label>Discount</label>
              <input
                type="text"
                v-model="form.perc"
                @keyup.prevent="percetage()"
                name="perc"
                placeholder="Percentage"
                class="form-control bg-white"
              />
            </div>
            <div class="form-group col-sm-2 col-6">
              <label>Total Price</label>
              <animated-number
                type="text"
                disabled
                v-model="form.totalPrice"
                name="totalPrice"
                placeholder="Total Price"
                class="form-control bg-white"
              />
            </div>
            <input
              type="hidden"
              disabled
              v-model="form.percetagePrice"
              name="percetagePrice"
              class="form-control bg-white"
            />
            <div class="btn-mr" style="padding-top: 100px">
              <label></label>
              <button type="submit" class="btn btn-info btn-padding">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div
      class="col-xs-12 col-md-12 panel-body panel panel-default purcha-border"
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
              <th>Supplier Name</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <!-- <th>Address</th> -->
             
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="(view, index) in purchaseproducts" :key="view.id" >
              <td>{{ index + 1 }}</td>
              <td
                v-for="supplier in suppliers"
                v-if="view.supplierId == supplier.id"
              >
                {{ supplier.name }}
              </td>
              <td v-for="pname in pnames" v-if="view.pname == pname.id">
                {{ pname.pname }}
              </td>
              <td>{{ view.brand }}</td>
              <td>{{ view.unit }}</td>
              <td>{{ view.quan }}</td>
              <td>{{ view.unitPrice }}</td>
              <td>{{ view.totalPrice }}</td>
              <!-- <td>{{ supplier.address }}</td> -->
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="col-xs-12 col-md-12">
      <div class="row">
        <div class="col-xs-12 col-md-6"></div>
        <div
          class="col-xs-12 col-md-6 shadwo-lg purcha-border bg-white rounded boxborder2"
        >
          <div class="panel-body">
            <form class="form-horizontal" @submit.prevent="update()" role="form">
              <div class="form-group">
                <label class="col-sm-4 control-label"
                  >Total Purchase Value</label
                >
                <div class="col-sm-8">
                  <input
                  v-model="totalPurchaseValue" id="totalPurchaseValue" name="totalPurchaseValue"
                    type="text"
                    class="form-control"
                  
                  />
                  <input type="hidden" disabled v-model="form.totalProductQuantity" id="totalProductQuantity" name="totalProductQuantity" class="form-control"  placeholder="Total Product Quantity">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Carriage Inward</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    v-model="carriageInward" id="carriageInward" name="carriageInward"
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-4 control-label">Total Amount</label>
                <div class="col-sm-8">
                  <input
                  v-model="totalAmount" id="totalAmount" name="totalAmount"
                    type="text"
                    class="form-control"
                    placeholder="Mobile No"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Discount</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                
                   v-model="form.discount" @keyup.prevent="discount()" name="discount"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Supplier Payable </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.supplierPayable"  name="supplierPayable"
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Other Cost </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.otherCost" @keyup.prevent="otherCosts()" name="otherCost" 
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Damage & Warranty</label>
                <div class="col-sm-8">
                  <input
                  v-model="form.damageAndWarranty" name="damageAndWarranty" 
                    type="text"
                    class="form-control"
                   
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Total Product Cost</label>
                <div class="col-sm-8">
                  <input
                  v-model="form.totalProductCost" name="totalProductCost"
                    type="text"
                    class="form-control"
                   
                    disabled
                  />
                  <input type="hidden" disabled v-model="form.totalDiscount" name="totalDiscount" class="form-control" placeholder="Total Product Cost">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Previous Payable</label>
                <div class="col-sm-8">
                  <input
                  v-model="form.previousPayable" name="previousPayable"
                    type="text"
                    class="form-control"
                   
                    disabled
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-4 control-label">Current Payable </label>
                <div class="col-sm-8">
                  <input
                  v-model="form.currentPayable" name="currentPayable"
                    type="text"
                    class="form-control"
                   
                    disabled
                  />
                </div>
              </div>
              <center> <button :disabled="form.busy" type="submit" class="btn btn-primary">
              Update
            </button></center>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
export default {
  components: {
    AnimatedNumber,
    DatePicker
  },

  data() {
    
    return {
     
      form: new Form({
        supplierId: "",
        purchaseDate:"",
        invoiceNo:"",
        purchaseTypeId:[],
        phone: "",
        address: "",
        pname: "",
        brand: "",
        color: "",
        unit: "",
        size: "",
        quan: "",
        unitPrice: "",
        perc: "",
        totalPrice: "",
        percetagePrice: "",
        totalAmount: "",
        totalPurchaseValue: "",
        totalProductQuantity: "",
        totalProductCost: "",
        totalProductCost: "",
        totalDiscount: "",
       currentPayable:"",
      previousPayable:"",
     damageAndWarranty:"",
     otherCost:"",
     supplierPayable:"",
     discount:"",
     carriageInward:"",
      }),
     
      animated: false,
      pnames: [],
      brands: [],
      units: [],
      sizes: [],
      colors: [],
      types: [],
      lists: [],
      cusPurchaseInvoice:{},
      purchaseproducts: [],
      suppliers: [],
    };
   
  },
  mounted() {
    this.viewSupplier();
    this.viewProductName();
    this.viewBrand();
    this.viewUnit();
    this.viewSize();
    this.viewColor();
    this.playSound();
    this.purchaseProductList();
    this.purchaseInvoiceNo();
    this. viewType();
    this. totalPurchaseValue();
    this.purchaseInvoiceList();
    this.purchaseInfo();
    

  },
 
   computed: {
             totalAmount: function(){
          
                return totalAmount = this.carriageInward + this.totalPurchaseValue;
                this.totalAmount  = totalAmount;
              
           
         },   
         discount(){
             if (this.form.discount == "") {
                this.carriageInward();
             }
             else{
                let discount = parseFloat(this.form.totalAmount) - parseFloat(this.form.discount);
                this.form.supplierPayable = discount;
                this.form.totalProductCost = discount;
                this.form.totalDiscount = discount;
                this.form.currentPayable = discount;
                if (this.cusPreviousPayable > 0) {
                  let totalcurrant =  parseFloat(this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                  this.form.currentPayable = totalcurrant;
                }
             }
         },
         otherCosts(){
            if(this.form.otherCost == ""){
              if (this.form.otherCost == "" && this.form.damageAndWarranty =="") {
                 this.discount();
              }
            }
            else{
               let otherCost = parseFloat(this.form.totalDiscount) + parseFloat(this.form.otherCost);
               this.form.totalProductCost = otherCost;
               this.form.currentPayable = otherCost;
               if (this.cusPreviousPayable > 0) {
                 let totalcurrant =  parseFloat(this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                 this.form.currentPayable = totalcurrant;
               }
            }
         },
         damageAndWarrantys(){
            if(this.form.damageAndWarranty == ""){
              if (this.form.otherCost == "" && this.form.damageAndWarranty == "") {
                 this.discount();
              }
            }
            else{
              let damageAndWarranty = parseFloat(this.form.totalDiscount) + parseFloat(this.form.damageAndWarranty);

              let otherCost = parseFloat(damageAndWarranty) + parseFloat(this.form.otherCost);
              this.form.totalProductCost = otherCost;
              this.form.currentPayable = otherCost;

               if (this.cusPreviousPayable > 0) {
                 let totalcurrant =  parseFloat(this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                 this.form.currentPayable = totalcurrant;
               }
            }
         },
            },
  methods: {
    playSound() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3"
      );
      audioFile.play();
    },
    playSoundError() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233574/error.mp3"
      );
      audioFile.play();
    },
    playSoundWarning() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233563/warning.mp3"
      );
      audioFile.play();
    },
     purchaseInfo(){
            axios.get('/purchaseproducts/'+this.$route.params.id+'/edit').then(res =>{
                  this.form.fill(res.data.purchaseInfor)
                  this.purchaseTypeIdCatch = res.data.purchaseInfor.purchaseTypeId;
                  this.totalPurchaseValue();
            });
          },
    update(){
               this.form.put('/purchaseproducts/'+this.$route.params.id).then(res =>{
                  Toast.fire({
                    icon: 'success',
                    title: 'Purchase Invoice Update Successfully'
                  })
                  this.$router.push('purchaseentry')
                    this.playSound();
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

    supplierInfo() {
      axios.get(`api/supplierInfo/${this.form.supplierId}`).then((res) => {
        this.form.phone = res.data.supplierPhone;
        this.form.address = res.data.supplierAddress;
        
      });
      this. totalPurchaseValue();
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.pnames = res.data;
        })
        .catch((err) => console.log(err));
    },
   
    purchaseProductList() {
        axios.get('/purchaseproducts/'+this.$route.params.id)
       
        .then((res) => {
          this.purchaseproducts = res.data.purchaseproductget;
          this. totalPurchaseValue();
        })
        
    },
    viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewUnit() {
      fetch("api/units")
        .then((res) => res.json())
        .then((res) => {
          this.units = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewSize() {
      fetch("api/sizes")
        .then((res) => res.json())
        .then((res) => {
          this.sizes = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewColor() {
      fetch("api/colors")
        .then((res) => res.json())
        .then((res) => {
          this.colors = res.data;
        })
        .catch((err) => console.log(err));
    },
    unitPrice() {
      let quan = this.form.quan;
      let unitPrice = this.form.unitPrice;
      let totalPrice = quan * unitPrice;
      this.form.totalPrice = totalPrice;
      this.form.percetagePrice = totalPrice;
    },
    percetage() {
      if (this.form.perc != "") {
        let discountDiv =
          (parseFloat(this.form.perc) * parseFloat(this.form.percetagePrice)) /
          parseFloat(100);
        let discount =
          parseFloat(this.form.percetagePrice) - parseFloat(discountDiv);
        this.form.totalPrice = discount;
      } else {
        this.unitPrice();
      }
    },
     purchaseInvoiceNo(){
            axios.get('/purchaseInvoiceShow').then(res => {
                 this.form.invoiceNo = res.data.purchaseInvoiceIncrement;
                 this.cusPurchaseInvoice = res.data.purchaseInvoiceIncrement;
                 this.form.purchaseDate = res.data.currentDate;
            });
          },
            totalPurchaseValue(){
           axios.get('/totalPurchaseValue/'+this.$route.params.id).then(res => {
                 let sum = 0;
                 let quan = 0;
                 res.data.purchaseproducts.forEach(productPrice => {
                     sum += parseFloat(productPrice.totalPrice)
                     quan += parseFloat(productPrice.quan)
                 });
                 this.form.totalProductQuantity = quan;
                 this.form.totalPurchaseValue = sum;
                 this.form.totalAmount = sum;
                 this.form.supplierPayable = sum;
                 this.form.totalProductCost = sum;
                 this.form.totalDiscount = sum;
                 this.form.currentPayable = sum;
                 if (this.cusPreviousPayable > 0) {
                   let totalcurrant =  (this.cusPreviousPayable) +  parseFloat(this.form.currentPayable)
                   this.form.currentPayable = totalcurrant;
                 }
           })
         },
         
          addPurchaseInvoice(){
             if (this.form.supplierId != "") {
                if (this.form.purchaseTypeId != "") {
           this.form.post('/purchaseInvoice').then(res =>{
               Toast.fire({
                   icon: 'success',
                   title: 'Purchase Invoice Add Successfully'
               })
                 this.playSound();
               this.form.supplierId = [],
               this.form.phone = [],
               this.form.address = [],
               this.form.purchaseTypeId = [],
               this.form.totalPurchaseValue = [];
               this.form.totalAmount = [];
               this.form.supplierPayable = [];
               this.form.totalProductCost = [];
               this.form.currentPayable = [];
               this.form.reset();
               this.purchaseInvoiceNo();
               this.purchaseInvoiceList();
           });}
            else{
             Toast.fire({
          icon: "error",
          title: "Select Purchase Type",
        }) ;this.playSoundError();
           }}
           else{
             Toast.fire({
          icon: "error",
          title: "Select Product Supplier Name",
        });
        this.playSoundError();
           }
         },
      purchaseInvoiceList(){
            axios.get('/purchaseInvoiceGet').then(res =>{
                this.lists = res.data.purchaseInvoiceList;
                // this.adminPurchaseTypeLists = res.data.adminPurchaseTypeList;
            });
         },    
    deletePost(id) {
      fetch(`api/purchaseproducts/${id}`, {
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
        this.purchaseProductList();
        this. purchaseInvoiceList();
        this.playSound();
      });
    },
  },
};
</script>