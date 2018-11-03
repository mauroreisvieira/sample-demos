import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import relativeTimeFormat from '../pages/javascript/relative-time-format'
import breakOutOfNestedLoops from '../pages/javascript/break-out-of-nested-loops'

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
            path: '/javascript/relative-time-format',
            name: 'relative-time-format',
            component: relativeTimeFormat
        },
        {
            path: '/javascript/break-out-of-nested-loops',
            name: 'break-out-of-nested-loops',
            component: breakOutOfNestedLoops
        }
    ]
})
