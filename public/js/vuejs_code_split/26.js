(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Product.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Product.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animated_number_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animated-number-vue */ "./node_modules/animated-number-vue/dist/AnimatedNumber.umd.min.js");
/* harmony import */ var animated_number_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animated_number_vue__WEBPACK_IMPORTED_MODULE_0__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    AnimatedNumber: animated_number_vue__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    var _ref;

    return _ref = {
      products: [],
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
      prices: [],
      pnames: [],
      menucats: [],
      menus: [],
      pcats: [],
      sliders: [],
      units: [],
      colors: [],
      brands: [],
      offers: []
    }, _defineProperty(_ref, "pnames", []), _defineProperty(_ref, "infos", []), _defineProperty(_ref, "limits", []), _defineProperty(_ref, "badge", "0"), _defineProperty(_ref, "qun", 1), _defineProperty(_ref, "pid", ""), _defineProperty(_ref, "totalprice", "0"), _defineProperty(_ref, "discount", "0"), _defineProperty(_ref, "animated", false), _defineProperty(_ref, "slider", true), _defineProperty(_ref, "category", true), _defineProperty(_ref, "categoryItem", true), _defineProperty(_ref, "quantity", 1), _ref;
  },
  mounted: function mounted() {
    this.viewMenuCat();
    this.viewPrice();
    this.viewCart();
    this.viewMenu();
    this.viewProductCat();
    this.viewProductName();
    this.viewSlider();
    this.viewColor();
    this.viewUnit();
    this.viewBrand();
    this.viewOffer();
    this.viewProductName();
    this.viewInfo();
  },
  methods: (_methods = {
    viewInfo: function viewInfo() {
      var _this = this;

      axios.get("customerInfo").then(function (res) {
        _this.infos = res.data.customer;
      });
    },
    viewProductName: function viewProductName() {
      var _this2 = this;

      fetch("api/productnames").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.pnames = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    viewOffer: function viewOffer() {
      var _this3 = this;

      axios.get("offerGet").then(function (res) {
        _this3.offers = res.data.offer;
      });
    },
    viewCart: function viewCart() {
      var _this4 = this;

      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
        this.badge = this.carts.length;
        this.totalprice = this.carts.reduce(function (total, item) {
          return total + _this4.qun * item.price;
        }, 0);
        this.discount = this.carts.reduce(function (total, item) {
          return total + _this4.qun * item.discount;
        }, 0);
      }
    },
    addCart: function addCart(pro, p) {
      var findProduct = this.carts.find(function (o) {
        return o.pname === pro.pname;
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
        return o.pname === pro.pname;
      });
      findProduct.qun++;
      findProduct.price = findProduct.qun * findProduct.salesPrice;
      findProduct.discount = findProduct.qun * findProduct.offerPrice;
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
    },
    viewBrand: function viewBrand() {
      var _this5 = this;

      fetch("api/brands").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this5.brands = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    viewUnit: function viewUnit() {
      var _this6 = this;

      fetch("api/units").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this6.units = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    viewColor: function viewColor() {
      var _this7 = this;

      fetch("api/colors").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this7.colors = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    storeCart: function storeCart(pro) {
      var parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },
    viewMenuCat: function viewMenuCat() {
      var _this8 = this;

      axios.get("viewMenuCat").then(function (res) {
        _this8.menucats = res.data.menucatlist;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    viewPrice: function viewPrice() {
      var _this9 = this;

      axios.get("productView").then(function (res) {
        _this9.prices = res.data.priceget;
        _this9.limits = res.data.pricegetq;
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    viewSearchProduct: function viewSearchProduct() {
      var _this10 = this;

      axios.get("searchProductView").then(function (res) {
        _this10.searchProduct = res.data.productget;
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, _defineProperty(_methods, "viewProductName", function viewProductName() {
    var _this11 = this;

    fetch("api/productnames").then(function (res) {
      return res.json();
    }).then(function (res) {
      _this11.pnames = res.data;
    })["catch"](function (err) {
      return console.log(err);
    });
  }), _defineProperty(_methods, "viewMenu", function viewMenu() {
    var _this12 = this;

    axios.get("productView/create").then(function (res) {
      _this12.menus = res.data.menulist;
    })["catch"](function (err) {
      return console.log(err);
    });
  }), _defineProperty(_methods, "detailsInfo", function detailsInfo(id) {
    var _this13 = this;

    axios.get("productView/".concat(id)).then(function (res) {
      _this13.informations = res.data;
    })["catch"](function (err) {
      return console.log(err);
    });
  }), _defineProperty(_methods, "viewProductCat", function viewProductCat() {
    var _this14 = this;

    fetch("api/productcat").then(function (res) {
      return res.json();
    }).then(function (res) {
      _this14.pcats = res.data;
    })["catch"](function (err) {
      return console.log(err);
    });
  }), _defineProperty(_methods, "viewSlider", function viewSlider() {
    var _this15 = this;

    fetch("api/sliderhome").then(function (res) {
      return res.json();
    }).then(function (res) {
      _this15.sliders = res.data;
    })["catch"](function (err) {
      return console.log(err);
    });
  }), _defineProperty(_methods, "getProductName", function getProductName(product) {
    var pname = this.stripTags(product.product_name.pname);
    return pname.length > 35 ? pname.substring(0, 35) + "..." : pname;
  }), _defineProperty(_methods, "getProductNameitem", function getProductNameitem(item) {
    var pname = this.stripTags(item.product_name.pname);
    return pname.length > 35 ? pname.substring(0, 35) + "..." : pname;
  }), _defineProperty(_methods, "stripTags", function stripTags(text) {
    return text.replace(/(<([^>]+)>)/gi, "");
  }), _methods)
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Product.vue?vue&type=template&id=865eeebc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Product.vue?vue&type=template&id=865eeebc& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    !_vm.$route.meta.hideDashboard
      ? _c(
          "div",
          _vm._l(_vm.menus, function(menu, index) {
            return _c("div", { key: menu.id, staticClass: "container-fluid" }, [
              _c("div", { staticClass: "section-divider" }, [
                _c(
                  "span",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { to: { name: "view", params: { id: menu.id } } }
                      },
                      [_c("h4", [_vm._v(_vm._s(menu.catName))])]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-12 col-xs-12" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.prices, function(product) {
                    return product.categoryId == menu.id
                      ? _c(
                          "div",
                          {
                            key: product.categoryId,
                            staticClass:
                              "col-6 col-md-2 col-xs-4 col-sm-4 hovereffect paddingImage2"
                          },
                          _vm._l(_vm.limits, function(lt) {
                            return lt.categoryId == menu.id &&
                              lt.productNameId <= 12
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-12 col-md-12 col-xs-12 shadow mb-5 bg-white rounded"
                                  },
                                  [
                                    _c(
                                      "div",
                                      [
                                        _vm._v(
                                          "\n                 " +
                                            _vm._s(index) +
                                            "\n              "
                                        ),
                                        _c("figure", [
                                          _c("img", {
                                            staticClass: "img-fluid box3Images",
                                            attrs: {
                                              src:
                                                "productImage/" + product.image
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "overlay" },
                                          [
                                            _vm._l(_vm.offers, function(offer) {
                                              return offer.productId ==
                                                product.productNameId
                                                ? _c(
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
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.addCart(
                                                                product,
                                                                offer
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Add To Shopping Cart"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            }),
                                            _vm._v(" "),
                                            product.offer == null
                                              ? _c(
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
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.addCart(
                                                              product,
                                                              product
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Add To Shopping Cart"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm._l(_vm.carts, function(cart) {
                                              return cart.id == product.id
                                                ? _c(
                                                    "div",
                                                    {
                                                      key: cart.id,
                                                      staticClass: "hovercart"
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "btn-group",
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
                                                                "\n                      +\n                    "
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
                                                                "\n                      " +
                                                                  _vm._s(
                                                                    cart.qun
                                                                  ) +
                                                                  " in Cart\n                    "
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
                                                                "\n                      -\n                    "
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
                                            _c(
                                              "div",
                                              { staticClass: "detail" },
                                              [
                                                _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "btn btn-success",
                                                    attrs: {
                                                      "data-toggle": "modal",
                                                      "data-target":
                                                        "#" +
                                                        "product" +
                                                        product.productNameId
                                                    }
                                                  },
                                                  [_vm._v("Details")]
                                                )
                                              ]
                                            )
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "modal fade",
                                            attrs: {
                                              id:
                                                "product" +
                                                product.productNameId,
                                              tabindex: "-1",
                                              role: "dialog",
                                              "aria-hidden": "true"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "modal-dialog modal-xl"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "modal-content"
                                                  },
                                                  [
                                                    _vm._m(0, true),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "modal-body"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass: "row"
                                                          },
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
                                                                _c("h4", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      product
                                                                        .product_name
                                                                        .pname
                                                                    )
                                                                  )
                                                                ]),
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
                                                                                    "\n                              Brand: "
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
                                                                                    "\n                              Color: "
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
                                                                                                  "\n                            "
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
                                                                _vm._l(
                                                                  _vm.offers,
                                                                  function(
                                                                    offer
                                                                  ) {
                                                                    return offer.productId ==
                                                                      product.productNameId
                                                                      ? _c(
                                                                          "p",
                                                                          {
                                                                            key:
                                                                              offer.id
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "dPrice cost"
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "span",
                                                                                  [
                                                                                    _vm._v(
                                                                                      "৳"
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  " " +
                                                                                    _vm._s(
                                                                                      offer.totalPrice
                                                                                    )
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              "  \n                        "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "tk"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "৳"
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "del",
                                                                              {
                                                                                staticClass:
                                                                                  "text-muted"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    product.salesPrice
                                                                                  )
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              "  \n                        "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticStyle: {
                                                                                  color:
                                                                                    "red"
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    offer.offerPrice
                                                                                  )
                                                                                ),
                                                                                offer.ammountType ==
                                                                                1
                                                                                  ? _c(
                                                                                      "span",
                                                                                      [
                                                                                        _vm._v(
                                                                                          "TK"
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e(),
                                                                                offer.ammountType ==
                                                                                2
                                                                                  ? _c(
                                                                                      "span",
                                                                                      [
                                                                                        _vm._v(
                                                                                          "%"
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e(),
                                                                                _vm._v(
                                                                                  " Off"
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                product.offer ==
                                                                null
                                                                  ? _c(
                                                                      "p",
                                                                      {
                                                                        staticClass:
                                                                          "dPrice"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "cost"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "span",
                                                                              [
                                                                                _vm._v(
                                                                                  "৳"
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " " +
                                                                                _vm._s(
                                                                                  product.salesPrice
                                                                                )
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _vm._e(),
                                                                _vm._v(" "),
                                                                _vm._l(
                                                                  _vm.offers,
                                                                  function(
                                                                    offer
                                                                  ) {
                                                                    return _c(
                                                                      "div",
                                                                      {
                                                                        key:
                                                                          offer.id,
                                                                        staticClass:
                                                                          "btn-ground"
                                                                      },
                                                                      [
                                                                        offer.productId ==
                                                                        product.productNameId
                                                                          ? _c(
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
                                                                                              "\n                                0 in Cart\n                              "
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
                                                                                                      product,
                                                                                                      offer
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
                                                                                                      "\n                                " +
                                                                                                        _vm._s(
                                                                                                          cart.qun
                                                                                                        ) +
                                                                                                        " in Cart\n                              "
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
                                                                                                              product,
                                                                                                              offer
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
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
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
                                                                                            "openNav()"
                                                                                        },
                                                                                        on: {
                                                                                          click: [
                                                                                            function(
                                                                                              $event
                                                                                            ) {
                                                                                              return _vm.addCart(
                                                                                                product,
                                                                                                offer
                                                                                              )
                                                                                            },
                                                                                            function(
                                                                                              $event
                                                                                            ) {
                                                                                              return _vm.$bvModal.hide(
                                                                                                "modal" +
                                                                                                  product.productNameId
                                                                                              )
                                                                                            }
                                                                                          ]
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
                                                                                          "\n                              Buy Now\n                            "
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
                                                                                              "col-xs-12 buynowclose"
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
                                                                                                    "openNav()"
                                                                                                },
                                                                                                on: {
                                                                                                  click: function(
                                                                                                    $event
                                                                                                  ) {
                                                                                                    return _vm.$bvModal.hide(
                                                                                                      "modal" +
                                                                                                        product.productNameId
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
                                                                                                  "\n                              Buy Now\n                            "
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          ]
                                                                                        )
                                                                                      : _vm._e()
                                                                                  }
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "col-sm-4"
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
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "btn-ground"
                                                                  },
                                                                  [
                                                                    product.offer ==
                                                                    null
                                                                      ? _c(
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
                                                                                      2,
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
                                                                                          "\n                                0 in Cart\n                              "
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
                                                                                                  product,
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
                                                                                                  "\n                                " +
                                                                                                    _vm._s(
                                                                                                      cart.qun
                                                                                                    ) +
                                                                                                    " in Cart\n                              "
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
                                                                                                          product,
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
                                                                            _vm._v(
                                                                              " "
                                                                            ),
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
                                                                                        "openNav()"
                                                                                    },
                                                                                    on: {
                                                                                      click: [
                                                                                        function(
                                                                                          $event
                                                                                        ) {
                                                                                          return _vm.addCart(
                                                                                            product,
                                                                                            product
                                                                                          )
                                                                                        },
                                                                                        function(
                                                                                          $event
                                                                                        ) {
                                                                                          return _vm.$bvModal.hide(
                                                                                            "modal" +
                                                                                              product.productNameId
                                                                                          )
                                                                                        }
                                                                                      ]
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
                                                                                      "\n                              Buy Now\n                            "
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
                                                                                          "col-xs-12 buynowclose"
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
                                                                                                "openNav()"
                                                                                            },
                                                                                            on: {
                                                                                              click: function(
                                                                                                $event
                                                                                              ) {
                                                                                                return _vm.$bvModal.hide(
                                                                                                  "modal" +
                                                                                                    product.productNameId
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
                                                                                              "\n                              Buy Now\n                            "
                                                                                            )
                                                                                          ]
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  : _vm._e()
                                                                              }
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "col-sm-4"
                                                                              }
                                                                            )
                                                                          ],
                                                                          2
                                                                        )
                                                                      : _vm._e()
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
                                            staticClass:
                                              "col-12 col-md-12 col-xs-12 paddingImage",
                                            staticStyle: { height: "85px" },
                                            attrs: { v: "" }
                                          },
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticStyle: {
                                                  "text-align": "left"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.getProductName(product)
                                                  )
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.offers, function(offer) {
                                          return _c(
                                            "div",
                                            {
                                              key: offer.id,
                                              staticClass:
                                                "col-12 col-md-12 col-xs-12 paddingImage"
                                            },
                                            [
                                              offer.productId ==
                                              product.productNameId
                                                ? _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-6 col-md-4 col-xs-4 amountBox paddingImage"
                                                        },
                                                        [
                                                          _c("center", [
                                                            _c("bdi", [
                                                              _c(
                                                                "p",
                                                                {
                                                                  staticClass:
                                                                    "amount dPrice"
                                                                },
                                                                [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "tk"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "৳"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        offer.totalPrice
                                                                      ) +
                                                                      "\n                      "
                                                                  )
                                                                ]
                                                              )
                                                            ])
                                                          ])
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-6 col-md-8 col-xs-4 discountBox paddingImage"
                                                        },
                                                        [
                                                          _c("center", [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "amountDiscount text-muted"
                                                              },
                                                              [
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
                                                                    ) + " "
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("small", [
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "amount "
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          offer.offerPrice
                                                                        ) + " "
                                                                      )
                                                                    ]
                                                                  ),
                                                                  offer.ammountType ==
                                                                  1
                                                                    ? _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "amount"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "TK"
                                                                          )
                                                                        ]
                                                                      )
                                                                    : _vm._e(),
                                                                  offer.ammountType ==
                                                                  2
                                                                    ? _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "amount"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "%"
                                                                          )
                                                                        ]
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "amount"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Off"
                                                                      )
                                                                    ]
                                                                  )
                                                                ])
                                                              ]
                                                            )
                                                          ])
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-12 col-md-12 col-xs-12 paddingImage"
                                          },
                                          [
                                            product.offer == null
                                              ? _c(
                                                  "div",
                                                  { staticClass: "row" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "col-6 col-md-12 col-xs-4 amountBox paddingImage"
                                                      },
                                                      [
                                                        _c("center", [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "amount dPrice"
                                                            },
                                                            [
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "tk"
                                                                },
                                                                [_vm._v("৳")]
                                                              ),
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    product.salesPrice
                                                                  ) +
                                                                  "\n                      "
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.offers, function(offer) {
                                          return offer.productId ==
                                            product.productNameId
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-12 col-md-12 col-xs-12 paddingImage3"
                                                },
                                                [
                                                  _c("center", [
                                                    _c(
                                                      "p",
                                                      {
                                                        staticClass: "cartBox",
                                                        staticStyle: {
                                                          color: ""
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-shopping-cart",
                                                          attrs: {
                                                            "aria-hidden":
                                                              "true"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "span",
                                                          {
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.addCart(
                                                                  product,
                                                                  offer
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Add TO Cart"
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
                                        }),
                                        _vm._v(" "),
                                        product.offer == null
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-12 col-md-12 col-xs-12 paddingImage3"
                                              },
                                              [
                                                _c("center", [
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass: "cartBox",
                                                      staticStyle: { color: "" }
                                                    },
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
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.addCart(
                                                                product,
                                                                product
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Add TO Cart")]
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm._l(_vm.carts, function(cart) {
                                          return cart.id == product.id
                                            ? _c(
                                                "div",
                                                {
                                                  key: cart.id,
                                                  staticClass:
                                                    "col-12 col-md-12 col-xs-12 paddingImage3 adcart"
                                                },
                                                [
                                                  _c("center", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "btn-group",
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
                                                              "\n                      +\n                    "
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
                                                              "\n                      " +
                                                                _vm._s(
                                                                  cart.qun
                                                                ) +
                                                                " in Cart\n                    "
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
                                                              "\n                      -\n                    "
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
                                  ]
                                )
                              : _vm._e()
                          }),
                          0
                        )
                      : _vm._e()
                  }),
                  0
                )
              ])
            ])
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.$route.meta.hideDashboard
      ? _c("div", [
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
                  staticClass:
                    "col-2 col-md-2 cart1 shadow-lg carthover rounded",
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
              _c(
                "div",
                { staticClass: "col-2 col-md-2 cart2 shadow-lg rounded" },
                [
                  _c(
                    "p",
                    { staticClass: "cartItem2" },
                    [
                      _c("span", { staticClass: "tk" }, [_vm._v("৳")]),
                      _vm._v(" "),
                      _c("animated-number", {
                        attrs: { value: _vm.totalprice }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          )
        ])
      : _vm._e(),
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
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(pname.pname) + "\n                  "
                                  )
                                ])
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
    !_vm.$route.meta.hideDashboard
      ? _c("div", [
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
                      _c(
                        "router-link",
                        { attrs: { to: { name: "offerview" } } },
                        [
                          _c("i", {
                            staticClass: "fa fa-gift ml-2",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" "),
                          _c("p", [_vm._v("Offer")])
                        ]
                      )
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
                        }),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.infos.name))])
                      ])
                    : _c(
                        "div",
                        { staticClass: "col-3 col-xs-3" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "login" } } },
                            [
                              _c("i", {
                                staticClass: "fa fa-user ml-2",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(" "),
                              _c("p", [_vm._v("Login")])
                            ]
                          )
                        ],
                        1
                      )
                ])
              ])
            ]
          )
        ])
      : _vm._e()
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
                    [_vm._v("Referrence\n                          ")]
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
                    "\n                            Lorem ipsum dolor sit amet, consectetur\n                            adipisicing elit, sed do eiusmod tempor incididunt\n                            ut labore et dolore magna aliqua.\n                          "
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
                    "\n                            Ut enim ad minim veniam, quis nostrud exercitation\n                            ullamco laboris nisi ut aliquip ex ea commodo\n                            consequat.\n                          "
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
                    "\n                            Sed ut perspiciatis unde omnis iste natus error\n                            sit voluptatem accusantium doloremque laudantium,\n                            totam rem aperiam.\n                          "
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

/***/ "./resources/js/components/website-view/Product.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/website-view/Product.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_865eeebc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=865eeebc& */ "./resources/js/components/website-view/Product.vue?vue&type=template&id=865eeebc&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/website-view/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_865eeebc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_865eeebc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website-view/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website-view/Product.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/website-view/Product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website-view/Product.vue?vue&type=template&id=865eeebc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/website-view/Product.vue?vue&type=template&id=865eeebc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_865eeebc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=865eeebc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Product.vue?vue&type=template&id=865eeebc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_865eeebc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_865eeebc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);