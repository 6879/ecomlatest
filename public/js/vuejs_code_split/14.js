(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Customer/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Quantity",
  components: {
    AnimatedNumber: animated_number_vue__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    var _ref;

    return _ref = {
      form: new Form({
        email: '',
        password: '',
        phone: ''
      }),
      userName: '',
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
      result: [],
      sliders: [],
      purchaseproducts: [],
      logos: [],
      searchProduct: [],
      units: [],
      colors: [],
      brands: [],
      divisions: [],
      offers: []
    }, _defineProperty(_ref, "pnames", []), _defineProperty(_ref, "infos", []), _defineProperty(_ref, "getusers", []), _defineProperty(_ref, "sms", []), _defineProperty(_ref, "badge", "0"), _defineProperty(_ref, "qun", 1), _defineProperty(_ref, "pid", ""), _defineProperty(_ref, "totalprice", "0"), _defineProperty(_ref, "discount", "0"), _defineProperty(_ref, "animated", false), _defineProperty(_ref, "myModl", false), _defineProperty(_ref, "slider", true), _defineProperty(_ref, "category", true), _defineProperty(_ref, "categoryItem", true), _defineProperty(_ref, "login", false), _defineProperty(_ref, "notlogin", false), _defineProperty(_ref, "modal", true), _defineProperty(_ref, "emailAD", false), _defineProperty(_ref, "phone", true), _defineProperty(_ref, "variants", ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark']), _defineProperty(_ref, "headerBgVariant", 'warning'), _defineProperty(_ref, "quantity", 1), _defineProperty(_ref, "resultDiv", {
      display: "none"
    }), _ref;
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.viewInfo();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    loginInfo: function loginInfo() {
      var _this2 = this;

      this.form.post('/vendor/login', {
        email: this.form.email,
        phone: this.form.phone,
        password: this.form.password
      }).then(function (res) {
        localStorage.setItem('usertoken', res.data.token);
        _this2.form.email = '';
        _this2.form.password = '';
        _this2.form.phone = '';
        _this2.login = true;

        _this2.viewInfo();

        _this2.notlogin = false;
        _this2.modal = false;
        window.location.href = "/";
      })["catch"](function (err) {
        console.log(err);
      });
      this.emitMethod();
    },
    userGet: function userGet() {
      var _this3 = this;

      axios.get('/searchUser?q=' + this.userName).then(function (res) {
        if (res.data == '') {
          return _this3.getusers = res.data.getuser;
        } else {
          _this3.getusers = res.data.getuser;
        }
      });
    },
    emitMethod: function emitMethod() {
      EventBus.$emit('logged-in', 'loggedin');
    },
    logout: function logout() {
      var _this4 = this;

      axios.post('/logout').then(function (res) {
        window.location.href = "/";
        _this4.infos.name = '';
        _this4.notlogin = true;
        _this4.modal = true;
      });
    },
    sendSms: function sendSms() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this5.userName = "";
                Toast.fire({
                  icon: "success",
                  title: "Message has been sent..."
                });
                url = 'http://sms.doofazit.com/api/v1/send?api_key=44515814867233291581486723&contacts=' + _this5.getusers.phone + '&senderid=8801844532643&msg=Your password is:' + _this5.getusers.pass;
                fetch(url); // const data = await res.json();
                // this.sms = data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    openEmail: function openEmail() {
      this.emailAD = true;
      this.phone = false;
    },
    openPhone: function openPhone() {
      this.emailAD = false;
      this.phone = true;
    },
    viewModal: function viewModal() {
      this.modal = true;
    },
    viewInfo: function viewInfo() {
      var _this6 = this;

      axios.get('customerInfo').then(function (res) {
        _this6.infos = res.data.customer;
      });
    },
    openModel: function openModel() {
      this.myModl = true;
    },
    hideModal: function hideModal() {
      this.$refs["my-modal"].hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/Login.vue?vue&type=template&id=60c57f75&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Customer/Login.vue?vue&type=template&id=60c57f75& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            "col-12 col-md-8 offset-md-2 col-xs-12 shadow-lg p-3 mb-5 bg-white rounded"
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-12 col-xs-12 offset-md-2" },
              [
                _c("button", { staticClass: "btn fb " }, [
                  _c("img", {
                    attrs: {
                      src: "frontend/image/facebook.webp",
                      height: "40",
                      width: "50"
                    }
                  }),
                  _vm._v("  Login With Facebook")
                ])
              ]
            ),
            _vm._v(" "),
            _vm.phone
              ? _c(
                  "div",
                  {
                    staticClass: "col-12 col-md-12 col-xs-12 mt-2 offset-md-2"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn email ",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.openEmail($event)
                          }
                        }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: "frontend/image/envlope.jpg",
                            height: "40",
                            width: "50"
                          }
                        }),
                        _vm._v("  Login With Email")
                      ]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.emailAD
              ? _c(
                  "div",
                  {
                    staticClass: "col-12 col-md-12 col-xs-12 mt-2 offset-md-2"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn phone ",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.openPhone($event)
                          }
                        }
                      },
                      [
                        _c("img", {
                          attrs: {
                            src: "frontend/image/phone.webp",
                            height: "40",
                            width: "50"
                          }
                        }),
                        _vm._v("  Login With Mobile")
                      ]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", [
              _vm.phone
                ? _c("div", [
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 col-md-12 col-xs-12 align-center mt-2"
                      },
                      [
                        _vm._v(
                          "\n              or\n           PLEASE ENTER YOUR MOBILE PHONE NUMBER\n    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-12 col-md-12 col-xs-12 align-center mt-2"
                      },
                      [
                        _c("p", [
                          _c("img", {
                            attrs: {
                              src: "frontend/image/flag.png",
                              height: "40",
                              width: "40"
                            }
                          }),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "tel",
                            attrs: {
                              type: "tel",
                              value: "+88",
                              placeholder: ""
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(0)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.emailAD
                ? _c("div", { staticClass: "col-md-12 mt-3" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.loginInfo($event)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: { "has-error": _vm.form.errors.has("email") }
                          },
                          [
                            _c("label", { attrs: { for: "email" } }, [
                              _vm._v(" User Name/Email Address/Phone")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.email,
                                  expression: "form.email"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("email")
                              },
                              attrs: {
                                type: "text",
                                name: "email",
                                placeholder: "User Name/Email Address/Phone"
                              },
                              domProps: { value: _vm.form.email },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "email",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "email" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "has-error": _vm.form.errors.has("password")
                            }
                          },
                          [
                            _c("label", { attrs: { for: "password" } }, [
                              _vm._v(" Password")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.password,
                                  expression: "form.password"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("password")
                              },
                              attrs: {
                                type: "password",
                                name: "password",
                                placeholder: "Password"
                              },
                              domProps: { value: _vm.form.password },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "password",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "password" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          { staticClass: "btn btn-lg btn-primary btn-block" },
                          [_vm._v("Sign in")]
                        )
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-12 col-xs-12 align-center mt-2" },
                [
                  _c("center", [
                    _c(
                      "p",
                      [
                        _vm._v(" New member?"),
                        _c(
                          "router-link",
                          {
                            attrs: { to: { name: "customerregi" } },
                            on: {
                              click: function($event) {
                                return _vm.$bvModal.hide("modal-1")
                              }
                            }
                          },
                          [_vm._v("Register")]
                        ),
                        _vm._v(" here.\n       ")
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("center", [
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-sms",
                            modifiers: { "modal-sms": true }
                          }
                        ],
                        staticClass: "badge badge-info"
                      },
                      [_vm._v("Forgate Password?")]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-sms",
                        "header-bg-variant": _vm.headerBgVariant
                      }
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                          _vm._v("Enter User Name/Phone Number")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.userName,
                              expression: "userName"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            autocomplete: "off",
                            id: "exampleInputEmail1",
                            placeholder: "Enter User Name/Phone Number"
                          },
                          domProps: { value: _vm.userName },
                          on: {
                            keyup: _vm.userGet,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.userName = $event.target.value
                            }
                          }
                        }),
                        _vm._v("\n  " + _vm._s(_vm.sms.message) + "\n   "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info mt-2",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.sendSms()
                              }
                            }
                          },
                          [_vm._v("\n              Submit\n               ")]
                        )
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-12 col-xs-12 align-center mt-2" },
                [
                  _c("center", [
                    _c("p", [
                      _vm._v(
                        " This site is protected by reCAPTCHA and the Google "
                      ),
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://policies.google.com/privacy",
                            target: "_blank",
                            "data-reactid": ".32sn2ofjqk.1.0.0.0.2.0.6.0.1"
                          }
                        },
                        [_vm._v("Privacy Policy")]
                      ),
                      _vm._v("\n       and "),
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "https://policies.google.com/terms",
                            target: "_blank",
                            "data-reactid": ".32sn2ofjqk.1.0.0.0.2.0.6.0.3"
                          }
                        },
                        [_vm._v("Terms of Service")]
                      )
                    ])
                  ])
                ],
                1
              )
            ])
          ])
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
                  _vm._m(1),
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
                            "\n               " +
                              _vm._s(_vm.badge) +
                              "\n             "
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
      { staticClass: "col-12 col-md-12 col-xs-12 align-center mt-2" },
      [
        _c("button", { staticClass: "btn btn-lg btn-primary btn-block" }, [
          _vm._v("Sign in")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3 col-xs-3" }, [
      _c("i", {
        staticClass: "fa fa-home ml-2",
        attrs: { "aria-hidden": "true" }
      }),
      _vm._v(" "),
      _c("p", [_vm._v("Home")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website-view/Customer/Login.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/Login.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_60c57f75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=60c57f75& */ "./resources/js/components/website-view/Customer/Login.vue?vue&type=template&id=60c57f75&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/website-view/Customer/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_60c57f75___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_60c57f75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website-view/Customer/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website-view/Customer/Login.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/Login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website-view/Customer/Login.vue?vue&type=template&id=60c57f75&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/Login.vue?vue&type=template&id=60c57f75& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_60c57f75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=60c57f75& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/Login.vue?vue&type=template&id=60c57f75&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_60c57f75___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_60c57f75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);