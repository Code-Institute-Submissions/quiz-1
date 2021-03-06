var mostRecentScore = sessionStorage.getItem('mostRecentScore');
var amount = sessionStorage.getItem('amount');
var tada = new Audio('assets/audio/tada.wav');
var sad = new Audio('assets/audio/sadtrombone.wav');
var scorePercent;
var username = localStorage.getItem("username");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var scorePercentRound = sessionStorage.getItem('scorePercentRound');
var highscoresTable = document.getElementById("highscores-table");


function saveHighScore() {
    //stores scores and username in an object
    const score = {
        name: username,
        score: scorePercentRound
    };
    //pushes score object into highscores array
    highScores.push(score); 
    //sorts array from highest to lowest
    highScores.sort((a, b) => b.score - a.score);
    //ensures that the maximum of items in highscores remains at 5
    highScores.splice(5);
    

    localStorage.setItem("highScores", JSON.stringify(highScores));
    
    // determines weather or not the user makes it on the leaderboard and plays music if sucessful
    if (scorePercentRound >= highScores[0].score || scorePercentRound >= highScores[1].score || scorePercentRound >= highScores[2].score || scorePercentRound >= highScores[3].score 
    || scorePercentRound >= highScores[4].score || highScores.length < 4) {
        tada.play();
    }
    // music that plays if user does not make it onto the leaderboard
    else {
        sad.play();
    }
    // if there is only one item in highscores writes that item to the leaderboard
    if (highScores.length == 1) {
        document.getElementById("username-1").innerHTML = highScores[0].name;
        document.getElementById("score-1").innerHTML = highScores[0].score;
    }
    // if there is 2 items in highscores writes them to the leaderboard
    else if (highScores.length == 2) {
        document.getElementById("username-1").innerHTML = highScores[0].name;
        document.getElementById("score-1").innerHTML = highScores[0].score;
        document.getElementById("username-2").innerHTML = highScores[1].name;
        document.getElementById("score-2").innerHTML = highScores[1].score;
    }
    // if there is only 3 items in highscores writes them to the leaderboard
    else if (highScores.length == 3) {
        document.getElementById("username-1").innerHTML = highScores[0].name;
        document.getElementById("score-1").innerHTML = highScores[0].score;
        document.getElementById("username-2").innerHTML = highScores[1].name;
        document.getElementById("score-2").innerHTML = highScores[1].score;
        document.getElementById("username-3").innerHTML = highScores[2].name;
        document.getElementById("score-3").innerHTML = highScores[2].score;
    }
     //if there is only 4 items in highscores writes them to the leaderboard
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
    //if there is 5 items in highscores writes them to the leaderboard
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
    //clears sessionStorage
    sessionStorage.clear();
}

