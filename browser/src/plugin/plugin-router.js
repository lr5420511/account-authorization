import Vue from 'vue';
import VueRouter from 'vue-router';

import ViewLogin from '../view/view-login.vue';
// Import more views to here!

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: ViewLogin
        }
    ]
});