<template>
    <article >
        <hero title="Modern web development" :tags="['javascript', 'css', 'scss', 'typescript', 'none', 'html', 'tips', 'sublime']" />
    </article>
</template>

<script>
    import pages from './pages.vue'
    import hero from '../layout/hero.vue'
    export default {
        name: 'home',
        components: { hero, pages },
    }
</script>
