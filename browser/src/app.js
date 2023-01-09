import 'babel-polyfill';
import 'fetch-polyfill';
import Vue from 'vue';
import './plugin/plugin-component';
import router from './plugin/plugin-router';
import store from './plugin/vuex/plugin-vuex';
import AppRoot from './app.vue';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(AppRoot)
});