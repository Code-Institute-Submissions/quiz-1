var mostRecentScore = localStorage.getItem('mostRecentScore');
var amount = sessionStorage.getItem('amount');
var tada = new Audio('assets/audio/tada.wav');
var sad = new Audio('assets/audio/sadtrombone.wav');
var scorePercent;
var username = localStorage.getItem("username");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var scorePercentRound;
var highscoresTable = document.getElementById("highscores-table");



function scorePercent() {

    scorePercent = (mostRecentScore / amount) * 100;
    scorePercentRound = Math.round(scorePercent);
    document.getElementById("scorePercentRound").innerHTML = scorePercentRound + "%";
}

function saveHighScore() {
    const score = {
        name: username,
        score: scorePercentRound
    };
    console.log(score);
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    if (scorePercentRound >= highScores[0].score || scorePercentRound >= highScores[1].score || scorePercentRound >= highScores[2].score || scorePercentRound >= highScores[3].score || scorePercentRound >= highScores[4].score || highScores.length < 4) {
        tada.play();
    }
    else {
        sad.play();
    }
    console.log(highScores);

    if (highScores.length == 1) {
        document.getElementById("username-1").innerHTML = highScores[0].name;
        document.getElementById("score-1").innerHTML = highScores[0].score;
    }
    else if (highScores.length == 2) {
        document.getElementById("username-1").innerHTML = highScores[0].name;
        document.getElementById("score-1").innerHTML = highScores[0].score;
        document.getElementById("username-2").innerHTML = highScores[1].name;
        document.getElementById("score-2").innerHTML = highScores[1].score;
    }
    else if (highScores.length == 3) {
        document.getElementById("username-1").innerHTML = highScores[0].name;
        document.getElementById("score-1").innerHTML = highScores[0].score;
        document.getElementById("username-2").innerHTML = highScores[1].name;
        document.getElementById("score-2").innerHTML = highScores[1].score;
        document.getElementById("username-3").innerHTML = highScores[2].name;
        document.getElementById("score-3").innerHTML = highScores[2].score;
    }
    else if (highScores.length == 4) {
        document.getElementById("username-1").innerHTML = highScores[0].name;
        document.getElementById("score-1").innerHTML = highScores[0].score;
        document.getElementById("username-2").innerHTML = highScores[1].name;
        document.getElementById("score-2").innerHTML = highScores[1].score;
        document.getElementById("username-3").innerHTML = highScores[2].name;
        document.getElementById("score-3").innerHTML = highScores[2].score;
        document.getElementById("username-4").innerHTML = highScores[3].name;
        document.getElementById("score-4").innerHTML = highScores[3].score;
    }
    else if (highScores.length == 5) {
        document.getElementById("username-1").innerHTML = highScores[0].name;
        document.getElementById("score-1").innerHTML = highScores[0].score;
        document.getElementById("username-2").innerHTML = highScores[1].name;
        document.getElementById("score-2").innerHTML = highScores[1].score;
        document.getElementById("username-3").innerHTML = highScores[2].name;
        document.getElementById("score-3").innerHTML = highScores[2].score;
        document.getElementById("username-4").innerHTML = highScores[3].name;
        document.getElementById("score-4").innerHTML = highScores[3].score;
        document.getElementById("username-5").innerHTML = highScores[4].name;
        document.getElementById("score-5").innerHTML = highScores[4].score;
    }
    sessionStorage.clear();
}

