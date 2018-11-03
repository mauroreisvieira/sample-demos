<template>
    <div>
        <hero :title="title"  />
        <main class="container">
            <div class="card">
            <div v-html="markdown"></div>
        </div>
    </main>
</div>
</template>

<script>
    import Prism from 'prismjs'
    import Remarkable from 'remarkable'
    import hero from './../layout/hero.vue'
    export default {
        components: { hero },
        data: function () {
            return {
                title: this.$route.name,
                file: undefined,
                markdown: undefined
          }
      },
        mounted() {
            console.log(window.location);
            this.file = window.location.origin + '/docs' + this.$route.path + '.md';
            const md = new Remarkable({
                langPrefix: 'hljs language-'
            });
            const rawFile = new XMLHttpRequest();
            rawFile.open("GET", this.file, false);
            rawFile.onreadystatechange = () => {
                var allText = rawFile.responseText;
                this.markdown = md.render(allText);
                this.$nextTick(function () {
                    Prism.highlightAll();
                });
            }
            rawFile.send(null);
        }
    }
</script>
<style lang="css">
    @import "./../../assets/prism/prism.css";
</style>


