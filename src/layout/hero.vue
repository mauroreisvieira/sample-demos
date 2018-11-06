<template>
    <div class="hero">
        <h1>{{ title }}</h1>
        <ul class="tag" v-if="tags">
            <li class="tag__item" v-for="(tag, index) in tags">#{{tag}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'hero',
        props: {
            title: {
                type: String,
                required: true
            },
            tags: {
                type: Array,
                default: undefined
            }
        }
    }
</script>
