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
    import pages from './pages.vue'
    import hero from '../layout/hero.vue'
    export default {
        name: 'home',
        components: { navigation, hero, pages },
        data() {
            return {
                menus: this.$store.state.menus
            }
        }
    }
</script>
