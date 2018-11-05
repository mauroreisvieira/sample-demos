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

        { // CSS Tips: Text Stroke & Fill Color
            path: '/css-tips/text-fill-effect',
            name: 'Text Stroke & Fill Color',
            component: pages
        },
        { // Tools: Rollup.js
            path: '/tools/rollupsjs',
            name: 'Rollup.js Bundle',
            component: pages
        },
       { // Tools: Oh My Zsh
            path: '/tools/oh-my-zsh',
            name: 'Oh My Zsh',
            component: pages
        },

        {
            path: '/javascript/relative-time-format',
            name: 'Relative Time Format',
            component: pages
        },
        {
            path: '/javascript/break-out-of-nested-loops',
            name: 'Break out of nested loops',
            component: pages
        },
        {
            path: '/javascript/destructing-objects-and-arrays',
            name: 'Destructing objects & arrays',
            component: pages
        },
        {
            path: '/javascript/read-only-properties',
            name: 'Object read only properties',
            component: pages
        },
        {
            path: '/javascript/generators-yield-and-iterators',
            name: 'Generators Yield & Iterators',
            component: pages
        },
        {
            path: '/javascript/getters-setters',
            name: 'Classes: Getters & Setters',
            component: pages
        },
        {
            path: '/javascript/array-filter',
            name: 'Javascript Array filter()',
            component: pages
        },
        {
            path: '/javascript/array-flatmap',
            name: 'Javascript Array flatmap()',
            component: pages
        },
        {
            path: '/javascript/array-reduce',
            name: 'Javascript Array reduce()',
            component: pages
        },
        {
            path: '/javascript/array-sort',
            name: 'Javascript Array sort()',
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
