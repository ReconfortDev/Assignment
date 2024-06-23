    let alarmTime = null;

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

    function displayClock() {
    const clock = new Clock();
    document.getElementById('clock').innerText = clock.getFormattedTime();

    if (alarmTime && clock.getFormattedTime() === alarmTime) {
    alert("Alarm!");
    alarmTime = null;
}
}

    function setAlarm() {
    const alarmInput = document.getElementById('alarmTime').value;
    if (alarmInput) {
    alarmTime = alarmInput + ":00";
    alert(`Alarm set for ${alarmTime}`);
}
}

    setInterval(displayClock, 1000);
    displayClock();