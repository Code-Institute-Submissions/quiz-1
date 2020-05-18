var amount;
var myQuestions;
var questions;
var incorrectAns;
var correctAns;
var answers;
let text;

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
    var type = sessionStorage.getItem('type');

    var xhr = new XMLHttpRequest();

    xhr.open("GET", `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);
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
        console.log(myQuestions);
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
        for (let i = 0; i < myQuestions.length; i++) {
            correctAns = myQuestions[i].correct_answer;
            incorrectAns = myQuestions[i].incorrect_answers;
            answers += [];
            answers = incorrectAns.concat(correctAns);
            shuffleAns(answers);
            displayAnswers();
            console.log(answers);
        }

        function shuffleAns(answers) {
            for (let i = answers.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [answers[i], answers[j]] = [answers[j], answers[i]];
            }
        }

        function displayAnswers() {
            for (var i = 0; i<answers.length; i++) {
                document.getElementById("q1-choice-a").innerHTML = answers[0];
                document.getElementById("q1-choice-b").innerHTML = answers[1];
                document.getElementById("q1-choice-c").innerHTML = answers[2];
                document.getElementById("q1-choice-d").innerHTML = answers[3];
                document.getElementById("q2-choice-a").innerHTML = answers[0];
            }
                
            }
        }
    );
}
