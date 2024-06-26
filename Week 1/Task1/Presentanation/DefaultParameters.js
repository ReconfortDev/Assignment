// Function without Default Parameters
function greet(name) {
    // if (name === undefined) {
    //     name = 'Guest';
    // }
    console.log(`Hello, ${name}`);
}

greet(); // Hello, undefined
greet('Alice'); // Hello, Alice





// Function with Default Parameters:
function greet(name = 'Bob') {
    console.log(`Hello, ${name}`);
}

greet(); // Hello, Bob
greet('John'); // Hello, John




// Second example
// function multiply(a = 1, b = 1) {
//     return a * b;
// }
//
// console.log(multiply()); // 1
// console.log(multiply(5)); // 5
// console.log(multiply(5, 10)); // 50



// third example
// function greet(name = 'Guest', greeting = `Hello, ${name}!`) {
//     console.log(greeting);
// }
//
// greet(); // Hello, Guest!
// greet('Alice'); // Hello, Alice!