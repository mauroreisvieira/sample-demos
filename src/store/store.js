import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        menus: [
            {
                name: '01. JavaScript Tip\'s',
                isActive: true,
                data: [
                    { url: '/javascript/relative-time-format', title: 'Relative Time Format'},
                    { url: '/javascript/break-out-of-nested-loops', title: 'Break out of nested loops'},
                    { url: '/javascript/destructing-objects-and-arrays', title: 'Destructing objects & arrays'},
                    { url: '/javascript/read-only-properties', title: 'Read Only Properties'},
                    { url: '/javascript/getters-setters', title: 'Getters & Setters'},
                    { url: '/javascript/generators-yield-and-iterators', title: 'Generators, yield & iterators'},
                    { url: '/javascript/array-reduce', title: 'Array reduce()'},
                    { url: '/javascript/array-sort', title: 'Array sort()'},
                    { url: '/javascript/array-filter', title: 'Array filter()'},
                    { url: '/javascript/array-flatmap', title: 'Array flatMap()'},
                    { url: '/javascript/set', title: 'Set'}
                ]
            },
            {
                name: '02. Custom Elements',
                isActive: true,
                data: [
                    { url: '/custom-elements/my-element', title: 'My Element'}
                ]
            },
            {
                name: '03. ECMAScript Next',
                isActive: true,
                data: [
                    { url: '/ecma-script/es2017', title: 'ES2017'},
                    { url: '/ecma-script/es2018', title: 'ES2018'}
                ]
            },
            {
                name: '04. CSS Tip\'s',
                isActive: true,
                data: [
                    { url: '/css-tips/text-fill-effect', title: 'Text Fill Effect'}
                ]
            },
            {
                name: '05. Bundles',
                isActive: true,
                data: [
                    { url: '/bundles/rollupsjs', title: 'Rollup js'},
                ]
            },
            {
                name: '06. Tools',
                isActive: true,
                data: [
                    { url: '/tools/oh-my-zsh', title: 'Oh My Zsh'}
                ]
            }
        ]
    }
});
