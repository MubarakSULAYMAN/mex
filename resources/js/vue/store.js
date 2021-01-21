import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // queryResult: null,
        loading: true,

        categories: [],
        expenses: [],
    },

    mutations: {
        // LOAD_QUERY_RESULT(state, queryResult) {
        //     state.queryResult = queryResult
        // },

        CHANGE_LOADING_STATE(state, loading) {
            state.loading = loading
        },

        // NEW_TITLE(state, newTitle) {
        //     state.samples.push({
        //         title: newTitle
        //     });
        // },

        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },

        SET_EXPENSES(state, expenses) {
            state.expenses = expenses
        }
    },

    actions: {
        // loadQueryResult({
        //     commit
        // }, queryResult) {
        //     commit('LOAD_QUERY_RESULT', queryResult)
        // },

        setLoading({
            commit
        }, loading) {
            commit('CHANGE_LOADING_STATE', loading)
        },

        // addNewTitle({
        //     commit
        // }, newTitle) {
        //     commit('NEW_TITLE', newTitle)
        // },

        getCategories({
            commit
        }) {
            axios
                .get('/api/categories')
                .then(response => response.data)
                .then(categories => {
                    commit('SET_CATEGORIES', categories)
                })
        },

        getExpenses({
            commit
        }) {
            axios
                .get('/api/expenses')
                .then(response => response.data)
                .then(expenses => {
                    commit('SET_EXPENSES', expenses)
                })
        }
    },

    getters: {
        queryResult: (state) => state.queryResult,
        loading: (state) => state.loading
    },
    modules: {}
})