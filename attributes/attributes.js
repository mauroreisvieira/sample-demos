'use strict';

class Attribues {

    constructor() {
        this.getPercentage();
    }

    getPercentage () {
        let $percentEl = document.querySelectorAll('[data-percent]');
        var sum = 0;

        for (let i = 0; i < $percentEl.length; i++) {
            sum += Number($percentEl[i].attributes['data-percent'].value);
        }

        for (let i = 0; i < $percentEl.length; i++) {
            var val = ($percentEl[i].attributes['data-percent'].value / sum) * 100;
            $percentEl[i].innerHTML = val + '%';
            $percentEl[i].style.backgroundColor = $percentEl[i].attributes['data-color'].value;
            $percentEl[i].style.width = val + '%';
        }
    }
}

new Attribues();
