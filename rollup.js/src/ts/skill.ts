class Skill {
    fullName: string;
    constructor(public name) {
        this.name = name;
    }
}

interface Atribute {
    name: string;
}

function greeter(atribute : Atribute) : String {
    return "<span>" + atribute + "</span>";
}
let skills = [];
skills[0] = new Skill("HTML");
skills[1] = new Skill("CSS");
skills[2] = new Skill("TypeScript");
skills[3] = new Skill("JavaScript");
skills[4] = new Skill("PHP");
skills[5] = new Skill("ES6");
skills[6] = new Skill("SCSS");

for (let skill of skills) {
    document.querySelector('main').innerHTML += greeter(skill.name);
}
