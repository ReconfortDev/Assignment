function Clock() {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
}

// Add methods to the Clock prototype
Clock.prototype.getFormattedTime = function() {
    const hours = String(this.hours).padStart(2, '0');
    const minutes = String(this.minutes).padStart(2, '0');
    const seconds = String(this.seconds).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

Clock.prototype.get12HourTime = function() {
    let hours = this.hours % 12 || 12; // Convert to 12-hour format
    const minutes = String(this.minutes).padStart(2, '0');
    const seconds = String(this.seconds).padStart(2, '0');
    const ampm = this.hours >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes}:${seconds} ${ampm}`;
};

// Create an instance of Clock and get formatted times
const myClock = new Clock();
console.log(`Formatted Time: ${myClock.getFormattedTime()}`);
console.log(`12 Hour Time: ${myClock.get12HourTime()}`);
