// Sets up function for evaluating the trivia question on HTML page
function checkTriviaAnswer() {
    const answer = document.getElementById("trivia-answer").value.trim();
    const correctAnswer = "Paris";

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log(document.getElementById("trivia-response").innerText = `Correct! You guessed ${answer}.`);
    } else {
        console.log(document.getElementById("trivia-response").innerText = `Sorry, ${answer} is incorrect. Try again.`);
        }
} 

document.addEventListener('DOMContentLoaded', () => {
    const answer = document.querySelector("input#trivia-answer");
    answer.addEventListener("keypress", function(event) {
        if (event.key === "Enter"){
            event.preventDefault();
            checkTriviaAnswer();
        }
    });
    const numInput = document.querySelector("input#number-input");
    numInput.addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            event.preventDefault();
            checkNumber();
        }
    });
});

// Sets up function for evaluating the odd/even status from integer input on HTML page
function checkNumber() {
    let numInput = document.getElementById("number-input").value;

    const not_num = new RegExp("[A-Za-z./]");
    if (not_num.test(numInput)){
        console.log(document.getElementById("number-response").innerText = "Please enter a valid 5-digit integer.");
    } else {

    let num = parseInt(numInput, 10);

    if (!isNaN(num) && num >= 10000 && num <= 99999){
        const isEven = num % 2 === 0;
        console.log(document.getElementById("number-response").innerText = `The number ${num} is ${isEven ? "even": "odd"}.`);
    } else {
        console.log(document.getElementById("number-response").innerText = "Please enter a valid 5-digit integer.");
    }
}
}