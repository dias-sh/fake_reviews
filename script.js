document.addEventListener('DOMContentLoaded', function() {
    const reviews = [
        { text: "Awesome!! Hubby loves it. Great quality! And the rubber one is perfect for when he's working.", correctAnswer: "real" },
        { text: "I clean all my guns and containers and the tools. I also keep my pistols in a small bag", correctAnswer: "fake" },
        { text: "Good for the money, not what I expected. Not too hot or too cold.", correctAnswer: "fake" },
        { text: "These are my first bands and they are the best. I will keep my 2nd as backup.", correctAnswer: "fake" },
        { text: "I tried the single pack before buying the can. Not my favorite flavor, but always happy with this brand.", correctAnswer: "real" }
    ];
    let currentReviewIndex = 0;
    let score = 0;

    function updateReview() {
        if (currentReviewIndex < reviews.length) {
            document.getElementById('review').innerText = reviews[currentReviewIndex].text;
        } else {
            document.getElementById('quiz-container').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');
            document.getElementById('score').innerText = ((score / reviews.length) * 100).toFixed(0) + '%';
;
        }
    }

    document.getElementById('real').addEventListener('click', function() { handleAnswer('real'); });
    document.getElementById('fake').addEventListener('click', function() { handleAnswer('fake'); });

    function handleAnswer(answer) {
        const correctAnswer = reviews[currentReviewIndex].correctAnswer;
        if (answer === correctAnswer) {
            alert(`Correct! That was a ${correctAnswer} review`);
            score++;
        } else {
            alert(`Wrong! That was a ${correctAnswer} review`);
        }
        currentReviewIndex++;
        updateReview();
    }

    updateReview();
});
