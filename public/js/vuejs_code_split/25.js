(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Offer/Offer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Offer/Offer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animated_number_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animated-number-vue */ "./node_modules/animated-number-vue/dist/AnimatedNumber.umd.min.js");
/* harmony import */ var animated_number_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animated_number_vue__WEBPACK_IMPORTED_MODULE_1__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AnimatedNumber: animated_number_vue__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      offers: [],
      products: [],
      pnames: [],
      carts: [],
      purchaseproducts: [],
      badge: "0",
      qun: 1,
      totalprice: "0",
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
      discount: "0",
      animated: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.viewOffer();

              _this.viewProduct();

              _this.viewCart();

              _this.viewProductName();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    viewOffer: function viewOffer() {
      var _this2 = this;

      axios.get("offerGet").then(function (res) {
        _this2.offers = res.data.offer;
      });
    },
    viewProduct: function viewProduct() {
      var _this3 = this;

      axios.get("offerView").then(function (res) {
        _this3.products = res.data.offerView;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    viewProductName: function viewProductName() {
      var _this4 = this;

      fetch("api/productnames").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this4.pnames = res.data;
      })["catch"](function (err) {
        return console.log(err);
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
    storeCart: function storeCart(pro) {
      var parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },
    viewPurchaseProduct: function viewPurchaseProduct() {
      var _this6 = this;

      axios.get("purchaseProductGet").then(function (res) {
        _this6.purchaseproducts = res.data.productgt;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    addCart: function addCart(pro) {
      var findProduct = this.carts.find(function (o) {
        return o.pname === pro.pname;
      });

      if (findProduct) {
        findProduct.qun++;
        findProduct.price = findProduct.qun * findProduct.totalPrice;
        this.storeCart();
        this.animated = true;
      } else {
        this.cartadd.id = pro.id;
        this.cartadd.name = pro.name;
        this.cartadd.price = pro.totalPrice;
        this.cartadd.salesPrice = pro.totalPrice;
        this.cartadd.discount = pro.offerPrice;
        this.cartadd.offerPrice = pro.offerPrice;
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
        return o.pname === pro.pname;
      });
      findProduct.qun++;
      findProduct.discount = findProduct.qun * findProduct.offerPrice;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      this.storeCart();
      this.animated = true;
    },
    decrement: function decrement(pro) {
      var findProduct = this.carts.find(function (o) {
        return o.pname === pro.pname;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Offer/Offer.vue?vue&type=template&id=d8236408&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Offer/Offer.vue?vue&type=template&id=d8236408& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      { staticClass: "container-fluid mt-3" },
      _vm._l(_vm.offers, function(offer) {
        return _c(
          "div",
          { key: offer.id, staticClass: "col-12 col-md-12 col-xs-12" },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 col-md-8 col-xs-12 offerMaindiv border"
                },
                [
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-8 col-xs-12 p-2" },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: { src: "offerImage/" + offer.offerImage }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.products, function(product) {
                        return product.productNameId == offer.productId
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "col-12 col-md-3 col-xs-12 p-2 hovereffect"
                              },
                              [
                                _c("div", { staticClass: "card location" }, [
                                  _c("img", {
                                    attrs: {
                                      src: "productImage/" + product.image,
                                      width: "145",
                                      height: "145"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "overlay" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticStyle: {
                                            "text-align": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "info",
                                              on: {
                                                click: function($event) {
                                                  return _vm.addCart(product)
                                                }
                                              }
                                            },
                                            [_vm._v("Add To Shopping Cart")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.carts, function(cart) {
                                        return cart.id == product.id
                                          ? _c(
                                              "div",
                                              {
                                                key: cart.id,
                                                staticClass: "hovercartoffer"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "btn-group",
                                                    attrs: {
                                                      role: "group",
                                                      "aria-label":
                                                        "Basic example"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-info",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.increment(
                                                              cart
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        +\n                      "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-info",
                                                        attrs: {
                                                          type: "button"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(cart.qun) +
                                                            " in Cart\n                      "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-info",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.decrement(
                                                              cart
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        -\n                      "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      }),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "detail" }, [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "btn btn-success",
                                            attrs: {
                                              "data-toggle": "modal",
                                              "data-target":
                                                "#" +
                                                "offer" +
                                                product.productNameId
                                            }
                                          },
                                          [_vm._v("Details")]
                                        )
                                      ])
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "modal fade",
                                      attrs: {
                                        id: "offer" + product.productNameId,
                                        tabindex: "-1",
                                        role: "dialog",
                                        "aria-hidden": "true"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "modal-dialog modal-xl"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "modal-content" },
                                            [
                                              _vm._m(0, true),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "modal-body" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "zoomImg"
                                                            },
                                                            [
                                                              _c(
                                                                "zoom-on-hover",
                                                                {
                                                                  attrs: {
                                                                    "img-normal":
                                                                      "productImage/" +
                                                                      product.image,
                                                                    "img-zoom":
                                                                      "productImage/" +
                                                                      product.image,
                                                                    scale: 2
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c("br")
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6 col-xs-12 product_content ml-0"
                                                        },
                                                        [
                                                          _vm._l(
                                                            _vm.pnames,
                                                            function(pname) {
                                                              return pname.id ==
                                                                product.pname
                                                                ? _c("h4", [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        pname.pname
                                                                      )
                                                                    )
                                                                  ])
                                                                : _vm._e()
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "ml-0"
                                                            },
                                                            _vm._l(
                                                              _vm.purchaseproducts,
                                                              function(
                                                                purchaseProduct
                                                              ) {
                                                                return _c(
                                                                  "span",
                                                                  [
                                                                    purchaseProduct.pname ==
                                                                    product.productNameId
                                                                      ? _c(
                                                                          "span",
                                                                          [
                                                                            _vm._l(
                                                                              _vm.units,
                                                                              function(
                                                                                unit
                                                                              ) {
                                                                                return purchaseProduct.unit ==
                                                                                  unit.id
                                                                                  ? _c(
                                                                                      "span",
                                                                                      {
                                                                                        key:
                                                                                          unit.id
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            unit.unit
                                                                                          )
                                                                                        ),
                                                                                        _c(
                                                                                          "span"
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e()
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              "\n                                Brand: "
                                                                            ),
                                                                            _vm._l(
                                                                              _vm.brands,
                                                                              function(
                                                                                brand
                                                                              ) {
                                                                                return purchaseProduct.brand ==
                                                                                  brand.id
                                                                                  ? _c(
                                                                                      "span",
                                                                                      {
                                                                                        key:
                                                                                          brand.id
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            brand.brand
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e()
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              "\n                                Color: "
                                                                            ),
                                                                            _vm._l(
                                                                              _vm.colors,
                                                                              function(
                                                                                color
                                                                              ) {
                                                                                return purchaseProduct.color ==
                                                                                  color.id
                                                                                  ? _c(
                                                                                      "span",
                                                                                      {
                                                                                        key:
                                                                                          color.id
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._s(
                                                                                            color.color
                                                                                          ) +
                                                                                            "\n                              "
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e()
                                                                              }
                                                                            )
                                                                          ],
                                                                          2
                                                                        )
                                                                      : _vm._e()
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                            0
                                                          ),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "cost"
                                                              },
                                                              [
                                                                _c("span", [
                                                                  _vm._v("৳")
                                                                ]),
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      product.totalPrice
                                                                    )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v("   "),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "tk"
                                                              },
                                                              [_vm._v("৳")]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("del", [
                                                              _vm._v(
                                                                _vm._s(
                                                                  product.salesPrice
                                                                )
                                                              )
                                                            ]),
                                                            _vm._v(
                                                              "  \n                          "
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color: "red"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    product.offerPrice
                                                                  )
                                                                ),
                                                                product.ammountType ==
                                                                1
                                                                  ? _c("span", [
                                                                      _vm._v(
                                                                        "TK"
                                                                      )
                                                                    ])
                                                                  : _vm._e(),
                                                                product.ammountType ==
                                                                2
                                                                  ? _c("span", [
                                                                      _vm._v(
                                                                        "%"
                                                                      )
                                                                    ])
                                                                  : _vm._e(),
                                                                _vm._v(" Off")
                                                              ]
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "btn-ground"
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "row"
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "col-12 col-md-6 col-xs-12"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "input-group mb-3"
                                                                        },
                                                                        [
                                                                          _vm._m(
                                                                            1,
                                                                            true
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "button",
                                                                            {
                                                                              staticClass:
                                                                                "form-control form-control-sm buttonInput",
                                                                              attrs: {
                                                                                type:
                                                                                  "number",
                                                                                id:
                                                                                  "qty_input",
                                                                                value:
                                                                                  "1",
                                                                                min:
                                                                                  "1"
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                  0 in Cart\n                                "
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "input-group-prepend"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "button",
                                                                                {
                                                                                  staticClass:
                                                                                    "btn btn-dark btn-sm plusbtn",
                                                                                  attrs: {
                                                                                    id:
                                                                                      "plus-btn"
                                                                                  },
                                                                                  on: {
                                                                                    click: function(
                                                                                      $event
                                                                                    ) {
                                                                                      return _vm.addCart(
                                                                                        product
                                                                                      )
                                                                                    }
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "i",
                                                                                    {
                                                                                      staticClass:
                                                                                        "fa fa-plus"
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _vm._l(
                                                                        _vm.carts,
                                                                        function(
                                                                          cart
                                                                        ) {
                                                                          return cart.id ==
                                                                            product.id
                                                                            ? _c(
                                                                                "div",
                                                                                {
                                                                                  key:
                                                                                    cart.id,
                                                                                  staticClass:
                                                                                    "input-group mb-3 incre"
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "div",
                                                                                    {
                                                                                      staticClass:
                                                                                        "input-group-prepend"
                                                                                    },
                                                                                    [
                                                                                      _c(
                                                                                        "button",
                                                                                        {
                                                                                          staticClass:
                                                                                            "btn btn-dark btn-sm minusbtn",
                                                                                          attrs: {
                                                                                            id:
                                                                                              "minus-btn"
                                                                                          },
                                                                                          on: {
                                                                                            click: function(
                                                                                              $event
                                                                                            ) {
                                                                                              return _vm.decrement(
                                                                                                cart
                                                                                              )
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "i",
                                                                                            {
                                                                                              staticClass:
                                                                                                "fa fa-minus"
                                                                                            }
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "button",
                                                                                    {
                                                                                      staticClass:
                                                                                        "form-control form-control-sm buttonInput",
                                                                                      attrs: {
                                                                                        type:
                                                                                          "number",
                                                                                        id:
                                                                                          "qty_input",
                                                                                        value:
                                                                                          "1",
                                                                                        min:
                                                                                          "1"
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        "\n                                  " +
                                                                                          _vm._s(
                                                                                            cart.qun
                                                                                          ) +
                                                                                          " in Cart\n                                "
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _vm._v(
                                                                                    " "
                                                                                  ),
                                                                                  _c(
                                                                                    "div",
                                                                                    {
                                                                                      staticClass:
                                                                                        "input-group-prepend"
                                                                                    },
                                                                                    [
                                                                                      _c(
                                                                                        "button",
                                                                                        {
                                                                                          staticClass:
                                                                                            "btn btn-dark btn-sm plusbtn",
                                                                                          attrs: {
                                                                                            id:
                                                                                              "plus-btn"
                                                                                          },
                                                                                          on: {
                                                                                            click: function(
                                                                                              $event
                                                                                            ) {
                                                                                              return _vm.addCart(
                                                                                                product
                                                                                              )
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        [
                                                                                          _c(
                                                                                            "i",
                                                                                            {
                                                                                              staticClass:
                                                                                                "fa fa-plus"
                                                                                            }
                                                                                          )
                                                                                        ]
                                                                                      )
                                                                                    ]
                                                                                  )
                                                                                ]
                                                                              )
                                                                            : _vm._e()
                                                                        }
                                                                      )
                                                                    ],
                                                                    2
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "col-xs-12"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "button",
                                                                        {
                                                                          staticClass:
                                                                            "btn btn-primary buynow",
                                                                          attrs: {
                                                                            type:
                                                                              "button",
                                                                            onclick:
                                                                              "openNav()",
                                                                            "data-dismiss":
                                                                              "modal",
                                                                            "aria-label":
                                                                              "Close"
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.addCart(
                                                                                product
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "span",
                                                                            {
                                                                              staticClass:
                                                                                "glyphicon glyphicon-shopping-cart"
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            "\n                                Buy Now\n                              "
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    _vm.carts,
                                                                    function(
                                                                      cart
                                                                    ) {
                                                                      return cart.id ==
                                                                        product.id
                                                                        ? _c(
                                                                            "div",
                                                                            {
                                                                              key:
                                                                                cart.id,
                                                                              staticClass:
                                                                                "col-xs-12 buynowclose"
                                                                            },
                                                                            [
                                                                              _vm._m(
                                                                                2,
                                                                                true
                                                                              )
                                                                            ]
                                                                          )
                                                                        : _vm._e()
                                                                    }
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("div", {
                                                                    staticClass:
                                                                      "col-sm-4"
                                                                  })
                                                                ],
                                                                2
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "h5",
                                                            {
                                                              staticClass:
                                                                "pdetails"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Product Detais"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("div", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                product.details
                                                              )
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "h5",
                                                            {
                                                              staticClass:
                                                                "pdetails"
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Speciality"
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("div", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                product.speciality
                                                              )
                                                            }
                                                          })
                                                        ],
                                                        2
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._m(3, true)
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "card-body p-1 text-center"
                                    },
                                    [
                                      _vm._l(_vm.pnames, function(pname) {
                                        return pname.id == product.pname
                                          ? _c(
                                              "small",
                                              {
                                                staticStyle: { height: "100px" }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                    " +
                                                    _vm._s(pname.pname) +
                                                    "\n                  "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticStyle: {
                                            "text-align": "center"
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass: "cost",
                                              staticStyle: { color: "#b70901" }
                                            },
                                            [
                                              _c("span", [_vm._v("৳")]),
                                              _vm._v(
                                                " " + _vm._s(product.totalPrice)
                                              )
                                            ]
                                          ),
                                          _vm._v("   "),
                                          _c("span", { staticClass: "tk" }, [
                                            _vm._v("৳")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "del",
                                            { staticClass: "text-muted" },
                                            [_vm._v(_vm._s(product.salesPrice))]
                                          ),
                                          _vm._v("  \n                    "),
                                          _c("small", [
                                            _c(
                                              "span",
                                              { staticStyle: { color: "red" } },
                                              [
                                                _vm._v(
                                                  _vm._s(product.offerPrice)
                                                ),
                                                product.ammountType == 1
                                                  ? _c("span", [_vm._v("TK")])
                                                  : _vm._e(),
                                                product.ammountType == 2
                                                  ? _c("span", [_vm._v("%")])
                                                  : _vm._e(),
                                                _vm._v(" Off")
                                              ]
                                            )
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-12 col-md-12 col-xs-12 paddingImage3"
                                        },
                                        [
                                          _c("center", [
                                            _c(
                                              "p",
                                              { staticClass: "cartBox" },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-shopping-cart",
                                                  attrs: {
                                                    "aria-hidden": "true"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.addCart(
                                                          product
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Add To Cart")]
                                                )
                                              ]
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.carts, function(cart) {
                                        return cart.id == product.id
                                          ? _c(
                                              "div",
                                              {
                                                key: cart.id,
                                                staticClass:
                                                  "col-12 col-md-12 col-xs-12 paddingImage3 addcartoffer p-0 m-0"
                                              },
                                              [
                                                _c("center", [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "btn-group",
                                                      attrs: {
                                                        role: "group",
                                                        "aria-label":
                                                          "Basic example"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-danger",
                                                          attrs: {
                                                            type: "button"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.increment(
                                                                cart
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                          +\n                        "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-danger",
                                                          attrs: {
                                                            type: "button"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                          " +
                                                              _vm._s(cart.qun) +
                                                              " in Cart\n                        "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "button",
                                                        {
                                                          staticClass:
                                                            "btn btn-danger",
                                                          attrs: {
                                                            type: "button"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.decrement(
                                                                cart
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                          -\n                        "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ]
                            )
                          : _vm._e()
                      })
                    ],
                    2
                  )
                ]
              )
            ])
          ]
        )
      }),
      0
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
          _vm.badge != 0 && _vm.$userId != ""
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
            : _c(
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
                          attrs: { to: { name: "login" } }
                        },
                        [_vm._v("Please order")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
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
    return _c(
      "div",
      { staticClass: "modal-header", staticStyle: { background: "#4abfda" } },
      [
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
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-dark btn-sm minusbtn",
          attrs: { id: "minus-btn" }
        },
        [_c("i", { staticClass: "fa fa-minus" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary buynow",
        attrs: {
          type: "button",
          onclick: "openNav()",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [
        _c("span", { staticClass: "glyphicon glyphicon-shopping-cart" }),
        _vm._v(
          "\n                                Buy Now\n                              "
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-none d-sm-block" }, [
      _c("div", { staticClass: "col-md-12 toph" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "ul",
            { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
            [
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  staticStyle: { background: "#c2d5e1" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link active",
                      attrs: { "data-toggle": "tab", href: "#home" }
                    },
                    [_vm._v("Order Policy")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  staticStyle: { background: "#c2d5e1" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { "data-toggle": "tab", href: "#menu1" }
                    },
                    [_vm._v("Delivary Charge")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  staticStyle: { background: "#c2d5e1" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { "data-toggle": "tab", href: "#menu2" }
                    },
                    [_vm._v("Delivery Area")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  staticStyle: { background: "#c2d5e1" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { "data-toggle": "tab", href: "#menu2" }
                    },
                    [_vm._v("Product Return Policy")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  staticStyle: { background: "#c2d5e1" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { "data-toggle": "tab", href: "#menu2" }
                    },
                    [_vm._v("Free Family Bazar")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  staticStyle: { background: "#c2d5e1" }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { "data-toggle": "tab", href: "#menu2" }
                    },
                    [_vm._v("Referrence\n                            ")]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "container tab-pane", attrs: { id: "home" } },
              [
                _c("br"),
                _vm._v(" "),
                _c("h3", [_vm._v("HOME")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                              Lorem ipsum dolor sit amet, consectetur\n                              adipisicing elit, sed do eiusmod tempor\n                              incididunt ut labore et dolore magna aliqua.\n                            "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "container tab-pane fade",
                attrs: { id: "menu1" }
              },
              [
                _c("br"),
                _vm._v(" "),
                _c("h3", [_vm._v("Menu 1")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                              Ut enim ad minim veniam, quis nostrud\n                              exercitation ullamco laboris nisi ut aliquip ex\n                              ea commodo consequat.\n                            "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "container tab-pane fade",
                attrs: { id: "menu2" }
              },
              [
                _c("br"),
                _vm._v(" "),
                _c("h3", [_vm._v("Menu 2")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                              Sed ut perspiciatis unde omnis iste natus error\n                              sit voluptatem accusantium doloremque\n                              laudantium, totam rem aperiam.\n                            "
                  )
                ])
              ]
            )
          ])
        ])
      ])
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

/***/ "./resources/js/components/website-view/Offer/Offer.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/website-view/Offer/Offer.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Offer_vue_vue_type_template_id_d8236408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Offer.vue?vue&type=template&id=d8236408& */ "./resources/js/components/website-view/Offer/Offer.vue?vue&type=template&id=d8236408&");
/* harmony import */ var _Offer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Offer.vue?vue&type=script&lang=js& */ "./resources/js/components/website-view/Offer/Offer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Offer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Offer_vue_vue_type_template_id_d8236408___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Offer_vue_vue_type_template_id_d8236408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website-view/Offer/Offer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website-view/Offer/Offer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/website-view/Offer/Offer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Offer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Offer/Offer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website-view/Offer/Offer.vue?vue&type=template&id=d8236408&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/website-view/Offer/Offer.vue?vue&type=template&id=d8236408& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_template_id_d8236408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Offer.vue?vue&type=template&id=d8236408& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Offer/Offer.vue?vue&type=template&id=d8236408&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_template_id_d8236408___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Offer_vue_vue_type_template_id_d8236408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);