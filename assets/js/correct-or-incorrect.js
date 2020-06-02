var score;
var questionCounter;
var amount = sessionStorage.getItem('amount');
var myQuestions = sessionStorage.getItem('myQuestions');

function correctOrIncorrect() {
    score = 0;
    questionCounter = 0;

    if (amount == 5) {
        //checks if the answer chosen is the correct answer
        if (document.querySelector('input[name="answer-1"]:checked').value === myQuestions[0].correct_answer) {
            // increments score if answer is correct
            score++;
            //increments questionCounter after question is answered
            questionCounter++;
            //displays green tick if answer is correct
            document.getElementById("correct/incorrect-1").innerHTML = "<img src='assets/images/correct.png'>";
            //stores score to local Storage to be used in leaderboard.html
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            //increments questionCounter after question is answered
            questionCounter++;
            //  displays red x if answer is incorrect
            document.getElementById("correct/incorrect-1").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-2"]:checked').value === myQuestions[1].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-2").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-2").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-3"]:checked').value === myQuestions[2].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-3").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-3").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-4"]:checked').value === myQuestions[3].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-4").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-4").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-5"]:checked').value === myQuestions[4].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-5").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-5").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        // function that takes user to leaderboard page when all questions are answered 
        if (questionCounter == 5) {
            // function that takes user to leaderboard page when all questions are answered 
            setTimeout(function() {
                window.location.href = "leaderboard.html";
            }, 2000);
        }
        console.log(questionCounter);
    }

    if (amount == 10) {
        if (document.querySelector('input[name="answer-1"]:checked').value === myQuestions[0].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-1").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-1").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-2"]:checked').value === myQuestions[1].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-2").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-2").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-3"]:checked').value === myQuestions[2].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-3").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-3").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-4"]:checked').value === myQuestions[3].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-4").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-4").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-5"]:checked').value === myQuestions[4].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-5").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-5").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-6"]:checked').value === myQuestions[5].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-6").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-6").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-7"]:checked').value === myQuestions[6].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-7").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-7").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-8"]:checked').value === myQuestions[7].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-8").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-8").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-9"]:checked').value === myQuestions[8].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-9").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-9").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-10"]:checked').value === myQuestions[9].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-10").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-10").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (questionCounter == 10) {
            setTimeout(function() {
                window.location.href = "leaderboard.html";
            }, 2000);
        }
    }

    if (amount == 15) {
        if (document.querySelector('input[name="answer-1"]:checked').value === myQuestions[0].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-1").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-1").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-2"]:checked').value === myQuestions[1].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-2").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-2").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-3"]:checked').value === myQuestions[2].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-3").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-3").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-4"]:checked').value === myQuestions[3].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-4").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-4").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-5"]:checked').value === myQuestions[4].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-5").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-5").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-6"]:checked').value === myQuestions[5].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-6").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-6").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-7"]:checked').value === myQuestions[6].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-7").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-7").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-8"]:checked').value === myQuestions[7].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-8").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-8").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-9"]:checked').value === myQuestions[8].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-9").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-9").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-10"]:checked').value === myQuestions[9].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-10").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-10").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-11"]:checked').value === myQuestions[10].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-11").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-11").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-12"]:checked').value === myQuestions[11].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-12").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-12").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-13"]:checked').value === myQuestions[12].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-13").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-13").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-14"]:checked').value === myQuestions[13].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-14").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-14").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-15"]:checked').value === myQuestions[14].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-15").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-15").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (questionCounter == 15) {
            setTimeout(function() {
                window.location.href = "leaderboard.html";
            }, 2000);
        }
    }

    if (amount == 20) {
        if (document.querySelector('input[name="answer-1"]:checked').value === myQuestions[0].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-1").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-1").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-2"]:checked').value === myQuestions[1].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-2").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-2").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-3"]:checked').value === myQuestions[2].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-3").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-3").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-4"]:checked').value === myQuestions[3].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-4").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-4").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-5"]:checked').value === myQuestions[4].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-5").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-5").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-6"]:checked').value === myQuestions[5].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-6").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-6").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-7"]:checked').value === myQuestions[6].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-7").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-7").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-8"]:checked').value === myQuestions[7].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-8").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-8").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-9"]:checked').value === myQuestions[8].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-9").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-9").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-10"]:checked').value === myQuestions[9].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-10").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-10").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-11"]:checked').value === myQuestions[10].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-11").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-11").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-12"]:checked').value === myQuestions[11].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-12").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-12").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-13"]:checked').value === myQuestions[12].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-13").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-13").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-14"]:checked').value === myQuestions[13].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-14").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-14").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-15"]:checked').value === myQuestions[14].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-15").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-15").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-16"]:checked').value === myQuestions[15].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-16").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-16").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-17"]:checked').value === myQuestions[16].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-17").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-17").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-18"]:checked').value === myQuestions[17].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-18").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-18").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-19"]:checked').value === myQuestions[18].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-19").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-19").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (document.querySelector('input[name="answer-20"]:checked').value === myQuestions[19].correct_answer) {
            score++;
            questionCounter++;
            document.getElementById("correct/incorrect-20").innerHTML = "<img src='assets/images/correct.png'>";
            sessionStorage.setItem('mostRecentScore', score);
        }
        else {
            questionCounter++;
            document.getElementById("correct/incorrect-20").innerHTML = "<img src='assets/images/incorrect.png'>";
        }
        if (questionCounter == 20) {
            setTimeout(function() {
                window.location.href = "leaderboard.html";
            }, 2000);
        }
    }
    console.log(score);
}
