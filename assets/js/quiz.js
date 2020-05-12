var amount;
var data;
var questions;
var incorrectAns;
var correctAns;

function hideUnusedSlides(){
    if (amount == 15) {
        document.getElementById("slide-20").remove();
        document.getElementById("slide-19").remove();
        document.getElementById("slide-18").remove();
        document.getElementById("slide-17").remove();
        document.getElementById("slide-16").remove();
    }else if(amount == 10){
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
    }else if(amount == 5) {
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
        data = data.results;
        console.log(data);
        data.forEach(function(item) {
             document.getElementById("question-1").innerHTML = data[0].question;
             document.getElementById("question-2").innerHTML = data[1].question;
             document.getElementById("question-3").innerHTML = data[2].question;
             document.getElementById("question-4").innerHTML = data[3].question;
             document.getElementById("question-5").innerHTML = data[4].question;
             document.getElementById("question-6").innerHTML = data[5].question;
             document.getElementById("question-7").innerHTML = data[6].question;
             document.getElementById("question-8").innerHTML = data[7].question;
             document.getElementById("question-9").innerHTML = data[8].question;
             document.getElementById("question-10").innerHTML = data[9].question;
             document.getElementById("question-11").innerHTML = data[10].question;
             document.getElementById("question-12").innerHTML = data[11].question;
             document.getElementById("question-13").innerHTML = data[12].question;
             document.getElementById("question-14").innerHTML = data[13].question;
             document.getElementById("question-15").innerHTML = data[14].question;
             document.getElementById("question-16").innerHTML = data[15].question;
             document.getElementById("question-17").innerHTML = data[16].question;
             document.getElementById("question-18").innerHTML = data[17].question;
             document.getElementById("question-19").innerHTML = data[18].question;
             document.getElementById("question-20").innerHTML = data[19].question;
        });
    });           
}







