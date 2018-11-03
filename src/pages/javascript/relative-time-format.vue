<template>
    <div>
        <hero title="Relative Time Format API"  />
        <main class="container">
            <div class="card">
                <h2>Relative Time Format API</h2>
                <p>The brand new <code>Intl.RelativeTimeFormat</code> <strong>API</strong> shifts that burden to the JavaScript engine, which can ship the locale data and make it directly available to JavaScript developers.</p>
                <p><code>Intl.RelativeTimeFormat</code> enables localized formatting of relative times without sacrificing performance.</p>
                <demo-code>
                    const rtf = new Intl.RelativeTimeFormat('en');
                    rtf.format(3.14, 'second'); // 'in 3.14 seconds'
                    rtf.format(-15, 'minute'); // '15 minutes ago'
                    rtf.format(8, 'hour'); // 'in 8 hours'
                    rtf.format(-2, 'day'); // '2 days ago'
                    rtf.format(3, 'week'); // 'in 3 weeks'
                    rtf.format(-5, 'month'); // '5 months ago'
                    rtf.format(2, 'quarter'); // 'in 2 quarters'
                    rtf.format(-42, 'year'); // '42 years ago'
                </demo-code>
            </div>
        </main>
    </div>
</template>

<script>
    import hero from './../../layout/hero.vue'
    import demoCode from './../../components/demo-code.vue'
    export default {
        name: 'relative-time-format',
        components: { hero, demoCode }
    }
</script>
