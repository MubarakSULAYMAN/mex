(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/PageNotFound.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/PageNotFound.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TheShortcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/TheShortcut */ "./resources/js/vue/components/TheShortcut.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TheShortcut: _components_TheShortcut__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glitch[data-v-59fe9966] {\n  text-decoration: none;\n  text-transform: uppercase;\n  position: absolute;\n  top: 0;\n  left: 25%;\n  margin: 0;\n  letter-spacing: 5px;\n}\n.glitch[data-v-59fe9966]::before,\n.glitch[data-v-59fe9966]::after {\n  display: block;\n  content: attr(data-glitch);\n  text-transform: uppercase;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0.8;\n}\n.glitch[data-v-59fe9966]::after {\n  color: #f0f;\n  z-index: -2;\n  animation: glitch-data-v-59fe9966 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both\n    infinite;\n}\n.glitch[data-v-59fe9966]::before {\n  color: #0ff;\n  z-index: -1;\n  -webkit-animation: glitch-data-v-59fe9966 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;\n          animation: glitch-data-v-59fe9966 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;\n}\n@media only screen and (max-width: 768px) {\n.glitch[data-v-59fe9966] {\n    position: absolute;\n    top: 0;\n    left: 17.5%;\n}\n}\n@media only screen and (max-width: 420px) {\n.glitch[data-v-59fe9966] {\n    position: absolute;\n    top: 0;\n    left: 5%;\n}\n}\n@-webkit-keyframes glitch-data-v-59fe9966 {\n0% {\n    transform: translate(0);\n}\n20% {\n    transform: translate(-5px, 5px);\n}\n40% {\n    transform: translate(-5px, -5px);\n}\n60% {\n    transform: translate(5px, 5px);\n}\n80% {\n    transform: translate(5px, -5px);\n}\nto {\n    transform: translate(0);\n}\n}\n@keyframes glitch-data-v-59fe9966 {\n0% {\n    transform: translate(0);\n}\n20% {\n    transform: translate(-5px, 5px);\n}\n40% {\n    transform: translate(-5px, -5px);\n}\n60% {\n    transform: translate(5px, 5px);\n}\n80% {\n    transform: translate(5px, -5px);\n}\nto {\n    transform: translate(0);\n}\n}\n.board-container[data-v-59fe9966] {\n  position: absolute;\n  bottom: -5%;\n  left: 35%;\n  display: grid;\n  background: white;\n  transform: scale(0.5);\n  z-index: -100;\n}\n.board[data-v-59fe9966] {\n  margin: auto;\n  height: 300px;\n  width: 300px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n}\n.square[data-v-59fe9966]:nth-child(even) {\n  background: white;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.square[data-v-59fe9966]:nth-child(odd) {\n  background: #6d28d9;\n  z-index: 1;\n  position: relative;\n}\n.square[data-v-59fe9966]:nth-child(5n + 1) {\n  -webkit-animation: rotate-data-v-59fe9966 linear 5s infinite;\n          animation: rotate-data-v-59fe9966 linear 5s infinite;\n}\n.square[data-v-59fe9966]:nth-child(5n + 2) {\n  -webkit-animation: rotate-data-v-59fe9966 linear 5s infinite;\n          animation: rotate-data-v-59fe9966 linear 5s infinite;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\n.square[data-v-59fe9966]:nth-child(5n + 3) {\n  -webkit-animation: rotate-data-v-59fe9966 linear 5s infinite;\n          animation: rotate-data-v-59fe9966 linear 5s infinite;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.square[data-v-59fe9966]:nth-child(5n + 4) {\n  -webkit-animation: rotate-data-v-59fe9966 linear 5s infinite;\n          animation: rotate-data-v-59fe9966 linear 5s infinite;\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s;\n}\n.square[data-v-59fe9966]:nth-child(5n + 5) {\n  -webkit-animation: rotate-data-v-59fe9966 linear 5s infinite;\n          animation: rotate-data-v-59fe9966 linear 5s infinite;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n@-webkit-keyframes rotate-data-v-59fe9966 {\n10% {\n    transform: rotate(45deg);\n}\n50% {\n    transform: rotate(45deg);\n}\n75% {\n    transform: rotate(0);\n}\n}\n@keyframes rotate-data-v-59fe9966 {\n10% {\n    transform: rotate(45deg);\n}\n50% {\n    transform: rotate(45deg);\n}\n75% {\n    transform: rotate(0);\n}\n}\n@media only screen and (max-width: 768px) {\n.board-container[data-v-59fe9966] {\n    position: absolute;\n    left: 30%;\n    transform: scale(0.4);\n}\n}\n@media only screen and (max-width: 420px) {\n.board-container[data-v-59fe9966] {\n    position: absolute;\n    bottom: -12.5%;\n    left: 12.5%;\n    transform: scale(0.3);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/PageNotFound.vue?vue&type=template&id=59fe9966&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/PageNotFound.vue?vue&type=template&id=59fe9966&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "select-none" },
    [
      _c("the-shortcut"),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "glitch text-base sm:text-2xl md:text-5xl leading-normal font-black",
          attrs: { "data-glitch": "Unknown destination" }
        },
        [_vm._v("\n    Unknown destination\n  ")]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass:
            "fixed bottom-0 left-10 sm:left-1/4 md:left-1/3 text-xs sm:text-base leading-normal font-black"
        },
        [_vm._v("\n    We understand this is not where you want to be.\n  ")]
      ),
      _vm._v(" "),
      _vm._m(1)
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
      "div",
      {
        staticClass:
          "px-16 pt-36 sm:px-36 sm:pt-48 md:px-36 md:py-52 text-lg sm:text-xl md:text-3xl leading-normal"
      },
      [
        _c(
          "p",
          {
            staticClass: "text-left tracking-wider leading-relaxed font-medium"
          },
          [_vm._v("\n      Dear Explorer,\n    ")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "text-left tracking-wide leading-none" }, [
          _vm._v(
            "\n      Navigation is quite easier with our navigation options. Kindly consider\n      that.\n    "
          )
        ]),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "text-right tracking-widest leading-loose font-bold" },
          [_vm._v("\n      Warm Regards.\n    ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "board-container" }, [
      _c("div", { staticClass: "board" }, [
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" }),
        _vm._v(" "),
        _c("div", { staticClass: "square" })
      ])
    ])
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

/***/ "./resources/js/vue/views/PageNotFound.vue":
/*!*************************************************!*\
  !*** ./resources/js/vue/views/PageNotFound.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageNotFound_vue_vue_type_template_id_59fe9966_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNotFound.vue?vue&type=template&id=59fe9966&scoped=true& */ "./resources/js/vue/views/PageNotFound.vue?vue&type=template&id=59fe9966&scoped=true&");
/* harmony import */ var _PageNotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNotFound.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/PageNotFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PageNotFound_vue_vue_type_style_index_0_id_59fe9966_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css& */ "./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageNotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageNotFound_vue_vue_type_template_id_59fe9966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageNotFound_vue_vue_type_template_id_59fe9966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "59fe9966",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/PageNotFound.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/PageNotFound.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/vue/views/PageNotFound.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNotFound.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/PageNotFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_style_index_0_id_59fe9966_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/PageNotFound.vue?vue&type=style&index=0&id=59fe9966&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_style_index_0_id_59fe9966_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_style_index_0_id_59fe9966_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_style_index_0_id_59fe9966_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_style_index_0_id_59fe9966_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/vue/views/PageNotFound.vue?vue&type=template&id=59fe9966&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/vue/views/PageNotFound.vue?vue&type=template&id=59fe9966&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_template_id_59fe9966_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNotFound.vue?vue&type=template&id=59fe9966&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/PageNotFound.vue?vue&type=template&id=59fe9966&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_template_id_59fe9966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_template_id_59fe9966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);