import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
// Javascript
import relativeTimeFormat from '../pages/javascript/relative-time-format'
import breakOutOfNestedLoops from '../pages/javascript/break-out-of-nested-loops'
import destructingObjectsAndArrays from '../pages/javascript/destructing-objects-and-arrays'
import readOnlyProperties from '../pages/javascript/read-only-properties'
import gettersSetters from '../pages/javascript/getters-setters'
import arrayFilter from '../pages/javascript/array-filter'
import arrayFlatMap from '../pages/javascript/array-flatmap'
import arrayReduce from '../pages/javascript/array-reduce'
import arraySort from '../pages/javascript/array-sort'
// CSS Tips
import textFillEffect from '../pages/css-tips/text-fill-effect'
// Rollup JS
import rollupsjs from '../pages/bundles/rollupsjs'
// ECMA Script
import es2017 from '../pages/ecma-script/es2017'
import es2018 from '../pages/ecma-script/es2018'

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
            name: 'text-fill-effect',
            component: textFillEffect
        },
        // Rollup JS
        {
            path: '/bundles/rollupsjs',
            name: 'rollupsjs',
            component: rollupsjs
        },
        // Javascript
        {
            path: '/javascript/relative-time-format',
            name: 'relative-time-format',
            component: relativeTimeFormat
        },
        {
            path: '/javascript/break-out-of-nested-loops',
            name: 'break-out-of-nested-loops',
            component: breakOutOfNestedLoops
        },
        {
            path: '/javascript/destructing-objects-and-arrays',
            name: 'destructing-objects-and-arrays',
            component: destructingObjectsAndArrays
        },
        {
            path: '/javascript/read-only-properties',
            name: 'read-only-properties',
            component: readOnlyProperties
        },
        {
            path: '/javascript/getters-setters',
            name: 'getters-setters',
            component: gettersSetters
        },
        {
            path: '/javascript/array-filter',
            name: 'array-filter',
            component: arrayFilter
        },
        {
            path: '/javascript/array-flatmap',
            name: 'array-flatmap',
            component: arrayFlatMap
        },
        {
            path: '/javascript/array-reduce',
            name: 'array-reduce',
            component: arrayReduce
        },
        {
            path: '/javascript/array-sort',
            name: 'array-sort',
            component: arraySort
        },
        // ECMA Script
        {
            path: '/ecma-script/es2017',
            name: 'es2017',
            component: es2017
        },
        {
            path: '/ecma-script/es2018',
            name: 'es2018',
            component: es2018
        }
    ]
})
