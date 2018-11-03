<template>
    <div>
        <hero title="Read Only Properties"  />
        <main class="container">
            <div class="card">
                <h2>Object.defineProperty()</h2>
                <p>The static method <code>Object.defineProperty()</code> defines a new property directly on an object, or modifies an existing property on an object, and returns the object.</p>
                <demo-code>
                    const person = {
                        name: 'Jane Doe',
                        age: 28,
                        occupation: 'Web Developer'
                    }

                    Object.defineProperty(person, 'born', {
                        value: 'Portugal',
                        writable: false
                    });

                    person.born = 'France'
                    console.log(person); // {name: "Mauro", age: 28, occupation: "Web Developer", born: "Portugal"}
                </demo-code>
            </div>
        </main>
    </div>
</template>
<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'read-only-properties',
        components: { hero, demoCode }
    }
</script>
