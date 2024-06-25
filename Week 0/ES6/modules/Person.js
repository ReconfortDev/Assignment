export class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} can walk`);
    }
}

// const person1 = new Person('Peter');
// console.log(person1)