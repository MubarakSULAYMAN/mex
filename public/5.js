(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/TheShortcut.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/TheShortcut.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goTo: function goTo(route) {
      this.$router.push(route);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TheShortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TheShortcut */ "./resources/js/vue/components/TheShortcut.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TheShortcut: _components_TheShortcut__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      report: []
    };
  },
  methods: {
    generateReport: function generateReport() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/expense/group/by-month").then(function (response) {
        if (response.data.expenses !== 0) {
          _this.report = response.data;
        } // var dates = data.map(function(x) { return new Date(x[4]); })
        // var latest = new Date(Math.max.apply(null,dates));
        // var earliest = new Date(Math.min.apply(null,dates));

      })["catch"](function (error) {
        console.log(error.message);
      });
    }
  },
  created: function created() {
    this.generateReport();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/TheShortcut.vue?vue&type=template&id=32d8cb36&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/TheShortcut.vue?vue&type=template&id=32d8cb36& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "fixed bottom-4 left-4 space-y-1 z-50" }, [
    _c(
      "div",
      {
        staticClass: "shortcut-btn",
        on: {
          click: function($event) {
            return _vm.goTo("/home")
          }
        }
      },
      [
        _c("font-awesome-icon", {
          staticClass: "hover:text-purple-700 mr-2",
          attrs: { icon: ["fas", "home"] }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "shortcut-btn",
        on: {
          click: function($event) {
            return _vm.$router.go(-1)
          }
        }
      },
      [
        _c("font-awesome-icon", {
          staticClass: "hover:text-purple-700 mr-2",
          attrs: { icon: ["fas", "chevron-circle-left"] }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=template&id=c9606dbc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=template&id=c9606dbc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "p-4 md:p-12" },
    [
      _c("the-shortcut"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-full p-4 md:p-12 border-2 border-purple-700 font-light rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-xl hover:bg-purple-700 hover:text-white"
        },
        [
          _c("p", { staticClass: "md:tracking-wide leading-10" }, [
            _vm._v("Dear,")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "md:tracking-tight leading-relaxed" }, [
            _vm._v(
              "We appreciate our partnership and we must commend it has been remarkably amazing."
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "md:tracking-tight leading-relaxed" }, [
            _vm._v(
              "Here is an overview of all your expenses for the respective periods."
            )
          ]),
          _vm._v(" "),
          _c(
            "table",
            {
              staticClass:
                "table-fixed w-full my-4 md:my-12 shadow-lg bg-white border-collapse border hover:border-purple-700 text-sm md:text-base font-thin md:font-normal"
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm._l(_vm.report, function(item, index) {
                return _c(
                  "tr",
                  {
                    key: index,
                    staticClass: "custom-row even:border-purple-700"
                  },
                  [
                    _c("td", { staticClass: "border p-2 md:px-8 md:py-4" }, [
                      _vm._v(" " + _vm._s(item) + " ")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "border p-2 md:px-8 md:py-4" }, [
                      _vm._v(" " + _vm._s(_vm.key) + " ")
                    ])
                  ]
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "text-right tracking-tighter md:leading-loose" },
            [_vm._v("Yours Sincerely")]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "text-right tracking-tighter md:leading-loose" },
            [_vm._v("Your Expense Management App")]
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "text-right tracking-tighter md:leading-loose" },
            [_vm._v("12/12/2020")]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-1 md:mb-3" }, [
      _c("p", { staticClass: "font-light md:text-xl" }, [
        _vm._v(" Hi, your expense report is ready. ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "font-light md:text-xl" }, [
        _vm._v(" Kindly keep your credentials safe and personal. ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "tr",
      {
        staticClass:
          "bg-purple-700 border border-collapse text-white text-center"
      },
      [
        _c("th", { staticClass: "w-2 p-2 md:px-8 md:py-4" }, [
          _vm._v(" Period ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-2 p-2 md:px-8 md:py-4" }, [
          _vm._v(" Amount ")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/vue/components/TheShortcut.vue":
/*!*****************************************************!*\
  !*** ./resources/js/vue/components/TheShortcut.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheShortcut_vue_vue_type_template_id_32d8cb36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheShortcut.vue?vue&type=template&id=32d8cb36& */ "./resources/js/vue/components/TheShortcut.vue?vue&type=template&id=32d8cb36&");
/* harmony import */ var _TheShortcut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheShortcut.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/TheShortcut.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheShortcut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheShortcut_vue_vue_type_template_id_32d8cb36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheShortcut_vue_vue_type_template_id_32d8cb36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/TheShortcut.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/TheShortcut.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/vue/components/TheShortcut.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheShortcut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheShortcut.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/TheShortcut.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheShortcut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/TheShortcut.vue?vue&type=template&id=32d8cb36&":
/*!************************************************************************************!*\
  !*** ./resources/js/vue/components/TheShortcut.vue?vue&type=template&id=32d8cb36& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheShortcut_vue_vue_type_template_id_32d8cb36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheShortcut.vue?vue&type=template&id=32d8cb36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/TheShortcut.vue?vue&type=template&id=32d8cb36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheShortcut_vue_vue_type_template_id_32d8cb36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheShortcut_vue_vue_type_template_id_32d8cb36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/vue/views/pages/ExpensesReport.vue":
/*!*********************************************************!*\
  !*** ./resources/js/vue/views/pages/ExpensesReport.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpensesReport_vue_vue_type_template_id_c9606dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpensesReport.vue?vue&type=template&id=c9606dbc&scoped=true& */ "./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=template&id=c9606dbc&scoped=true&");
/* harmony import */ var _ExpensesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpensesReport.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExpensesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpensesReport_vue_vue_type_template_id_c9606dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpensesReport_vue_vue_type_template_id_c9606dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c9606dbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/pages/ExpensesReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpensesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpensesReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpensesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=template&id=c9606dbc&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=template&id=c9606dbc&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpensesReport_vue_vue_type_template_id_c9606dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpensesReport.vue?vue&type=template&id=c9606dbc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ExpensesReport.vue?vue&type=template&id=c9606dbc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpensesReport_vue_vue_type_template_id_c9606dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpensesReport_vue_vue_type_template_id_c9606dbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);