<template>
    <div>
        <hero title="Array filter()"  />
        <main class="container">
            <div class="card">
                <h2>JavaScript Array filter()</h2>
                <p>The <code>filter()</code> method creates a new array with all elements that pass the test implemented by the provided function.</p>
                <demo-code>
                    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
                    const result = words.filter(word => word.length > 6);
                    console.log(result); //["exuberant", "destruction", "present"]
                </demo-code>
            </div>
        </main>
    </div>
</template>
<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'array-filter',
        components: { hero, demoCode }
    }
</script>
