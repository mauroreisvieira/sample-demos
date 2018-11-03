<template>
    <div>
        <hero title="Generators, yield & iterators"  />
        <main class="container">
            <div class="card">
                <h2>Iterators</h2>
                <p>In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.</p>
                <p> More specifically an iterator is any object which implements the Iterator protocol by having a <code>next()</code> method which returns an object with two properties:</p>
                <ul>
                    <li><code>value</code> the next value in the sequence;</li>
                    <li><code>done</code> which is true if the last value in the sequence has already been consumed</li>
                </ul>
                <demo-code>
                    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    let it = arr[Symbol.iterator]();
                    console.log(it.next().value); // 1
                    console.log(it.next().value); // 2
                    console.log(it.next().value); // 3
                    console.log(it.next().value); // 4

                    function* subTopics() {
                        yield "B1";
                        yield "B2";
                        yield "B3";
                    }

                    function* topics() {
                        yield "A";
                        yield "B";
                        yield* subTopics();
                        yield "C";
                    }

                    var iterator = topics();

                    console.log(iterator.next()); // { value: "A", done: false }
                    console.log(iterator.next()); // { value: "B", done: false }
                    console.log(iterator.next()); // { value: "B1", done: false }
                    console.log(iterator.next()); // { value: "B2", done: false }
                    console.log(iterator.next()); // { value: "B3", done: false }
                    console.log(iterator.next()); // { value: "C", done: false }
                    console.log(iterator.next()); // { value: undefined, done: true }

                    function* topics() {
                        yield* [1, 2, 3];
                    }

                    var iterator = topics();
                    console.log(iterator.next()); // { value: 1, done: false }
                    console.log(iterator.next()); // { value: 2, done: false }
                    console.log(iterator.next()); // { value: 3, done: false }
                    console.log(iterator.next()); // { value: undefined, done: true }
                </demo-code>
            </div>
        </main>
    </div>
</template>
<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'generators-yield-and-iterators',
        components: { hero, demoCode }
    }
</script>
