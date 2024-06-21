document.addEventListener('DOMContentLoaded', () => {
    const adviceButton = document.getElementById('adviceButton');
    const adviceDiv = document.getElementById('advice');
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const idDiv = document.getElementById('id');

    adviceButton.addEventListener('click', fetchAdvice);

    async function fetchAdvice() {
        adviceDiv.style.display = 'none';
        loadingDiv.style.display = 'block';
        errorDiv.style.display = 'none';

        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            adviceDiv.textContent = `"${data.slip.advice}"`;
            idDiv.textContent = `ADVICE #${data.slip.id}`;
        } catch (error) {
            console.error('Error fetching advice:', error);
            errorDiv.style.display = 'block';
        } finally {
            loadingDiv.style.display = 'none';
            adviceDiv.style.display = 'block';
        }
    }
});
