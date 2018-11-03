<template>
    <div>
        <hero title="Class declarations: Get and Set"  />
        <main class="container">
            <div class="card">
                <h2>Class declarations</h2>
                <p>One way to define a class is using a class declaration.</p>
                <p>To declare a class, you use the class keyword with the name of the <code>class</code> ("Rectangle" here).</p>
                <demo-code>
                    class Rectangle {
                        constructor(width, height, color) {
                            this.__width = width;
                            this.__height = height;
                            this.__color = color;
                        }

                        get area () {
                            return this.__width + this.__height
                        }

                        get color () {
                            return this.__color;
                        }

                        set color (color) {
                            this.__color = color;
                        }
                    }

                    const rect = new Rectangle(10, 20, 'red')
                    console.log('Area:', rect.area);
                    console.log('Initial Color', rect.color);
                    rect.color = 'blue';
                    console.log('New Color:', rect.color);
                </demo-code>
            </div>
        </main>
    </div>
</template>
<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'getters-setters',
        components: { hero, demoCode }
    }
</script>
