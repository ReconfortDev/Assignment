function Superhero2(name, secretIdentity, powers, weaknesses) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weaknesses = weaknesses;

    this.usePower = function(index) {
        if (index >= 0 && index < this.powers.length) {
            return this.powers[index];
        } else {
            return "Power not found.";
        }
    };

    this.revealIdentity = function() {
        return this.secretIdentity;
    };
}

const heroesAndVillains = [
    new Superhero2("Superman", "Clark Kent", ["flight", "super strength"], ["Kryptonite"]),
    new Superhero2("Batman", "Bruce Wayne", ["martial arts", "intelligence"], ["mortality"]),
    new Superhero2("Wonder Woman", "Diana Prince", ["super strength", "agility"], ["loss of magical weapons"]),
    { name: "Lex Luthor", secretIdentity: "Alexander Luthor", powers: ["genius intellect", "wealth"], weaknesses: ["ego"] },
    { name: "Joker", secretIdentity: "Unknown", powers: ["insanity", "unpredictability"], weaknesses: ["mortality"] }
];

const heroSelect = document.getElementById('heroSelect');
const villainSelect = document.getElementById('villainSelect');

// Populate hero and villain options
function populateSelects() {

    heroesAndVillains.forEach((character, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = character.name;
        if (index < 3) {
            heroSelect.appendChild(option);
        } else {
            villainSelect.appendChild(option);
        }
    });
}

// Battle logic
function startBattle() {
    const resultDiv = document.getElementById('result');

    const hero = heroesAndVillains[heroSelect.value];
    const villain = heroesAndVillains[villainSelect.value];

    const heroPower = hero.usePower(0); //  use first power
    const villainPower = villain.powers[0]; //  use first power

    let result = `<p>${hero.name} uses ${heroPower}!</p>`;
    result += `<p>${villain.name} uses ${villainPower}!</p>`;

    // Simple battle outcome logic
    if (hero.weaknesses.includes(villainPower.toLowerCase())) {
        result += `<p>${villain.name} wins!</p>`;
    } else if (villain.weaknesses.includes(heroPower.toLowerCase())) {
        result += `<p>${hero.name} wins!</p>`;
    } else {
        result += `<p>It's a tie!</p>`;
    }

    resultDiv.innerHTML = result;
}

document.getElementById('battleButton').addEventListener('click', startBattle);
window.onload = populateSelects;
