<template>
    <div>
        <top-header logo="./assets/images/logo.png" />
        <hero />

         <router-view/>
        <footer class="footer-">
            <p>Created with <span>♥</span> by <a href="http://twitter.com/@mauroreisvieira">@mauroreisvieira</a> in Portugal</p>
        </footer>
    </div>
</template>

<script>
import topHeader from './layout/top-header.vue'
import hero from './layout/hero.vue'

export default {
    name: 'app',
    components: { topHeader, hero },
    data() {
        return {}
    },
    methods: {
        init() {

        }
    },
    mounted() {
    },
    computed: {
    }
}
</script>

<style lang="scss">
    @import "./styles/app.scss";
</style>
