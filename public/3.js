(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/theShortcuts.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/theShortcuts.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/expensesReport.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/expensesReport.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_theShortcuts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/theShortcuts */ "./resources/js/vue/components/theShortcuts.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    theShortcuts: _components_theShortcuts__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/theShortcuts.vue?vue&type=template&id=21c70f3e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/components/theShortcuts.vue?vue&type=template&id=21c70f3e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        staticClass:
          "pt-3 pr-1 pl-3 pb-2 rounded-full text-white font-light text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100",
        on: {
          click: function($event) {
            return _vm.$router.push("/home")
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
        staticClass:
          "pt-3 pr-1 pl-3 pb-2 rounded-full text-white font-light text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-100",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/expensesReport.vue?vue&type=template&id=2d8c0d02&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/expensesReport.vue?vue&type=template&id=2d8c0d02&scoped=true& ***!
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
    { staticClass: "p-12" },
    [_c("the-shortcuts"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-3" }, [
      _c("p", { staticClass: "text-purple-700 font-light text-xl" }, [
        _vm._v(" Hi, your expense report is ready. ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-purple-700 font-light text-xl" }, [
        _vm._v(" Kindly keep your credentials safe and personal. ")
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
        staticClass:
          "w-full p-12 border-2 border-purple-700 font-light text-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-xl hover:bg-purple-700 hover:text-white"
      },
      [
        _c("p", { staticClass: " font tracking-wide leading-10" }, [
          _vm._v("Dear Somebody")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: " font tracking tight leading-relaxed" }, [
          _vm._v(
            "We appreciate our partnership and we must commend it has been remarkably amazing."
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: " font tracking tight leading-relaxed" }, [
          _vm._v(
            "Here is an overview of all your expenses for the month of December."
          )
        ]),
        _vm._v(" "),
        _c(
          "table",
          {
            staticClass:
              "table-fixed w-full my-12 shadow-lg bg-white border-collapse border hover:border-purple-700"
          },
          [
            _c(
              "tr",
              {
                staticClass:
                  "bg-purple-700 border border-collapse text-white text-center"
              },
              [
                _c("th", { staticClass: "w-2/5 px-8 py-4" }, [
                  _vm._v(" Narration ")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "w-1/5 px-8 py-4" }, [
                  _vm._v(" Category ")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "w-1/5 px-8 py-4" }, [
                  _vm._v(" Amount ")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "w-1/5 px-8 py-4" }, [_vm._v(" Date ")])
              ]
            ),
            _vm._v(" "),
            _c(
              "tr",
              {
                staticClass:
                  "border border-collapse even:border-purple-700 font-medium text-purple-700 text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
              },
              [
                _c("td", { staticClass: "border px-8 py-4" }, [
                  _vm._v(" Some superstory about fantasy. ")
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-8 py-4" }, [
                  _vm._v(" Food ")
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-8 py-4" }, [
                  _vm._v(" NGN5,000 ")
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "border px-8 py-4" }, [
                  _vm._v(" 12/11/2020 ")
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "text-right tracking-tighter leading-loose" }, [
          _vm._v("Yours Sincerely")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-right tracking-tighter leading-loose" }, [
          _vm._v("Your Expense Management App")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-right tracking-tighter leading-loose" }, [
          _vm._v("12/12/2020")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/vue/components/theShortcuts.vue":
/*!******************************************************!*\
  !*** ./resources/js/vue/components/theShortcuts.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theShortcuts_vue_vue_type_template_id_21c70f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theShortcuts.vue?vue&type=template&id=21c70f3e& */ "./resources/js/vue/components/theShortcuts.vue?vue&type=template&id=21c70f3e&");
/* harmony import */ var _theShortcuts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theShortcuts.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/theShortcuts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _theShortcuts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _theShortcuts_vue_vue_type_template_id_21c70f3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _theShortcuts_vue_vue_type_template_id_21c70f3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/theShortcuts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/theShortcuts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/vue/components/theShortcuts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_theShortcuts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./theShortcuts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/theShortcuts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_theShortcuts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/theShortcuts.vue?vue&type=template&id=21c70f3e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/vue/components/theShortcuts.vue?vue&type=template&id=21c70f3e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theShortcuts_vue_vue_type_template_id_21c70f3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./theShortcuts.vue?vue&type=template&id=21c70f3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/components/theShortcuts.vue?vue&type=template&id=21c70f3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theShortcuts_vue_vue_type_template_id_21c70f3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theShortcuts_vue_vue_type_template_id_21c70f3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/vue/views/pages/expensesReport.vue":
/*!*********************************************************!*\
  !*** ./resources/js/vue/views/pages/expensesReport.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expensesReport_vue_vue_type_template_id_2d8c0d02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expensesReport.vue?vue&type=template&id=2d8c0d02&scoped=true& */ "./resources/js/vue/views/pages/expensesReport.vue?vue&type=template&id=2d8c0d02&scoped=true&");
/* harmony import */ var _expensesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expensesReport.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/pages/expensesReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _expensesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _expensesReport_vue_vue_type_template_id_2d8c0d02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _expensesReport_vue_vue_type_template_id_2d8c0d02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d8c0d02",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/pages/expensesReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/pages/expensesReport.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/vue/views/pages/expensesReport.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expensesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./expensesReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/expensesReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_expensesReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/pages/expensesReport.vue?vue&type=template&id=2d8c0d02&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/expensesReport.vue?vue&type=template&id=2d8c0d02&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expensesReport_vue_vue_type_template_id_2d8c0d02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./expensesReport.vue?vue&type=template&id=2d8c0d02&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/expensesReport.vue?vue&type=template&id=2d8c0d02&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expensesReport_vue_vue_type_template_id_2d8c0d02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_expensesReport_vue_vue_type_template_id_2d8c0d02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);