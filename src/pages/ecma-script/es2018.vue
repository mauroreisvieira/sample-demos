<template>
    <div>
        <hero title="ESCMAScript 2018"  />
        <main class="container">
            <div class="card">
                <h2>Delete value in object</h2>
                <p>The JavaScript <code>delete</code> operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.</p>
                <demo-code>
                    const user = {
                        filename: 'Jone',
                        lastName: 'Doe',
                        city: 'Roma',
                        email: 'hi@mail.com'
                    }
                    delete user.filename;
                    console.log(user) // {lastName: "Doe", city: "Roma", email: "hi@mail.com"}
                </demo-code>
                <h2>Asynchronous iterator</h2>
                <p>Next method returns a Promise.</p>
                <demo-code>
                    const { value, done } = syncIterator.next();
                    asyncIterator.next().then(({ value, done }) => /* ... */);
                </demo-code>
                <h2>Await</h2>
                <p>Iterates iterate objects asynchronously.</p>
                <demo-code>
                    for await (const line of readLines(filePath)) {
                        console.log(line);
                    }
                </demo-code>
                <h2>Destructuring assignment</h2>
                <p>Decompress arrays or object properties and assign them to new variables.</p>
                <demo-code>
                    var a, b, rest;
                    [a, b] = [10, 20];
                    console.log(a); // expected output: 10
                    console.log(b); // expected output: 20
                    [a, b, ...rest] = [10, 20, 30, 40, 50];
                    console.log(rest); // expected output: [30,40,50]
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

