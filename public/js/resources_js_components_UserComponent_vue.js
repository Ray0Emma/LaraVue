"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_UserComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    deleteUser: function deleteUser(id) {
      var _this = this;

      this.axios["delete"]("http://localhost:8000/api/users/".concat(id)).then(function (res) {
        var i = _this.users.map(function (data) {
          return data.id;
        }).indexOf(id); // console.log(this.users.map((data) => data.id));
        // console.log("id=".id);
        // console.log(i);


        _this.users.splice(i, 1);
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.axios.get("http://localhost:8000/api/users/").then(function (res) {
      _this2.users = res.data;
      console.log(_this2.users);
    });
  },
  data: function data() {
    return {
      users: []
    };
  }
});

/***/ }),

/***/ "./resources/js/components/UserComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/UserComponent.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserComponent_vue_vue_type_template_id_7f050fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=template&id=7f050fd2&scoped=true& */ "./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&scoped=true&");
/* harmony import */ var _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/UserComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserComponent_vue_vue_type_template_id_7f050fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserComponent_vue_vue_type_template_id_7f050fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f050fd2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/UserComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_7f050fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_7f050fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_7f050fd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserComponent.vue?vue&type=template&id=7f050fd2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UserComponent.vue?vue&type=template&id=7f050fd2&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-lg" }, [
    _c("div", { staticClass: "row justify-content-center mt-5" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-10 mt-4" }, [
        _c(
          "table",
          { staticClass: "table table-bordered" },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._l(_vm.users, function (usr) {
              return _c("tbody", { key: usr.id }, [
                _c("tr", [
                  _c("td", [_vm._v(_vm._s(usr.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(usr.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(usr.email))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { attrs: { role: "group" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-dark",
                          attrs: {
                            to: {
                              name: "edit",
                              params: {
                                id: usr.id,
                                // name: usr.name,
                                // email: usr.email,
                                // password: usr.password,
                              },
                            },
                          },
                        },
                        [_vm._v("Edit")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger ms-5",
                          on: {
                            click: function ($event) {
                              return _vm.deleteUser(usr.id)
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n                                Delete\n                            "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ])
            }),
          ],
          2
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 text-center mt-4" }, [
      _c("h1", [_vm._v("All Users")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);