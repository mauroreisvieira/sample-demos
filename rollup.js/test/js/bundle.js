'use strict';

var User = function User (name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = birthday;
};

User.prototype.toString = function toString () {
    var $bodyEl = document.querySelector('header');
    var age = this.getMyAge();

    $bodyEl.innerHTML = "\n            <h1>Hi, my name is " + (this.name) + ". I'm " + age + " years old</h1>\n            <a href=\"mailto:" + (this.email) + "\">" + (this.email) + "</a>\n        ";
};

User.prototype.getMyAge = function getMyAge () {
    var today = new Date().getFullYear();
    var birthday = new Date(this.birthday).getFullYear();
    return today - birthday;
};

var user = new User("Mauro Vieira", "mauroreisvieira@gmail.com", "01-06-1990");
user.toString();
//# sourceMappingURL=bundle.js.map
