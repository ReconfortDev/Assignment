// One line
const square = x => x * x;
console.log(square(4)); // 16


const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4)); // 10
