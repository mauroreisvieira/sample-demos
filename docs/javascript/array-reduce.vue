<template>
    <div>
        <hero title="Array reduce()"  />
        <main class="container">
            <div class="card">
                <h2>JavaScript Array reduce()</h2>
                <p>The <code>reduce()</code> method executes a reducer function (that you provide) on each member of the array resulting in a single output value.</p>
                <demo-code>
                    const result = [1, 2, 3, 4].reduce((sum ,i) => sum + i);
                    console.log(result); // 10
                </demo-code>
            </div>
        </main>
    </div>
</template>

<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'array-reduce',
        components: { hero, demoCode }
    }
</script>
