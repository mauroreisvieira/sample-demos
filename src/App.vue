<template>
    <div class="app">
        <top-header logo="./assets/images/logo.png" />
        <main>
            <div v-for="(menu, index) in menus" :key="index" v-if="menu.isActive">
                <h2>{{ menu.name }}</h2>
                <sidebar :menus="menu.data" />
            </div>
            <router-view/>
        </main>
        <footer class="footer">
            <p>Created with <span>♥</span> by <a href="http://twitter.com/@mauroreisvieira">@mauroreisvieira</a> in Portugal</p>
        </footer>
    </div>
</template>

<script>
import topHeader from './layout/top-header.vue'
import sidebar from './components/sidebar.vue'
import pages from './pages/pages'

export default {
    name: 'app',
    components: { topHeader, sidebar },
    data() {
        return {
            menus: this.$store.state.menus
        }
    },
    mounted() {
        console.log(typeof this.menus);
    }
}
</script>

<style lang="scss">
    @import "./styles/app.scss";
</style>
