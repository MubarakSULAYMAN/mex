(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TheShortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TheShortcut */ "./resources/js/vue/components/TheShortcut.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TheShortcut: _components_TheShortcut__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      selection: "",
      loading: false,
      expense: {
        narration: "",
        category_id: "",
        amount: "",
        date: ""
      },
      selectedID: 1,
      noInternetConnection: false,
      fieldError: false,
      disabled: false,
      formStage: "previewRecords",
      // isPreviewing: false,
      isEditing: false,
      isDeleting: false,
      addRecordPopUp: false,
      modificationPopUp: false,
      deleteRecordPopUp: false,
      confirmDeletePopUp: false
    };
  },
  methods: {
    addNewRecord: function addNewRecord() {
      var _this = this;

      var inputs = [this.expense.narration, this.expense.category, this.expense.amount, this.expense.date];

      if (inputs.includes("")) {
        this.fieldError = true;
        return;
      } // else if (!navigator.onLine) {
      //     this.noInternetConnection = true;
      //     return;
      // }
      // else if (this.isOffline) {
      //     this.offlineError = true;
      //     return;
      // }


      this.fieldError = false;
      this.noInternetConnection = false; // console.log("Sending...");

      console.log(this.expense.narration);
      console.log(this.expense.category_id);
      console.log(this.expense.amount);
      console.log(this.expense.date);
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/expense/store", {
        // .post("http://127.0.0.1:8000/api/expense/store", {
        // expense: this.expense
        narration: this.expense.narration,
        category_id: this.expense.category_id,
        amount: this.expense.amount,
        date: this.expense.date
      }).then(function (response) {
        if (response.status === 201) {
          _this.$store.dispatch("getExpenses");

          _this.addRecordPopUp = true;
          _this.loading = false;
        }
      })["catch"](function (error) {
        console.log(error.message);
      });
    },
    deleteRecord: function deleteRecord() {
      var _this2 = this;

      this.confirmDeletePopUp = true;

      if (!this.confirmDelete) {
        return;
      } else if (!navigator.onLine) {
        console.log("You do not have an internet connection.");
        return;
      } // else if (isOffline) {
      //     console.log("Unable to complete your request, internet not responding.")
      //     return;
      // }


      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/category/" + this.category.id) // .delete("http://127.0.0.1:8000/api/category/" + this.category.id)
      .then(function (response) {
        if (response.status === 200) {
          _this2.$store.dispatch("getExpenses");
        }

        _this2.loading = false;
      })["catch"](function (error) {
        console.log(error.message);
        console.log("Problem in deleting the record.");
      });
    },
    closeModificationPopUp: function closeModificationPopUp() {
      this.modificationPopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    },
    confirmDelete: function confirmDelete() {
      this.confirmDeletePopUp = false;
      this.deleteRecordPopUp = true;
    },
    cancelDelete: function cancelDelete() {
      this.confirmDeletePopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    },
    // addNewRecord() {
    //     this.addRecordPopUp = true;
    // },
    updateRecord: function updateRecord() {
      var _this3 = this;

      if (this.expense.name === "") {
        return;
      } else if (this.noInternetConnection) {
        console.log("You do not have an internet connection.");
        return;
      } // else if (isOffline) {
      //     console.log("Unable to complete your request, internet not responding.")
      //     return;
      // }


      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/expense/store", {
        // expense: this.expense
        narration: this.expense.narration,
        category_id: this.expense.category_id,
        amount: this.expense.amount,
        date: this.expense.date
      }).then(function (response) {
        if (response.status === 201) {
          _this3.$store.dispatch("getExpenses");

          _this3.addRecordPopUp = true;
          _this3.loading = false;
        }
      })["catch"](function (error) {
        console.log(error.message);
      }); // .put("http://127.0.0.1:8000/api/expense/" + this.expense.id)
      // .then((response) => {
      //     if (response.status === 200) {
      //         this.$store.dispatch('getExpenses')
      //         this.expense.name === "";
      //     }
      //     this.loading = false;
      // })
      // .catch((error) => {
      //     console.log(error.message);
      //     console.log("Problem in updating the records.");
      // });
      // this.addRecordPopUp = true;
    },
    closeNewRecordPopUp: function closeNewRecordPopUp() {
      this.addRecordPopUp = false;
      this.expense.narration = "";
      this.expense.category_id = "";
      this.expense.amount = "";
      this.expense.date = "";
    },
    editDeleteRecords: function editDeleteRecords() {
      this.formStage = "editDeleteRecords";
    },
    // openDeletePopUp() {
    //     this.confirmDeletePopUp = true;
    //     // this.isEditing = true;
    //     // this.isDeleting = true;
    // },
    editRecords: function editRecords() {
      this.isEditing = true;
      this.isDeleting = true;
    },
    cancelModification: function cancelModification() {
      this.isEditing = false;
      this.isDeleting = false;
    },
    saveModification: function saveModification() {
      this.modificationPopUp = true;
    },
    closeDeletePopUp: function closeDeletePopUp() {
      this.deleteRecordPopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    expenses: "expenses",
    categories: "categories"
  })),
  mounted: function mounted() {
    this.$store.dispatch("getExpenses");
    this.$store.dispatch("getCategories");
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-n[data-v-71ce9030] {\n  width: 5%;\n}\n.category-col[data-v-71ce9030] {\n  width: 15%;\n}\n.dropdown:hover .dropdown-menu[data-v-71ce9030] {\n  display: block;\n}\n.add-modal[data-v-71ce9030],\n.confirm-delete-modal[data-v-71ce9030],\n.delete-modal[data-v-71ce9030],\n.modification-modal[data-v-71ce9030] {\n  position: fixed;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.072);\n  filter: none;\n  z-index: 1111;\n}\n.add-modal-overlay[data-v-71ce9030],\n.confirm-delete-modal-overlay[data-v-71ce9030],\n.delete-modal-overlay[data-v-71ce9030],\n.modification-modal-overlay[data-v-71ce9030] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: rgba(0, 0, 0, 0.4); */\n  z-index: 999;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=template&id=71ce9030&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=template&id=71ce9030&scoped=true& ***!
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
    [
      _c("the-shortcut"),
      _vm._v(" "),
      _vm.formStage === "previewRecords"
        ? _c("section", { staticClass: "m-4 md:m-12" }, [
            _c("p", { staticClass: "font-light md:text-xl" }, [
              _vm._v("Will you like to add to list?")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "p-2 md:p-6 rounded-md transition duration-1500 ease-in-out hover:shadow-xl"
              },
              [
                _c(
                  "table",
                  {
                    staticClass:
                      "table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700"
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("tr", { staticClass: "custom-table-row" }, [
                      _c("td", { staticClass: "border p-1 md:px-8 md:py-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.expense.narration,
                              expression: "expense.narration"
                            }
                          ],
                          staticClass: "custom-input",
                          attrs: {
                            type: "text",
                            name: "",
                            id: "",
                            autocomplete: "off"
                          },
                          domProps: { value: _vm.expense.narration },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.expense,
                                "narration",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "border p-1 md:px-8 md:py-4" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.expense.category_id,
                                expression: "expense.category_id"
                              }
                            ],
                            staticClass:
                              "custom-input bg-white md:font-medium inline-flex items-center",
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
                                _vm.$set(
                                  _vm.expense,
                                  "category_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { disabled: "", value: "" } },
                              [
                                _vm._v(
                                  "\n                Please select an option\n              "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.categories, function(item, index) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: item.id } },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.name) +
                                      "\n              "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "border p-1 md:px-8 md:py-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.expense.amount,
                              expression: "expense.amount"
                            }
                          ],
                          staticClass: "custom-input",
                          attrs: {
                            type: "number",
                            name: "",
                            id: "",
                            autocomplete: "off"
                          },
                          domProps: { value: _vm.expense.amount },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.expense,
                                "amount",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "border p-1 md:px-8 md:py-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.expense.date,
                              expression: "expense.date"
                            }
                          ],
                          staticClass: "custom-input",
                          attrs: {
                            type: "date",
                            min: "2020-12-8",
                            max: "2030-12-31",
                            name: "",
                            id: "",
                            autocomplete: "off"
                          },
                          domProps: { value: _vm.expense.date },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.expense, "date", $event.target.value)
                            }
                          }
                        })
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm.fieldError
                  ? _c(
                      "div",
                      { staticClass: "mt-2 text-xs text-red-700 font-medium" },
                      [
                        _vm._v(
                          "\n        You cannot add an empty field, all fields are required.\n      "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.noInternetConnection
                  ? _c(
                      "div",
                      { staticClass: "mt-2 text-xs text-red-700 font-medium" },
                      [
                        _vm._v(
                          "\n        Your internet is not connected.\n      "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "add-btn md:h-11 px-2 md:px-6 py-1 md:py-2 mt-2 md:mt-6 right-0",
                    attrs: { disabled: _vm.disabled },
                    on: { click: _vm.addNewRecord }
                  },
                  [
                    _c("font-awesome-icon", {
                      staticClass: "hover:text-green-700 mr-2",
                      attrs: { icon: ["fas", "folder-plus"] }
                    }),
                    _vm._v("\n        Add\n      ")
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm.addRecordPopUp
              ? _c(
                  "div",
                  {
                    staticClass:
                      "fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50",
                    on: { click: _vm.closeNewRecordPopUp }
                  },
                  [
                    _vm.addRecordPopUp
                      ? _c(
                          "div",
                          { staticClass: "custom-modal" },
                          [
                            _c("font-awesome-icon", {
                              staticClass:
                                "text-red-500 text-xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700",
                              attrs: { icon: ["fas", "times-circle"] },
                              on: { click: _vm.closeNewRecordPopUp }
                            }),
                            _vm._v(" "),
                            _vm._m(1)
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.expenses.length > 0 && _vm.loading === false
              ? _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                      }
                    }
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "table",
                      { staticClass: "custom-table" },
                      [
                        _vm._m(3),
                        _vm._v(" "),
                        _vm._l(_vm.expenses, function(item, index) {
                          return _c(
                            "tr",
                            { key: index, staticClass: "custom-table-row" },
                            [
                              _c(
                                "td",
                                { staticClass: "border px-2 py-4" },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(++index) +
                                      "\n            "
                                  ),
                                  _c("font-awesome-icon", {
                                    staticClass:
                                      "opacity-0 group-hover:opacity-100 hover:text-blue-700",
                                    attrs: { icon: ["fas", "highlighter"] },
                                    on: { click: _vm.editDeleteRecords }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "border p-1 md:px-8 md:py-4" },
                                [_vm._v(_vm._s(item.narration))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "border p-1 md:px-8 md:py-4" },
                                [_vm._v(_vm._s(item.category.name))]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "border p-1 md:px-8 md:py-4" },
                                [
                                  _vm._v(
                                    "\n            ₦" +
                                      _vm._s(
                                        _vm._f("formatCurrency")(item.amount)
                                      ) +
                                      "\n          "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "border p-1 md:px-8 md:py-4" },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(_vm._f("formatDate")(item.date)) +
                                      "\n          "
                                  )
                                ]
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.loading === true
              ? _c("div", { staticClass: "custom-info" }, [
                  _vm._v("Updating...")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.expenses.length < 1 && _vm.loading === false
              ? _c("div", { staticClass: "custom-info" }, [
                  _vm._v("\n      No Record Available\n    ")
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.formStage === "editDeleteRecords"
        ? _c("section", [
            _c("div", { staticClass: "p-4 md:p-12" }, [
              _vm._m(4),
              _vm._v(" "),
              _vm.expenses.length > 0 && _vm.loading === false
                ? _c(
                    "table",
                    { staticClass: "custom-table" },
                    [
                      _vm._m(5),
                      _vm._v(" "),
                      _vm._l(_vm.expenses, function(item, index) {
                        return _c(
                          "tr",
                          { key: index, staticClass: "custom-table-row" },
                          [
                            _c(
                              "td",
                              { staticClass: "border px-4 py-4" },
                              [
                                _vm.isDeleting === false
                                  ? _c("font-awesome-icon", {
                                      staticClass:
                                        "opacity-0 group-hover:opacity-100 hover:text-red-700",
                                      attrs: { icon: ["fas", "trash"] },
                                      on: {
                                        click: function($event) {
                                          _vm.openDeletePopUp &&
                                            _vm.selectedID === index
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(
                                  "\n            " +
                                    _vm._s(++index) +
                                    "\n            "
                                ),
                                _vm.isEditing === false
                                  ? _c("font-awesome-icon", {
                                      staticClass:
                                        "opacity-0 group-hover:opacity-100 hover:text-pink-700",
                                      attrs: { icon: ["fas", "edit"] },
                                      on: {
                                        click: function($event) {
                                          _vm.editRecords &&
                                            _vm.selectedID === index
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border p-1 md:px-8 md:py-4" },
                              [
                                _vm.isEditing === false
                                  ? _c("span", [
                                      _vm._v(" " + _vm._s(item.narration) + " ")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.isEditing
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.narration,
                                          expression: "item.narration"
                                        }
                                      ],
                                      staticClass: "custom-table-input",
                                      attrs: {
                                        type: "text",
                                        name: "",
                                        id: "",
                                        autocomplete: "off"
                                      },
                                      domProps: { value: item.narration },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "narration",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border p-1 md:px-8 md:py-4" },
                              [
                                _vm.isEditing === false
                                  ? _c("span", [
                                      _vm._v(
                                        " " + _vm._s(item.category.name) + " "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.isEditing
                                  ? _c(
                                      "select",
                                      {
                                        staticClass:
                                          "custom-input bg-white md:font-medium inline-flex items-center"
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "", value: "" }
                                          },
                                          [_vm._v("Please select one")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { domProps: { value: _vm.value } },
                                          [_vm._v("Indiana")]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border p-1 md:px-8 md:py-4" },
                              [
                                _vm.isEditing === false
                                  ? _c("span", [
                                      _vm._v(
                                        "\n              ₦" +
                                          _vm._s(
                                            _vm._f("formatCurrency")(
                                              item.amount
                                            )
                                          ) +
                                          "\n            "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.isEditing
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.amount,
                                          expression: "item.amount"
                                        }
                                      ],
                                      staticClass: "custom-table-input",
                                      attrs: {
                                        type: "number",
                                        name: "",
                                        id: "",
                                        autocomplete: "off"
                                      },
                                      domProps: { value: item.amount },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "amount",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "border p-1 md:px-8 md:py-4" },
                              [
                                _vm.isEditing === false
                                  ? _c("span", [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(
                                            _vm._f("formatDate")(item.date)
                                          ) +
                                          "\n            "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.isEditing
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.date,
                                          expression: "item.date"
                                        }
                                      ],
                                      staticClass: "custom-table-input",
                                      attrs: {
                                        type: "date",
                                        min: "2020-12-8",
                                        max: "2030-12-31",
                                        name: "",
                                        id: "",
                                        autocomplete: "off"
                                      },
                                      domProps: { value: item.date },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "date",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.loading === true
                ? _c("div", { staticClass: "custom-info" }, [
                    _vm._v("Updating...")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.expenses.length < 1 && _vm.loading === false
                ? _c("div", { staticClass: "custom-info" }, [
                    _vm._v("\n        No Record Available\n      ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "fixed bottom-6 md:bottom-10 right-6 md:right-10 space-x-6 z-50"
                },
                [
                  _vm.isEditing
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "custom-btn bg-red-700 hover:text-red-700 hover:border-red-700 focus:ring-red-500",
                          on: { click: _vm.cancelModification }
                        },
                        [
                          _c("font-awesome-icon", {
                            staticClass: "hover:text-red-500 mr-2",
                            attrs: { icon: ["fas", "times"] }
                          }),
                          _vm._v("\n          Cancel\n        ")
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEditing
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "custom-btn bg-purple-700 hover:text-purple-700 hover:border-purple-700 focus:ring-purple-500",
                          on: { click: _vm.saveModification }
                        },
                        [
                          _c("font-awesome-icon", {
                            staticClass: "hover:text-purple-500 mr-2",
                            attrs: { icon: ["fas", "save"] }
                          }),
                          _vm._v("\n          Save\n        ")
                        ],
                        1
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _vm.confirmDeletePopUp
                ? _c(
                    "div",
                    {
                      staticClass:
                        "fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50",
                      on: { click: _vm.cancelDelete }
                    },
                    [
                      _vm.confirmDeletePopUp
                        ? _c("div", { staticClass: "custom-modal" }, [
                            _c(
                              "p",
                              {
                                staticClass:
                                  "p-4 md:p-10 md:text-3xl text-center text-red-500"
                              },
                              [
                                _vm._v(
                                  "\n            Are you sure you want to delete (name) from Category?\n          "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex place-content-center pb-4 md:pb-12 space-x-6"
                              },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "custom-btn border-red-700 text-red-700 hover:bg-red-700",
                                    on: { click: _vm.confirmDelete }
                                  },
                                  [
                                    _c("font-awesome-icon", {
                                      attrs: { icon: ["fas", "trash-alt"] }
                                    }),
                                    _vm._v(
                                      "\n              Confirm\n            "
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "custom-btn border-purple-700 hover:bg-purple-700",
                                    on: { click: _vm.cancelDelete }
                                  },
                                  [
                                    _c("font-awesome-icon", {
                                      attrs: { icon: ["fas", "backspace"] }
                                    }),
                                    _vm._v(
                                      "\n              Cancel\n            "
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.deleteRecordPopUp
                ? _c(
                    "div",
                    {
                      staticClass:
                        "fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50",
                      on: { click: _vm.closeDeletePopUp }
                    },
                    [
                      _vm.deleteRecordPopUp
                        ? _c(
                            "div",
                            { staticClass: "custom-modal" },
                            [
                              _c("font-awesome-icon", {
                                staticClass:
                                  "text-red-500 text-2xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700",
                                attrs: { icon: ["fas", "times-circle"] },
                                on: { click: _vm.closeDeletePopUp }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "p-10 md:text-3xl text-center text-red-500"
                                },
                                [
                                  _vm._v(
                                    "\n            (name) is successfully deleted from Category.\n          "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.modificationPopUp
                ? _c(
                    "div",
                    {
                      staticClass:
                        "fixed top-0 bottom-0 right-0 left-0 bg-purple-100 z-50",
                      on: { click: _vm.closeModificationPopUp }
                    },
                    [
                      _vm.modificationPopUp
                        ? _c(
                            "div",
                            { staticClass: "custom-modal" },
                            [
                              _c("font-awesome-icon", {
                                staticClass:
                                  "text-red-500 text-2xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700",
                                attrs: { icon: ["fas", "times-circle"] },
                                on: { click: _vm.closeModificationPopUp }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "p-10 md:text-3xl text-center text-purple-700"
                                },
                                [
                                  _vm._v(
                                    "\n            Modification implemented successfully.\n          "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e()
            ])
          ])
        : _vm._e()
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
      "tr",
      {
        staticClass:
          "bg-purple-700 border border-collapse text-white text-center"
      },
      [
        _c("th", { staticClass: "w-2/5 p-1 md:p-1 md:px-8 md:md:py-4" }, [
          _vm._v("Narration")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 p-1 md:px-8 md:py-4" }, [
          _vm._v("Category")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 p-1 md:px-8 md:py-4" }, [
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 p-1 md:px-8 md:py-4" }, [
          _vm._v("Date of Expenditure")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "p-2 md:p-10 md:text-3xl text-center text-green-500" },
      [
        _vm._v("\n          Field (name) added successfully\n          "),
        _c("span", { staticClass: "ri-checkbox-circle-line inline-block" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "group font-light md:text-xl mt-4 md:mt-12 inline-block" },
      [
        _vm._v("\n        Modify records as you wish.\n        "),
        _c(
          "span",
          {
            staticClass:
              "text-xs font-light md:font-medium opacity-0 group-hover:opacity-100"
          },
          [_vm._v("\n          Click highlighter icon to proceed.\n        ")]
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
        _c("th", { staticClass: "s-n p-1 md:px-8 md:py-4" }, [_vm._v("S/N")]),
        _vm._v(" "),
        _c("th", { staticClass: "w-3/5 p-1 md:px-8 md:py-4" }, [
          _vm._v("Narration")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "category-col p-1 md:px-8 md:py-4" }, [
          _vm._v("Category")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 p-1 md:px-8 md:py-4" }, [
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 p-1 md:px-8 md:py-4" }, [
          _vm._v("Date of Expenditure")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "group font-light md:text-xl inline-block" },
      [
        _vm._v("\n        You can only edit and delete here.\n        "),
        _c(
          "span",
          {
            staticClass: "text-xs font-medium opacity-0 group-hover:opacity-100"
          },
          [_vm._v("Click on trash icon to delete or pen-on-note to edit.")]
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
        _c("th", { staticClass: "s-n p-1 md:px-8 md:py-4" }, [_vm._v("S/N")]),
        _vm._v(" "),
        _c("th", { staticClass: "w-3/5 p-1 md:px-8 md:py-4" }, [
          _vm._v("Narration")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "category-col p-1 md:px-8 md:py-4" }, [
          _vm._v("Category")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/12 p-1 md:px-8 md:py-4" }, [
          _vm._v("Amount")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/12 p-1 md:px-8 md:py-4" }, [
          _vm._v("Date of Expenditure")
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

/***/ "./resources/js/vue/views/pages/ModifyExpenses.vue":
/*!*********************************************************!*\
  !*** ./resources/js/vue/views/pages/ModifyExpenses.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModifyExpenses_vue_vue_type_template_id_71ce9030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModifyExpenses.vue?vue&type=template&id=71ce9030&scoped=true& */ "./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=template&id=71ce9030&scoped=true&");
/* harmony import */ var _ModifyExpenses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModifyExpenses.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ModifyExpenses_vue_vue_type_style_index_0_id_71ce9030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css& */ "./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModifyExpenses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModifyExpenses_vue_vue_type_template_id_71ce9030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModifyExpenses_vue_vue_type_template_id_71ce9030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71ce9030",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/pages/ModifyExpenses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModifyExpenses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_style_index_0_id_71ce9030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=style&index=0&id=71ce9030&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_style_index_0_id_71ce9030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_style_index_0_id_71ce9030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_style_index_0_id_71ce9030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_style_index_0_id_71ce9030_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=template&id=71ce9030&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=template&id=71ce9030&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_template_id_71ce9030_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModifyExpenses.vue?vue&type=template&id=71ce9030&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyExpenses.vue?vue&type=template&id=71ce9030&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_template_id_71ce9030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyExpenses_vue_vue_type_template_id_71ce9030_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);