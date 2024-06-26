// Without Rest Parameters:

// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
//
// console.log(sum(1, 2, 3)); // 6


// With Rest Parameters:
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]




// Using Rest Parameters in Functions
function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}`;
}

console.log(greet('Hello', 'Benny', 'Chrisipin')); // Hello Benny, Chrisipin


// Other Example
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
