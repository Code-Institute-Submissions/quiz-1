var quizMusic;

//function for home button that takes user to home page
function home() {
    window.location.href = "index.html";
}

function restart() {
    location.reload();
}

// function that plays quiz music on quiz.html load
function playMusic() {
    quizMusic = new Audio('assets/audio/quiz-music.mp3');
    quizMusic.play();
}

// function that plays and stops quiz music
function mute() {
    if (document.getElementById("mute").value == "off") {
        document.getElementById("mute").value = "on";
        document.getElementById("mute-icon").className = "fa fa-volume-up fa-2x";
        quizMusic.play();
    }
    else if (document.getElementById("mute").value == "on") {
        document.getElementById("mute").value = "off";
        document.getElementById("mute-icon").className = "fa fa-volume-off fa-2x";
        quizMusic.pause();
    }
}