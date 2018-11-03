<template>
    <div>
        <hero title="ESCMAScript 2017"  />
        <main class="container">
            <div class="card">
                <h2>Array Includes</h2>
                <p>The <code>includes()</code> function on every array check if an array contains a specified value.</p>
                <p>Return: <strong> boolean</strong></p>
                <demo-code>
                    const cities = [ 'Lisbon', 'Porto', 'Roma', 'Paris'];
                    console.log(cities.includes("Porto")) // true
                    console.log(cities.includes("New York")) // false
                </demo-code>

                <h2>Async functions</h2>
                <p>The notification of a settlement happens asynchronously. In other words: the callbacks of then() and catch() are always executed after the current code is finished.</p>
                <demo-code>
                    async function asyncFunc() {
                        console.log('asyncFunc()');
                        return '123';
                    }
                    asyncFunc().
                    then(x => console.log(`Resolved: ${x}`));
                    console.log('main');
                </demo-code>
            </div>
        </main>
    </div>
</template>

<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'es2017',
        components: { hero, demoCode }
    }
</script>

