export default class User {

    constructor (name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
    }

    toString () {
        let $bodyEl = document.querySelector('header');
        let age = this.getMyAge();

        $bodyEl.innerHTML = `
            <h1>My name is ${this.name}. I'm ${age} years old!</h1>
            <a href="mailto:${this.email}">${this.email}</a>
        `;
    }

    getMyAge() {
        let today = new Date().getFullYear();
        let birthday = new Date(this.birthday).getFullYear();
        return today - birthday;
    }
}
