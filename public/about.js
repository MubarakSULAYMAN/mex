(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/Categories.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/Categories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_TheShortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TheShortcut */ "./resources/js/vue/components/TheShortcut.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TheShortcut: _components_TheShortcut__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: false
    };
  },
  methods: {
    goTo: function goTo(route) {
      this.$router.push(route);
    } // addNewTitleItem() {
    //     this.$store.dispatch('addNewTitle', this.newTitle)
    // },
    // ...mapActions({
    //     addNewTitleItem: 'addNewTitle'
    // })

  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    categories: "categories"
  })),
  mounted: function mounted() {
    this.$store.dispatch("getCategories");
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/Categories.vue?vue&type=template&id=11781be2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/Categories.vue?vue&type=template&id=11781be2&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("the-shortcut"),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "modify-btn",
          on: {
            click: function($event) {
              return _vm.goTo("categories/modify")
            }
          }
        },
        [
          _c("font-awesome-icon", {
            staticClass: "hover:text-yellow-700 mr-2",
            attrs: { icon: ["fas", "file-invoice"] }
          }),
          _vm._v("\n    Modify\n  ")
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "p-4 md:p-12" }, [
        _vm.categories.length > 0 && _vm.loading === false
          ? _c("div", [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "custom-table w-full" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._l(_vm.categories, function(item, index) {
                    return _c(
                      "tr",
                      { key: index, staticClass: "custom-table-row" },
                      [
                        _c(
                          "td",
                          {
                            staticClass:
                              "border p-2 md:px-8 md:py-4 break-words"
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(++index) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "border p-2 md:px-8 md:py-4 break-words"
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(item.name) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "border p-2 md:px-8 md:py-4 break-words"
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm._f("formatDate")(item.updated_at)) +
                                "\n          "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass:
                              "border p-2 md:px-8 md:py-4 break-words"
                          },
                          [
                            item.expenses.length > 0
                              ? _c("span", [_vm._v(" Active ")])
                              : _vm._e(),
                            _vm._v(" "),
                            item.expenses.length < 1
                              ? _c("span", { staticClass: "line-through" }, [
                                  _vm._v(
                                    "\n              Inactive\n            "
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.loading === true
          ? _c("div", { staticClass: "custom-info" }, [_vm._v("Loading...")])
          : _vm._e(),
        _vm._v(" "),
        _vm.categories.length < 1 && _vm.loading === false
          ? _c("div", { staticClass: "custom-info" }, [
              _vm._v("\n      No Record Available\n    ")
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "group font-light md:text-xl inline-block" },
      [
        _vm._v("\n        Here are the existing records.\n        "),
        _c(
          "span",
          {
            staticClass:
              "text-xs font-normal md:font-medium opacity-0 group-hover:opacity-100"
          },
          [_vm._v("\n          Click the button below to modify.")]
        )
      ]
    )
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
        _c("th", { staticClass: "w-1/12 p-2 md:px-8 md:py-4" }, [
          _vm._v("S/N")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/2 p-2 md:px-8 md:py-4" }, [
          _vm._v("Category Name")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 p-2 md:px-8 md:py-4" }, [
          _vm._v("Date Created")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 p-2 md:px-8 md:py-4" }, [
          _vm._v("Status")
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

/***/ "./resources/js/vue/views/pages/Categories.vue":
/*!*****************************************************!*\
  !*** ./resources/js/vue/views/pages/Categories.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_11781be2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=11781be2&scoped=true& */ "./resources/js/vue/views/pages/Categories.vue?vue&type=template&id=11781be2&scoped=true&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/pages/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_11781be2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_11781be2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11781be2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/pages/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/pages/Categories.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/vue/views/pages/Categories.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/pages/Categories.vue?vue&type=template&id=11781be2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/Categories.vue?vue&type=template&id=11781be2&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_11781be2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=11781be2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/Categories.vue?vue&type=template&id=11781be2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_11781be2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_11781be2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);