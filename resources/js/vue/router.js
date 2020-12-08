import Vue from "vue";
import VueRouter from "vue-router";
import Home from './views/home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
      base: process.env.BASE_URL,
    routes: [
        {
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
          component: () => import(/* webpackChunkName: "about" */ './views/pages/categories.vue')
        },
        {
          path: '/categories/modify',
          name: 'ModifyCategories',
          component: () => import('./views/pages/modifyCategories.vue')
        },
        {
          path: '/todo',
          name: 'Todo',
          component: () => import('./views/pages/todo.vue')
        },
        {
          path: '/expenses',
          name: 'Expenses',
          component: () => import('./views/pages/expenses.vue')
        },
        {
          path: '/expenses/modify',
          name: 'ModifyExpenses',
          component: () => import('./views/pages/modifyExpenses.vue')
        },
        {
          path: '/expenses-summary',
          name: 'ExpensesSummary',
          component: () => import('./views/pages/expensesSummary.vue')
        },
        {
          path: '/expenses-report',
          name: 'ExpensesReport',
          component: () => import('./views/pages/expensesReport.vue')
        },
        {
          path: '*',
          name: "PageNotFound",
          component: () => import('./views/PageNotFound.vue'),
        }
    ]
});

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router;