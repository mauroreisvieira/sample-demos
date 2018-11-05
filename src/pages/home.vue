<template>
    <div>
        <hero title="Modern web development" :tags="['javascript', 'css', 'scss', 'typescript', 'none', 'html', 'tips', 'sublime']" />
        <main class="container">
            <div class="card" v-for="(menu, index) in menus" :key="index" v-if="menu.isActive">
                <h2>{{ menu.name }}</h2>
                <navigation :menus="menu.data" />
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
                menus: [
                    {
                        name: '🤯 JavaScript Tip\'s',
                        isActive: true,
                        data: [
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
                        ]
                    },
                    {
                        name: '🔮 JavaScript Custom Elements',
                        isActive: false,
                        data: [
                            { url: 'custom-elements/my-element/index', tilte: 'Custom Elements'}
                        ]
                    },
                    {
                        name: '🎉 ECMAScript Next',
                        isActive: true,
                        data: [
                            { url: 'ecma-script/es2017', tilte: 'ES2017'},
                            { url: 'ecma-script/es2018', tilte: 'ES2018'}
                        ]
                    },
                    {
                        name: '🦄 CSS Tip\'s',
                        isActive: true,
                        data: [
                            { url: 'css-tips/text-fill-effect', tilte: 'Text Fill Effect'}
                        ]
                    },
                    {
                        name: '📦 Tools',
                        isActive: true,
                        data: [
                            { url: 'tools/rollupsjs', tilte: 'Rollup js'},
                            { url: 'tools/oh-my-zsh', tilte: 'Oh My Zsh'}
                        ]
                    },
                ]
            }
        }
    }
</script>
