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
        New Order
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
              <th>Message</th>
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
              <td>
                <i
                  @click="messageRead(order.invoiceNo)"
                  @click.prevent="getInvoice(order.invoiceNo, order.customerId)"
                  data-toggle="modal"
                  :data-target="'#' + 'chat' + order.invoiceNo"
                  class="fa fa-envelope"
                  aria-hidden="true"
                ></i>
                <span
                  class="badge badge-danger"
                  v-if="seen == true && invo == order.invoiceNo"
                  >new</span
                >

                <span
                  class="badge badge-danger"
                  v-if="seenin == true && invo == order.invoiceNo"
                  >new</span
                >

                <div
                  class="modal fade"
                  :id="'chat' + order.invoiceNo"
                  tabindex="-1"
                  role="dialog"
                  :aria-labelledby="'chat' + order.invoiceNo"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-sm"
                    width="22%"
                    role="document"
                  >
                    <div class="modal-content">
                      <div
                        class="modal-header"
                        style="background: #4444fbde; color: white"
                      >
                        <p class="modal-title" id="exampleModalLabel">
                          Invoice No:#{{ order.invoiceNo }}
                        </p>
                        <button
                          type="button"
                          style="margin-top: -20px; color: white"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="shadow-lg bg-white rounded">
                          <div
                            class="p-3 mb-1"
                            style="height: 177px; overflow-y: scroll"
                            v-chat-scroll
                          >
                            <div
                              v-for="(message, index) in messages"
                              :key="index"
                            >
                              <span
                                v-if="
                                  message.receiver_id == null &&
                                  message.receiver_roll == 3 &&
                                  (message.sender_roll == 1) &
                                    (message.invoiceNo == order.invoiceNo)
                                "
                              >
                                <div class="chatLeft">
                                  <small>
                                    {{ message.message }}<br />
                                    {{
                                      moment(message.created_at).format(
                                        "DD-MM-YYYY,h:mm:ss"
                                      )
                                    }}
                                  </small>
                                  <img
                                    :src="'frontend/image/blank2.jpg'"
                                    class="leftImg"
                                  />
                                </div>
                              </span>
                              <span
                                v-if="
                                  (message.sender_id == infos.id) &
                                  (message.invoiceNo == order.invoiceNo) &
                                  (message.sender_roll == 3) &
                                  (message.receiver_roll == 1)
                                "
                              >
                                <div class="chatRight">
                                  <small>
                                    {{ message.message }}<br />
                                    {{
                                      moment(message.created_at).format(
                                        "DD-MM-YYYY,h:mm:ss"
                                      )
                                    }}
                                  </small>
                                  <img
                                    :src="'frontend/image/blank.png'"
                                    class="rightImg"
                                  />
                                </div>
                              </span>

                              <span
                                v-if="
                                  (message.receiver_id == infos.id) &
                                  (message.sender_roll == 1) &
                                  (message.receiver_roll == 3) &
                                  (message.invoiceNo == order.invoiceNo)
                                "
                              >
                                <div class="chatLeft">
                                  <small>
                                    {{ message.message }}<br />
                                    {{
                                      moment(message.created_at).format(
                                        "DD-MM-YYYY,h:mm:ss"
                                      )
                                    }}
                                  </small>
                                  <img
                                    :src="'frontend/image/blank2.jpg'"
                                    class="leftImg"
                                  />
                                </div>
                              </span>
                            </div>
                          </div>
                          <div>
                            <input
                              @keydown="sendTypingEvent"
                              @keyup.enter="sendMessage"
                              v-model="newMessage"
                              type="text"
                              name="message"
                              placeholder="Enter your message..."
                              class="form-control"
                            />
                            <span class="text-muted" v-if="activeUser"
                              >{{ activeUser.name }} is typing...</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
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
                <!-- cancel order  -->
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
                          Cancel Order Reason
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
                              v-model="cancelReason"
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
                          @click.prevent="cancel(order.invoiceNo)"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ./cancel order  -->
                <!-- Post Date  -->
                <div
                  class="modal fade"
                  :id="'date' + order.invoiceNo"
                  tabindex="-1"
                  role="dialog"
                  :aria-labelledby="'date' + order.invoiceNo"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Post Date
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
                            <label class="col-sm-4 ml-0">Date </label>
                            <div class="col-sm-8">
                              <date-picker
                                v-model="deliveryDate"
                                value-type="format"
                              ></date-picker>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-dismiss="modal"
                          @click.prevent="postDate(order.invoiceNo)"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--./ Post Date -->
                <!-- Post Time  -->
                <div
                  class="modal fade"
                  :id="'time' + order.invoiceNo"
                  tabindex="-1"
                  role="dialog"
                  :aria-labelledby="'time' + order.invoiceNo"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Post Time
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
                          <div class="form-group col-md-6">
                            <label for="inputState">Time</label>
                            <select
                              v-model="deliveryTime"
                              id="inputState"
                              class="form-control"
                            >
                              <option value="8:00AM-9:00AM ">
                                8:00&nbsp;AM-9:00&nbsp;AM
                              </option>
                              <option value="9:00AM-10:00AM">
                                9:00&nbsp;AM-10:00&nbsp;AM
                              </option>
                              <option value="10:00AM-11:00AM">
                                10:00&nbsp;AM-11:00&nbsp;AM
                              </option>
                              <option value="11:00AM-12:00PM">
                                11:00&nbsp;AM-12:00&nbsp;PM
                              </option>
                              <option value="12:00PM-1:00PM">
                                12:00&nbsp;PM-1:00&nbsp;PM
                              </option>
                              <option value="1:00PM-2:00PM">
                                1:00&nbsp;PM-2:00&nbsp;PM
                              </option>
                              <option value="2:00PM-3:00PM">
                                2:00&nbsp;PM-3:00&nbsp;PM
                              </option>
                              <option value="3:00PM-4:00PM">
                                3:00&nbsp;PM-4:00&nbsp;PM
                              </option>
                              <option value="4:00PM-5:00PM">
                                4:00&nbsp;PM-5:00&nbsp;PM
                              </option>
                              <option value="5:00PM-6:00PM">
                                5:00&nbsp;PM-6:00&nbsp;PM
                              </option>
                              <option value="6:00PM-7:00PM">
                                6:00&nbsp;PM-7:00&nbsp;PM
                              </option>
                              <option value="7:00PM-8:00PM">
                                7:00&nbsp;PM-8:00&nbsp;PM
                              </option>
                              <option value="8:00PM-9:00PM">
                                8:00&nbsp;PM-9:00&nbsp;PM
                              </option>
                              <option value="9:00PM-10:00PM">
                                9:00&nbsp;PM-10:00&nbsp;PM
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-dismiss="modal"
                          @click.prevent="postTime(order.invoiceNo)"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--./ Post Time -->
                <!-- Customize -->
                <div
                  class="modal fade"
                  :id="'customize' + order.invoiceNo"
                  tabindex="-1"
                  role="dialog"
                  :aria-labelledby="'customize' + order.invoiceNo"
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
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        v-model="orderId"
                                        v-bind:value="orderget.id"
                                        id="defaultCheck1"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="defaultCheck1"
                                      >
                                      </label>
                                    </div>
                                  </td>

                                  <td>
                                    <img
                                      :src="'productImage/' + orderget.image"
                                      width="129%"
                                      height="20%"
                                    />
                                  </td>
                                  <td>
                                    <div class="form-group">
                                      <label for="exampleFormControlSelect1"
                                        >Select_Product</label
                                      >
                                      <select
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                        v-model="product"
                                        @click.prevent="productQty(product)"
                                      >
                                        <option>Select One</option>
                                        <option
                                          v-for="price in prices"
                                          :key="price.id"
                                          v-bind:value="price.pname"
                                        >
                                          <p
                                            v-for="name in names"
                                            :key="name.id"
                                            v-if="name.id == price.pname"
                                          >
                                            {{ name.pname }}
                                          </p>
                                        </option>
                                      </select>
                                    </div>
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
                                  <td>
                                    A.Qty.<span
                                      v-for="purchaseproduct in purchaseproducts"
                                      v-if="purchaseproduct.pname == productGet"
                                      >{{ purchaseproduct.quan }}</span
                                    >
                                  </td>
                                  <td>
                                    Update_Quantity:<input
                                      style="background: #ddd7c3"
                                      v-model="quantity"
                                      class="form-control"
                                      type="text"
                                      placeholder="Qty"
                                    />
                                  </td>
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
                              <small>qty.{{ orderget.qty }}</small>
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
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-dismiss="modal"
                          @click.prevent="customize(order.invoiceNo)"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ./Customize -->
                <select id="inputState" class="form-control">
                  <option
                    selected
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Select One
                  </option>
                
                  <option
                    v-if="order.status == 0"
                    @click.prevent="accepted(order.invoiceNo)"
                  >
                    Accepted
                  </option>
               
                  <option v-else class="btn btn-success">Accepted</option>
                    
                  <option
                   v-if="order.status != 0"
                    data-toggle="modal"
                    :data-target="'#' + 'cancel' + order.invoiceNo"
                  >
                    Cancel
                  </option>

                  <option
                    v-if="order.status != 0"
                    data-toggle="modal"
                    :data-target="'#' + 'date' + order.invoiceNo"
                  >
                    Post Date
                  </option>
                  <option
                    v-if="order.status != 0"
                    data-toggle="modal"
                    :data-target="'#' + 'time' + order.invoiceNo"
                  >
                    Post Time
                  </option>
                  <option
                    v-if="order.status != 0"
                    data-toggle="modal"
                    :data-target="'#' + 'customize' + order.invoiceNo"
                  >
                    Customize
                  </option>
                  <option   v-if="order.status != 0" @click.prevent="forward(order.invoiceNo)">Forward</option>
                 
                </select>
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
      cancelReason: "",
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
      axios.get(`orderManagement/${id}`).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Accepted",
        });
        this.viewOrder();
      });
    },
    forward(id) {
      axios.get(`orderManagement/${id}/edit`).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Forwarded",
        });
        this.viewOrder();
      });
    },
    cancel(id) {
      axios
        .post(`cancelOrder`, {
          reason: this.cancelReason,
          invoice: id,
          status: 2,
        })
        .then((res) => {
          (this.cancelReason = ""),
            Toast.fire({
              icon: "success",
              title: "Successfully Order Canceled",
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
        .get("orderManagement")

        .then((res) => {
          this.orders = res.data.newOrder;
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