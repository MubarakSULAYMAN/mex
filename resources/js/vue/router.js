import Vue from "vue";
import VueRouter from "vue-router";
import Home from './views/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/categories',
            name: 'Categories',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/pages/Categories.vue')
        },
        {
            path: '/categories/modify',
            name: 'ModifyCategories',
            component: () =>
                import ('./views/pages/ModifyCategories.vue')
        },
        {
            path: '/expenses',
            name: 'Expenses',
            component: () =>
                import ('./views/pages/Expenses.vue')
        },
        {
            path: '/expenses/modify',
            name: 'ModifyExpenses',
            component: () =>
                import ('./views/pages/ModifyExpenses.vue')
        },
        {
            path: '/expenses-summary',
            name: 'ExpensesSummary',
            component: () =>
                import ('./views/pages/ExpensesSummary.vue')
        },
        {
            path: '/expenses-report',
            name: 'ExpensesReport',
            component: () =>
                import ('./views/pages/ExpensesReport.vue')
        },
        {
            path: '*',
            name: "PageNotFound",
            component: () =>
                import ('./views/PageNotFound.vue'),
        }
    ]
});

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router;