"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("./views/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: _Home["default"]
  }, {
    path: '/home',
    redirect: '/'
  }, {
    path: '/categories',
    name: 'Categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/pages/Categories.vue'));
      });
    }
  }, {
    path: '/categories/modify',
    name: 'ModifyCategories',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/pages/ModifyCategories.vue'));
      });
    }
  }, {
    path: '/expenses',
    name: 'Expenses',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/pages/Expenses.vue'));
      });
    }
  }, {
    path: '/expenses/modify',
    name: 'ModifyExpenses',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/pages/ModifyExpenses.vue'));
      });
    }
  }, {
    path: '/expenses-summary',
    name: 'ExpensesSummary',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/pages/ExpensesSummary.vue'));
      });
    }
  }, {
    path: '/expenses-report',
    name: 'ExpensesReport',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/pages/ExpensesReport.vue'));
      });
    }
  }, {
    path: '*',
    name: "PageNotFound",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('./views/PageNotFound.vue'));
      });
    }
  }]
}); // const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

var _default = router;
exports["default"] = _default;