(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  },
  data: function data() {
    return {
      category: {
        name: ''
      },
      formStage: 'previewRecords',
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
    addNewRecord: function addNewRecord() {
      var _this = this;

      if (this.category.name === '') {
        return;
      }

      axios.post('api/category/store', {
        category: this.category
      }).then(function (response) {
        if (response.status === 201) {
          _this.category.name = "";
          console.log("Sent"); // this.$emit('reloadlist');
        }
      })["catch"](function (error) {
        console.log(error.message);
      });
    },
    // addNewRecord() {
    //     if (this.category.name === '') {
    //         return;
    //     }
    //     axios.post('api/category/store', {
    //             category: this.category
    //         })
    //         .then(response => {
    //             if (response.status === 201) {
    //                 this.category.name = ''
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // this.addRecordPopUp = true;
    // },
    updateRecord: function updateRecord() {
      var _this2 = this;

      if (this.category.name === '') {
        return;
      }

      axios.put('api/category/' + this.category.id, {
        category: this.category
      }).then(function (response) {
        if (response.status === 200) {
          _this2.category.name === '';
        }
      })["catch"](function (error) {
        console.log(error);
      }); // this.addRecordPopUp = true;
    },
    getRecord: function getRecord() {
      var _this3 = this;

      axios.get('api/category').then(function (response) {
        _this3.categories = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeNewRecordPopUp: function closeNewRecordPopUp() {
      this.addRecordPopUp = false;
    },
    editDeleteRecords: function editDeleteRecords() {
      this.formStage = 'editDeleteRecords';
    },
    openDeletePopUp: function openDeletePopUp() {
      this.confirmDeletePopUp = true; // this.isEditing = true;
      // this.isDeleting = true;
    },
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
  created: function created() {
    this.getRecord();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-modal[data-v-4d8ff5ee],\n.confirm-delete-modal[data-v-4d8ff5ee],\n.delete-modal[data-v-4d8ff5ee],\n.modification-modal[data-v-4d8ff5ee] {\n  position: fixed;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n  box-shadow:\n        0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n        0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n        0 12.5px 10px rgba(0, 0, 0, 0.06),\n        0 22.3px 17.9px rgba(0, 0, 0, 0.072);\n  filter: none;\n  z-index: 1111;\n}\n.add-modal-overlay[data-v-4d8ff5ee],\n.confirm-delete-modal-overlay[data-v-4d8ff5ee],\n.delete-modal-overlay[data-v-4d8ff5ee],\n.modification-modal-overlay[data-v-4d8ff5ee] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: rgba(0, 0, 0, 0.4); */\n  z-index: 999;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=template&id=4d8ff5ee&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=template&id=4d8ff5ee&scoped=true& ***!
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
      _c("the-shortcuts"),
      _vm._v(" "),
      _vm.formStage === "previewRecords"
        ? _c("section", { staticClass: "m-12" }, [
            _c("p", { staticClass: "text-purple-700 font-light text-xl" }, [
              _vm._v(" Will you like to add to list? ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "px-12 py-6 rounded-md transition duration-1500 ease-in-out hover:shadow-xl"
              },
              [
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
                    "w-5/6 h-10 p-2 border-2 border-purple-700 font-medium text-purple-700 rounded-md transform transition duration-1000 ease-in-out hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-0 focus:ring-purple-500",
                  attrs: { type: "text" },
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
                _c(
                  "button",
                  {
                    staticClass:
                      "h-10 py-2 px-6 ml-12 rounded-md text-white bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50",
                    on: {
                      click: function($event) {
                        return _vm.addNewRecord()
                      }
                    }
                  },
                  [
                    _c("font-awesome-icon", {
                      staticClass: "hover:text-green-700 mr-2",
                      attrs: { icon: ["fas", "folder-plus"] }
                    }),
                    _vm._v("\n                Add\n            ")
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
                    staticClass: "add-modal-overlay bg-purple-100",
                    on: {
                      click: function($event) {
                        return _vm.closeNewRecordPopUp()
                      }
                    }
                  },
                  [
                    _vm.addRecordPopUp
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "add-modal group m-12 shadow-2xl bg-white rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl select-none"
                          },
                          [
                            _c("font-awesome-icon", {
                              staticClass:
                                " text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700",
                              attrs: { icon: ["fas", "times-circle"] },
                              on: {
                                click: function($event) {
                                  return _vm.closeNewRecordPopUp()
                                }
                              }
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
            _vm._m(1),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass:
                  "table-fixed shadow-lg bg-white border-collapse border hover:border-purple-700"
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tr",
                  {
                    staticClass:
                      "group border border-collapse even:border-purple-700 font-medium text-purple-700 text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
                  },
                  [
                    _c(
                      "td",
                      { staticClass: "border px-4 py-4" },
                      [
                        _vm._v(" 1\n                    "),
                        _c("font-awesome-icon", {
                          staticClass:
                            "opacity-0 group-hover:opacity-100 hover:text-blue-700",
                          attrs: { icon: ["fas", "highlighter"] },
                          on: {
                            click: function($event) {
                              return _vm.editDeleteRecords()
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "border px-8 py-4" }, [
                      _vm._v(" Food ")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "border px-8 py-4" }, [
                      _vm._v(" 12/12/2020 ")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "border px-8 py-4" }, [
                      _vm._v(" Active ")
                    ])
                  ]
                )
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.formStage === "editDeleteRecords"
        ? _c("section", [
            _c("div", { staticClass: "p-12" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "table",
                {
                  staticClass:
                    "table-fixed w-full shadow-lg bg-white border-collapse border hover:border-purple-700"
                },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _c(
                    "tr",
                    {
                      staticClass:
                        "group border border-collapse even:border-purple-700 font-medium text-purple-700 text-center transform transition duration-500 ease-in-out hover:bg-purple-500 hover:text-white"
                    },
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
                                    return _vm.openDeletePopUp()
                                  }
                                }
                              })
                            : _vm._e(),
                          _vm._v(
                            "\n                        1\n                        "
                          ),
                          _vm.isEditing === false
                            ? _c("font-awesome-icon", {
                                staticClass:
                                  "opacity-0 group-hover:opacity-100 hover:text-pink-700",
                                attrs: { icon: ["fas", "edit"] },
                                on: {
                                  click: function($event) {
                                    return _vm.editRecords()
                                  }
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "border px-8 py-4" }, [
                        _vm.isEditing === false
                          ? _c("span", [_vm._v(" Name ")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isEditing
                          ? _c("input", {
                              staticClass:
                                "w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium text-purple-700 transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500",
                              attrs: { type: "text", name: "", id: "" }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "border px-8 py-4" }, [
                        _vm.isEditing === false
                          ? _c("span", [_vm._v(" 12/12/2020 ")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isEditing
                          ? _c("input", {
                              staticClass:
                                "w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium text-purple-700 transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500",
                              attrs: { type: "text", name: "", id: "" }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "border px-8 py-4" }, [
                        _vm.isEditing === false
                          ? _c("span", [_vm._v(" Active ")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isEditing
                          ? _c("input", {
                              staticClass:
                                "w-full p-2 border-2 border-transparent shadow-lg rounded-md font-medium text-purple-700 transform transition duration-1000 ease-in-out hover:shadow-lg focus:outline-none focus:border-purple-700 focus:ring-0 focus:ring-purple-500",
                              attrs: { type: "text", name: "", id: "" }
                            })
                          : _vm._e()
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "fixed bottom-10 right-10 space-x-6 z-50" },
                [
                  _vm.isEditing
                    ? _c(
                        "button",
                        {
                          staticClass:
                            "py-2 px-6 rounded-md text-white font-light text-2xl bg-red-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-red-700 focus:outline-none focus:ring-8 focus:ring-red-500 focus:ring-opacity-50 border hover:border-red-700 hover:bg-purple-300",
                          on: {
                            click: function($event) {
                              return _vm.cancelModification()
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            staticClass: "hover:text-red-500 mr-2",
                            attrs: { icon: ["fas", "times"] }
                          }),
                          _vm._v(
                            "\n                    Cancel\n                "
                          )
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
                            "py-2 px-6 rounded-md text-white font-light text-2xl bg-purple-700 transform transition duration-500 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-500 focus:ring-opacity-50 border hover:border-purple-700 hover:bg-purple-300",
                          on: {
                            click: function($event) {
                              return _vm.saveModification()
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            staticClass: "hover:text-purple-500 mr-2",
                            attrs: { icon: ["fas", "save"] }
                          }),
                          _vm._v("\n                    Save\n                ")
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
                      staticClass: "confirm-delete-modal-overlay bg-purple-100",
                      on: {
                        click: function($event) {
                          return _vm.cancelDelete()
                        }
                      }
                    },
                    [
                      _vm.confirmDeletePopUp
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "confirm-delete-modal group m-12 bg-white shadow-2xl rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl"
                            },
                            [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "p-10 text-3xl text-center text-red-500"
                                },
                                [
                                  _vm._v(
                                    " Are you sure you want to delete (name) from Category? "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "flex place-content-center pb-12 space-x-6"
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "border border-red-700 px-4 py-2 rounded-full font-medium text-lg text-red-700 transition duration-1500 ease-in-out hover:bg-red-700 hover:text-white focus:outline-none",
                                      on: {
                                        click: function($event) {
                                          return _vm.confirmDelete()
                                        }
                                      }
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        attrs: { icon: ["fas", "trash-alt"] }
                                      }),
                                      _vm._v(
                                        "\n                            Confirm\n                        "
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "border border-purple-700 px-5 py-2 rounded-full font-medium text-lg text-purple-700 transition duration-1500 ease-in-out hover:bg-purple-700 hover:text-white focus:outline-none",
                                      on: {
                                        click: function($event) {
                                          return _vm.cancelDelete()
                                        }
                                      }
                                    },
                                    [
                                      _c("font-awesome-icon", {
                                        attrs: { icon: ["fas", "backspace"] }
                                      }),
                                      _vm._v(
                                        "\n                            Cancel\n                        "
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.deleteRecordPopUp
                ? _c(
                    "div",
                    {
                      staticClass: "delete-modal-overlay bg-purple-100",
                      on: {
                        click: function($event) {
                          return _vm.closeDeletePopUp()
                        }
                      }
                    },
                    [
                      _vm.deleteRecordPopUp
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "delete-modal group m-12 bg-white shadow-2xl rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl"
                            },
                            [
                              _c("font-awesome-icon", {
                                staticClass:
                                  "text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700",
                                attrs: { icon: ["fas", "times-circle"] },
                                on: {
                                  click: function($event) {
                                    return _vm.closeDeletePopUp()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "p-10 text-3xl text-center text-red-500"
                                },
                                [
                                  _vm._v(
                                    " (name) is successfully deleted from Category. "
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
                      staticClass: "modification-modal-overlay bg-purple-100",
                      on: {
                        click: function($event) {
                          return _vm.closeModificationPopUp()
                        }
                      }
                    },
                    [
                      _vm.modificationPopUp
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "modification-modal group m-12 bg-white shadow-2xl rounded-tl-3xl rounded-tr-xl rounded-br-3xl rounded-bl-xl border"
                            },
                            [
                              _c("font-awesome-icon", {
                                staticClass:
                                  "text-red-500 text-5xl right-0 opacity-0 group-hover:opacity-100 hover:text-red-700",
                                attrs: { icon: ["fas", "times-circle"] },
                                on: {
                                  click: function($event) {
                                    return _vm.closeModificationPopUp()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "p-10 text-3xl text-center text-purple-700"
                                },
                                [
                                  _vm._v(
                                    " Modification implemented successfully. "
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
      { staticClass: "p-10 text-3xl text-center text-green-500" },
      [
        _vm._v(
          "\n                    Category (name) added successfully\n                    "
        ),
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
      {
        staticClass:
          "group text-purple-700 font-light text-xl mt-12 inline-block"
      },
      [
        _vm._v(" Modify records as you wish. "),
        _c(
          "span",
          {
            staticClass: "text-xs font-medium opacity-0 group-hover:opacity-100"
          },
          [
            _vm._v(
              "Click\n                highlighter icon to\n                proceed."
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
        _c("th", { staticClass: "w-1/12 px-8 py-4" }, [_vm._v(" S/N ")]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/2 px-8 py-4" }, [
          _vm._v(" Category Name ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 px-8 py-4" }, [
          _vm._v(" Date Created ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 px-8 py-4" }, [_vm._v(" Status ")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "group text-purple-700 font-light text-xl inline-block" },
      [
        _vm._v(" You can only edit and delete here. "),
        _c(
          "span",
          {
            staticClass: "text-xs font-medium opacity-0 group-hover:opacity-100"
          },
          [
            _vm._v(
              "Click on trash\n                    icon to delete or pen-on-note to edit."
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
        _c("th", { staticClass: "w-1/12 px-8 py-4" }, [_vm._v(" S/N ")]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/2 px-8 py-4" }, [
          _vm._v(" Category Name ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 px-8 py-4" }, [
          _vm._v(" Date Created ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/5 px-8 py-4" }, [_vm._v(" Status ")])
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

/***/ "./resources/js/vue/views/pages/modifyCategories.vue":
/*!***********************************************************!*\
  !*** ./resources/js/vue/views/pages/modifyCategories.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modifyCategories_vue_vue_type_template_id_4d8ff5ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifyCategories.vue?vue&type=template&id=4d8ff5ee&scoped=true& */ "./resources/js/vue/views/pages/modifyCategories.vue?vue&type=template&id=4d8ff5ee&scoped=true&");
/* harmony import */ var _modifyCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifyCategories.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/pages/modifyCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _modifyCategories_vue_vue_type_style_index_0_id_4d8ff5ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css& */ "./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modifyCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modifyCategories_vue_vue_type_template_id_4d8ff5ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modifyCategories_vue_vue_type_template_id_4d8ff5ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d8ff5ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/pages/modifyCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/pages/modifyCategories.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/modifyCategories.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modifyCategories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_style_index_0_id_4d8ff5ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=style&index=0&id=4d8ff5ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_style_index_0_id_4d8ff5ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_style_index_0_id_4d8ff5ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_style_index_0_id_4d8ff5ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_style_index_0_id_4d8ff5ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/vue/views/pages/modifyCategories.vue?vue&type=template&id=4d8ff5ee&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/vue/views/pages/modifyCategories.vue?vue&type=template&id=4d8ff5ee&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_template_id_4d8ff5ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modifyCategories.vue?vue&type=template&id=4d8ff5ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/vue/views/pages/modifyCategories.vue?vue&type=template&id=4d8ff5ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_template_id_4d8ff5ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modifyCategories_vue_vue_type_template_id_4d8ff5ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);