<template>
    <ul class="navigation">
        <li class="navigation__item" v-for="(menu, index) in menus" :key="index">
            <router-link :to="menu.url" :title="menu.title" class="navigation__link">{{ menu.title }}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'navigation',
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
            console.log(this.menus);
        }
    }
</script>
