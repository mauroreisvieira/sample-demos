(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var Skill = (function () {
    function Skill(name) {
        this.name = name;
        this.name = name;
    }
    return Skill;
}());
var Main = (function () {
    function Main() {
        var skills = [];
        skills[0] = new Skill("HTML");
        skills[1] = new Skill("CSS");
        skills[2] = new Skill("TypeScript");
        skills[3] = new Skill("JavaScript");
        skills[4] = new Skill("PHP");
        skills[5] = new Skill("ES6");
        skills[6] = new Skill("SCSS");
        for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
            var skill = skills_1[_i];
            document.querySelector('main').innerHTML += this.greeter(skill.name);
        }
    }
    Main.prototype.greeter = function (atribute) {
        return "<span>" + atribute + "</span>";
    };
    return Main;
}());
new Main();

})));
//# sourceMappingURL=library.js.map
