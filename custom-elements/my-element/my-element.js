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

customElements.define('my-element', MyElement);
