(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      locationId: "",
      districts: [],
      divisions: []
    };
  },
  mounted: function mounted() {
    this.viewDistrict();
    this.division();
  },
  methods: {
    viewDistrict: function viewDistrict() {
      var _this = this;

      axios.get("deliveryLocationWeb/".concat(this.$route.params.id)).then(function (res) {
        _this.districts = res.data;
      });
    },
    division: function division() {
      var _this2 = this;

      axios.get("/division").then(function (res) {
        _this2.divisions = res.data.division;
      });
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.viewDistrict();
      this.viewDistrict();
      this.division();
      this.$route.params.id = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=template&id=0f3abf01&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=template&id=0f3abf01& ***!
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
  return _c(
    "div",
    [
      _vm._l(_vm.divisions, function(division) {
        return _vm.$route.params.id == division.id
          ? _c(
              "div",
              {
                staticClass: "ml-3 mt-3",
                staticStyle: { "margin-bottom": "-14px" }
              },
              [_c("h5", [_vm._v(_vm._s(division.name))])]
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "ml-1 mr-1" },
        _vm._l(_vm.districts, function(district) {
          return _c(
            "b-card-group",
            { key: district.id, staticClass: "col-6 col-md-2 col-xs-6 mt-3" },
            [
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "thanalocation",
                      params: { id: district.districtId }
                    }
                  }
                },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "location",
                      attrs: {
                        "img-src": "mapImage/location.jpg",
                        "img-alt": "Img",
                        "img-top": ""
                      }
                    },
                    [
                      _c("b-card-text", { attrs: { align: "center" } }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(district.district.name) +
                            "\n          "
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        }),
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DistrictLocation_vue_vue_type_template_id_0f3abf01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DistrictLocation.vue?vue&type=template&id=0f3abf01& */ "./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=template&id=0f3abf01&");
/* harmony import */ var _DistrictLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DistrictLocation.vue?vue&type=script&lang=js& */ "./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DistrictLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DistrictLocation_vue_vue_type_template_id_0f3abf01___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DistrictLocation_vue_vue_type_template_id_0f3abf01___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website-view/Delivery-Location/DistrictLocation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DistrictLocation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictLocation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=template&id=0f3abf01&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=template&id=0f3abf01& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictLocation_vue_vue_type_template_id_0f3abf01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DistrictLocation.vue?vue&type=template&id=0f3abf01& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website-view/Delivery-Location/DistrictLocation.vue?vue&type=template&id=0f3abf01&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictLocation_vue_vue_type_template_id_0f3abf01___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictLocation_vue_vue_type_template_id_0f3abf01___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);