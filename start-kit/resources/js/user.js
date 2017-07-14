export default class User {

    constructor (name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
    }

    toString () {
        var $bodyEl = document.querySelector('header');
        var age = this.getMyAge();

        $bodyEl.innerHTML = `
            <h1>My name is ${this.name}. I'm ${age} years old!</h1>
            <a href="mailto:${this.email}">${this.email}</a>
        `;
    }

    getMyAge() {
        var today = new Date().getFullYear();
        var birthday = new Date(this.birthday).getFullYear();
        return today - birthday;
    }
}
