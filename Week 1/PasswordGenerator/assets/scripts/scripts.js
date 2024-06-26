const range = document.querySelector('#range');
const lengthValue = document.querySelector('#lengthValue');
const includeUppercase = document.querySelector('#includeUppercase');
const includeLowercase = document.querySelector('#includeLowercase');
const includeNumbers = document.querySelector('#includeNumbers');
const includeSymbols = document.querySelector('#includeSymbols');
const generateBtn = document.querySelector('#generateBtn');
const copyButton = document.querySelector('#copyButton');
const pwdDisplay = document.querySelector('#passwordDisplay');
const strengthLabel = document.querySelector('#strengthLabel');
const levels = document.querySelectorAll('.levels span');

class PasswordGenerator {
    constructor() {
        this.length = 10; // Default length
        this.includeUppercase = true;
        this.includeLowercase = false;
        this.includeNumbers = false;
        this.includeSymbols = false;

        this.init();
    }

    init() {
        range.addEventListener('input', (e) => {
            this.length = e.target.value;
            lengthValue.textContent = this.length;
        });

        [includeUppercase, includeLowercase, includeNumbers, includeSymbols].forEach(checkbox => {
            checkbox.addEventListener('click', () => {
                this[checkbox.id] = !this[checkbox.id];
                checkbox.classList.toggle('checked');
            });
        });

        generateBtn.addEventListener('click', () => {
            this.generateAndUpdatePassword();
        });

        copyButton.addEventListener('click', () => {
            const password = pwdDisplay.textContent;
            navigator.clipboard.writeText(password);
            alert("Copied!");
        });

        this.generateAndUpdatePassword();
    }

    generatePassword() {
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

        let characters = '';

        if (this.includeUppercase) characters += uppercase;
        if (this.includeLowercase) characters += lowercase;
        if (this.includeNumbers) characters += numbers;
        if (this.includeSymbols) characters += symbols;

        if (!this.includeUppercase && !this.includeLowercase && !this.includeNumbers && !this.includeSymbols) {
            return 'Select condition';
        }

        let password = '';
        for (let i = 0; i < this.length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    generateAndUpdatePassword() {
        const password = this.generatePassword();
        if (password !== 'Please select at least one character type') {
            pwdDisplay.textContent = password;
            this.updateStrength(password);
        } else {
            pwdDisplay.textContent = password;
            strengthLabel.textContent = '';
            levels.forEach(level => level.classList.remove('active'));
        }
    }

    updateStrength(password) {
        let strength = 0;
        const lengthCriteria = password.length >= 12;
        const uppercaseCriteria = /[A-Z]/.test(password);
        const lowercaseCriteria = /[a-z]/.test(password);
        const numberCriteria = /\d/.test(password);
        const symbolCriteria = /[^A-Za-z0-9]/.test(password);

        if (lengthCriteria) strength++;
        if (uppercaseCriteria) strength++;
        if (lowercaseCriteria) strength++;
        if (numberCriteria) strength++;
        if (symbolCriteria) strength++;

        // Reset the class list of levels before assigning new classes
        levels.forEach(level => level.className = '');

        if (strength >= 5) {
            strengthLabel.textContent = "Strong";
            levels.forEach(level => level.classList.add('strong'));
        } else if (strength >= 4 && password.length >= 10) {
            strengthLabel.textContent = "Medium";
            levels.forEach(level => level.classList.add('medium'));
        } else if (strength >= 3 && password.length >= 8) {
            strengthLabel.textContent = "Weak";
            levels.forEach(level => level.classList.add('weak'));
        } else {
            strengthLabel.textContent = "Too Weak";
            levels.forEach(level => level.classList.add('tooWeak'));
        }

        levels.forEach((level, index) => {
            level.classList.toggle('active', index < strength);
        });
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new PasswordGenerator();
});
