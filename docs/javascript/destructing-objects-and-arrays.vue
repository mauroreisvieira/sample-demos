<template>
    <div>
        <hero title="Destructuring assignment"  />
        <main class="container">
            <div class="card">
                <h2>Destructuring assignment</h2>
                <p>The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.</p>
                <demo-code>
                    function logUser({email, name = 'anonymous', age}) {
                        console.log(name, age)
                    }

                    logUser({name: 'Doe', age: 20});
                    logUser({age: 40});

                    const coords = [230, 500];
                    const [x = 0, y = 0] = coords;

                    console.log(x);
                    console.log(y);
                </demo-code>
            </div>
        </main>
    </div>
</template>

<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'destructing-objects-and-arrays',
        components: { hero, demoCode }
    }
</script>
