require('./bootstrap');

import Vue from 'vue';
import App from './vue/App';
import router from './vue/router';
import Vuex from 'vuex';
import store from './vue/store';
import dayjs from 'dayjs';
import VueOffline from 'vue-offline';

import 'remixicon/fonts/remixicon.css';

import '../js/vue//assets/styles/index.css';

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faFolderPlus,
    faHighlighter,
    faFileInvoice,
    faEdit,
    faBackspace,
    faSave,
    faTrash,
    faTrashAlt,
    faTimesCircle,
    faTimes,
    faChevronCircleLeft,
    faHome,
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faFolderPlus, faHighlighter, faFileInvoice, faEdit, faBackspace, faSave, faTrash, faTrashAlt, faTimesCircle, faTimes, faChevronCircleLeft, faHome)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex)
    // Vue.use(VueOffline, {
    //     mixin: false
    // })
Vue.use(VueOffline)

Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
    if (value) {
        //   return moment(String(value)).format('MM/DD/YYYY hh:mm')
        return dayjs(String(value)).format('DD/MM/YYYY')
    }
})

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    store,
    // methods: {
    //     goTo(route) {
    //         this.$router.push(route);
    //     }
    // }
});

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')