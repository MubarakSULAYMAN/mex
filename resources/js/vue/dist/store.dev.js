"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    // queryResult: null,
    loading: true,
    categories: [],
    expenses: []
  },
  mutations: {
    // LOAD_QUERY_RESULT(state, queryResult) {
    //     state.queryResult = queryResult
    // },
    CHANGE_LOADING_STATE: function CHANGE_LOADING_STATE(state, loading) {
      state.loading = loading;
    },
    // NEW_TITLE(state, newTitle) {
    //     state.samples.push({
    //         title: newTitle
    //     });
    // },
    SET_CATEGORIES: function SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_EXPENSES: function SET_EXPENSES(state, expenses) {
      state.expenses = expenses;
    }
  },
  actions: {
    // loadQueryResult({
    //     commit
    // }, queryResult) {
    //     commit('LOAD_QUERY_RESULT', queryResult)
    // },
    setLoading: function setLoading(_ref, loading) {
      var commit = _ref.commit;
      commit('CHANGE_LOADING_STATE', loading);
    },
    // addNewTitle({
    //     commit
    // }, newTitle) {
    //     commit('NEW_TITLE', newTitle)
    // },
    getCategories: function getCategories(_ref2) {
      var commit = _ref2.commit;

      _axios["default"].get('/api/categories').then(function (response) {
        return response.data;
      }).then(function (categories) {
        commit('SET_CATEGORIES', categories);
      });
    },
    getExpenses: function getExpenses(_ref3) {
      var commit = _ref3.commit;

      _axios["default"].get('/api/expenses').then(function (response) {
        return response.data;
      }).then(function (expenses) {
        commit('SET_EXPENSES', expenses);
      });
    }
  },
  getters: {
    queryResult: function queryResult(state) {
      return state.queryResult;
    },
    loading: function loading(state) {
      return state.loading;
    }
  },
  modules: {}
});

exports["default"] = _default;