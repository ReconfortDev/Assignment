function Clock() {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
}

// Create an instance of Clock
const myClock = new Clock();

// Access properties
console.log(`Clock Time: ${myClock.hours}:${myClock.minutes}:${myClock.seconds}`);
