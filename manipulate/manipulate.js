'use strict';

class Manipulate {

    constructor() {
        this.animation();
    }

    animation () {
        let $btnEl = document.querySelector('.button');
        let $arrowEl = document.querySelector('.arrow-select');

        $btnEl.addEventListener('click', function() {
            if ($arrowEl.classList.contains('animate')) {
                $arrowEl.classList.remove('animate');
            } else {
                $arrowEl.classList.add('animate');
            }
        });
    }
}

new Manipulate();
