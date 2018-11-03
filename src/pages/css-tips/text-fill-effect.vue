<template>
    <div>
        <hero title="Text Stroke & Text Fill Color"  />
        <main class="container">
            <div class="card">
                <h2>Text Stroke & Text Fill Color</h2>
                <p>The <code>text-stroke</code> CSS property specifies the width and color of strokes for text characters.
                This is a shorthand property for the longhand properties <code>text-stroke-width</code> and <code>text-stroke-color</code>.</p><br>
                <p>The <code>text-fill-color</code> CSS property specifies the fill color of characters of text. If this property is not set, the value of the color property is used</p>
                <demo-code lang="css">
                    .demo-title {
                        -webkit-text-fill-color: transparent;
                        -webkit-text-stroke: 2px #000;
                        color: transparent;
                        cursor: pointer;
                        display: inline-block;
                        font-size: 6rem;
                        font-weight: 700;
                        font-weight: normal;
                        letter-spacing: 0.5rem;
                        position: relative;
                        text-fill-color: transparent;
                        text-stroke: 2px #000;
                        text-transform: uppercase;
                    }

                    .demo-title span::before {
                        -webkit-text-fill-color: currentColor;
                        -webkit-text-stroke: 0;
                        color: #000;
                        content: attr(data-hover);
                        width: 0;
                        height: 100%;
                        left: 0;
                        overflow: hidden;
                        position: absolute;
                        text-fill-color: currentColor;
                        text-stroke: 0;
                        top: 0;
                        transition: all .33s cubic-bezier(0.2, 1, 0.8, 1);
                        white-space: nowrap;
                    }

                    .demo-title:hover span::before {
                        width: 100%;
                    }
                </demo-code>
                <h2>Demo</h2>
                <div class="demo-title">
                    <span data-hover="Lol">Lol</span>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'text-fill-effect',
        components: { hero, demoCode }
    }
</script>

<style lang="css">
.demo-title {
    display: inline;
}

.demo-title span {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px #000;
    color: transparent;
    cursor: pointer;
    display: inline;
    font-size: 6rem;
    font-weight: 700;
    font-weight: normal;
    letter-spacing: 0.5rem;
    position: relative;
    text-transform: uppercase;
}

.demo-title span::before {
    -webkit-text-fill-color: currentColor;
    -webkit-text-stroke: 0;
    color: #000;
    content: attr(data-hover);
    width: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    text-fill-color: currentColor;
    text-stroke: 0;
    top: 0;
    transition: all .33s cubic-bezier(0.2, 1, 0.8, 1);
    white-space: nowrap;
}

.demo-title span:hover::before {
    width: 100%;
}

</style>
