class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} can walk`);
    }
}

// const person1 = new Person('Peter');
// console.log(person1)

class Teacher extends  Person{
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('teach')
    }
}

const teacher = new Teacher('Teacher', 'Master  of Science');
console.log(teacher)