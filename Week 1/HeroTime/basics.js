// Create a Date object for the current time
const currentTime = new Date();

// Extract hours, minutes, and seconds
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

// Log the current time
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);