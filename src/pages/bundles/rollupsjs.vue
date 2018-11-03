<template>
    <div>
        <hero title="Rollup js"  />
        <main class="container">
            <div class="card">
                <h2>Rollup</h2>
                <p>Is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.</p>
                <p>It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES6 modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries.</p>
                <p>This will eventually be possible natively, but <strong>Rollup</strong> lets you do it today.</p>

                <h2>Quick start</h2>
                <p>Install with <code>npm install --global rollup</code></p>
                <demo-code>
                    rollup main.js --file bundle.js --format cjs
                </demo-code>
                <h2>Configuration Files</h2>
                <p>Rollup configuration files are optional, but they are powerful and convenient and thus <strong>recommended</strong>.</p>
                <p>A config file is an ES6 module that exports a default object with the desired options. Typically, it is called <code>rollup.config.js</code> and sits in the root directory of your project.</p>
                <demo-code>
                    module.exports = {
                        input: 'src/main.js',
                        output: {
                            file: 'bundle.js',
                            format: 'cjs'
                        }
                    };
                </demo-code>
            </div>
        </main>
    </div>
</template>

<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'rollupjs',
        components: { hero, demoCode }
    }
</script>
