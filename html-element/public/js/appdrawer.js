'use strict';

var AppDrawer = (function (HTMLElement) {
    function AppDrawer() {
        var this$1 = this;

        // If you define a ctor, always call super() first!
        // This is specific to CE and required by the spec.
        HTMLElement.call(this);

        // Setup a click listener on <app-drawer> itself.
        this.addEventListener('click', function (e) {
            // Don't toggle the drawer if it's disabled.
            if (this$1.disabled) {
                return;
            }
            this$1.toggleDrawer();
        });
    }

    if ( HTMLElement ) AppDrawer.__proto__ = HTMLElement;
    AppDrawer.prototype = Object.create( HTMLElement && HTMLElement.prototype );
    AppDrawer.prototype.constructor = AppDrawer;

    var prototypeAccessors = { open: {},disabled: {} };

    // A getter/setter for an open property.
    prototypeAccessors.open.get = function () {
        return this.hasAttribute('open');
    };

    prototypeAccessors.open.set = function (val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
        this.toggleDrawer();
    };

    // A getter/setter for a disabled property.
    prototypeAccessors.disabled.get = function () {
        return this.hasAttribute('disabled');
    };

    prototypeAccessors.disabled.set = function (val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    };

    AppDrawer.prototype.toggleDrawer = function toggleDrawer () {
        console.log("toggleDrawer");
    };

    Object.defineProperties( AppDrawer.prototype, prototypeAccessors );

    return AppDrawer;
}(HTMLElement));

customElements.define('app-drawer', AppDrawer);
//# sourceMappingURL=appdrawer.js.map
