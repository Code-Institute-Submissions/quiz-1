var amount = sessionStorage.getItem('amount');
var mostRecentScore = sessionStorage.getItem('mostRecentScore');
var scorePercentRound; 
var scorePercent;

 //takes mostRecentSore variable and converts it to percent and rounds to the nearest integer
function scoreCalculator() {

    scorePercent = (mostRecentScore / amount) * 100;
    scorePercentRound = Math.round(scorePercent);
    document.getElementById("score-display").innerHTML = "Your score is " + scorePercentRound + "%";
}

sessionStorage.setItem('scorePercentRound', scorePercentRound);