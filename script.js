function checkAnswer() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const selectedOption = form.answer.value;

    if (!selectedOption) {
        resultDiv.textContent = 'Please select an option.';
        resultDiv.style.color = 'red';
        return;
    }

    if (selectedOption === 'blue') {
        resultDiv.textContent = 'Correct! The sea is blue.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Incorrect. The correct answer is blue.';
        resultDiv.style.color = 'red';
    }
}