<template>
    <header class="header">
        <div class="logo">
            <img :src="logo" alt="Sample Demos">
            Sample Demos
        </div>
        <menu-nav />
    </header>
</template>

<script>
    import menuNav from './menu-nav.vue'
    export default {
        components: { menuNav },
        props: {
            logo: {
                type: String
            }
        },
      data() {
        return {}
    },
    methods: {},
    mounted() {
    }
}
</script>
