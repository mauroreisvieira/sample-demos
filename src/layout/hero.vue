<template>
    <div class="hero">
        <div class="container">
            <h1>{{ title }}</h1>
            <ul class="tag" v-if="tags">
                <li class="tag__item" v-for="(tag, index) in tags">#{{tag}}</li>
            </ul>
        </div>
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
