// let example
function example1() {
    let x = 10;
    if (true) {
        let x = 20; // different x
        console.log(x); // 20
    }
    console.log(x); // 10
}
// example1();

for (let i = 0; i < 3; i++) {
    console.log(i);
}
// console.log(i); // ReferenceError: i is not defined




// const example
function example2() {
    const y = 30;
    if (true) {
        const y = 40; // different y
        console.log(y); // 40
    }
    console.log(y); // 30
}
// example2();


const pi = 3.14159;
// pi = 3.14; // TypeError: Assignment to constant variable.



const obj = { name: 'Benny' };
obj.name = 'Bob'; // This is allowed, as we are not reassigning the variable itself.
console.log(obj.name); // Bob
