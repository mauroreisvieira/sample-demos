<template>
    <article >
        <hero title="Modern web development" :tags="['javascript', 'css', 'scss', 'typescript', 'none', 'html', 'tips', 'sublime']" />
        <footer class="footer">
            <p>Created with <span>♥</span> by <a href="http://twitter.com/@mauroreisvieira">@mauroreisvieira</a> in Portugal</p>
        </footer>
    </article>
</template>

<script>
    import pages from './pages.vue'
    import hero from '../layout/hero.vue'
    export default {
        components: { hero, pages },
    }
</script>
