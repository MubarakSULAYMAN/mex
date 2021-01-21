(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TheShortcut: _components_TheShortcut__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: false,
      category: {
        name: ""
      },
      selectedID: null,
      // categories: [],
      fieldError: false,
      noInternetConnection: false,
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

      if (this.category.name === "") {
        this.fieldError = true;
        return;
      } // else if (!navigator.onLine) {
      //     this.fieldError = false;
      //     this.noInternetConnection = true;
      //     return;
      // }
      // else if (this.isOffline) {
      //     this.offlineError = true;
      //     return;
      // }


      this.fieldError = false;
      this.noInternetConnection = false;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/category/store", {
        category: this.category
      }).then(function (response) {
        if (response.status === 201) {
          _this.$store.dispatch("getCategories");

          _this.addRecordPopUp = true;
          _this.loading = false;
        }
      })["catch"](function (error) {
        console.log(error.message);
      });
    },
    updateRecord: function updateRecord() {
      var _this2 = this;

      if (this.category.name === "") {
        this.fieldError = true;
        return;
      } else if (!navigator.onLine) {
        this.fieldError = false;
        this.noInternetConnection = true;
        return;
      } // else if (this.isOffline) {
      //     this.offlineError = true;
      //     return;
      // }


      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/category/" + this.category.id, {
        category: this.category
      }).then(function (response) {
        if (response.status === 201) {
          _this2.$store.dispatch("getCategories"); // this.category.name = "";


          _this2.modificationPopUp = true;
          _this2.loading = false; // console.log(response)
        }
      })["catch"](function (error) {
        console.log(error.message);
      }); // .put("http://127.0.0.1:8000/api/category/" + this.category.id)
      // .then((response) => {
      //     if (response.status === 200) {
      //         this.$store.dispatch('getCategories')
      //         this.category.name === "";
      //     }
      //     this.loading = false;
      // })
      // .catch((error) => {
      //     console.log(error.message);
      //     console.log("Problem in updating the records.");
      // });
      // this.addRecordPopUp = true;
    },
    deleteRecord: function deleteRecord() {
      var _this3 = this;

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
      // getRecords() {
      //     axios
      //         .get("/api/categories")
      //         .then((response) => {
      //             this.categories = response.data;
      //             console.log(response.data);
      //         })
      //         .catch((error) => {
      //             console.log(error.message);
      //         });
      // },


      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/category/" + this.category.id).then(function (response) {
        if (response.status === 200) {
          _this3.$store.dispatch("getCategories");
        }

        _this3.loading = false;
      })["catch"](function (error) {
        console.log(error.message);
        console.log("Problem in deleting the record.");
      });
    },
    closeModificationPopUp: function closeModificationPopUp() {
      // this.$store.dispatch('getCategories')
      this.modificationPopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    },
    confirmDelete: function confirmDelete() {
      // this.$store.dispatch('getCategories')
      this.confirmDeletePopUp = false;
      this.deleteRecordPopUp = true;
    },
    cancelDelete: function cancelDelete() {
      // this.$store.dispatch('getCategories')
      this.confirmDeletePopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    },
    closeNewRecordPopUp: function closeNewRecordPopUp() {
      this.addRecordPopUp = false;
      this.category.name = "";
    },
    editDeleteRecords: function editDeleteRecords() {
      this.formStage = "editDeleteRecords";
    },
    // openDeletePopUp() {
    //     this.confirmDeletePopUp = true;
    // this.isEditing = true;
    // this.isDeleting = true;
    // },
    editRecords: function editRecords(selectedItem) {
      this.selectedID = selectedItem;
      console.log(selectedItem);
      console.log(this.categories.indexOf(name));

      if (selectedItem === this.categories.indexOf(selectedItem)) {
        console.log("We are one");
      }

      this.isEditing = true;
      this.isDeleting = true;
    },
    cancelModification: function cancelModification() {
      this.isEditing = false;
      this.isDeleting = false;
    },
    // saveModification() {
    //     this.modificationPopUp = true;
    // },
    closeDeletePopUp: function closeDeletePopUp() {
      this.deleteRecordPopUp = false;
      this.isEditing = false;
      this.isDeleting = false;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    // titles: "samples",
    categories: "categories"
  })),
  mounted: function mounted() {
    this.$store.dispatch("getCategories"); // this.getRecords();
    // this.$store.dispatch('loadPosts')
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=template&id=36058dae&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=template&id=36058dae&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
              "form",
              {
                staticClass:
                  "px-6 py-2 md:py-6 rounded-md transition duration-1500 ease-in-out hover:shadow-xl",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 w-100"
                  },
                  [
                    _c("span", { staticClass: "col-span-11" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.category.name,
                            expression: "category.name"
                          }
                        ],
                        staticClass:
                          "w-full p-2 border-2 border-purple-700 font-medium rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500",
                        attrs: { type: "text", autocomplete: "off" },
                        domProps: { value: _vm.category.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.category, "name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.fieldError
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "mt-2 text-xs text-red-700 font-medium"
                            },
                            [
                              _vm._v(
                                "\n            You cannot add an empty field.\n          "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.noInternetConnection
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "mt-2 text-xs text-red-700 font-medium"
                            },
                            [
                              _vm._v(
                                "\n            Your internet is not connected.\n          "
                              )
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", {}, [
                      _c(
                        "button",
                        {
                          staticClass: "add-btn md:w-full p-2",
                          on: { click: _vm.addNewRecord }
                        },
                        [
                          _c("font-awesome-icon", {
                            staticClass: "hover:text-green-700 mr-2",
                            attrs: { icon: ["fas", "folder-plus"] }
                          }),
                          _vm._v("\n            Add\n          ")
                        ],
                        1
                      )
                    ])
                  ]
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
                            _vm._m(0)
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.categories.length > 0 && _vm.loading === false
              ? _c("div", [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "table",
                    { staticClass: "md:w-full custom-table" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(item, index) {
                        return _c(
                          "tr",
                          { key: index, staticClass: "custom-table-row" },
                          [
                            _c(
                              "td",
                              { staticClass: "border px-4 py-4 break-words" },
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
                                    _vm._s(
                                      _vm._f("formatDate")(item.updated_at)
                                    ) +
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
                                  ? _c(
                                      "span",
                                      { staticClass: "line-through" },
                                      [
                                        _vm._v(
                                          "\n              Inactive\n            "
                                        )
                                      ]
                                    )
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
              ? _c("div", { staticClass: "custom-info" }, [
                  _vm._v("Updating...")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.categories.length < 1 && _vm.loading === false
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
              _vm._m(3),
              _vm._v(" "),
              _vm.categories.length > 0
                ? _c(
                    "table",
                    { staticClass: "custom-table md:w-full" },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(item, index) {
                        return _c(
                          "tr",
                          { key: index, staticClass: "custom-table-row" },
                          [
                            _c(
                              "td",
                              { staticClass: "border px-4 py-4 break-words" },
                              [
                                _vm.isDeleting === false
                                  ? _c("font-awesome-icon", {
                                      staticClass:
                                        "opacity-0 group-hover:opacity-100 hover:text-red-700",
                                      attrs: { icon: ["fas", "trash"] },
                                      on: {
                                        click: function($event) {
                                          _vm.deleteRecord &&
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
                                          return _vm.editRecords(item.id)
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
                              {
                                staticClass:
                                  "border p-2 md:px-8 md:py-4 break-words"
                              },
                              [
                                _vm.isEditing === false
                                  ? _c("span", [
                                      _vm._v(" " + _vm._s(item.name) + " ")
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.isEditing
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.name,
                                          expression: "item.name"
                                        }
                                      ],
                                      staticClass:
                                        "w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium transform transition duration-1000 ease-in-out hover:text-purple-700 hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500",
                                      attrs: {
                                        type: "text",
                                        name: "",
                                        id: "",
                                        autocomplete: "off"
                                      },
                                      domProps: { value: item.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "name",
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
                              {
                                staticClass:
                                  "border p-2 md:px-8 md:py-4 break-words"
                              },
                              [
                                _c("span", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm._f("formatDate")(item.updated_at)
                                      ) +
                                      " "
                                  )
                                ])
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
                                _c("span", [
                                  item.expenses.length > 0
                                    ? _c("span", [_vm._v(" Active ")])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.expenses.length < 1
                                    ? _c(
                                        "span",
                                        { staticClass: "line-through" },
                                        [
                                          _vm._v(
                                            "\n                Inactive\n              "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _vm.fieldError
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-2 text-xs text-red-700 font-medium"
                                  },
                                  [
                                    _vm._v(
                                      "\n            You cannot add an empty field.\n          "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.noInternetConnection
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "mt-2 text-xs text-red-700 font-medium"
                                  },
                                  [
                                    _vm._v(
                                      "\n            Your internet is not connected.\n          "
                                    )
                                  ]
                                )
                              : _vm._e()
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
              _vm.categories.length < 1 && _vm.loading === false
                ? _c("div", { staticClass: "custom-info" }, [
                    _vm._v("\n        No Record Available\n      ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "fixed bottom-5 md:bottom-10 right-5 md:right-10 space-x-6 z-50"
                },
                [
                  _vm.isEditing
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "custom-btn bg-red-700 hover:text-red-700 focus:ring-red-500 hover:border-red-700",
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
                            "custom-btn bg-purple-700 hover:text-purple-700 focus:ring-purple-500 hover:border-purple-700"
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
                                  "p-4 md:p-10 text-lg md:text-3xl text-center text-red-500"
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
                                  "text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700",
                                attrs: { icon: ["fas", "times-circle"] },
                                on: { click: _vm.closeDeletePopUp }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "p-2 md:p-10 md:text-3xl text-center text-red-500"
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
                                  "text-red-500 text-xl md:text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700",
                                attrs: { icon: ["fas", "times-circle"] },
                                on: { click: _vm.closeModificationPopUp }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "p-2 md:p-10 md:text-3xl text-center text-purple-700"
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
          [
            _vm._v(
              "\n          Click on trash icon to delete or pen-on-note to edit.\n        "
            )
          ]
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

/***/ "./resources/js/vue/views/pages/ModifyCategories.vue":
/*!***********************************************************!*\
  !*** ./resources/js/vue/views/pages/ModifyCategories.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModifyCategories_vue_vue_type_template_id_36058dae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModifyCategories.vue?vue&type=template&id=36058dae&scoped=true& */ "./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=template&id=36058dae&scoped=true&");
/* harmony import */ var _ModifyCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModifyCategories.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModifyCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModifyCategories_vue_vue_type_template_id_36058dae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModifyCategories_vue_vue_type_template_id_36058dae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36058dae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/pages/ModifyCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModifyCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=template&id=36058dae&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=template&id=36058dae&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyCategories_vue_vue_type_template_id_36058dae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ModifyCategories.vue?vue&type=template&id=36058dae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/ModifyCategories.vue?vue&type=template&id=36058dae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyCategories_vue_vue_type_template_id_36058dae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModifyCategories_vue_vue_type_template_id_36058dae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);