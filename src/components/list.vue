<template>
    <ul class="list">
        <li v-for="(menu, index) in menus" :key="index">
            <a :href="menu.url" :title="menu.tilte">{{ menu.tilte }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'list',
        props: {
            menus: {
                type: Array
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
