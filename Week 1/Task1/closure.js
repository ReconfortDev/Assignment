function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++; // Increment the private
            console.log(count); // value of count
        },
        getCount: function() {
            return count; // Return the current value
        }
    };
}

const counter = createCounter();
counter.increment(); // Logs: 1
counter.increment(); // Logs: 2
console.log(counter.getCount()); // Logs: 2
