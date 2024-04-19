// Sets up function for evaluating the trivia question on HTML page
function checkTriviaAnswer() {
    const answer = document.getElementById("trivia-answer").value.trim();
    const responseElement= document.getElementById("trivia-response");
    const correctAnswer = "Paris";
    
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log(responseElement.textContent = 'Correct! You guessed ${answer}.');
    } else {
        console.log(responseElement.textContent = 'Sorry, ${answer} is incorrect. Try again.');
        }
    // answer.textContent = placeholder;
    // console.log("After submission:", answer.textContent);
}

// document.addEventListener('DOMContentLoaded', () => {
//     const triviaInput = document.getElementById("trivia-answer");

//     triviaInput.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         checkTrivia();
//         }
//     });
// });

// Sets up function for evaluating the odd/even status from integer input on HTML page
function checkNumber() {
    let numInput = document.getElementById("number-input").value;
    const responseElement = document.getElementById("number-response");
    let num = parseInt(numInput, 10);

    if (num <= 9999 | num >= 100000 | !(Number.isInteger(num))) {
        console.log(responseElement.textContent = "Please enter a valid 5-digit integer.");
        return;
    }

    if (num % 2 === 0) {
        console.log(responseElement.textContent = '$(num) is an even number');
    } else {
        console.log(responseElement.textContent = '$(num) is an odd number');
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     const triviaInput = document.getElementById("number-input");
//     triviaInput.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         checkTrivia();
//         }
//     });
// });