(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animated_number_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animated-number-vue */ "./node_modules/animated-number-vue/dist/AnimatedNumber.umd.min.js");
/* harmony import */ var animated_number_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animated_number_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_3__);


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
      rePhone: "",
      reAddress: "",
      total: "",
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
      badge: "0",
      qun: 1,
      pid: "",
      totalprice: "0",
      discount: "0",
      pnames: [],
      infos: [],
      orders: [],
      invoiceNo: "",
      showR: false,
      showRe: true,
      hideRe: false,
      animated: false,
      ddate: false,
      dtime: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.viewCart();

              _this.viewProductName();

              _this.viewInfo();

              _this.invoiceGet();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    viewCart: function viewCart() {
      var _this2 = this;

      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
        this.badge = this.carts.length;
        this.totalprice = this.carts.reduce(function (total, item) {
          return total + _this2.qun * item.price;
        }, 0);
        this.discount = this.carts.reduce(function (total, item) {
          return total + _this2.qun * item.discount;
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
    order: function order() {
      var _this3 = this;

      var data = {
        cart: JSON.stringify(this.carts),
        invoice: this.invoiceNo,
        phone: this.rePhone,
        address: this.reAddress,
        caddress: this.infos.presentAddress,
        cphone: this.infos.phone,
        total: this.totalprice,
        discount: this.discount,
        deliveryDate: this.deliveryDate,
        deliveryTime: this.deliveryTime
      };
      axios.post("order", data).then(function (res) {
        if (res.data.deliveryDate) {
          _this3.playSoundError();

          _this3.ddate = true;
        } else {
          if (res.data.deliveryTime) {
            _this3.playSoundError();

            _this3.ddate = false;
            _this3.dtime = true;
          } else {
            _this3.invoiceGet();

            localStorage.removeItem("carts");

            _this3.viewCart();

            _this3.$router.push({
              name: "payment",
              params: {
                id: _this3.invoiceNo
              }
            });
          }
        }
      });
    },
    invoiceGet: function invoiceGet() {
      var _this4 = this;

      axios.get("order").then(function (res) {
        _this4.invoiceNo = res.data.purchaseInvoiceIncrement;
      });
    },
    playSoundError: function playSoundError() {
      var audioFile = new Audio("https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233574/error.mp3");
      audioFile.play();
    },
    viewProductName: function viewProductName() {
      var _this5 = this;

      fetch("api/productnames").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this5.pnames = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    viewInfo: function viewInfo() {
      var _this6 = this;

      axios.get("customerInfo").then(function (res) {
        _this6.infos = res.data.customer;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=template&id=458e164a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=template&id=458e164a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid mt-5" }, [
      _c(
        "div",
        {
          staticClass:
            "col-12 col-md-9 offset-md-1 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded"
        },
        [
          _c("h3", { staticClass: "checkout1" }, [_vm._v("Check Out")]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-xs-12 col-md-8" },
              [
                _c(
                  "table",
                  {
                    staticClass: "table table-striped d-none d-sm-block",
                    staticStyle: { width: "100%" }
                  },
                  [
                    _c(
                      "tbody",
                      _vm._l(_vm.carts, function(cart) {
                        return _c("tr", { key: cart.id }, [
                          _c("td", [
                            _c("img", {
                              attrs: {
                                src: "productImage/" + cart.image,
                                height: "50",
                                width: "50"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { staticStyle: { width: "26%" } }, [
                            _c(
                              "p",
                              { staticClass: "cartpname" },
                              _vm._l(_vm.pnames, function(pname) {
                                return pname.id == cart.pname
                                  ? _c("span", [
                                      _vm._v(
                                        _vm._s(pname.pname) +
                                          "\n                    "
                                      )
                                    ])
                                  : _vm._e()
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Qty." + _vm._s(cart.qun))]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Dis." + _vm._s(cart.discount))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(cart.price) + "TK")])
                        ])
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c("center", [
                  _vm.showRe
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-info",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.show()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-plus" }),
                          _vm._v(" Receiver Information")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hideRe
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-info",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.hide()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-minus" }),
                          _vm._v(" Receiver Information")
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _vm.showR
                  ? _c("div", [
                      _c("div", { staticClass: "form-group mt-2" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.rePhone,
                              expression: "rePhone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "exampleInputEmail1",
                            "aria-describedby": "emailHelp",
                            placeholder: "Receiver Phone Number"
                          },
                          domProps: { value: _vm.rePhone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.rePhone = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.reAddress,
                              expression: "reAddress"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            placeholder: " Delivery Address",
                            id: "exampleFormControlTextarea1",
                            rows: "3"
                          },
                          domProps: { value: _vm.reAddress },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.reAddress = $event.target.value
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-8", staticStyle: { display: "none" } },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.invoiceNo,
                          expression: "invoiceNo"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Invoice No",
                        disabled: ""
                      },
                      domProps: { value: _vm.invoiceNo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.invoiceNo = $event.target.value
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-3" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { staticStyle: { "margin-left": "6%" } }, [
                      _vm._v("Delivery Date")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-8" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.deliveryDate,
                            expression: "deliveryDate"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date" },
                        domProps: { value: _vm.deliveryDate },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.deliveryDate = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm.ddate
                      ? _c(
                          "span",
                          {
                            staticStyle: { color: "red", "margin-left": "6%" }
                          },
                          [_vm._v("Select Delivery Date ")]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "inputState" } }, [
                      _vm._v("Delivery Time")
                    ]),
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
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.deliveryTime = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "8:00AM-9:00AM " } }, [
                          _vm._v("8:00 AM-9:00 AM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "9:00AM-10:00AM" } }, [
                          _vm._v("9:00 AM-10:00 AM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "10:00AM-11:00AM" } }, [
                          _vm._v("10:00 AM-11:00 AM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "11:00AM-12:00PM" } }, [
                          _vm._v("11:00 AM-12:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "12:00PM-1:00PM" } }, [
                          _vm._v("12:00 PM-1:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1:00PM-2:00PM" } }, [
                          _vm._v("1:00 PM-2:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2:00PM-3:00PM" } }, [
                          _vm._v("2:00 PM-3:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3:00PM-4:00PM" } }, [
                          _vm._v("3:00 PM-4:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4:00PM-5:00PM" } }, [
                          _vm._v("4:00 PM-5:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "5:00PM-6:00PM" } }, [
                          _vm._v("5:00 PM-6:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "6:00PM-7:00PM" } }, [
                          _vm._v("6:00 PM-7:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "7:00PM-8:00PM" } }, [
                          _vm._v("7:00 PM-8:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "8:00PM-9:00PM" } }, [
                          _vm._v("8:00 PM-9:00 PM")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "9:00PM-10:00PM" } }, [
                          _vm._v("9:00 PM-10:00 PM")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm.dtime
                      ? _c("span", { staticStyle: { color: "red" } }, [
                          _vm._v("Select Delivery Time ")
                        ])
                      : _vm._e()
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-md-none" }, [
              _c(
                "div",
                { staticClass: "col-12 col-md-12 col-xs-12" },
                _vm._l(_vm.carts, function(cart) {
                  return _c("div", { key: cart.id }, [
                    _c("img", {
                      staticClass: "cartImg",
                      attrs: { src: "productImage/" + cart.image }
                    }),
                    _vm._v(" "),
                    _c(
                      "small",
                      _vm._l(_vm.pnames, function(pname) {
                        return pname.id == cart.pname
                          ? _c("span", [
                              _vm._v(_vm._s(pname.pname) + "\n                ")
                            ])
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("small", [
                      _vm._v(
                        "Qty." +
                          _vm._s(cart.qun) +
                          " " +
                          _vm._s(cart.price) +
                          ".TK"
                      )
                    ])
                  ])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-12 col-md-4 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded"
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: { "font-weight": "bold", color: "#b3044e94" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-map-marker-alt" }),
                    _vm._v(" " + _vm._s(_vm.infos.name))
                  ]
                ),
                _c("br"),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.infos.presentAddress))]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticStyle: { "font-weight": "bold", color: "#b3044e94" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-phone" }),
                    _vm._v(" " + _vm._s(_vm.infos.phone))
                  ]
                ),
                _c("br"),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("table", { staticClass: "table" }, [
                  _c("tbody", [
                    _c("tr", [
                      _c("td", { staticStyle: { padding: "5px" } }, [
                        _vm._v("Discount")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticStyle: { padding: "5px" } }, [
                        _vm._v(_vm._s(_vm.discount) + "TK")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticStyle: { padding: "5px" } }, [
                        _vm._v("Total")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticStyle: { padding: "5px" } }, [
                        _vm._v(_vm._s(_vm.totalprice) + " TK")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("center", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.order()
                        }
                      }
                    },
                    [_vm._v("\n              Proceed\n            ")]
                  )
                ])
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
          _vm._m(2),
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
                _vm._v(" Item\n          " + _vm._s(_vm.badge) + " "),
                _c("b", { staticClass: "tk" }, [_vm._v("৳ ")]),
                _vm._v(_vm._s(_vm.totalprice) + " Discount:"),
                _c("span", { staticClass: "tk" }, [_vm._v("৳ ")]),
                _vm._v(_vm._s(_vm.discount) + "\n        ")
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
                          _vm._v(_vm._s(cart.price) + "\n                ")
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
              _vm._m(3),
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
                        "\n              " +
                          _vm._s(_vm.badge) +
                          "\n            "
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
    return _c("h5", { staticClass: "checkout" }, [
      _c("i", { staticClass: "fas fa-map-marker-alt" }),
      _vm._v(" Shipping & Billing\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "checkout" }, [
      _c("i", { staticClass: "far fa-sticky-note" }),
      _vm._v("  Order Summery\n          ")
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

/***/ "./resources/js/components/website-view/Customer/CheckOut.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CheckOut.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckOut_vue_vue_type_template_id_458e164a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckOut.vue?vue&type=template&id=458e164a& */ "./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=template&id=458e164a&");
/* harmony import */ var _CheckOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckOut.vue?vue&type=script&lang=js& */ "./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckOut_vue_vue_type_template_id_458e164a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckOut_vue_vue_type_template_id_458e164a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website-view/Customer/CheckOut.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckOut.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=template&id=458e164a&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=template&id=458e164a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckOut_vue_vue_type_template_id_458e164a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CheckOut.vue?vue&type=template&id=458e164a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CheckOut.vue?vue&type=template&id=458e164a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckOut_vue_vue_type_template_id_458e164a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckOut_vue_vue_type_template_id_458e164a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);