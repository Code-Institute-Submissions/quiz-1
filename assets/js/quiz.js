var amount;
var questions;
var incorrectAns;
var correctAns;

function hideUnusedSlides(){
    if (amount == 15) {
        document.getElementById("slide-20").style.visibility = "hidden";
        document.getElementById("slide-19").style.visibility = "hidden";
        document.getElementById("slide-18").style.visibility = "hidden";
        document.getElementById("slide-17").style.visibility = "hidden";
        document.getElementById("slide-16").style.visibility = "hidden";
    }else if(amount == 10){
        document.getElementById("slide-15").style.visibility = "hidden";
        document.getElementById("slide-14").style.visibility = "hidden";
        document.getElementById("slide-13").style.visibility = "hidden";
        document.getElementById("slide-12").style.visibility = "hidden";
        document.getElementById("slide-11").style.visibility = "hidden";
    }else if(amount == 5) {
        document.getElementById("slide-10").style.visibility = "hidden";
        document.getElementById("slide-9").style.visibility = "hidden";
        document.getElementById("slide-8").style.visibility = "hidden";
        document.getElementById("slide-7").style.visibility = "hidden";
        document.getElementById("slide-6").style.visibility = "hidden";
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

function getQuestionsAndAns(type) {
    apiRequest(type, function(data) {
        data = data.results;
        console.log(data);
        var rObj = data.map(obj => {
            questions = {};
            questions[obj.key] = obj.question;
            console.log(questions);
        });
        rObj = data.map(obj => {
            incorrectAns = {};
            incorrectAns[obj.key] = obj.incorrect_answers;

        });
        rObj = data.map(obj => {
            correctAns = {};
            correctAns[obj.key] = obj.correct_answer;

        });
    });
}


setTimeout(function() {
    console.log(amount);
    console.log(questions);
    console.log(incorrectAns);
    console.log(correctAns);
}, 2000);


