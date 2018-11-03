<template>
    <div>
        <hero title="Array sort()"  />
        <main class="container">
            <div class="card">
                <h2>JavaScript Array sort()</h2>
                <p>The <code>sort()</code> method sorts the elements of an array in place and returns the array.<br>
                Javascript sort algorithm on V8 is now stable. The default sort order is according to string Unicode code points.</p>
                <demo-code>
                    const numbers = [4, 2, 5, 1, 3];
                        numbers.sort(function(a, b) {
                        return a - b;
                    });
                    console.log(numbers); // [1, 2, 3, 4, 5]
                </demo-code>
                <p>Objects can be sorted given the value of one of their properties.</p>
                <demo-code>
                    const cats = [
                        { name: 'Choco',   rating: 12 },
                        { name: 'Devlin',  rating: 13 },
                        { name: 'Eagle',   rating: 13 },
                        { name: 'Jenny',   rating: 13 },
                        { name: 'Kona',    rating: 13 },
                        { name: 'Leila',   rating: 13 },
                        { name: 'Milly',   rating: 14 },
                        { name: 'Molly',   rating: 12 },
                        { name: 'Nova',    rating: 12 },
                        { name: 'Oliver',  rating: 13 },
                        { name: 'Patches', rating: 14 },
                    ];

                    cats.sort((a, b) => b.rating - a.rating);
                    console.log(cats);
                </demo-code>
            </div>
        </main>
    </div>
</template>
<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'array-sort',
        components: { hero, demoCode },
        data: function () {
            return {
                fileinput: ''
            }
        },
        mounted() {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.fileinput = reader.result;
            }
            reader.readAsText('./array-sort.md');
            console.log(this.fileinput);
        }
    }
</script>
