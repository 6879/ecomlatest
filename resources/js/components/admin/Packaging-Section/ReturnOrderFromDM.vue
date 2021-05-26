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
        Return Order
        
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
             <th><span style="background:green;color:white;padding:2px">Return_reason</span>
              <th>C.Name</th>
              <th>Phone</th>
              <th>Invoice_No</th>
              <th>Address</th>
              <th>R.Address</th>
              <th>R.Phone</th>
              <th>D.Date</th>
              <th>D.Time</th>
              <th>Total_Price</th>
              <th>Total_Discount</th>
              <th>Total_Cashback</th>
              <th>Payment_Status</th>
              <th>Position_Status</th>

              <th>C.Timeline</th>
            </tr>
          </thead>
          <tbody v-for="(order, index) in orders" :key="order.id">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ order.returnReasonFromDM    }}</td>
            
              <td>{{ order.customer.name }}</td>

              <td>
                {{ order.phone }}
              </td>
              <td>
                <span
                  class="badge badge-primary"
                  data-toggle="modal"
                  :data-target="'#' + order.invoiceNo"
                >
                  #{{ order.invoiceNo }}
                </span>
                <div
                  class="modal fade"
                  :id="order.invoiceNo"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div>
                          <center>
                            <h5>{{ order.deliveryDate }}</h5>
                            <h5>{{ order.deliveryTime }}</h5>

                            <p class="mtop">Order No #{{ order.invoiceNo }}</p>
                          </center>
                          <div class="hidden-xs">
                            <table class="table table-responsive">
                              <tbody>
                                <tr
                                  v-for="orderget in ordergets"
                                  v-if="order.invoiceNo == orderget.invoiceNo"
                                >
                                  <td>
                                    <img
                                      :src="'productImage/' + orderget.image"
                                      width="40%"
                                    />
                                  </td>

                                  <td
                                    v-for="pnam in pnames"
                                    v-if="pnam.id == orderget.pId"
                                  >
                                    {{ pnam.pname }}
                                  </td>
                                  <td
                                    v-for="brand in brands"
                                    v-if="brand.id == orderget.brand.brand"
                                  >
                                    Brand.{{ brand.brand }}
                                  </td>
                                  <td>qty.{{ orderget.qty }}</td>
                                  <td>Dis.{{ orderget.discount }}TK</td>
                                  <td>C.Back.50TK</td>
                                  <td>{{ orderget.price }}.TK</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="hidden-md hidden-lg">
                            <div
                              class="col-12 col-xs-12"
                              v-for="orderget in ordergets"
                              v-if="orderget.invoiceNo == order.invoiceNo"
                            >
                              <img
                                :src="'productImage/' + orderget.image"
                                width="12%"
                              />
                              <small
                                v-for="pnam in pnames"
                                v-if="pnam.id == orderget.pId"
                              >
                                {{ pnam.pname }}</small
                              >
                              <br />
                              <small
                                v-for="brand in brands"
                                v-if="brand.id == orderget.brand.brand"
                                >Brand.{{ brand.brand }}</small
                              >
                              <small
                                >qty.{{ orderget.qty }}&nbsp;Dis.{{
                                  orderget.discount
                                }}TK&nbsp;CashBack.50TK&nbsp;{{
                                  orderget.price
                                }}.TK</small
                              >
                            </div>
                            <hr />
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-12 col-md-8 col-xs-12"></div>

                            <div
                              class="col-12 col-md-4 mb-2 col-xs-12"
                              style="
                                background: rgba(225, 238, 234, 0.64) none
                                  repeat scroll 0% 0%;
                                color: black;
                              "
                            >
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <td style="padding: 5px">Total</td>
                                    <td style="padding: 5px">
                                      <span>{{ order.totalPrice }} TK</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 5px">Discount</td>
                                    <td style="padding: 5px">
                                      {{ order.totalDiscount }} TK
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 5px">Cash Back</td>
                                    <td style="padding: 5px">300 TK</td>
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
              </td>
              <td>{{ order.address }}</td>

              <td>{{ order.reAddress }}</td>
              <td>{{ order.rePhone }}</td>
              <td>{{ order.deliveryDate }}</td>
              <td>{{ order.deliveryTime }}</td>
              <td>
                <span class="badge badge-primary"
                  >{{ order.totalPrice }}&nbsp;Taka</span
                >
              </td>
              <td>{{ order.totalDiscount }}</td>
              <td>0</td>
              <td v-if="order.paymentType == 1">
                <span class="badge badge-primary">Cash</span>
              </td>
              <td>
                <!-- return order  -->
          
                <div
                  class="modal fade"
                  :id="'cancel' + order.invoiceNo"
                  tabindex="-1"
                  role="dialog"
                  :aria-labelledby="'cancel' + order.invoiceNo"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Return Order Reason
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div>
                          <div class="form-group">
                            <label for="message-text" class="col-form-label"
                              >Reason</label
                            >
                            <textarea
                              v-model="returnReason"
                              class="form-control"
                              id="message-text"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-dismiss="modal"
                          @click.prevent="returnOrder(order.invoiceNo)"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
           
                <!-- ./return order  -->
          
             
              <div class="selector">
                <select id="inputState" class="form-control">
                  <option
                  
                   data-toggle="modal" data-target="#exampleModal"
                  >
                    Select One
                  </option>
                
                  <option
                    v-if="order.status == 3"
                    @click.prevent="accepted(order.invoiceNo)"
                  >
                    Accepted
                  </option>
               
                  <option v-else class="btn btn-success">Accepted</option>
                    
                  <option
                   v-if="order.status == 9"
                    data-toggle="modal"
                    :data-target="'#' + 'cancel' + order.invoiceNo"
                  >
                    Return
                  </option>

                
                  <option
                    v-if="order.status == 9"
                    @click.prevent="finish(order.invoiceNo)"
                  >
                    finish
                  </option>
               
                  <option  v-if="order.status == 6" class="btn btn-warning">Finish</option>
                
                 
                  <option  v-if="order.status == 6"  @click.prevent="forward(order.invoiceNo)">Forward</option>
                
                 
                  <!-- <option   v-if="order.status != 0" @click.prevent="forward(order.invoiceNo)">Forward</option>
                  -->
                </select>
                </div>

                <div
                  class="modal fade"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body"></div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>

              <td></td>

              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <div class="col-xs-12 col-md-3"></div> -->
  </div>
</template>

<script>
import moment from "moment";
import "vue2-datepicker/index.css";
import DatePicker from "vue2-datepicker";
export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      form: new Form({}),
      orders: [],
      ordergets: [],
      pnames: [],
      brands: [],
      idGet: [],
      names: [],
      prices: [],
      purchaseproducts: [],
      moment: moment,
      //  chat
      messages: [],
      newMessage: "",
      returnReason: "",
      deliveryDate: "",
      deliveryTime: "",
      quantity: "",
      orderId: "",
      product: "",
      productGet: "",
      users: [],
      customers: [],
      senders: [],
      infos: [],
      receivers: [],
      activeUser: false,
      typingTimer: false,
      seen: false,
      seenin: false,
      open: false,
      senderId: "",
      invo: "",
      customerId: "",
      invoiceNo: "",
      user: this.$userId,
      //  chat
    };
  },
  mounted() {
    this.seenCount();
    this.viewOrder();
    this.orderGet();

    this.viewBrand();
  
    this.sendTypingEvent();
    this.viewPrice();
    this.viewPurchaseProduct();
  },
  created() {
    this.viewProductName();
    this.fetchMessages();
    this.viewCustomer();
    this.viewSender();
    this.viewSenderInfo();

    Echo.join("chat")
      .here((user) => {
        this.users = user;
      })
      .joining((user) => {
        this.users.push(user);
      })
      .leaving((user) => {
        this.users = this.users.filter((u) => u.id != user.id);
      })
      .listen("ChatEvent", (event) => {
        this.messages.push(event.chat);
        this.playSoundWarning();
        this.fetchMessages();
        this.seenCount();
      })
      .listenForWhisper("typing", (user) => {
        this.activeUser = user;

        if (this.typingTimer) {
          clearTimeout(this.typingTimer);
        }
        this.typingTimer = setTimeout(() => {
          this.activeUser = false;
        }, 1000);
      });
  },
  methods: {
      playSoundError() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233574/error.mp3"
      );
      audioFile.play();
    },
    accepted(id) {
      axios.get(`packagingSection/${id}`).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Accepted",
        });
        this.viewOrder();
      });
    },
    finish(id) {
      axios.get(`finishOrder/${id}`).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Finished",
        });
        this.viewOrder();
      });
    },
    forward(id) {
      axios.get(`packagingSection/${id}/edit`).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Forwarded",
        });
        this.viewOrder();
      });
    },
    returnOrder(id) {
      axios
        .post(`returnOrder`, {
          reason: this.returnReason,
          invoice: id,
          
        })
        .then((res) => {
          (this.retrunReason = ""),
            Toast.fire({
              icon: "success",
              title: "Successfully Order Returned",
            });
          this.viewOrder();
        });
    },
    viewPrice() {
      fetch("priceSetup")
        .then((res) => res.json())
        .then((res) => {
          this.prices = res.data;
        })
        .catch((err) => console.log(err));
    },

    postDate(id) {
      axios
        .post(`postDate`, {
          date: this.deliveryDate,
          invoice: id,
        })
        .then((res) => {
          (this.deliveryDate = ""),
            Toast.fire({
              icon: "success",
              title: "Successfully Date updated",
            });
          this.viewOrder();
        });
    },
    postTime(id) {
      axios
        .post(`postTime`, {
          time: this.deliveryTime,
          invoice: id,
        })
        .then((res) => {
          (this.deliveryTime = ""),
            Toast.fire({
              icon: "success",
              title: "Successfully Time updated",
            });
          this.viewOrder();
        });
    },
    customize(id) {
      axios
        .post(`customize`, {
          qty: this.quantity,
          idGet: this.orderId,
          product: this.product,
          invoice: id,
        })
        .then((res) => {
             if (res.data.notAvil) {
               this. playSoundError()
                  Toast.fire({
              icon: "error",
              title: "Product not Avilable",
            });
             }
             else{
          (this.quantity = ""),
            (this.orderId = ""),
            Toast.fire({
              icon: "success",
              title: "Successfully  updated",
            });
          this.viewOrder();
          this.orderGet();
             }
        });

    },
    productQty(id) {
      return (this.productGet = id);
    },
    viewPurchaseProduct() {
      axios
        .get("purchaseProductGet")

        .then((res) => {
          this.purchaseproducts = res.data.productgt;
        })
        .catch((err) => console.log(err));
    },
    seenCount() {
      axios
        .get("orderManagement")

        .then((res) => {
          res.data.newOrder.forEach((order) => {
            this.messages.forEach((message) => {
              if (
                order.invoiceNo == message.invoiceNo &&
                message.receiver_id == this.infos.id &&
                message.receiver_roll == 3 &&
                message.status == 0
              ) {
                this.seen = true;
                this.seenin = false;
                this.invo = message.invoiceNo;
              }
              if (
                order.invoiceNo == message.invoiceNo &&
                message.receiver_id == null &&
                message.receiver_roll == 3 &&
                message.status == 0
              ) {
                this.seen = false;
                this.seenin = true;
                this.invo = message.invoiceNo;
              }
            });
          });
        });
    },
    messageRead(id) {
      axios.get(`messageRead/${id}`).then((res) => {
        axios
          .get("orderManagement")

          .then((res) => {
            res.data.newOrder.forEach((order) => {
              this.messages.forEach((message) => {
                if (
                  order.invoiceNo == message.invoiceNo &&
                  message.receiver_id == this.infos.id &&
                  message.receiver_roll == 3 &&
                  message.status == 1
                ) {
                  this.seen = false;
                  this.invo = message.invoiceNo;
                }
                if (
                  order.invoiceNo == message.invoiceNo &&
                  message.receiver_id == null &&
                  message.receiver_roll == 3 &&
                  message.status == 0
                ) {
                  this.seen = false;
                  this.seenin = false;
                  this.invo = message.invoiceNo;
                }
              });
            });
          });
      });
    },
    viewOrder() {
      axios
        .get("packagingSection")

        .then((res) => {
          this.orders = res.data.returnOrder;
        })
        .catch((err) => console.log(err));
    },
    orderGet() {
      axios.get("order").then((res) => {
        this.ordergets = res.data.orderInfo;
      });
    },
    viewProductName() {
      fetch("api/productnames")
        .then((res) => res.json())
        .then((res) => {
          this.pnames = res.data;
          this.names = res.data;
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
    // chat
    openBox(id) {
      this.open = true;
      return (this.senderId = id);
    },
    close() {
      this.open = false;
    },
    playSoundWarning() {
      var audioFile = new Audio(
        "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233563/warning.mp3"
      );
      audioFile.play();
    },
    fetchMessages() {
      axios.get("messages").then((response) => {
        this.messages = response.data;
      });
    },
    getInvoice(invoice, customer) {
      (this.invoiceNo = invoice), (this.customerId = customer);
    },
    viewSender() {
      axios.get("getSender").then((response) => {
        this.senders = response.data.getSender;
      });
    },
    viewSenderInfo() {
      axios.get("getSenderInfo").then((response) => {
        this.infos = response.data.getSenderInfo;
      });
    },

    viewCustomer() {
      axios.get("customerGet").then((response) => {
        this.customers = response.data.allCustomer;
      });
    },
    sendMessage($id) {
      axios
        .post("messages", {
          message: this.newMessage,
          invoice: this.invoiceNo,
          receiverRoll: 1,
          receiver: this.customerId,
          roll: 3,
        })
        .then((res) => {
          this.newMessage = "";
          this.fetchMessages();
          axios
            .get("orderManagement")

            .then((res) => {
              res.data.newOrder.forEach((order) => {
                this.messages.forEach((message) => {
                  if (
                    order.invoiceNo == message.invoiceNo &&
                    message.receiver_id == this.infos.id &&
                    message.receiver_roll == 3 &&
                    message.status == 1
                  ) {
                    this.seen = false;
                    this.invo = message.invoiceNo;
                  }
                  if (
                    order.invoiceNo == message.invoiceNo &&
                    message.receiver_id == null &&
                    message.receiver_roll == 3 &&
                    message.status == 0
                  ) {
                    this.seen = false;
                    this.seenin = false;
                    this.invo = message.invoiceNo;
                  }
                });
              });
            });
        });
    },
    sendTypingEvent() {
      Echo.join("chat").whisper("typing", this.user);
      console.log(this.user.name + " is typing now");
    },
    // chat
  },
};
</script>