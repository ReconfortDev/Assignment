const Person = {
    name: 'John',
    age: 30,
    greet : function (){
        return `Hello my name is ${this.name} and I'm ${this.age} years old.`
    }
}

// Call greet() directly on the Person object
Person.greet(); // Hello, my name is John and I'm 30 years old.

// Create another object to use with call(), apply(), and bind()
const anotherPerson = {
    name: "Jane",
    age: 25
};

// Using call() to invoke greet() with anotherPerson as the context
Person.greet.call(anotherPerson); // Hello, my name is Jane and I'm 25 years old.

// Using apply() to invoke greet() with anotherPerson as the context
Person.greet.apply(anotherPerson); // Hello, my name is Jane and I'm 25 years old.

// Using bind() to create a new function with anotherPerson as the context
const greetAnotherPerson = Person.greet.bind(anotherPerson);
greetAnotherPerson(); // Hello, my name is Jane and I'm 25 years old.


console.log(greetAnotherPerson())