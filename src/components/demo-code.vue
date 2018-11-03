<template>
    <div class="demo-code">
<pre class="hljs">
    <code class="language-js">
        <slot></slot>
    </code>
</pre>
    </div>
</template>

<script>
    import  Prism from 'prismjs'
    export default {
        name: 'demo-code',
        mounted () {
            Prism.highlightAll();
        }
    }
</script>
