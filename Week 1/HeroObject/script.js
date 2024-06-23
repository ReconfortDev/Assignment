// Initially creating Superhero Object and Its Methods

// const superHero1 ={
//     name: "Superman",
//     secretIdentity: "",
//     powers: ["flight", "superhuman strength", "x-ray vision", "heat vision", "cold breath", "super-speed", "enhanced hearing", "nigh-invulnerability"],
//     weakness:["Kryptonite", "magic", "unforgiving radiation of a red sun"],
//
//     usePower: function(){
//         console.log(this.powers[0])
//     },
//
//     revealIdentity: function(){
//         console.log(this.secretIdentity)
//     }
// }



// Create Superhero constructor function to streamline the creation of multiple superheroes.
function Superhero2(name, secretIdentity, powers, weaknesses) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weaknesses = weaknesses;

    this.usePower = function(index) {
        if (index >= 0 && index < this.powers.length) {
            console.log(this.powers[index]);
        } else {
            console.log("Power not found.");
        }
    };

    this.revealIdentity = function() {
        console.log(this.secretIdentity);
    };
}
//
// // Example
// const superman = new Superhero2(
//     "Superman",
//     "Clark Kent",
//     ["flight", "superhuman strength", "x-ray vision", "heat vision", "cold breath", "super-speed", "enhanced hearing", "nigh-invulnerability"],
//     ["Kryptonite", "magic", "unforgiving radiation of a red sun"]
// );
//
// const batman = new Superhero2(
//     "Batman",
//     "Bruce Wayne",
//     ["peak human conditioning", "martial arts", "detective skills", "wealth", "technology"],
//     ["mortality", "non-superpowered"]
// );
//
// // Using the usePower method
// superman.usePower(0);
// batman.usePower(2);
//
// // Using the revealIdentity method
// superman.revealIdentity();
// batman.revealIdentity();





// Extend the superheroes functionality using prototypal inheritance.

const heroesAndVillains = [
    new Superhero2("Superman", "Clark Kent", ["flight"], ["Kryptonite"]),
    new Superhero2("Batman", "Bruce Wayne", ["martial arts"], ["mortality"]),
    new Superhero2("Wonder Woman", "Diana Prince", ["super strength"], ["loss of magical weapons"]),
    { name: "Lex Luthor", secretIdentity: "Alexander Luthor", powers: ["genius intellect"], weaknesses: ["ego"] },
    { name: "Joker", secretIdentity: "Unknown", powers: ["insanity"], weaknesses: ["mortality"] }
];


// 1. forEach to log all names
heroesAndVillains.forEach(character => {
    // console.log(character.name);
});

// 2. Use map to create an array of names
const names = heroesAndVillains.map(character => character.name);
// console.log(names);

// 3. Use filter to find all superheroes (assuming superheroes have usePower method)
const superheroes = heroesAndVillains.filter(character => character instanceof Superhero2);
console.log(superheroes);

// Example: Enhance a superhero method with map
// superheroes.map(hero => {
//     hero.usePower(0);
// });