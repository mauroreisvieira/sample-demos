'use strict';

class Cookie {

    constructor () {

        this._el = document.querySelector('.js-main');
        this.cleanBtn = document.querySelector('.js-clean-button');
        this.closeBtn = document.querySelector('.js-close-button');
        this._content = this._el.querySelector('.js-content');

        this.setCookie = this.setCookie.bind(this);
        this.cleanCookie = this.cleanCookie.bind(this);

        this.check('cookie');

        this.closeBtn.addEventListener('click', this.setCookie);
        this.cleanBtn.addEventListener('click', this.cleanCookie);
    }


    setCookie() {
        if (this._isCookie) {
            return;
        }
        this._isCookie = true;
        this.createCookie('cookie', true);
        this._content.classList.add('hidden');
    }

    cleanCookie() {
        if (!this._isCookie) {
            return;
        }
        this._isCookie = false;
        this.createCookie('cookie', false);
        this._content.classList.remove('hidden');
    }

    check(cookie) {
        let _cookie = this.readCookie(cookie);
        console.log(_cookie);
        if (_cookie == 'true') {
            this._isCookie = true;
            this._content.classList.add('hidden');
        } else {
            this._isCookie = false;
            this._content.classList.remove('hidden');
        }
    }

    createCookie(name,value,days) {
        if (days) {
            const cookieLive = 24 * 60 * 60 * 1000;
            var date = new Date();
            date.setTime(date.getTime() + ( days * cookieLive));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    };

    readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}

new Cookie();