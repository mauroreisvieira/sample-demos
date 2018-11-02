import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import javascriptTips from '../pages/javascript-tips'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/javascript-tips',
            name: 'javascript-tips',
            component: javascriptTips
        }
    ]
})
