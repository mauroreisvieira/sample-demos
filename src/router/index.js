import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import pages from '../pages/pages'

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
        // CSS Tips
        {
            path: '/css-tips/text-fill-effect',
            name: 'Text Stroke & Fill Color',
            component: pages
        },
        // Rollup JS
        {
            path: '/bundles/rollupsjs',
            name: 'Rollup.js Bundle',
            component: pages
        },
        // Javascript
        {
            path: '/javascript/relative-time-format',
            name: 'relative-time-format',
            component: pages
        },
        {
            path: '/javascript/break-out-of-nested-loops',
            name: 'break-out-of-nested-loops',
            component: pages
        },
        {
            path: '/javascript/destructing-objects-and-arrays',
            name: 'destructing-objects-and-arrays',
            component: pages
        },
        {
            path: '/javascript/read-only-properties',
            name: 'read-only-properties',
            component: pages
        },
        {
            path: '/javascript/generators-yield-and-iterators',
            name: 'generators-yield-and-iterators',
            component: pages
        },
        {
            path: '/javascript/getters-setters',
            name: 'getters-setters',
            component: pages
        },
        {
            path: '/javascript/array-filter',
            name: 'array-filter',
            component: pages
        },
        {
            path: '/javascript/array-flatmap',
            name: 'array-flatmap',
            component: pages
        },
        {
            path: '/javascript/array-reduce',
            name: 'array-reduce',
            component: pages
        },
        {
            path: '/javascript/array-sort',
            name: 'array-sort',
            component: pages
        },
        // ECMA Script
        {
            path: '/ecma-script/es2017',
            name: 'ESCMAScript 2017',
            component: pages
        },
        {
            path: '/ecma-script/es2018',
            name: 'ESCMAScript 2018',
            component: pages
        }
    ]
})
