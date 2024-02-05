let currentQuestion = 1;
let correctAnswers = 0;
// Define the correct answers for each page: true for real, false for fake
const correctAnswerSequence = [true, false, false, false, true];

function selectCard(isReal) {
    // Check if the user's choice matches the correct answer for the current question
    let isCorrect = correctAnswerSequence[currentQuestion - 1] === isReal;
    if (isCorrect) {
        correctAnswers++;
        alert("Correct! That was a " + (isReal ? "real" : "fake") + " review.");
    } else {
        alert("Wrong! That was actually a " + (!isReal ? "real" : "fake") + " review.");
    }
    nextPage();
}

function nextPage() {
    if (currentQuestion < 5) {
        document.getElementById("page" + currentQuestion).style.display = "none";
        currentQuestion++;
        document.getElementById("page" + currentQuestion).style.display = "block";
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById("page" + currentQuestion).style.display = "none"; // Hide the last question
    let score = Math.round((correctAnswers / 5) * 100);
    document.getElementById("score").innerText = `${score}%`;
    document.getElementById("page6").style.display = "block"; // Show the score page
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("page1").style.display = "block";
});
