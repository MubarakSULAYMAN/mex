require('./bootstrap');

import Vue from 'vue'

import App from './vue/app'

import 'remixicon/fonts/remixicon.css' 

const app = new Vue({
    el: '#app',
    components: {App}
})