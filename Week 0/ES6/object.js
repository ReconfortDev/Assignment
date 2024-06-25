// Destructuring

const address = {
    street: '',
    city: '',
    country: '',
};

// const {street, city, country} = address;

const {street: st} = address;


// Spread operators
const fisrt = { name: 'Mosh'}
const second = {job: 'Dev'}

const combine = {...fisrt, ...second, location:'kg 655 st'}
console.log(combine)