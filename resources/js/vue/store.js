import vue from 'vue'
import vuex from 'vuex'
import Vue from 'vue';
import axios from 'axios';

Vue.use(vuex)

export default new vuex.Store({
    state: {
        samples: [{
                title: 'Hello 1',
            },
            {
                title: 'Hello 2',
            },
            {
                title: 'Hello 3',
            },
            {
                title: 'Hello 4',
            }
        ],

        categories: []
    },

    mutations: {
        NEW_TITLE(state, newTitle) {
            state.samples.push({
                title: newTitle
            });
        },

        SET_CATEGORIES (state, categories) {
            state.categories = categories
          }
    },

    actions: {
        addNewTitle({
            commit
        }, newTitle) {
            commit('NEW_TITLE', newTitle)
        },

        getCategories({
            commit
        }) {
            axios
                .get('/api/categories')
                .then(response => response.data)
                .then(categories => {
                    commit('SET_CATEGORIES', categories)
                })
        }
    },

    getters: {}
})
