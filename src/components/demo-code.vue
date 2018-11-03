<template>
    <div class="demo-code">
<pre class="hljs">
<code :class="'language-' + lang">
    <slot></slot>
</code>
</pre>
    </div>
</template>

<script>
    import  Prism from 'prismjs'
    export default {
        name: 'demo-code',
        props: {
            lang: {
                type: String,
                default: 'js'
            }
        },
        mounted () {
            Prism.highlightAll();
        }
    }
</script>

<style lang="css">
    @import "../../assets/prism/prism.css";
</style>
