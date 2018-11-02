<template>
    <main class="container">
        <section>
            <h2>🤯 JavaScript Tip's</h2>
            <list :menus="javaScriptMenu" />
        </section>
        <section>
            <h2>🔮 JavaScript Custom Elements</h2>
            <list :menus="customElementsMenu" />
        </section>
        <section>
            <h2>🎉 ECMAScript Next</h2>
            <list :menus="ecmaScriptMenu" />
        </section>
        <section>
            <h2>🦄 CSS Tip's</h2>
            <list :menus="cssTipsMenu" />
        </section>
        <section>
            <h2>📦 Bundles</h2>
            <list :menus="bundlesMenu" />
        </section>
    </main>
</template>

<script>
    import list from '../components/list.vue'
    export default {
        name: 'home',
        components: { list },
        data() {
            return {
                javaScriptMenu: [
                { url: 'javascript/01-relative-time-format.html', tilte: '01 - Relative Time Format'},
                { url: 'javascript/02-break-out-of-nested-loops.html', tilte: '02 - Break out of nested loops'},
                { url: 'javascript/03-destructing-objects-and-arrays.html', tilte: '03 - Destructing objects & arrays'},
                { url: 'javascript/04-read-only-properties.html', tilte: '04 - Read Only Properties'},
                { url: 'javascript/05-getters-setters.html"', tilte: '05 - Getters & Setters'},
                { url: 'javascript/06-generators-yield-e-iterators.html', tilte: '06 - Generators, yield e iterators'},
                { url: 'javascript/07-array-reduce.html"', tilte: '07 - Array reduce()'},
                { url: 'javascript/08-array-sort.html"', tilte: '08 - Array sort()'},
                { url: 'javascript/09-array-filter.html', tilte: '09 - Array filter()'},
                { url: 'javascript/10-array-flatmap.html', tilte: '10 - Array flatMap()'}
                ],
                customElementsMenu: [
                { url: 'custom-elements/my-element/index.html"', tilte: 'Custom Elements'}
                ],
                ecmaScriptMenu: [
                { url: 'ecma-script/es2017.html', tilte: 'ES2017'},
                { url: 'ecma-script/es2018.html', tilte: 'ES2018'}
                ],
                cssTipsMenu: [
                { url: 'css-tips/text-fill-effect/index.html', tilte: 'Text Fill Effect'}
                ],
                bundlesMenu: [
                { url: 'bundles/rollupsjs.html', tilte: 'Rollup js'}
                ]
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>
