const range = document.querySelector('#range');
const lengthValue = document.querySelector('#lengthValue');
const includeUppercase = document.querySelector('#includeUppercase');
const includeLowercase = document.querySelector('#includeLowercase');
const includeNumbers = document.querySelector('#includeNumbers');
const includeSymbols = document.querySelector('#includeSymbols');
const generateBtn = document.querySelector('#generateBtn');
const copyButton = document.querySelector('#copyButton');
const copiedText = document.querySelector('#copiedText');
const pwdDisplay = document.querySelector('#passwordDisplay');
const strengthLabel = document.querySelector('#strengthLabel');
const levels = document.querySelectorAll('.levels span');

class PasswordGenerator {
    constructor() {
        this.length = 6; // Default length
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
            copiedText.style.opacity = '1';
            setTimeout(() => {
                copiedText.style.transition = '0.1s'
                copiedText.style.transform = 'translateY(-30px)';
                copiedText.style.opacity = '0';
            }, 2000);

            copiedText.style.transform = 'translateY(0)';
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
        pwdDisplay.textContent = password;
        this.pwdExist(password);
        if (password !== 'Select condition') {
            this.updateStrength(password);
        } else {
            pwdDisplay.textContent = ''
            strengthLabel.textContent = '';
            levels.forEach(level => level.classList.remove('active'));
        }
    }

    pwdExist(password) {
        if (password && password !== 'Select condition') {
            pwdDisplay.classList.remove('noPwdGenerated');
            pwdDisplay.classList.add('pwdGenerated');
        } else {
            pwdDisplay.classList.remove('pwdGenerated');
            pwdDisplay.classList.add('noPwdGenerated');
        }
    }

    updateStrength(password) {
        let strength = 0;

        if (password.length >= 12) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        levels.forEach(level => level.className = ''); // Reset all classes

        if (strength >= 5) {
            strengthLabel.textContent = "Strong";
            levels.forEach((level, index) => {
                level.classList.add('strong');
                level.classList.toggle('active', index < 0);
            });
        } else if (strength >= 4 && password.length >= 10) {
            strengthLabel.textContent = "Medium";
            levels.forEach((level, index) => {
                level.classList.add('medium');
                level.classList.toggle('active', index < 1);
            });
        } else if (strength >= 3 && password.length >= 8) {
            strengthLabel.textContent = "Weak";
            levels.forEach((level, index) => {
                level.classList.add('weak');
                level.classList.toggle('active', index < 2);
            });
        } else {
            strengthLabel.textContent = "Too Weak";
            levels.forEach((level, index) => {
                level.classList.add('tooWeak');
                level.classList.toggle('active', index < 3);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PasswordGenerator();
});