(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animated_number_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animated-number-vue */ "./node_modules/animated-number-vue/dist/AnimatedNumber.umd.min.js");
/* harmony import */ var animated_number_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animated_number_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Quantity",
  components: {
    AnimatedNumber: animated_number_vue__WEBPACK_IMPORTED_MODULE_1___default.a,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      deliveryDate: '',
      deliveryTime: '',
      carts: [],
      cartadd: {
        id: "",
        name: "",
        image: "",
        price: "",
        salesPrice: "",
        stock: "",
        pname: "",
        discount: "",
        offerPrice: ""
      },
      // chat
      messages: [],
      newMessage: '',
      users: [],
      receivers: [],
      authUsers: [],
      activeUsers: [],
      activeUser: false,
      seen: false,
      seenM: false,
      typingTimer: false,
      user: this.$userId,
      // chat
      badge: "0",
      qun: 1,
      pid: "",
      totalprice: "0",
      discount: "0",
      invoiceNo: '',
      deliveryMan: '',
      pnames: [],
      infos: [],
      orders: [],
      invoices: [],
      invo: '',
      animated: false,
      moment: moment__WEBPACK_IMPORTED_MODULE_3___default.a,
      variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      headerBgVariant: 'primary',
      headerTextVariant: 'light'
    };
  },
  created: function created() {
    var _this = this;

    this.fetchMessages();
    this.viewCustomer();
    this.viewReceiver();
    Echo.join('chat').here(function (user) {
      _this.users = user;
    }).joining(function (user) {
      _this.users.push(user);
    }).leaving(function (user) {
      _this.users = _this.users.filter(function (u) {
        return u.id != user.id;
      });
    }).listen('ChatEvent', function (event) {
      _this.messages.push(event.chat);

      _this.playSoundWarning();

      _this.viewReceiver();

      _this.seenCount();

      _this.seenCountMessage();
    }).listenForWhisper('typing', function (user) {
      _this.activeUser = user;

      if (_this.typingTimer) {
        clearTimeout(_this.typingTimer);
      }

      _this.typingTimer = setTimeout(function () {
        _this.activeUser = false;
      }, 1000);
    });
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.seenCount();

              _this2.seenCountMessage();

              _this2.viewCart();

              _this2.viewProductName();

              _this2.viewInfo();

              _this2.invoiceGet();

              _this2.orderGet();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    seenCount: function seenCount() {
      var _this3 = this;

      axios.get("order").then(function (res) {
        res.data.orderIn.forEach(function (order) {
          _this3.messages.forEach(function (message) {
            if (order.invoiceNo == message.invoiceNo && message.receiver_id == _this3.authUsers.id && message.receiver_roll == 1 && message.status == 0) {
              _this3.seen = true;
              _this3.invo = message.invoiceNo;
            }
          });
        });
      });
    },
    seenCountMessage: function seenCountMessage() {
      var _this4 = this;

      axios.get("order").then(function (res) {
        res.data.orderIn.forEach(function (order) {
          _this4.messages.forEach(function (message) {
            if (order.invoiceNo == message.invoiceNo && message.receiver_id == _this4.authUsers.id && message.receiver_roll == 1 && message.status == 0) {
              return _this4.seenM = true;
            }
          });
        });
      });
    },
    viewCart: function viewCart() {
      var _this5 = this;

      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
        this.badge = this.carts.length;
        this.totalprice = this.carts.reduce(function (total, item) {
          return total + _this5.qun * item.price;
        }, 0);
        this.discount = this.carts.reduce(function (total, item) {
          return total + _this5.qun * item.discount;
        }, 0);
      }
    },
    show: function show() {
      this.showR = true;
      this.showRe = false;
      this.hideRe = true;
    },
    hide: function hide() {
      this.showR = false;
      this.showRe = true;
      this.hideRe = false;
    },
    addCart: function addCart(pro, p) {
      var findProduct = this.carts.find(function (o) {
        return o.id === pro.id;
      });

      if (findProduct) {
        findProduct.qun++;
        findProduct.price = findProduct.qun * findProduct.salesPrice;
        this.storeCart();
        this.animated = true;
      } else {
        this.cartadd.id = pro.id;
        this.cartadd.name = pro.name;

        if (p.productId == pro.productNameId) {
          this.cartadd.discount = p.offerPrice;
          this.cartadd.offerPrice = p.offerPrice;
          this.cartadd.price = p.totalPrice;
          this.cartadd.salesPrice = p.totalPrice;
        }

        if (p.productId == pro.pname) {
          this.cartadd.discount = p.offerPrice;
          this.cartadd.offerPrice = p.offerPrice;
          this.cartadd.price = p.totalPrice;
          this.cartadd.salesPrice = p.totalPrice;
        } else {
          this.cartadd.price = p.salesPrice;
          this.cartadd.salesPrice = p.salesPrice;
          this.cartadd.discount = 0;
        }

        this.cartadd.qun = 1;
        this.cartadd.image = pro.image;
        this.cartadd.pname = pro.pname;
        this.carts.push(this.cartadd);
        this.cartadd = {};
        this.storeCart();
        this.animated = true;
      }
    },
    increment: function increment(pro) {
      var findProduct = this.carts.find(function (o) {
        return o.id === pro.id;
      });
      findProduct.qun++;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      findProduct.discount = findProduct.qun * findProduct.offerPrice;
      this.storeCart();
      this.animated = true;
    },
    decrement: function decrement(pro) {
      var findProduct = this.carts.find(function (o) {
        return o.id === pro.id;
      });

      if (findProduct.qun === 1) {
        alert("Negative quantity not allowed");
      } else {
        findProduct.qun--;
        findProduct.price = findProduct.qun * findProduct.salesPrice;
        findProduct.discount = findProduct.qun * findProduct.offerPrice;
        this.storeCart();
        this.animated = true;
      }
    },
    removeCart: function removeCart(index) {
      this.carts.splice(index, 1);
      this.storeCart();
    },
    storeCart: function storeCart(pro) {
      var parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },
    invoiceGet: function invoiceGet() {
      var _this6 = this;

      axios.get("order").then(function (res) {
        _this6.invoices = res.data.orderIn;
      });
    },
    orderGet: function orderGet() {
      var _this7 = this;

      axios.get("order").then(function (res) {
        _this7.orders = res.data.orderInfo;
      });
    },
    viewProductName: function viewProductName() {
      var _this8 = this;

      fetch("api/productnames").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this8.pnames = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    viewInfo: function viewInfo() {
      var _this9 = this;

      axios.get("customerInfo").then(function (res) {
        _this9.infos = res.data.customer;
      });
    },
    dateUpdate: function dateUpdate(id) {
      var _this10 = this;

      var data = {
        deliveryDate: this.deliveryDate,
        deliveryTime: this.deliveryTime
      };
      axios.put("order/".concat(id), data).then(function (res) {
        _this10.deliveryDate = '', _this10.deliveryTime = '', _this10.invoiceGet();
        Toast.fire({
          icon: "success",
          title: "Successfully Saved"
        });
      });
    },
    cancelOrder: function cancelOrder(id) {
      var _this11 = this;

      axios.get("order/".concat(id)).then(function (res) {
        _this11.invoiceGet();

        Toast.fire({
          icon: "success",
          title: "Successfully Cancel Order"
        });
      });
    },
    // chat
    viewCustomer: function viewCustomer() {
      var _this12 = this;

      axios.get('customerGet').then(function (response) {
        _this12.customers = response.data.allCustomer;
        _this12.authUsers = response.data.auth;
      });
    },
    playSoundWarning: function playSoundWarning() {
      var audioFile = new Audio("https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233563/warning.mp3");
      audioFile.play();
    },
    getInvoice: function getInvoice(id) {
      this.invoiceNo = '';
      this.deliveryMan = '';
      return this.invoiceNo = id;
    },
    getInvoiceAndDeliveryMan: function getInvoiceAndDeliveryMan(id, deliveryManId) {
      this.invoiceNo = '';
      return this.invoiceNo = id, this.deliveryMan = deliveryManId;
    },
    viewReceiver: function viewReceiver() {
      var _this13 = this;

      axios.get('getReceiver').then(function (response) {
        _this13.receivers = response.data.getReceiver;
        _this13.activeUsers = response.data.active;
      });
    },
    fetchMessages: function fetchMessages() {
      var _this14 = this;

      axios.get('messages').then(function (response) {
        _this14.messages = response.data;
      });
    },
    sendMessage: function sendMessage() {
      var _this15 = this;

      axios.post('messages', {
        message: this.newMessage,
        sender: this.authUsers.id,
        roll: 1,
        invoice: this.invoiceNo,
        deliveryMan: this.deliveryMan,
        receiverRoll: 3
      }).then(function (res) {
        _this15.newMessage = '';
        axios.get("order").then(function (res) {
          res.data.orderIn.forEach(function (order) {
            _this15.messages.forEach(function (message) {
              if (order.invoiceNo == _this15.invoiceNo && message.receiver_id == _this15.authUsers.id && message.receiver_roll == 1 && message.status == 1) {
                _this15.seen = false;
                _this15.invo = message.invoiceNo;
              }
            });
          });
        });
      });
    },
    messageSeen: function messageSeen(id) {
      var _this16 = this;

      axios.get("messageSeen/".concat(id)).then(function (res) {
        axios.get("order").then(function (res) {
          res.data.orderIn.forEach(function (order) {
            _this16.messages.forEach(function (message) {
              if (order.invoiceNo == id && message.receiver_id == _this16.authUsers.id && message.receiver_roll == 1 && message.status == 1) {
                _this16.seen = false;
                _this16.invo = message.invoiceNo;
              }
            });
          });
        });
      });
    },
    messageSeenFromDeliveryMan: function messageSeenFromDeliveryMan(id) {
      var _this17 = this;

      axios.get("messageSeenFromDM/".concat(id)).then(function (res) {
        axios.get("order").then(function (res) {
          res.data.orderIn.forEach(function (order) {
            _this17.messages.forEach(function (message) {
              if (order.invoiceNo == id && message.receiver_id == _this17.authUsers.id && message.receiver_roll == 1 && message.status == 1) {
                _this17.seenM = false;
              }
            });
          });
        });
      });
    },
    sendTypingEvent: function sendTypingEvent() {
      Echo.join('chat').whisper('typing', this.user);
      console.log(this.user.name + ' is typing now');
    } // chat

  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=template&id=56cdfac8&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=template&id=56cdfac8& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c(
          "div",
          { staticClass: "col-12 col-md-12 mt-4 col-xs-12" },
          [
            _c(
              "center",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-success",
                    attrs: { to: { name: "successorder" } }
                  },
                  [
                    _c("i", { staticClass: "fas fa-check" }),
                    _vm._v(" Success Order")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { to: { name: "cancelorder" } }
                  },
                  [
                    _c("i", { staticClass: "fas fa-trash-restore-alt" }),
                    _vm._v(" Cancel Order")
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.invoices, function(invoice) {
          return _c(
            "div",
            {
              key: invoice.id,
              staticClass:
                "col-12 col-md-8 mt-4 p-2 offset-md-1 col-xs-12 profilebox shadow-lg p-3 mb-5 bg-white rounded"
            },
            [
              _c(
                "div",
                [
                  _c("center", [
                    _c("h5", [
                      _vm._v(
                        _vm._s(
                          _vm.moment(invoice.deliveryDate).format("DD-MM-YYYY")
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mtop" }, [
                      _vm._v(_vm._s(invoice.deliveryTime))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mtop" }, [
                      _vm._v(" Order #" + _vm._s(invoice.invoiceNo))
                    ]),
                    _vm._v(" "),
                    invoice.status == 0
                      ? _c("p", { staticClass: "mtop" }, [
                          _vm._v("Shipping Status "),
                          _c("span", { staticClass: "badge badge-success " }, [
                            _vm._v("Pending")
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    invoice.status == 1 ||
                    invoice.status == 2 ||
                    invoice.status == 3 ||
                    invoice.status == 5
                      ? _c("p", { staticClass: "mtop" }, [
                          _vm._v("Shipping Status "),
                          _c("span", { staticClass: "badge badge-success " }, [
                            _vm._v("Processing")
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    invoice.status == 4 ||
                    invoice.status == 6 ||
                    invoice.status == 7 ||
                    invoice.status == 9
                      ? _c("p", { staticClass: "mtop" }, [
                          _vm._v("Shipping Status "),
                          _c("span", { staticClass: "badge badge-success " }, [
                            _vm._v("Packaging")
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    invoice.status == 8 || invoice.status == 10
                      ? _c("p", { staticClass: "mtop" }, [
                          _vm._v("Shipping Status "),
                          _c("span", { staticClass: "badge badge-success " }, [
                            _vm._v("On going Delivery")
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    invoice.status == 12
                      ? _c("p", { staticClass: "mtop" }, [
                          _vm._v("Shipping Status "),
                          _c("span", { staticClass: "badge badge-success " }, [
                            _vm._v("On The Way")
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table d-none d-sm-block" }, [
                    _c(
                      "tbody",
                      _vm._l(_vm.orders, function(order, index) {
                        return order.invoiceNo == invoice.invoiceNo
                          ? _c(
                              "tr",
                              [
                                _c("td", [
                                  _c("img", {
                                    staticClass: "cartImg",
                                    attrs: {
                                      src: "productImage/" + order.image
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.pnames, function(pnam) {
                                  return pnam.id == order.pId
                                    ? _c(
                                        "td",
                                        { staticStyle: { width: "193px" } },
                                        [_vm._v(_vm._s(pnam.pname))]
                                      )
                                    : _vm._e()
                                }),
                                _vm._v(" "),
                                _c("td", [_vm._v("qty." + _vm._s(order.qty))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v("Dis." + _vm._s(order.discount) + "TK")
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("CashBack.50TK")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(order.price) + ".TK")])
                              ],
                              2
                            )
                          : _vm._e()
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: " d-md-none" },
                    [
                      _vm._l(_vm.orders, function(order, index) {
                        return order.invoiceNo == invoice.invoiceNo
                          ? _c(
                              "div",
                              { staticClass: "col-12 col-xs-12" },
                              [
                                _c("img", {
                                  staticClass: "cartImg",
                                  attrs: { src: "productImage/" + order.image }
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.pnames, function(pnam) {
                                  return pnam.id == order.pId
                                    ? _c("small", [
                                        _vm._v(" " + _vm._s(pnam.pname))
                                      ])
                                    : _vm._e()
                                }),
                                _vm._v(" "),
                                _c("small", [
                                  _vm._v(
                                    "qty." +
                                      _vm._s(order.qty) +
                                      " Dis." +
                                      _vm._s(order.discount) +
                                      "TK CashBack.50TK " +
                                      _vm._s(order.price) +
                                      ".TK"
                                  )
                                ])
                              ],
                              2
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _c("hr")
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass: "col-12 col-md-8 col-xs-12",
                        staticStyle: { "text-align": "center" }
                      },
                      [
                        invoice.status == 0
                          ? _c(
                              "span",
                              {
                                staticClass: "badge badge-info",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.cancelOrder(invoice.invoiceNo)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-times" }),
                                _vm._v(" Cancel")
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        invoice.status == 0
                          ? _c(
                              "span",
                              {
                                staticClass: "badge badge-info",
                                attrs: {
                                  "data-toggle": "modal",
                                  "data-target":
                                    "#" + "postdate" + invoice.invoiceNo
                                }
                              },
                              [_vm._v("Post Date")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        invoice.status == 0 ||
                        invoice.status == 1 ||
                        invoice.status == 2 ||
                        invoice.status == 3 ||
                        invoice.status == 5
                          ? _c(
                              "div",
                              {
                                staticClass: "badge badge-success",
                                attrs: {
                                  "data-toggle": "modal",
                                  "data-target":
                                    "#" + "chatoorder" + invoice.invoiceNo
                                },
                                on: {
                                  click: [
                                    function($event) {
                                      return _vm.messageSeen(invoice.invoiceNo)
                                    },
                                    function($event) {
                                      $event.preventDefault()
                                      return _vm.getInvoice(invoice.invoiceNo)
                                    }
                                  ]
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fab fa-facebook-messenger"
                                }),
                                _vm._v("\n Chat Now "),
                                _vm.seen == true &&
                                _vm.invo == invoice.invoiceNo
                                  ? _c(
                                      "span",
                                      { staticClass: "badge badge-danger" },
                                      [_vm._v("New")]
                                    )
                                  : _vm._e()
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "chatoorder" + invoice.invoiceNo,
                              tabindex: "-1",
                              "aria-labelledby": "exampleModalLabel",
                              "aria-hidden": "true"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "modal-dialog modal-sm" },
                              [
                                _c("div", { staticClass: "modal-content" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "modal-header",
                                      staticStyle: {
                                        background: "#2c83f2",
                                        color: "wheat"
                                      }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        {
                                          staticClass: "modal-title",
                                          attrs: { id: "exampleModalLabel" }
                                        },
                                        [
                                          _vm._v(
                                            "Invoice No:#" +
                                              _vm._s(invoice.invoiceNo)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(0, true)
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          " shadow-lg  bg-white rounded"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            directives: [
                                              {
                                                name: "chat-scroll",
                                                rawName: "v-chat-scroll"
                                              }
                                            ],
                                            staticClass: "p-3 mb-1",
                                            staticStyle: {
                                              height: "177px",
                                              "overflow-y": "scroll"
                                            }
                                          },
                                          _vm._l(_vm.messages, function(
                                            message,
                                            index
                                          ) {
                                            return _c("div", { key: index }, [
                                              (message.sender_id ==
                                                _vm.authUsers.id) &
                                              (message.sender_roll == 1) &
                                              (message.receiver_roll == 3) &
                                              (message.invoiceNo ==
                                                invoice.invoiceNo)
                                                ? _c("span", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "chatRight "
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            "\n   " +
                                                              _vm._s(
                                                                message.message
                                                              )
                                                          ),
                                                          _c("br"),
                                                          _vm._v(
                                                            "\n   " +
                                                              _vm._s(
                                                                _vm
                                                                  .moment(
                                                                    message.created_at
                                                                  )
                                                                  .format(
                                                                    "DD-MM-YYYY,h:mm:ss"
                                                                  )
                                                              ) +
                                                              "\n "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("img", {
                                                          staticClass:
                                                            "rightImg",
                                                          attrs: {
                                                            src:
                                                              "frontend/image/blank.png"
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              (message.receiver_id ==
                                                _vm.authUsers.id) &
                                              (message.sender_roll == 3) &
                                              (message.receiver_roll == 1) &
                                              (message.invoiceNo ==
                                                invoice.invoiceNo)
                                                ? _c("span", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "chatLeft "
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            "\n   " +
                                                              _vm._s(
                                                                message.message
                                                              )
                                                          ),
                                                          _c("br"),
                                                          _vm._v(
                                                            "\n   " +
                                                              _vm._s(
                                                                _vm
                                                                  .moment(
                                                                    message.created_at
                                                                  )
                                                                  .format(
                                                                    "DD-MM-YYYY,h:mm:ss"
                                                                  )
                                                              ) +
                                                              "\n "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("img", {
                                                          staticClass:
                                                            "leftImg",
                                                          attrs: {
                                                            src:
                                                              "frontend/image/blank2.jpg"
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e()
                                            ])
                                          }),
                                          0
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.newMessage,
                                                expression: "newMessage"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              name: "message",
                                              placeholder:
                                                "Enter your message..."
                                            },
                                            domProps: { value: _vm.newMessage },
                                            on: {
                                              keydown: _vm.sendTypingEvent,
                                              keyup: function($event) {
                                                if (
                                                  !$event.type.indexOf("key") &&
                                                  _vm._k(
                                                    $event.keyCode,
                                                    "enter",
                                                    13,
                                                    $event.key,
                                                    "Enter"
                                                  )
                                                ) {
                                                  return null
                                                }
                                                return _vm.sendMessage($event)
                                              },
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.newMessage =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.activeUser
                                            ? _c(
                                                "span",
                                                { staticClass: "text-muted" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.activeUser.name
                                                    ) + " is typing..."
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        invoice.deliveryManId != null
                          ? _c(
                              "div",
                              {
                                staticClass: "badge badge-dark",
                                attrs: {
                                  "data-toggle": "modal",
                                  "data-target":
                                    "#" + "chatdman" + invoice.invoiceNo
                                },
                                on: {
                                  click: [
                                    function($event) {
                                      return _vm.messageSeenFromDeliveryMan(
                                        invoice.invoiceNo
                                      )
                                    },
                                    function($event) {
                                      $event.preventDefault()
                                      return _vm.getInvoiceAndDeliveryMan(
                                        invoice.invoiceNo,
                                        invoice.deliveryManId
                                      )
                                    }
                                  ]
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fab fa-facebook-messenger"
                                }),
                                _vm._v("\n Chat with Delivery Man "),
                                _vm.seenM == true
                                  ? _c(
                                      "span",
                                      { staticClass: "badge badge-danger" },
                                      [_vm._v("New")]
                                    )
                                  : _vm._e()
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "chatdman" + invoice.invoiceNo,
                              tabindex: "-1",
                              role: "dialog",
                              "aria-labelledby": "chatdman" + invoice.invoiceNo
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "modal-dialog modal-sm" },
                              [
                                _c("div", { staticClass: "modal-content" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "modal-header",
                                      staticStyle: {
                                        background: "#2c83f2",
                                        color: "wheat"
                                      }
                                    },
                                    [
                                      _c(
                                        "h5",
                                        {
                                          staticClass: "modal-title",
                                          attrs: { id: "exampleModalLabel" }
                                        },
                                        [
                                          _vm._v(
                                            "Invoice No:#" +
                                              _vm._s(invoice.invoiceNo)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(1, true)
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          " shadow-lg  bg-white rounded"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            directives: [
                                              {
                                                name: "chat-scroll",
                                                rawName: "v-chat-scroll"
                                              }
                                            ],
                                            staticClass: "p-3 mb-1",
                                            staticStyle: {
                                              height: "177px",
                                              "overflow-y": "scroll"
                                            }
                                          },
                                          _vm._l(_vm.messages, function(
                                            message,
                                            index
                                          ) {
                                            return _c("div", { key: index }, [
                                              (message.sender_id ==
                                                _vm.authUsers.id) &
                                              (message.sender_roll == 1) &
                                              (message.receiver_roll == 4) &
                                              (message.invoiceNo ==
                                                invoice.invoiceNo)
                                                ? _c("span", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "chatRight "
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            "\n   " +
                                                              _vm._s(
                                                                message.message
                                                              )
                                                          ),
                                                          _c("br"),
                                                          _vm._v(
                                                            "\n   " +
                                                              _vm._s(
                                                                _vm
                                                                  .moment(
                                                                    message.created_at
                                                                  )
                                                                  .format(
                                                                    "DD-MM-YYYY,h:mm:ss"
                                                                  )
                                                              ) +
                                                              "\n "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("img", {
                                                          staticClass:
                                                            "rightImg",
                                                          attrs: {
                                                            src:
                                                              "frontend/image/blank.png"
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              (message.receiver_id ==
                                                _vm.authUsers.id) &
                                              (message.sender_roll == 4) &
                                              (message.receiver_roll == 1) &
                                              (message.invoiceNo ==
                                                invoice.invoiceNo)
                                                ? _c("span", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "chatLeft "
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            "\n   " +
                                                              _vm._s(
                                                                message.message
                                                              )
                                                          ),
                                                          _c("br"),
                                                          _vm._v(
                                                            "\n   " +
                                                              _vm._s(
                                                                _vm
                                                                  .moment(
                                                                    message.created_at
                                                                  )
                                                                  .format(
                                                                    "DD-MM-YYYY,h:mm:ss"
                                                                  )
                                                              ) +
                                                              "\n "
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("img", {
                                                          staticClass:
                                                            "leftImg",
                                                          attrs: {
                                                            src:
                                                              "frontend/image/blank2.jpg"
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e()
                                            ])
                                          }),
                                          0
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.newMessage,
                                                expression: "newMessage"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              name: "message",
                                              placeholder:
                                                "Enter your message..."
                                            },
                                            domProps: { value: _vm.newMessage },
                                            on: {
                                              keydown: _vm.sendTypingEvent,
                                              keyup: function($event) {
                                                if (
                                                  !$event.type.indexOf("key") &&
                                                  _vm._k(
                                                    $event.keyCode,
                                                    "enter",
                                                    13,
                                                    $event.key,
                                                    "Enter"
                                                  )
                                                ) {
                                                  return null
                                                }
                                                return _vm.sendMessage($event)
                                              },
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.newMessage =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.activeUser
                                            ? _c(
                                                "span",
                                                { staticClass: "text-muted" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.activeUser.name
                                                    ) + " is typing..."
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ])
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "postdate" + invoice.invoiceNo,
                              tabindex: "-1",
                              "aria-labelledby": "exampleModalLabel",
                              "aria-hidden": "true"
                            }
                          },
                          [
                            _c("div", { staticClass: "modal-dialog" }, [
                              _c("div", { staticClass: "modal-content" }, [
                                _vm._m(2, true),
                                _vm._v(" "),
                                _c("div", { staticClass: "modal-body" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { staticClass: "col-sm-4  ml-0" },
                                        [_vm._v("Date ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-sm-8" },
                                        [
                                          _c("date-picker", {
                                            attrs: { "value-type": "format" },
                                            model: {
                                              value: _vm.deliveryDate,
                                              callback: function($$v) {
                                                _vm.deliveryDate = $$v
                                              },
                                              expression: "deliveryDate"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-6" },
                                      [
                                        _c(
                                          "label",
                                          { attrs: { for: "inputState" } },
                                          [_vm._v("Time")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.deliveryTime,
                                                expression: "deliveryTime"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { id: "inputState" },
                                            on: {
                                              change: function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.deliveryTime = $event.target
                                                  .multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "8:00AM-9:00AM "
                                                }
                                              },
                                              [_vm._v("8:00 AM-9:00 AM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "9:00AM-10:00AM"
                                                }
                                              },
                                              [_vm._v("9:00 AM-10:00 AM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "10:00AM-11:00AM"
                                                }
                                              },
                                              [_vm._v("10:00 AM-11:00 AM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "11:00AM-12:00PM"
                                                }
                                              },
                                              [_vm._v("11:00 AM-12:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "12:00PM-1:00PM"
                                                }
                                              },
                                              [_vm._v("12:00 PM-1:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "1:00PM-2:00PM"
                                                }
                                              },
                                              [_vm._v("1:00 PM-2:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "2:00PM-3:00PM"
                                                }
                                              },
                                              [_vm._v("2:00 PM-3:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "3:00PM-4:00PM"
                                                }
                                              },
                                              [_vm._v("3:00 PM-4:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "4:00PM-5:00PM"
                                                }
                                              },
                                              [_vm._v("4:00 PM-5:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "5:00PM-6:00PM"
                                                }
                                              },
                                              [_vm._v("5:00 PM-6:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "6:00PM-7:00PM"
                                                }
                                              },
                                              [_vm._v("6:00 PM-7:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "7:00PM-8:00PM"
                                                }
                                              },
                                              [_vm._v("7:00 PM-8:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "8:00PM-9:00PM"
                                                }
                                              },
                                              [_vm._v("8:00 PM-9:00 PM")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  value: "9:00PM-10:00PM"
                                                }
                                              },
                                              [_vm._v("9:00 PM-10:00 PM")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      on: {
                                        click: [
                                          function($event) {
                                            return _vm.$bvModal.hide(
                                              "modal" + invoice.invoiceNo
                                            )
                                          },
                                          function($event) {
                                            $event.preventDefault()
                                            return _vm.dateUpdate(
                                              invoice.invoiceNo
                                            )
                                          }
                                        ]
                                      }
                                    },
                                    [_vm._v("Save")]
                                  )
                                ])
                              ])
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "col-12 col-md-4 mb-2 col-xs-12 ",
                        staticStyle: {
                          background:
                            "rgba(225, 238, 234, 0.64) none repeat scroll 0% 0%",
                          color: "white"
                        }
                      },
                      [
                        _c("table", { staticClass: "table" }, [
                          _c("tbody", [
                            _c("tr", [
                              _c("td", { staticStyle: { padding: "5px" } }, [
                                _vm._v("Total")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { padding: "5px" } }, [
                                _c("span", [
                                  _vm._v(_vm._s(invoice.totalPrice) + " TK")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticStyle: { padding: "5px" } }, [
                                _vm._v("Discount")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { padding: "5px" } }, [
                                _vm._v(_vm._s(invoice.totalDiscount) + " TK")
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(3, true),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticStyle: { padding: "5px" } }, [
                                _vm._v("Payment Status")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { padding: "5px" } }, [
                                invoice.paymentType == 1
                                  ? _c(
                                      "span",
                                      { staticClass: "badge badge-warning" },
                                      [_vm._v("Cash")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                invoice.paymentType == null
                                  ? _c(
                                      "span",
                                      { staticClass: "badge badge-warning" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "badge badge-success",
                                            attrs: {
                                              to: {
                                                name: "payment",
                                                params: {
                                                  id: invoice.invoiceNo
                                                }
                                              }
                                            }
                                          },
                                          [_vm._v("Pay Now")]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ],
                1
              )
            ]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", [
      _c(
        "div",
        {
          staticClass: "container-fluid d-none d-sm-block",
          attrs: { onclick: "openNav()" }
        },
        [
          _c(
            "div",
            {
              staticClass: "col-2 col-md-2 cart1 shadow-lg carthover rounded",
              class: { "bounce animated": _vm.animated },
              on: {
                animationend: function($event) {
                  _vm.animated = false
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-shopping-bag shoppingBag",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("p", { staticClass: "cartItem" }, [
                _vm._v("Item:" + _vm._s(_vm.badge))
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 col-md-2 cart2 shadow-lg rounded" }, [
            _c(
              "p",
              { staticClass: "cartItem2" },
              [
                _c("span", { staticClass: "tk" }, [_vm._v("৳")]),
                _vm._v(" "),
                _c("animated-number", { attrs: { value: _vm.totalprice } })
              ],
              1
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c(
        "div",
        {
          staticClass: "sidebar1 shadow-lg bg-white rounded overflow-auto",
          attrs: { id: "mySidebar" }
        },
        [
          _vm._m(4),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 col-md-12 mt-0",
              staticStyle: { "background-color": "#dcd8d8" }
            },
            [
              _c("p", [
                _c("img", {
                  staticClass: "cartImg",
                  attrs: { src: "frontend/image/cart1.png" }
                }),
                _vm._v(" Item\n            " + _vm._s(_vm.badge) + " "),
                _c("b", { staticClass: "tk" }, [_vm._v("৳ ")]),
                _vm._v(_vm._s(_vm.totalprice) + " Discount:"),
                _c("span", { staticClass: "tk" }, [_vm._v("৳ ")]),
                _vm._v(_vm._s(_vm.discount) + "\n          ")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 col-md-12 cartml overflow-auto",
              staticStyle: { height: "362px" }
            },
            [
              _c("table", { staticClass: "table table-hover" }, [
                _c(
                  "tbody",
                  _vm._l(_vm.carts, function(cart, index) {
                    return _c("tr", { key: cart.id }, [
                      _c("td", { attrs: { scope: "row" } }, [
                        _c(
                          "div",
                          {
                            staticClass: "btn-group-vertical",
                            staticStyle: { left: "19px" }
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-secondary in1",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.increment(cart)
                                  }
                                }
                              },
                              [_c("p", { staticClass: "ini" }, [_vm._v("+")])]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "pqun" }, [
                              _vm._v(_vm._s(cart.qun))
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-secondary dec",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.decrement(cart)
                                  }
                                }
                              },
                              [_c("p", { staticClass: "dei" }, [_vm._v("-")])]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("figure", [
                          _c("img", {
                            staticClass: "cartImg mt-7",
                            staticStyle: {
                              "margin-left": "-9px",
                              "margin-top": "-2px"
                            },
                            attrs: { src: "productImage/" + cart.image }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "p-0" }, [
                        _c(
                          "p",
                          { staticClass: "cartpname" },
                          _vm._l(_vm.pnames, function(pname) {
                            return pname.id == cart.pname
                              ? _c("span", [_vm._v(_vm._s(pname.pname) + " ")])
                              : _vm._e()
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "p-0" }, [
                        _c("p", { staticClass: "cartprice" }, [
                          _c("span", { staticClass: "tk" }, [_vm._v("৳")]),
                          _vm._v(_vm._s(cart.price) + "\n                  ")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "p-0" }, [
                        _c(
                          "a",
                          {
                            staticStyle: {
                              "margin-left": "-29px",
                              "font-size": "15px"
                            },
                            on: {
                              click: function($event) {
                                return _vm.removeCart(index)
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-times",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ]
          ),
          _vm._v(" "),
          _vm.badge != 0
            ? _c(
                "div",
                [
                  _c(
                    "center",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-info",
                          staticStyle: { color: "white" },
                          attrs: { to: { name: "checkout" } }
                        },
                        [_vm._v("Please order")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c(
        "footer",
        { staticClass: "footer d-md-none shadowfooter bg-white rounded" },
        [
          _c("div", { staticClass: "container-fluid" }, [
            _c("div", { staticClass: "row p-2 mb-0" }, [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-3 col-xs-3" },
                [
                  _c("router-link", { attrs: { to: { name: "offerview" } } }, [
                    _c("i", {
                      staticClass: "fa fa-gift ml-2",
                      attrs: { "aria-hidden": "true" }
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("Offer")])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-3 col-xs-3",
                  attrs: { onclick: "openNav()" }
                },
                [
                  _c("i", {
                    staticClass: "fa fa-shopping-cart ml-2",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "badge badge-warning",
                      class: { "bounce animated": _vm.animated },
                      attrs: { id: "lblCartCount" },
                      on: {
                        animationend: function($event) {
                          _vm.animated = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.badge) +
                          "\n              "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", [_vm._v("Cart")])
                ]
              ),
              _vm._v(" "),
              _vm.$userId != ""
                ? _c("div", { staticClass: "dropdown col-3 col-xs-3" }, [
                    _c("i", {
                      staticClass: "fa fa-user ml-2",
                      attrs: { "aria-hidden": "true" }
                    })
                  ])
                : _c(
                    "div",
                    { staticClass: "col-3 col-xs-3" },
                    [
                      _c("router-link", { attrs: { to: { name: "login" } } }, [
                        _c("i", {
                          staticClass: "fa fa-user ml-2",
                          attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(" "),
                        _c("p", [_vm._v("Login")])
                      ])
                    ],
                    1
                  )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Delivery Date And Time")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { staticStyle: { padding: "5px" } }, [_vm._v("Cash Back")]),
      _vm._v(" "),
      _c("td", { staticStyle: { padding: "5px" } }, [_vm._v("300 TK")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-12 col-xs-1",
        staticStyle: { "background-color": "green" }
      },
      [
        _c(
          "a",
          {
            staticClass: "closebtn",
            attrs: { href: "javascript:void(0)", onclick: "closeNav()" }
          },
          [
            _c("i", {
              staticClass: "fa fa-chevron-right close",
              attrs: { "aria-hidden": "true" }
            })
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 col-xs-3" }, [
      _c("a", { attrs: { href: "www.myscapon.com" } }, [
        _c("i", {
          staticClass: "fa fa-home ml-2",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("p", [_vm._v("Home")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website-view/Customer/CustomerOrder.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CustomerOrder.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerOrder_vue_vue_type_template_id_56cdfac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerOrder.vue?vue&type=template&id=56cdfac8& */ "./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=template&id=56cdfac8&");
/* harmony import */ var _CustomerOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerOrder.vue?vue&type=script&lang=js& */ "./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerOrder_vue_vue_type_template_id_56cdfac8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerOrder_vue_vue_type_template_id_56cdfac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website-view/Customer/CustomerOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=template&id=56cdfac8&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=template&id=56cdfac8& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOrder_vue_vue_type_template_id_56cdfac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerOrder.vue?vue&type=template&id=56cdfac8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CustomerOrder.vue?vue&type=template&id=56cdfac8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOrder_vue_vue_type_template_id_56cdfac8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerOrder_vue_vue_type_template_id_56cdfac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);