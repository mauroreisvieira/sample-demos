## Custom Elements

Custom elements provide a way for authors to build their own fully-featured DOM elements.

Although authors could always use non-standard elements in their documents, with application-specific behaviour added after the fact by scripting or similar, such elements have historically been non-conforming and not very functional.

By defining a custom element, authors can inform the parser how to properly construct an element and how elements of that class should react to changes.

```js
    class MyElement extends HTMLElement {
        static get observedAttributes() {
            return ['color', 'fontSize'];
        }

        constructor() {
            super();
            this.root = this.attachShadow({mode: 'open'});
            this.message = document.createElement('div');
            this.message.textContent = 'My First Custom Component';
            this.root.appendChild(this.message);

            this.connectCallback();

            this.color = this.root.host.getAttribute('color');
            this.fontSize = this.root.host.getAttribute('fontSize');

            this.addEventListener();
        }

        /** Custom myElemet element added to page. */
        connectCallback() {
            this.updateStyle();
        }

        /** Custom myElemet element removed from page. */
        disconnectedCallback() {}

        /** Custom myElemet element moved to new page. */
        adoptedCallback() {}

        /** Custom myElemet element attributes changed */
        attributeChangedCallback(name, oldValue, newValue) {
            this.updateStyle();
        }

        updateStyle() {
            this.color = this.root.host.getAttribute('color');
            this.fontSize = this.root.host.getAttribute('fontSize');

            this.root.host.style.setProperty('color', this.color);
            this.root.host.style.setProperty('font-size', this.fontSize + 'px');
        }

        addEventListener() {
            this.root.addEventListener('click', () => {
                const evt = new CustomEvent('wow', {
                    detail: {
                        m: '%cMy First Custom Element!',
                        s: `color: ${this.color}; font-size: ${this.fontSize}px;`
                    },
                    bubbles: true
                });
                this.dispatchEvent(evt);
            });
        }
    }
```
