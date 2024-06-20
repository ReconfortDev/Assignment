function createTimer(duration, elementId) {
    let remainingTime = duration;
    const element = document.getElementById(elementId);

    function updateTimer() {
        if (remainingTime > 0) {
            element.textContent = `Time remaining: ${remainingTime} seconds`;
            remainingTime--;
        } else {
            clearInterval(timerInterval);
            element.textContent = "Time's up!";
        }
    }

    // Start the timer
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// Example
createTimer(10, 'timerDisplay'); // Starts a 10 second