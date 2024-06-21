function handleClick() {
    console.log(this.id); // buttons id
    console.log(this.textContent); // button's text content
}

const button = document.getElementById('myButton');
button.addEventListener('click', handleClick);

// using an arrow function
button.addEventListener('click', (event) => {
    console.log(this); // window object
    console.log(event.target.id); // button's id
    console.log(event.target.textContent); // button's text content
});