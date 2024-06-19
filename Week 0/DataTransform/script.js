// Capitalizes the first letter of string

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

capitalize('test')

// Reverses string

function reverse(str) {
    return str.split('').reverse().join('');
}

capitalize('reverse test')

// Checks if a string is a palindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

capitalize('test With value')

// Counts the number of words in a string
function wordCount(str) {
    const words = str.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

wordCount('test')

// Doubles every number in an array
const array = [12, 34, 34]
function double(arr) {
    return arr.map(num => num * 2);
}

double(array)

// Filters even numbers from an array
function filterEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}

filterEven(array)

// Calculates sum of all numbers in an array
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

sum(array)

// Calculates the average of all numbers in an array
function average(arr) {
    if (arr.length === 0) return 0; // handle empty array case
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

average(array)

// Returns the full name of a person object
const person = {
    firstName : 'Kanaka',
    lastName: 'Kenny',
    age: 13
}

function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

fullName(person)

// Checks if a person is 18 or older
function isAdult(person) {
    return person.age >= 18;
}

isAdult(person)

// For function composition, we can use existing libraries like lodash
// Let's make our own custom compose function

function compose(...fns) {
    return function(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}

// Example usage:
const reverseAndCapitalize = compose(capitalize, reverse);
const doubleEvenNumbers = compose(filterEven, double);