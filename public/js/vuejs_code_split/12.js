(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      form: new Form({
        sponsorId: "",
        name: "",
        fname: "",
        fullname: "",
        mname: "",
        dob: "",
        nid: "",
        email: "",
        password: "",
        phone: "",
        image: "",
        permanentAddress: "",
        presentAddress: "",
        terms: "",
        divisionId: "",
        districtId: "",
        thanaId: "",
        unionId: "",
        wardId: ""
      }),
      divisions: [],
      infos: [],
      searchresult: false,
      search: false,
      click: true,
      need: false,
      sponsor: false,
      districtShowForm: false,
      upazila: false,
      unionForm: false,
      wardForm: false
    };
  },
  mounted: function mounted() {
    this.division();
    this.viewInfo();
  },
  methods: {
    playSound: function playSound() {
      var audioFile = new Audio("https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3");
      audioFile.play();
    },
    add: function add() {
      var _this = this;

      this.form.post("vendor/register", {
        method: "post",
        headers: {
          "content-type": "application/json"
        }
      }).then(function (response) {
        localStorage.setItem('usertoken', response.data.token);

        _this.playSound();

        Toast.fire({
          icon: "success",
          title: "Successfully Saved"
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    clickHere: function clickHere() {
      this.click = false;
      this.need = true;
      this.sponsor = true;
    },
    needFun: function needFun() {
      this.click = true;
      this.need = false;
      this.sponsor = false;
    },
    viewInfo: function viewInfo() {
      var _this2 = this;

      axios.get('customerInfo').then(function (res) {
        _this2.infos = res.data.customer;
      });
    },
    sponsorGet: function sponsorGet() {
      var _this3 = this;

      axios.get('/search?q=' + this.form.sponsorId).then(function (res) {
        if (res.data == '') {
          _this3.result = res.data;
          _this3.search = true;
          _this3.searchresult = false;
        } else {
          _this3.result = res.data;
          _this3.searchresult = true;
          _this3.search = false;
        }
      });
    },
    division: function division() {
      var _this4 = this;

      axios.get("/division").then(function (res) {
        _this4.divisions = res.data.division;
      });
    },
    districtShow: function districtShow() {
      var _this5 = this;

      axios.get("/district/" + this.form.divisionId).then(function (res) {
        _this5.districts = res.data.district;
        _this5.districtShowForm = true;
      });
    },
    thanaShow: function thanaShow() {
      var _this6 = this;

      axios.get("/thana/" + this.form.districtId).then(function (res) {
        _this6.thanas = res.data.thana;
        _this6.upazila = true;
      });
    },
    unionShow: function unionShow() {
      var _this7 = this;

      axios.get("/union/" + this.form.thanaId).then(function (res) {
        _this7.unions = res.data.union;
        _this7.unionForm = true;
      });
      axios.get("/ward/" + this.form.thanaId).then(function (res) {
        _this7.wards = res.data.ward;
        _this7.wardForm = true;
      });
    },
    changeImage: function changeImage(event) {
      var _this8 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this8.form.image = event.target.result;
        console.log(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=template&id=30992ff2&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=template&id=30992ff2& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        {
          staticClass:
            "col-12 col-xs-12 col-md-8 p-4 offset-md-2 mt-4 profilebox"
        },
        [
          _c(
            "div",
            [
              _c("center", [
                _c("h3", { staticClass: "align-center cush" }, [
                  _c("i", { staticClass: "far fa-user" }),
                  _vm._v("  Registration")
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.add($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.divisionId,
                                expression: "form.divisionId"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "exampleFormControlSelect1" },
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "divisionId",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  $event.preventDefault()
                                  return _vm.districtShow()
                                }
                              ]
                            }
                          },
                          _vm._l(_vm.divisions, function(division) {
                            return _c(
                              "option",
                              {
                                key: division.id,
                                domProps: { value: division.id }
                              },
                              [
                                _vm._v(
                                  "\n                      " +
                                    _vm._s(division.name) +
                                    "\n                    "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.districtShowForm
                    ? _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "exampleFormControlSelect1" } },
                              [_vm._v("Select District")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.districtId,
                                    expression: "form.districtId"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "exampleFormControlSelect1" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "districtId",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      $event.preventDefault()
                                      return _vm.thanaShow()
                                    }
                                  ]
                                }
                              },
                              _vm._l(_vm.districts, function(district) {
                                return _c(
                                  "option",
                                  {
                                    key: district.id,
                                    domProps: { value: district.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(district.name) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.upazila == true
                    ? _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "exampleFormControlSelect1" } },
                              [_vm._v("Select Thana")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.thanaId,
                                    expression: "form.thanaId"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "exampleFormControlSelect1" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "thanaId",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    function($event) {
                                      $event.preventDefault()
                                      return _vm.unionShow()
                                    }
                                  ]
                                }
                              },
                              _vm._l(_vm.thanas, function(thana) {
                                return _c(
                                  "option",
                                  {
                                    key: thana.id,
                                    domProps: { value: thana.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(thana.name) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.unionForm == true
                    ? _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "exampleFormControlSelect1" } },
                              [_vm._v("Select Union")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.unionId,
                                    expression: "form.unionId"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "exampleFormControlSelect1" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "unionId",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.unions, function(union) {
                                return _c(
                                  "option",
                                  {
                                    key: union.id,
                                    domProps: { value: union.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(union.union) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.wardForm == true
                    ? _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "exampleFormControlSelect1" } },
                              [_vm._v("Select Ward")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.wardId,
                                    expression: "form.wardId"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "exampleFormControlSelect1" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "wardId",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.wards, function(ward) {
                                return _c(
                                  "option",
                                  {
                                    key: ward.id,
                                    domProps: { value: ward.id }
                                  },
                                  [
                                    _vm._v(
                                      "\n                      " +
                                        _vm._s(ward.ward) +
                                        "\n                    "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.form.errors.has("name") }
                        },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.name,
                                expression: "form.name"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("name")
                            },
                            attrs: {
                              id: "exampleFormControlInput1",
                              placeholder: "User Name",
                              type: "text",
                              name: "name"
                            },
                            domProps: { value: _vm.form.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "name", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "name" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "has-error": _vm.form.errors.has("fullname")
                          }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "exampleFormControlInput1" } },
                            [_vm._v("Full Name")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.fullname,
                                expression: "form.fullname"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("fullname")
                            },
                            attrs: {
                              id: "exampleFormControlInput1",
                              placeholder: "Full Name",
                              type: "text",
                              name: "fullname"
                            },
                            domProps: { value: _vm.form.fullname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "fullname",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "fullname" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.form.errors.has("fname") }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "exampleFormControlInput1" } },
                            [_vm._v("Fathers Name")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.fname,
                                expression: "form.fname"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("fname")
                            },
                            attrs: {
                              id: "exampleFormControlInput1",
                              placeholder: "Fathers Name",
                              type: "text",
                              name: "fname"
                            },
                            domProps: { value: _vm.form.fname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "fname", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "fname" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.form.errors.has("mname") }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "exampleFormControlInput1" } },
                            [_vm._v("Mothers Name")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.mname,
                                expression: "form.mname"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("mname")
                            },
                            attrs: {
                              id: "exampleFormControlInput1",
                              placeholder: "Mothers Name",
                              type: "text",
                              name: "mname"
                            },
                            domProps: { value: _vm.form.mname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "mname", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "mname" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.form.errors.has("dob") }
                        },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-8" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.dob,
                                    expression: "form.dob"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "date" },
                                domProps: { value: _vm.form.dob },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "dob",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "dob" }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.form.errors.has("nid") }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "exampleFormControlInput1" } },
                            [_vm._v("NID No")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.nid,
                                expression: "form.nid"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("nid")
                            },
                            attrs: {
                              id: "exampleFormControlInput1",
                              placeholder: "NID No",
                              type: "text",
                              name: "nid"
                            },
                            domProps: { value: _vm.form.nid },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "nid", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "mname" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.form.errors.has("phone") }
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.phone,
                                expression: "form.phone"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("phone")
                            },
                            attrs: {
                              id: "exampleFormControlInput1",
                              placeholder: "Phone",
                              type: "text",
                              name: "phone"
                            },
                            domProps: { value: _vm.form.phone },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "phone", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "phone" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: { "has-error": _vm.form.errors.has("email") }
                        },
                        [
                          _vm._m(4),
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
                              id: "exampleFormControlInput1",
                              placeholder: "Email",
                              type: "text",
                              name: "email"
                            },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "email" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.infos.name
                    ? _c("p", { staticStyle: { display: "none" } }, [
                        _vm._v("You Have Sponsor?  "),
                        _vm.click
                          ? _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass: "badge badge-primary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.clickHere(_vm.ok)
                                    }
                                  }
                                },
                                [_vm._v("Click Here")]
                              )
                            ])
                          : _vm._e(),
                        _vm.need
                          ? _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass: "badge badge-danger",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.needFun(_vm.ok)
                                    }
                                  }
                                },
                                [_vm._v("No need")]
                              )
                            ])
                          : _vm._e()
                      ])
                    : _c("p", [
                        _vm._v("You Have Sponsor?  "),
                        _vm.click
                          ? _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass: "badge badge-primary",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.clickHere(_vm.ok)
                                    }
                                  }
                                },
                                [_vm._v("Click Here")]
                              )
                            ])
                          : _vm._e(),
                        _vm.need
                          ? _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass: "badge badge-danger",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.needFun(_vm.ok)
                                    }
                                  }
                                },
                                [_vm._v("No need")]
                              )
                            ])
                          : _vm._e()
                      ]),
                  _vm._v(" "),
                  _vm.sponsor
                    ? _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "exampleFormControlInput1" } },
                              [_vm._v("Sponsor Id")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.sponsorId,
                                  expression: "form.sponsorId"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "exampleFormControlInput1",
                                placeholder: "Sponsore Id",
                                type: "text",
                                name: "sponsorId"
                              },
                              domProps: { value: _vm.form.sponsorId },
                              on: {
                                keyup: _vm.sponsorGet,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "sponsorId",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.searchresult == true
                    ? _c(
                        "div",
                        _vm._l(_vm.result, function(res) {
                          return _c("div", { key: res.id }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form-group form-control-default"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "exampleFormControlInput1",
                                        disabled: "",
                                        type: "text"
                                      },
                                      domProps: { value: res.name }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-4" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form-group form-control-default"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "exampleFormControlInput1",
                                        disabled: "",
                                        type: "text"
                                      },
                                      domProps: { value: res.phone }
                                    })
                                  ]
                                )
                              ])
                            ])
                          ])
                        }),
                        0
                      )
                    : _vm.search == true
                    ? _c("div", [
                        _c("h4", { staticStyle: { color: "red" } }, [
                          _vm._v("Invalid Username")
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "has-error": _vm.form.errors.has("password")
                          }
                        },
                        [
                          _vm._m(5),
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
                              id: "exampleFormControlInput1",
                              placeholder: "Password",
                              type: "password",
                              name: "email"
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
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "exampleFormControlFile1" } },
                          [_vm._v("Upload Profile Image")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control-file",
                          attrs: {
                            type: "file",
                            id: "exampleFormControlFile1",
                            name: "image"
                          },
                          on: {
                            change: function($event) {
                              return _vm.changeImage($event)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "img-responsive",
                          attrs: {
                            src: _vm.form.image,
                            height: "70",
                            width: "90"
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "has-error": _vm.form.errors.has("presentAddress")
                          }
                        },
                        [
                          _vm._m(6),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.presentAddress,
                                expression: "form.presentAddress"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has(
                                "presentAddress"
                              )
                            },
                            attrs: {
                              id: "exampleFormControlInput1",
                              placeholder: "Present Address",
                              type: "text",
                              name: "presentAddress"
                            },
                            domProps: { value: _vm.form.presentAddress },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "presentAddress",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "presentAddress" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          class: {
                            "has-error": _vm.form.errors.has("permanentAddress")
                          }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "exampleFormControlInput1" } },
                            [_vm._v("Permanent Address")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.permanentAddress,
                                expression: "form.permanentAddress"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has(
                                "permanentAddress"
                              )
                            },
                            attrs: {
                              id: "exampleFormControlInput1",
                              placeholder: "Permanent Address",
                              type: "text",
                              name: "permanentAddress"
                            },
                            domProps: { value: _vm.form.permanentAddress },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "permanentAddress",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "permanentAddress" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-8" }, [
                      _c(
                        "div",
                        {
                          class: { "has-error": _vm.form.errors.has("terms") }
                        },
                        [
                          _c("p", [_vm._v("Terms And Condition")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.terms,
                                expression: "form.terms"
                              }
                            ],
                            staticClass: "termsc",
                            class: {
                              "is-invalid": _vm.form.errors.has("terms")
                            },
                            attrs: {
                              value: "1",
                              type: "checkbox",
                              name: "terms"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.form.terms)
                                ? _vm._i(_vm.form.terms, "1") > -1
                                : _vm.form.terms
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.terms,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = "1",
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "terms",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "terms",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "terms", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "terms" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Submit")]
                  )
                ]
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
                  _vm._m(7),
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
    return _c("label", { attrs: { for: "exampleFormControlSelect1" } }, [
      _vm._v("Select Division "),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "exampleFormControlInput1" } }, [
      _vm._v(" User Name"),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "col-sm-4  ml-0" }, [
      _vm._v("Date of Birth"),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "exampleFormControlInput1" } }, [
      _vm._v("Phone"),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "exampleFormControlInput1" } }, [
      _vm._v("Email"),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "exampleFormControlInput1" } }, [
      _vm._v("Password"),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "exampleFormControlInput1" } }, [
      _vm._v("Present Address"),
      _c("span", { staticStyle: { color: "red" } }, [_vm._v("*")])
    ])
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

/***/ "./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerRegistrationEntry_vue_vue_type_template_id_30992ff2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerRegistrationEntry.vue?vue&type=template&id=30992ff2& */ "./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=template&id=30992ff2&");
/* harmony import */ var _CustomerRegistrationEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerRegistrationEntry.vue?vue&type=script&lang=js& */ "./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerRegistrationEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerRegistrationEntry_vue_vue_type_template_id_30992ff2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomerRegistrationEntry_vue_vue_type_template_id_30992ff2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerRegistrationEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerRegistrationEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerRegistrationEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=template&id=30992ff2&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=template&id=30992ff2& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerRegistrationEntry_vue_vue_type_template_id_30992ff2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomerRegistrationEntry.vue?vue&type=template&id=30992ff2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Customer/CustomerRegistrationEntry.vue?vue&type=template&id=30992ff2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerRegistrationEntry_vue_vue_type_template_id_30992ff2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerRegistrationEntry_vue_vue_type_template_id_30992ff2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);