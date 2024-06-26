const colors= ['red', 'green', 'blue'];

const mapedColors = colors.map(color => `<li>${color}</li>`);

console.log(mapedColors);




// Spread Operators
const first = [1, 2, 3];
const second = [5, 6, 7];

// const combine = [...first,4, ...second, 8]
//
// console.log(combine);

// clone or copy array
const clone = [...first]