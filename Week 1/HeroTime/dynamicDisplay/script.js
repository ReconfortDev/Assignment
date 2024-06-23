function Clock() {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
}

Clock.prototype.getFormattedTime = function() {
    const hours = String(this.hours).padStart(2, '0');
    const minutes = String(this.minutes).padStart(2, '0');
    const seconds = String(this.seconds).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

Clock.prototype.get12HourTime = function() {
    let hours = this.hours % 12 || 12;
    const minutes = String(this.minutes).padStart(2, '0');
    const seconds = String(this.seconds).padStart(2, '0');
    const ampm = this.hours >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes}:${seconds} ${ampm}`;
};

function displayClock() {
    const clock = new Clock();
    const format = document.getElementById('format').value;
    const timeString = format === '12' ? clock.get12HourTime() : clock.getFormattedTime();
    document.getElementById('clock').innerText = timeString;
}

function updateClock() {
    displayClock();
}

setInterval(displayClock, 1000);
displayClock();