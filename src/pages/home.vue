<template>
    <div>
        <hero title="Modern web development" :tags="['javascript', 'css', 'scss', 'typescript', 'none', 'html', 'tips', 'sublime']" />
        <main class="container">
            <div class="card">
                <h2>🤯 JavaScript Tip's</h2>
                <navigation :menus="javaScriptMenu" />
            </div>
<!--             <div class="card">
                <h2>🔮 JavaScript Custom Elements</h2>
                <navigation :menus="customElementsMenu" />
            </div> -->
            <div class="card">
                <h2>🎉 ECMAScript Next</h2>
                <navigation :menus="ecmaScriptMenu" />
            </div>
            <div class="card">
                <h2>🦄 CSS Tip's</h2>
                <navigation :menus="cssTipsMenu" />
            </div>
            <div class="card">
                <h2>📦 Bundles</h2>
                <navigation :menus="bundlesMenu" />
            </div>
        </main>
    </div>
</template>

<script>
    import navigation from '../components/navigation.vue'
    import hero from '../layout/hero.vue'
    export default {
        name: 'home',
        components: { navigation, hero },
        data() {
            return {
                javaScriptMenu: [
                    { url: 'javascript/relative-time-format', tilte: 'Relative Time Format'},
                    { url: 'javascript/break-out-of-nested-loops', tilte: 'Break out of nested loops'},
                    { url: 'javascript/destructing-objects-and-arrays', tilte: 'Destructing objects & arrays'},
                    { url: 'javascript/read-only-properties', tilte: 'Read Only Properties'},
                    { url: 'javascript/getters-setters', tilte: 'Getters & Setters'},
                    { url: 'javascript/generators-yield-and-iterators', tilte: 'Generators, yield & iterators'},
                    { url: 'javascript/array-reduce', tilte: 'Array reduce()'},
                    { url: 'javascript/array-sort', tilte: 'Array sort()'},
                    { url: 'javascript/array-filter', tilte: 'Array filter()'},
                    { url: 'javascript/array-flatmap', tilte: 'Array flatMap()'}
                ],
                customElementsMenu: [
                    { url: 'custom-elements/my-element/index', tilte: 'Custom Elements'}
                ],
                ecmaScriptMenu: [
                    { url: 'ecma-script/es2017', tilte: 'ES2017'},
                    { url: 'ecma-script/es2018', tilte: 'ES2018'}
                ],
                cssTipsMenu: [
                    { url: 'css-tips/text-fill-effect', tilte: 'Text Fill Effect'}
                ],
                bundlesMenu: [
                    { url: 'bundles/rollupsjs', tilte: 'Rollup js'}
                ]
            }
        }
    }
</script>
