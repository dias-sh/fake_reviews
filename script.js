let currentQuestion = 1;
let correctAnswers = 0;
// Define the correct answers for each page: true for real, false for fake
const correctAnswerSequence = [true, false, false, false, true];

function selectCard(questionNumber, userChoice) {
    // Check if the user's choice matches the correct answer for the current question
    let isCorrect = correctAnswerSequence[questionNumber - 1] === userChoice;
    if (isCorrect) {
        correctAnswers++;
        alert("Correct! That was a " + (userChoice ? "real" : "fake") + " review.");
    } else {
        alert("Wrong! That was actually a " + (!userChoice ? "real" : "fake") + " review.");
    }
    nextPage();
}

function nextPage() {
    let currentPage = document.getElementById("page" + currentQuestion);
    currentPage.style.display = "none";
    currentQuestion++;
    if (currentQuestion <= 5) {
        let nextPage = document.getElementById("page" + currentQuestion);
        nextPage.style.display = "block";
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    let score = Math.round((correctAnswers / 5) * 100);
    document.getElementById("score").innerText = `${score}%`;
    document.getElementById("page6").style.display = "block"; // Show the score page
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("page1").style.display = "block";
});
