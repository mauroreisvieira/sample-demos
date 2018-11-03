<template>
    <div>
        <top-header logo="./assets/images/logo.png" />
        <router-view/>
        <footer class="footer">
            <p>Created with <span>♥</span> by <a href="http://twitter.com/@mauroreisvieira">@mauroreisvieira</a> in Portugal</p>
        </footer>
    </div>
</template>

<script>
import topHeader from './layout/top-header.vue'

export default {
    name: 'app',
    components: { topHeader }
}
</script>

<style lang="scss">
    @import "./styles/app.scss";
</style>
