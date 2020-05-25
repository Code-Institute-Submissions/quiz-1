var amount;
var myQuestions;
var incorrectAns;
var correctAns;
var answers;
var allAnswers;
var score;
var quizMusic;

function quizMusic() {
    quizMusic = new Audio('assets/audio/quiz-music.mp3');
    quizMusic.play();
}

function enableMute() {
    quizMusic.pause();
}

function disableMute() {
    quizMusic.play();
}

function hideUnusedSlides() {
    if (amount == 15) {
        document.getElementById("slide-20").remove();
        document.getElementById("slide-19").remove();
        document.getElementById("slide-18").remove();
        document.getElementById("slide-17").remove();
        document.getElementById("slide-16").remove();
    }
    else if (amount == 10) {
        document.getElementById("slide-20").remove();
        document.getElementById("slide-19").remove();
        document.getElementById("slide-18").remove();
        document.getElementById("slide-17").remove();
        document.getElementById("slide-16").remove();
        document.getElementById("slide-15").remove();
        document.getElementById("slide-14").remove();
        document.getElementById("slide-13").remove();
        document.getElementById("slide-12").remove();
        document.getElementById("slide-11").remove();
    }
    else if (amount == 5) {
        document.getElementById("slide-20").remove();
        document.getElementById("slide-19").remove();
        document.getElementById("slide-18").remove();
        document.getElementById("slide-17").remove();
        document.getElementById("slide-16").remove();
        document.getElementById("slide-15").remove();
        document.getElementById("slide-14").remove();
        document.getElementById("slide-13").remove();
        document.getElementById("slide-12").remove();
        document.getElementById("slide-11").remove();
        document.getElementById("slide-10").remove();
        document.getElementById("slide-9").remove();
        document.getElementById("slide-8").remove();
        document.getElementById("slide-7").remove();
        document.getElementById("slide-6").remove();
    }
}

function apiRequest(type, cb) {

    amount = sessionStorage.getItem('amount');
    var category = sessionStorage.getItem('category');
    var difficulty = sessionStorage.getItem('difficulty');

    var xhr = new XMLHttpRequest();

    xhr.open("GET", `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function displayQuestions(type) {
    apiRequest(type, function(data) {
        myQuestions = data.results;
        myQuestions.forEach(function() {
            if (amount == 5) {
                document.getElementById("question-1").innerHTML = myQuestions[0].question;
                document.getElementById("question-2").innerHTML = myQuestions[1].question;
                document.getElementById("question-3").innerHTML = myQuestions[2].question;
                document.getElementById("question-4").innerHTML = myQuestions[3].question;
                document.getElementById("question-5").innerHTML = myQuestions[4].question;
            }
            else if (amount == 10) {
                document.getElementById("question-1").innerHTML = myQuestions[0].question;
                document.getElementById("question-2").innerHTML = myQuestions[1].question;
                document.getElementById("question-3").innerHTML = myQuestions[2].question;
                document.getElementById("question-4").innerHTML = myQuestions[3].question;
                document.getElementById("question-5").innerHTML = myQuestions[4].question;
                document.getElementById("question-6").innerHTML = myQuestions[5].question;
                document.getElementById("question-7").innerHTML = myQuestions[6].question;
                document.getElementById("question-8").innerHTML = myQuestions[7].question;
                document.getElementById("question-9").innerHTML = myQuestions[8].question;
                document.getElementById("question-10").innerHTML = myQuestions[9].question;
            }
            else if (amount == 15) {
                document.getElementById("question-1").innerHTML = myQuestions[0].question;
                document.getElementById("question-2").innerHTML = myQuestions[1].question;
                document.getElementById("question-3").innerHTML = myQuestions[2].question;
                document.getElementById("question-4").innerHTML = myQuestions[3].question;
                document.getElementById("question-5").innerHTML = myQuestions[4].question;
                document.getElementById("question-6").innerHTML = myQuestions[5].question;
                document.getElementById("question-7").innerHTML = myQuestions[6].question;
                document.getElementById("question-8").innerHTML = myQuestions[7].question;
                document.getElementById("question-9").innerHTML = myQuestions[8].question;
                document.getElementById("question-10").innerHTML = myQuestions[9].question;
                document.getElementById("question-11").innerHTML = myQuestions[10].question;
                document.getElementById("question-12").innerHTML = myQuestions[11].question;
                document.getElementById("question-13").innerHTML = myQuestions[12].question;
                document.getElementById("question-14").innerHTML = myQuestions[13].question;
                document.getElementById("question-15").innerHTML = myQuestions[14].question;
            }
            else if (amount == 20) {
                document.getElementById("question-1").innerHTML = myQuestions[0].question;
                document.getElementById("question-2").innerHTML = myQuestions[1].question;
                document.getElementById("question-3").innerHTML = myQuestions[2].question;
                document.getElementById("question-4").innerHTML = myQuestions[3].question;
                document.getElementById("question-5").innerHTML = myQuestions[4].question;
                document.getElementById("question-6").innerHTML = myQuestions[5].question;
                document.getElementById("question-7").innerHTML = myQuestions[6].question;
                document.getElementById("question-8").innerHTML = myQuestions[7].question;
                document.getElementById("question-9").innerHTML = myQuestions[8].question;
                document.getElementById("question-10").innerHTML = myQuestions[9].question;
                document.getElementById("question-11").innerHTML = myQuestions[10].question;
                document.getElementById("question-12").innerHTML = myQuestions[11].question;
                document.getElementById("question-13").innerHTML = myQuestions[12].question;
                document.getElementById("question-14").innerHTML = myQuestions[13].question;
                document.getElementById("question-15").innerHTML = myQuestions[14].question;
                document.getElementById("question-16").innerHTML = myQuestions[15].question;
                document.getElementById("question-17").innerHTML = myQuestions[16].question;
                document.getElementById("question-18").innerHTML = myQuestions[17].question;
                document.getElementById("question-19").innerHTML = myQuestions[18].question;
                document.getElementById("question-20").innerHTML = myQuestions[19].question;
            }
        });
        allAnswers = [];
        for (let i = 0; i < myQuestions.length; i++) {
            correctAns = myQuestions[i].correct_answer;
            incorrectAns = myQuestions[i].incorrect_answers;
            answers = incorrectAns.concat(correctAns);
            shuffleAns(answers);
            allAnswers.push(answers);
            console.log(answers);
        }
        displayAnswers();

        function shuffleAns(answers) {
            for (let i = answers.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [answers[i], answers[j]] = [answers[j], answers[i]];
            }
        }

        function displayAnswers() {
            if (amount == 5) {
                document.getElementById("q1-choice-a").innerHTML = allAnswers[0][0];
                document.getElementById("q1-input-a").value = allAnswers[0][0];
                document.getElementById("q1-choice-b").innerHTML = allAnswers[0][1];
                document.getElementById("q1-input-b").value = allAnswers[0][1];
                document.getElementById("q1-choice-c").innerHTML = allAnswers[0][2];
                document.getElementById("q1-input-c").value = allAnswers[0][2];
                document.getElementById("q1-choice-d").innerHTML = allAnswers[0][3];
                document.getElementById("q1-input-d").value = allAnswers[0][3];
                document.getElementById("q2-choice-a").innerHTML = allAnswers[1][0];
                document.getElementById("q2-input-a").value = allAnswers[1][0];
                document.getElementById("q2-choice-b").innerHTML = allAnswers[1][1];
                document.getElementById("q2-input-b").value = allAnswers[1][1];
                document.getElementById("q2-choice-c").innerHTML = allAnswers[1][2];
                document.getElementById("q2-input-c").value = allAnswers[1][2];
                document.getElementById("q2-choice-d").innerHTML = allAnswers[1][3];
                document.getElementById("q2-input-d").value = allAnswers[1][3];
                document.getElementById("q3-choice-a").innerHTML = allAnswers[2][0]
                document.getElementById("q3-input-a").value = allAnswers[2][0];
                document.getElementById("q3-choice-b").innerHTML = allAnswers[2][1];
                document.getElementById("q3-input-b").value = allAnswers[2][1];
                document.getElementById("q3-choice-c").innerHTML = allAnswers[2][2];
                document.getElementById("q3-input-c").value = allAnswers[2][2];
                document.getElementById("q3-choice-d").innerHTML = allAnswers[2][3];
                document.getElementById("q3-input-d").value = allAnswers[2][3];
                document.getElementById("q4-choice-a").innerHTML = allAnswers[3][0];
                document.getElementById("q4-input-a").value = allAnswers[3][0];
                document.getElementById("q4-choice-b").innerHTML = allAnswers[3][1];
                document.getElementById("q4-input-b").value = allAnswers[3][1];
                document.getElementById("q4-choice-c").innerHTML = allAnswers[3][2];
                document.getElementById("q4-input-c").value = allAnswers[3][2];
                document.getElementById("q4-choice-d").innerHTML = allAnswers[3][3];
                document.getElementById("q4-input-d").value = allAnswers[3][3];
                document.getElementById("q5-choice-a").innerHTML = allAnswers[4][0];
                document.getElementById("q5-input-a").value = allAnswers[4][0];
                document.getElementById("q5-choice-b").innerHTML = allAnswers[4][1];
                document.getElementById("q5-input-b").value = allAnswers[4][1];
                document.getElementById("q5-choice-c").innerHTML = allAnswers[4][2];
                document.getElementById("q5-input-c").value = allAnswers[4][2];
                document.getElementById("q5-choice-d").innerHTML = allAnswers[4][3];
                document.getElementById("q5-input-d").value = allAnswers[4][3];
            }
            if (amount == 10) {
                document.getElementById("q1-choice-a").innerHTML = allAnswers[0][0];
                document.getElementById("q1-input-a").value = allAnswers[0][0];
                document.getElementById("q1-choice-b").innerHTML = allAnswers[0][1];
                document.getElementById("q1-input-b").value = allAnswers[0][1];
                document.getElementById("q1-choice-c").innerHTML = allAnswers[0][2];
                document.getElementById("q1-input-c").value = allAnswers[0][2];
                document.getElementById("q1-choice-d").innerHTML = allAnswers[0][3];
                document.getElementById("q1-input-d").value = allAnswers[0][3];
                document.getElementById("q2-choice-a").innerHTML = allAnswers[1][0];
                document.getElementById("q2-input-a").value = allAnswers[1][0];
                document.getElementById("q2-choice-b").innerHTML = allAnswers[1][1];
                document.getElementById("q2-input-b").value = allAnswers[1][1];
                document.getElementById("q2-choice-c").innerHTML = allAnswers[1][2];
                document.getElementById("q2-input-c").value = allAnswers[1][2];
                document.getElementById("q2-choice-d").innerHTML = allAnswers[1][3];
                document.getElementById("q2-input-d").value = allAnswers[1][3];
                document.getElementById("q3-choice-a").innerHTML = allAnswers[2][0]
                document.getElementById("q3-input-a").value = allAnswers[2][0];
                document.getElementById("q3-choice-b").innerHTML = allAnswers[2][1];
                document.getElementById("q3-input-b").value = allAnswers[2][1];
                document.getElementById("q3-choice-c").innerHTML = allAnswers[2][2];
                document.getElementById("q3-input-c").value = allAnswers[2][2];
                document.getElementById("q3-choice-d").innerHTML = allAnswers[2][3];
                document.getElementById("q3-input-d").value = allAnswers[2][3];
                document.getElementById("q4-choice-a").innerHTML = allAnswers[3][0];
                document.getElementById("q4-input-a").value = allAnswers[3][0];
                document.getElementById("q4-choice-b").innerHTML = allAnswers[3][1];
                document.getElementById("q4-input-b").value = allAnswers[3][1];
                document.getElementById("q4-choice-c").innerHTML = allAnswers[3][2];
                document.getElementById("q4-input-c").value = allAnswers[3][2];
                document.getElementById("q4-choice-d").innerHTML = allAnswers[3][3];
                document.getElementById("q4-input-d").value = allAnswers[3][3];
                document.getElementById("q5-choice-a").innerHTML = allAnswers[4][0];
                document.getElementById("q5-input-a").value = allAnswers[4][0];
                document.getElementById("q5-choice-b").innerHTML = allAnswers[4][1];
                document.getElementById("q5-input-b").value = allAnswers[4][1];
                document.getElementById("q5-choice-c").innerHTML = allAnswers[4][2];
                document.getElementById("q5-input-c").value = allAnswers[4][2];
                document.getElementById("q5-choice-d").innerHTML = allAnswers[4][3];
                document.getElementById("q5-input-d").value = allAnswers[4][3];
                document.getElementById("q6-choice-a").innerHTML = allAnswers[5][0];
                document.getElementById("q6-input-a").value = allAnswers[5][0];
                document.getElementById("q6-choice-b").innerHTML = allAnswers[5][1];
                document.getElementById("q6-input-b").value = allAnswers[5][1];
                document.getElementById("q6-choice-c").innerHTML = allAnswers[5][2];
                document.getElementById("q6-input-c").value = allAnswers[5][2];
                document.getElementById("q6-choice-d").innerHTML = allAnswers[5][3];
                document.getElementById("q6-input-d").value = allAnswers[5][3];
                document.getElementById("q7-choice-a").innerHTML = allAnswers[6][0];
                document.getElementById("q7-input-a").value = allAnswers[6][0];
                document.getElementById("q7-choice-b").innerHTML = allAnswers[6][1];
                document.getElementById("q7-input-b").value = allAnswers[6][1];
                document.getElementById("q7-choice-c").innerHTML = allAnswers[6][2];
                document.getElementById("q7-input-c").value = allAnswers[6][2];
                document.getElementById("q7-choice-d").innerHTML = allAnswers[6][3];
                document.getElementById("q7-input-d").value = allAnswers[6][3];
                document.getElementById("q8-choice-a").innerHTML = allAnswers[7][0];
                document.getElementById("q8-input-a").value = allAnswers[7][0];
                document.getElementById("q8-choice-b").innerHTML = allAnswers[7][1];
                document.getElementById("q8-input-b").value = allAnswers[7][1];
                document.getElementById("q8-choice-c").innerHTML = allAnswers[7][2];
                document.getElementById("q8-input-c").value = allAnswers[7][2];
                document.getElementById("q8-choice-d").innerHTML = allAnswers[7][3];
                document.getElementById("q8-input-d").value = allAnswers[7][3];
                document.getElementById("q9-choice-a").innerHTML = allAnswers[8][0];
                document.getElementById("q9-input-a").value = allAnswers[8][0];
                document.getElementById("q9-choice-b").innerHTML = allAnswers[8][1];
                document.getElementById("q9-input-b").value = allAnswers[8][1];
                document.getElementById("q9-choice-c").innerHTML = allAnswers[8][2];
                document.getElementById("q9-input-c").value = allAnswers[8][2];
                document.getElementById("q9-choice-d").innerHTML = allAnswers[8][3];
                document.getElementById("q9-input-d").value = allAnswers[8][3];
                document.getElementById("q10-choice-a").innerHTML = allAnswers[9][0];
                document.getElementById("q10-input-a").value = allAnswers[9][0];
                document.getElementById("q10-choice-b").innerHTML = allAnswers[9][1];
                document.getElementById("q10-input-b").value = allAnswers[9][1];
                document.getElementById("q10-choice-c").innerHTML = allAnswers[9][2];
                document.getElementById("q10-input-c").value = allAnswers[9][2];
                document.getElementById("q10-choice-d").innerHTML = allAnswers[9][3];
                document.getElementById("q10-input-d").value = allAnswers[9][3];
            }
            if (amount == 15) {
                document.getElementById("q1-choice-a").innerHTML = allAnswers[0][0];
                document.getElementById("q1-input-a").value = allAnswers[0][0];
                document.getElementById("q1-choice-b").innerHTML = allAnswers[0][1];
                document.getElementById("q1-input-b").value = allAnswers[0][1];
                document.getElementById("q1-choice-c").innerHTML = allAnswers[0][2];
                document.getElementById("q1-input-c").value = allAnswers[0][2];
                document.getElementById("q1-choice-d").innerHTML = allAnswers[0][3];
                document.getElementById("q1-input-d").value = allAnswers[0][3];
                document.getElementById("q2-choice-a").innerHTML = allAnswers[1][0];
                document.getElementById("q2-input-a").value = allAnswers[1][0];
                document.getElementById("q2-choice-b").innerHTML = allAnswers[1][1];
                document.getElementById("q2-input-b").value = allAnswers[1][1];
                document.getElementById("q2-choice-c").innerHTML = allAnswers[1][2];
                document.getElementById("q2-input-c").value = allAnswers[1][2];
                document.getElementById("q2-choice-d").innerHTML = allAnswers[1][3];
                document.getElementById("q2-input-d").value = allAnswers[1][3];
                document.getElementById("q3-choice-a").innerHTML = allAnswers[2][0]
                document.getElementById("q3-input-a").value = allAnswers[2][0];
                document.getElementById("q3-choice-b").innerHTML = allAnswers[2][1];
                document.getElementById("q3-input-b").value = allAnswers[2][1];
                document.getElementById("q3-choice-c").innerHTML = allAnswers[2][2];
                document.getElementById("q3-input-c").value = allAnswers[2][2];
                document.getElementById("q3-choice-d").innerHTML = allAnswers[2][3];
                document.getElementById("q3-input-d").value = allAnswers[2][3];
                document.getElementById("q4-choice-a").innerHTML = allAnswers[3][0];
                document.getElementById("q4-input-a").value = allAnswers[3][0];
                document.getElementById("q4-choice-b").innerHTML = allAnswers[3][1];
                document.getElementById("q4-input-b").value = allAnswers[3][1];
                document.getElementById("q4-choice-c").innerHTML = allAnswers[3][2];
                document.getElementById("q4-input-c").value = allAnswers[3][2];
                document.getElementById("q4-choice-d").innerHTML = allAnswers[3][3];
                document.getElementById("q4-input-d").value = allAnswers[3][3];
                document.getElementById("q5-choice-a").innerHTML = allAnswers[4][0];
                document.getElementById("q5-input-a").value = allAnswers[4][0];
                document.getElementById("q5-choice-b").innerHTML = allAnswers[4][1];
                document.getElementById("q5-input-b").value = allAnswers[4][1];
                document.getElementById("q5-choice-c").innerHTML = allAnswers[4][2];
                document.getElementById("q5-input-c").value = allAnswers[4][2];
                document.getElementById("q5-choice-d").innerHTML = allAnswers[4][3];
                document.getElementById("q5-input-d").value = allAnswers[4][3];
                document.getElementById("q6-choice-a").innerHTML = allAnswers[5][0];
                document.getElementById("q6-input-a").value = allAnswers[5][0];
                document.getElementById("q6-choice-b").innerHTML = allAnswers[5][1];
                document.getElementById("q6-input-b").value = allAnswers[5][1];
                document.getElementById("q6-choice-c").innerHTML = allAnswers[5][2];
                document.getElementById("q6-input-c").value = allAnswers[5][2];
                document.getElementById("q6-choice-d").innerHTML = allAnswers[5][3];
                document.getElementById("q6-input-d").value = allAnswers[5][3];
                document.getElementById("q7-choice-a").innerHTML = allAnswers[6][0];
                document.getElementById("q7-input-a").value = allAnswers[6][0];
                document.getElementById("q7-choice-b").innerHTML = allAnswers[6][1];
                document.getElementById("q7-input-b").value = allAnswers[6][1];
                document.getElementById("q7-choice-c").innerHTML = allAnswers[6][2];
                document.getElementById("q7-input-c").value = allAnswers[6][2];
                document.getElementById("q7-choice-d").innerHTML = allAnswers[6][3];
                document.getElementById("q7-input-d").value = allAnswers[6][3];
                document.getElementById("q8-choice-a").innerHTML = allAnswers[7][0];
                document.getElementById("q8-input-a").value = allAnswers[7][0];
                document.getElementById("q8-choice-b").innerHTML = allAnswers[7][1];
                document.getElementById("q8-input-b").value = allAnswers[7][1];
                document.getElementById("q8-choice-c").innerHTML = allAnswers[7][2];
                document.getElementById("q8-input-c").value = allAnswers[7][2];
                document.getElementById("q8-choice-d").innerHTML = allAnswers[7][3];
                document.getElementById("q8-input-d").value = allAnswers[7][3];
                document.getElementById("q9-choice-a").innerHTML = allAnswers[8][0];
                document.getElementById("q9-input-a").value = allAnswers[8][0];
                document.getElementById("q9-choice-b").innerHTML = allAnswers[8][1];
                document.getElementById("q9-input-b").value = allAnswers[8][1];
                document.getElementById("q9-choice-c").innerHTML = allAnswers[8][2];
                document.getElementById("q9-input-c").value = allAnswers[8][2];
                document.getElementById("q9-choice-d").innerHTML = allAnswers[8][3];
                document.getElementById("q9-input-d").value = allAnswers[8][3];
                document.getElementById("q10-choice-a").innerHTML = allAnswers[9][0];
                document.getElementById("q10-input-a").value = allAnswers[9][0];
                document.getElementById("q10-choice-b").innerHTML = allAnswers[9][1];
                document.getElementById("q10-input-b").value = allAnswers[9][1];
                document.getElementById("q10-choice-c").innerHTML = allAnswers[9][2];
                document.getElementById("q10-input-c").value = allAnswers[9][2];
                document.getElementById("q10-choice-d").innerHTML = allAnswers[9][3];
                document.getElementById("q10-input-d").value = allAnswers[9][3];
                document.getElementById("q11-choice-a").innerHTML = allAnswers[10][0];
                document.getElementById("q11-input-a").value = allAnswers[10][0];
                document.getElementById("q11-choice-b").innerHTML = allAnswers[10][1];
                document.getElementById("q11-input-b").value = allAnswers[10][1];
                document.getElementById("q11-choice-c").innerHTML = allAnswers[10][2];
                document.getElementById("q11-input-c").value = allAnswers[10][2];
                document.getElementById("q11-choice-d").innerHTML = allAnswers[10][3];
                document.getElementById("q11-input-d").value = allAnswers[10][3];
                document.getElementById("q12-choice-a").innerHTML = allAnswers[11][0];
                document.getElementById("q12-input-a").value = allAnswers[11][0];
                document.getElementById("q12-choice-b").innerHTML = allAnswers[11][1];
                document.getElementById("q12-input-b").value = allAnswers[11][1];
                document.getElementById("q12-choice-c").innerHTML = allAnswers[11][2];
                document.getElementById("q12-input-c").value = allAnswers[11][2];
                document.getElementById("q12-choice-d").innerHTML = allAnswers[11][3];
                document.getElementById("q12-input-d").value = allAnswers[11][3];
                document.getElementById("q13-choice-a").innerHTML = allAnswers[12][0];
                document.getElementById("q13-input-a").value = allAnswers[12][0];
                document.getElementById("q13-choice-b").innerHTML = allAnswers[12][1];
                document.getElementById("q13-input-b").value = allAnswers[12][1];
                document.getElementById("q13-choice-c").innerHTML = allAnswers[12][2];
                document.getElementById("q13-input-c").value = allAnswers[12][2];
                document.getElementById("q13-choice-d").innerHTML = allAnswers[12][3];
                document.getElementById("q13-input-d").value = allAnswers[12][3];
                document.getElementById("q14-choice-a").innerHTML = allAnswers[13][0];
                document.getElementById("q14-input-a").value = allAnswers[13][0];
                document.getElementById("q14-choice-b").innerHTML = allAnswers[13][1];
                document.getElementById("q14-input-b").value = allAnswers[13][1];
                document.getElementById("q14-choice-c").innerHTML = allAnswers[13][2];
                document.getElementById("q14-input-c").value = allAnswers[13][2];
                document.getElementById("q14-choice-d").innerHTML = allAnswers[13][3];
                document.getElementById("q14-input-d").value = allAnswers[13][3];
                document.getElementById("q15-choice-a").innerHTML = allAnswers[14][0];
                document.getElementById("q15-input-a").value = allAnswers[14][0];
                document.getElementById("q15-choice-b").innerHTML = allAnswers[14][1];
                document.getElementById("q15-input-b").value = allAnswers[14][1];
                document.getElementById("q15-choice-c").innerHTML = allAnswers[14][2];
                document.getElementById("q15-input-c").value = allAnswers[14][2];
                document.getElementById("q15-choice-d").innerHTML = allAnswers[14][3];
                document.getElementById("q15-input-d").value = allAnswers[14][3];
            }
            if (amount == 20) {
                document.getElementById("q1-choice-a").innerHTML = allAnswers[0][0];
                document.getElementById("q1-input-a").value = allAnswers[0][0];
                document.getElementById("q1-choice-b").innerHTML = allAnswers[0][1];
                document.getElementById("q1-input-b").value = allAnswers[0][1];
                document.getElementById("q1-choice-c").innerHTML = allAnswers[0][2];
                document.getElementById("q1-input-c").value = allAnswers[0][2];
                document.getElementById("q1-choice-d").innerHTML = allAnswers[0][3];
                document.getElementById("q1-input-d").value = allAnswers[0][3];
                document.getElementById("q2-choice-a").innerHTML = allAnswers[1][0];
                document.getElementById("q2-input-a").value = allAnswers[1][0];
                document.getElementById("q2-choice-b").innerHTML = allAnswers[1][1];
                document.getElementById("q2-input-b").value = allAnswers[1][1];
                document.getElementById("q2-choice-c").innerHTML = allAnswers[1][2];
                document.getElementById("q2-input-c").value = allAnswers[1][2];
                document.getElementById("q2-choice-d").innerHTML = allAnswers[1][3];
                document.getElementById("q2-input-d").value = allAnswers[1][3];
                document.getElementById("q3-choice-a").innerHTML = allAnswers[2][0]
                document.getElementById("q3-input-a").value = allAnswers[2][0];
                document.getElementById("q3-choice-b").innerHTML = allAnswers[2][1];
                document.getElementById("q3-input-b").value = allAnswers[2][1];
                document.getElementById("q3-choice-c").innerHTML = allAnswers[2][2];
                document.getElementById("q3-input-c").value = allAnswers[2][2];
                document.getElementById("q3-choice-d").innerHTML = allAnswers[2][3];
                document.getElementById("q3-input-d").value = allAnswers[2][3];
                document.getElementById("q4-choice-a").innerHTML = allAnswers[3][0];
                document.getElementById("q4-input-a").value = allAnswers[3][0];
                document.getElementById("q4-choice-b").innerHTML = allAnswers[3][1];
                document.getElementById("q4-input-b").value = allAnswers[3][1];
                document.getElementById("q4-choice-c").innerHTML = allAnswers[3][2];
                document.getElementById("q4-input-c").value = allAnswers[3][2];
                document.getElementById("q4-choice-d").innerHTML = allAnswers[3][3];
                document.getElementById("q4-input-d").value = allAnswers[3][3];
                document.getElementById("q5-choice-a").innerHTML = allAnswers[4][0];
                document.getElementById("q5-input-a").value = allAnswers[4][0];
                document.getElementById("q5-choice-b").innerHTML = allAnswers[4][1];
                document.getElementById("q5-input-b").value = allAnswers[4][1];
                document.getElementById("q5-choice-c").innerHTML = allAnswers[4][2];
                document.getElementById("q5-input-c").value = allAnswers[4][2];
                document.getElementById("q5-choice-d").innerHTML = allAnswers[4][3];
                document.getElementById("q5-input-d").value = allAnswers[4][3];
                document.getElementById("q6-choice-a").innerHTML = allAnswers[5][0];
                document.getElementById("q6-input-a").value = allAnswers[5][0];
                document.getElementById("q6-choice-b").innerHTML = allAnswers[5][1];
                document.getElementById("q6-input-b").value = allAnswers[5][1];
                document.getElementById("q6-choice-c").innerHTML = allAnswers[5][2];
                document.getElementById("q6-input-c").value = allAnswers[5][2];
                document.getElementById("q6-choice-d").innerHTML = allAnswers[5][3];
                document.getElementById("q6-input-d").value = allAnswers[5][3];
                document.getElementById("q7-choice-a").innerHTML = allAnswers[6][0];
                document.getElementById("q7-input-a").value = allAnswers[6][0];
                document.getElementById("q7-choice-b").innerHTML = allAnswers[6][1];
                document.getElementById("q7-input-b").value = allAnswers[6][1];
                document.getElementById("q7-choice-c").innerHTML = allAnswers[6][2];
                document.getElementById("q7-input-c").value = allAnswers[6][2];
                document.getElementById("q7-choice-d").innerHTML = allAnswers[6][3];
                document.getElementById("q7-input-d").value = allAnswers[6][3];
                document.getElementById("q8-choice-a").innerHTML = allAnswers[7][0];
                document.getElementById("q8-input-a").value = allAnswers[7][0];
                document.getElementById("q8-choice-b").innerHTML = allAnswers[7][1];
                document.getElementById("q8-input-b").value = allAnswers[7][1];
                document.getElementById("q8-choice-c").innerHTML = allAnswers[7][2];
                document.getElementById("q8-input-c").value = allAnswers[7][2];
                document.getElementById("q8-choice-d").innerHTML = allAnswers[7][3];
                document.getElementById("q8-input-d").value = allAnswers[7][3];
                document.getElementById("q9-choice-a").innerHTML = allAnswers[8][0];
                document.getElementById("q9-input-a").value = allAnswers[8][0];
                document.getElementById("q9-choice-b").innerHTML = allAnswers[8][1];
                document.getElementById("q9-input-b").value = allAnswers[8][1];
                document.getElementById("q9-choice-c").innerHTML = allAnswers[8][2];
                document.getElementById("q9-input-c").value = allAnswers[8][2];
                document.getElementById("q9-choice-d").innerHTML = allAnswers[8][3];
                document.getElementById("q9-input-d").value = allAnswers[8][3];
                document.getElementById("q10-choice-a").innerHTML = allAnswers[9][0];
                document.getElementById("q10-input-a").value = allAnswers[9][0];
                document.getElementById("q10-choice-b").innerHTML = allAnswers[9][1];
                document.getElementById("q10-input-b").value = allAnswers[9][1];
                document.getElementById("q10-choice-c").innerHTML = allAnswers[9][2];
                document.getElementById("q10-input-c").value = allAnswers[9][2];
                document.getElementById("q10-choice-d").innerHTML = allAnswers[9][3];
                document.getElementById("q10-input-d").value = allAnswers[9][3];
                document.getElementById("q11-choice-a").innerHTML = allAnswers[10][0];
                document.getElementById("q11-input-a").value = allAnswers[10][0];
                document.getElementById("q11-choice-b").innerHTML = allAnswers[10][1];
                document.getElementById("q11-input-b").value = allAnswers[10][1];
                document.getElementById("q11-choice-c").innerHTML = allAnswers[10][2];
                document.getElementById("q11-input-c").value = allAnswers[10][2];
                document.getElementById("q11-choice-d").innerHTML = allAnswers[10][3];
                document.getElementById("q11-input-d").value = allAnswers[10][3];
                document.getElementById("q12-choice-a").innerHTML = allAnswers[11][0];
                document.getElementById("q12-input-a").value = allAnswers[11][0];
                document.getElementById("q12-choice-b").innerHTML = allAnswers[11][1];
                document.getElementById("q12-input-b").value = allAnswers[11][1];
                document.getElementById("q12-choice-c").innerHTML = allAnswers[11][2];
                document.getElementById("q12-input-c").value = allAnswers[11][2];
                document.getElementById("q12-choice-d").innerHTML = allAnswers[11][3];
                document.getElementById("q12-input-d").value = allAnswers[11][3];
                document.getElementById("q13-choice-a").innerHTML = allAnswers[12][0];
                document.getElementById("q13-input-a").value = allAnswers[12][0];
                document.getElementById("q13-choice-b").innerHTML = allAnswers[12][1];
                document.getElementById("q13-input-b").value = allAnswers[12][1];
                document.getElementById("q13-choice-c").innerHTML = allAnswers[12][2];
                document.getElementById("q13-input-c").value = allAnswers[12][2];
                document.getElementById("q13-choice-d").innerHTML = allAnswers[12][3];
                document.getElementById("q13-input-d").value = allAnswers[12][3];
                document.getElementById("q14-choice-a").innerHTML = allAnswers[13][0];
                document.getElementById("q14-input-a").value = allAnswers[13][0];
                document.getElementById("q14-choice-b").innerHTML = allAnswers[13][1];
                document.getElementById("q14-input-b").value = allAnswers[13][1];
                document.getElementById("q14-choice-c").innerHTML = allAnswers[13][2];
                document.getElementById("q14-input-c").value = allAnswers[13][2];
                document.getElementById("q14-choice-d").innerHTML = allAnswers[13][3];
                document.getElementById("q14-input-d").value = allAnswers[13][3];
                document.getElementById("q15-choice-a").innerHTML = allAnswers[14][0];
                document.getElementById("q15-input-a").value = allAnswers[14][0];
                document.getElementById("q15-choice-b").innerHTML = allAnswers[14][1];
                document.getElementById("q15-input-b").value = allAnswers[14][1];
                document.getElementById("q15-choice-c").innerHTML = allAnswers[14][2];
                document.getElementById("q15-input-c").value = allAnswers[14][2];
                document.getElementById("q15-choice-d").innerHTML = allAnswers[14][3];
                document.getElementById("q15-input-d").value = allAnswers[14][3];
                document.getElementById("q16-choice-a").innerHTML = allAnswers[15][0];
                document.getElementById("q16-input-a").value = allAnswers[15][0];
                document.getElementById("q16-choice-b").innerHTML = allAnswers[15][1];
                document.getElementById("q16-input-b").value = allAnswers[15][1];
                document.getElementById("q16-choice-c").innerHTML = allAnswers[15][2];
                document.getElementById("q16-input-c").value = allAnswers[15][2];
                document.getElementById("q16-choice-d").innerHTML = allAnswers[15][3];
                document.getElementById("q16-input-d").value = allAnswers[15][3];
                document.getElementById("q17-choice-a").innerHTML = allAnswers[16][0];
                document.getElementById("q17-input-a").value = allAnswers[16][0];
                document.getElementById("q17-choice-b").innerHTML = allAnswers[16][1];
                document.getElementById("q17-input-b").value = allAnswers[16][1];
                document.getElementById("q17-choice-c").innerHTML = allAnswers[16][2];
                document.getElementById("q17-input-c").value = allAnswers[16][2];
                document.getElementById("q17-choice-d").innerHTML = allAnswers[16][3];
                document.getElementById("q17-input-d").value = allAnswers[16][3];
                document.getElementById("q18-choice-a").innerHTML = allAnswers[17][0];
                document.getElementById("q18-input-a").value = allAnswers[17][0];
                document.getElementById("q18-choice-b").innerHTML = allAnswers[17][1];
                document.getElementById("q18-input-b").value = allAnswers[17][1];
                document.getElementById("q18-choice-c").innerHTML = allAnswers[17][2];
                document.getElementById("q18-input-c").value = allAnswers[17][2];
                document.getElementById("q18-choice-d").innerHTML = allAnswers[17][3];
                document.getElementById("q18-input-d").value = allAnswers[17][3];
                document.getElementById("q19-choice-a").innerHTML = allAnswers[18][0];
                document.getElementById("q19-input-a").value = allAnswers[18][0];
                document.getElementById("q19-choice-b").innerHTML = allAnswers[18][1];
                document.getElementById("q19-input-b").value = allAnswers[18][1];
                document.getElementById("q19-choice-c").innerHTML = allAnswers[18][2];
                document.getElementById("q19-input-c").value = allAnswers[18][2];
                document.getElementById("q19-choice-d").innerHTML = allAnswers[18][3];
                document.getElementById("q19-input-d").value = allAnswers[18][3];
                document.getElementById("q20-choice-a").innerHTML = allAnswers[19][0];
                document.getElementById("q20-input-a").value = allAnswers[19][0];
                document.getElementById("q20-choice-b").innerHTML = allAnswers[19][1];
                document.getElementById("q20-input-b").value = allAnswers[19][1];
                document.getElementById("q20-choice-c").innerHTML = allAnswers[19][2];
                document.getElementById("q20-input-c").value = allAnswers[19][2];
                document.getElementById("q20-choice-d").innerHTML = allAnswers[19][3];
                document.getElementById("q20-input-d").value = allAnswers[19][3];
            }
        }
    });
}





function correctOrIncorrect() {
    score = 0;
    
    if (amount == 5 ) {
        if (document.querySelector('input[name="answer-1"]:checked').value === myQuestions[0].correct_answer) {
            score++;
            audioCorrect();
        } else {
            audioIncorrect();
        }
        if (document.querySelector('input[name="answer-2"]:checked').value === myQuestions[1].correct_answer) {
            score++;
            audioCorrect();
        } else {
            audioIncorrect();
        }
        if (document.querySelector('input[name="answer-3"]:checked').value === myQuestions[2].correct_answer) {
            score++;
            audioCorrect();
        } else {
            audioIncorrect();
        }
        if (document.querySelector('input[name="answer-4"]:checked').value === myQuestions[3].correct_answer) {
            score++;
            audioCorrect();
        } else {
            audioIncorrect();
        }
        if (document.querySelector('input[name="answer-5"]:checked').value === myQuestions[4].correct_answer) {
            score++;
            audioCorrect();
        } else {
            audioIncorrect();
        }
    }
    
    if (amount == 10) {
        if (document.querySelector('input[name="answer-1"]:checked').value === myQuestions[0].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-2"]:checked').value === myQuestions[1].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-3"]:checked').value === myQuestions[2].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-4"]:checked').value === myQuestions[3].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-5"]:checked').value === myQuestions[4].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-6"]:checked').value === myQuestions[5].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-7"]:checked').value === myQuestions[6].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-8"]:checked').value === myQuestions[7].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-9"]:checked').value === myQuestions[8].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-10"]:checked').value === myQuestions[9].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
    }
    
    if (amount== 15){
         if (document.querySelector('input[name="answer-1"]:checked').value === myQuestions[0].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-2"]:checked').value === myQuestions[1].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-3"]:checked').value === myQuestions[2].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-4"]:checked').value === myQuestions[3].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-5"]:checked').value === myQuestions[4].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-6"]:checked').value === myQuestions[5].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-7"]:checked').value === myQuestions[6].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-8"]:checked').value === myQuestions[7].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-9"]:checked').value === myQuestions[8].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-10"]:checked').value === myQuestions[9].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-11"]:checked').value === myQuestions[10].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-12"]:checked').value === myQuestions[11].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-13"]:checked').value === myQuestions[12].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-14"]:checked').value === myQuestions[13].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-15"]:checked').value === myQuestions[14].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
    }
    
    if (amount == 20) {
        if (document.querySelector('input[name="answer-1"]:checked').value === myQuestions[0].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-2"]:checked').value === myQuestions[1].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-3"]:checked').value === myQuestions[2].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-4"]:checked').value === myQuestions[3].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-5"]:checked').value === myQuestions[4].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-6"]:checked').value === myQuestions[5].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-7"]:checked').value === myQuestions[6].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-8"]:checked').value === myQuestions[7].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-9"]:checked').value === myQuestions[8].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-10"]:checked').value === myQuestions[9].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-11"]:checked').value === myQuestions[10].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-12"]:checked').value === myQuestions[11].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-13"]:checked').value === myQuestions[12].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-14"]:checked').value === myQuestions[13].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-15"]:checked').value === myQuestions[14].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-16"]:checked').value === myQuestions[15].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-17"]:checked').value === myQuestions[16].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-18"]:checked').value === myQuestions[17].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-19"]:checked').value === myQuestions[18].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
        if (document.querySelector('input[name="answer-20"]:checked').value === myQuestions[19].correct_answer) {
            score++;
            audioCorrect.play();
        } else {
            audioIncorrect.play();
        }
    }
    console.log(score);
    localStorage.setItem('mostRecentScore', score);
}
