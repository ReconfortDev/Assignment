"use strict";

const person ={
    name: 'John',
    walk(){
        console.log(this);
    },
}

console.log(person.walk())

const walk = person.walk.bind(person);
console.log(walk());