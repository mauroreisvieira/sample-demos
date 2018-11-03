<template>
    <div>
        <hero title="Break out of nested for loops"  />
        <main class="container">
            <div class="card">
                <h2>Breaking nested loops in JavaScript</h2>
                <p>Will break from all the nested loops and the parent and stop searching through the array unnecessarily.</p>
                <div class="demo-code">
                    <pre class="hljs">
                        <code class="language-js">
    const width = 3;
    const height = 4;

    for (let x = 1; x <= width; x++) {
        for (let y = 1; y <= height; y++) {
            if (x === 2 && y === 3) {
                break;
            }
            console.log(x + ', ' + y);
        }
    }

    outerLoop:
    for (let x = 1; x <= width; x++) {
        for (let y = 1; y <= height; y++) {
            if (x === 2 && y === 3) {
                break outerLoop;
            }
            console.warn(x + ', ' + y);
        }
    }
                        </code>
                    </pre>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import  Prism from 'prismjs'
    import hero from './../../layout/hero.vue'
    export default {
        name: 'relative-time-format',
        components: { hero },
            mounted () {
                Prism.highlightAll();
            }
    }
</script>

