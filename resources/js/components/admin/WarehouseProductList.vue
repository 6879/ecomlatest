<template>
  <div class="row" data-toggle="isotope">
    <!-- <div class="col-xs-12 col-md-3"></div> -->
    <div
      class="col-xs-12 col-md-8 boxborder bg-white panel-body panel panel-default"
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
       Warehouse Product List
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
              <th>Date</th>   
               <th>Product</th>         
              <th>Brand</th>
              <th>In Stock</th>
              <th>B.Qnt</th>             
              
             
            </tr>
          </thead>
          <tbody v-for="(transfer, index) in transfers" :key="transfer.id">
            <tr >
              <td>{{ index + 1 }}</td>
             
              <td>{{ moment(transfer.created_at).format("DD-MM-YYYY") }}</td>
              <td
                v-for="name in names"
                :key="name.id"
                v-if="name.id == transfer.pname"
              >
                {{ name.pname }}
              </td>
              <td
                v-for="brand in brands"
                :key="brand.id"
                v-if="brand.id == transfer.brand"
              >
                {{ brand.brand }}
              </td>
             
              <td style="background: #b1e8c4;text-align:center">{{ transfer.preQuan }}</td>
              <td style="background: #bdd0bb;text-align:center">0</td>
              
            </tr>
            <tr  v-for="tra in tras" v-if="tra.location==transfer.location&&tra.code==transfer.code&&tra.pname==transfer.pname&&tra.brand==transfer.brand&&tra.transferId==transfer.id">
                <td>{{ tra.id }}</td>
             
              <td>{{ moment(tra.updated_at).format("DD-MM-YYYY") }}</td>
             
               <td
                v-for="name in names"
                :key="name.id"
                v-if="name.id == tra.pname"
              >
                {{ name.pname }}
              </td>
              <td
                v-for="brand in brands"
                :key="brand.id"
                v-if="brand.id == tra.brand"
              >
                {{ brand.brand }}
              </td>
              <td style="background: #b1e8c4; text-align:center" >0</td>
              <td style="background: #bdd0bb;text-align:center" >{{tra.backQuan}}</td>
              
            </tr>
          </tbody> 
        </table>
      </div>
    </div>
    <div class="col-xs-12 col-md-3">

          <div class="table-responsive">
        <table
          data-toggle=""
          class="table table-responsive"
          cellspacing="1"

          
        >
          <thead style="background: skyblue">
            <tr>
                      
               <th>Product </th>         
              <th>Brand</th>             
              <th>Total Qnt</th>             
              
             
            </tr>
          </thead>
           <tbody v-for="total in totals" :key="total.id">
            <tr >
             
             
        
              <td
                v-for="name in names"
                :key="name.id"
                v-if="name.id == total.pname"
              >
                {{ name.pname }}
              </td>
              <td
                v-for="brand in brands"
                :key="brand.id"
                v-if="brand.id == total.brand"
              >
                {{ brand.brand }}
              </td>
             
              <td style="background: #b1e8c4;text-align:center">{{total.total}}</td>
            
              
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: new Form({
        location: "",
        code: "",
        pname: "",
        quan: "",
        brand: "",
        totalQuantity: "",
      }),
      locations: [],
      warehouses: [],
      products: [],
      codes: [],
      names: [],
      totals: [],
      transfers: [],
      tras: [],
      getbrands: [],
      totals: [],
      brands: [],
      moment: moment,
    };
  },
  mounted() {
    this.viewLocation();
    this.viewTransfer();
    this.viewTransferBack();
    this.viewWarehouse();
    this.viewProduct();
    this.viewProductName();
    this.viewBrand();
    this .codeShow() ;
  },
  methods: {
     viewTransferBack() {
      axios.get("productTransferBack")
        
        .then((res) => {
          this.tras = res.data.trans;
        })
        .catch((err) => console.log(err));
    },
     viewBrand() {
      fetch("api/brands")
        .then((res) => res.json())
        .then((res) => {
          this.brands = res.data;
        })
        .catch((err) => console.log(err));
    },
    codeShow() {
      axios.get(`warehousecode/${this.form.location}`).then((res) => {
        this.codes = res.data.code;
      });
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.names = res.data;
        })
        .catch((err) => console.log(err));
    },
    viewProduct() {
      axios.get("getItem")
   
        .then((res) => {
          this.products = res.data.product;
        })
        .catch((err) => console.log(err));
    },
    productQuanShow() {
      axios.get(`priceSetup/${this.form.pname}/${this.form.brand}`).then((res) => {
        this.form.totalQuantity = res.data.total;
      });
    this.brandShow();
    },
    brandShow() {
     
      axios.get(`brandShow/${this.form.pname}`).then((res) => {
        this.getbrands = res.data.getbrand;
      });
    },
  
    add() {
      this.form
        .post("productTransfer", {
          method: "post",
          body: JSON.stringify(this.transfer),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.stockNotAvilable) {
            Toast.fire({
              icon: "error",
              title: "Stock is not available",
            });
            this.playSoundError();
          } else {
            this.form.reset();
            this.viewLocation();
            this.viewWarehouse();
            this.viewTransfer();
            Toast.fire({
              icon: "success",
              title: "Successfully Saved",
            });
            this.playSound();
          }
        })
        .catch((err) => console.log(err));
    },
    viewLocation() {
      fetch("warehouseLocation")
        .then((res) => res.json())
        .then((res) => {
          this.locations = res.data;
        })
        .catch((err) => console.log(err));
    },
     viewTransfer() {
      axios.get(`productTransferwarehouseSummery/${this.$route.params.location}/${this.$route.params.code}`)
        
        .then((res) => {
          this.transfers = res.data.tran;
          this.totals = res.data.totalTrans;
        })
       
    },
     
    viewWarehouse() {
      fetch("warehouse")
        .then((res) => res.json())
        .then((res) => {
          this.warehouses = res.data;
        })
        .catch((err) => console.log(err));
    },

    deletePost(id) {
      axios
        .delete(`productTransfer/${id}`, {
          method: "delete",
          body: JSON.stringify(this.transfer),
          headers: {
            "content-type": "application/json",
          },
        })
        .then((response) => {
          Toast.fire({
            icon: "success",
            title: "Successfully Deleted",
          });
          this.viewLocation();
          this.viewWarehouse();
          this.viewTransfer();
          this.playSound();
        });
    },
  },
};
</script>