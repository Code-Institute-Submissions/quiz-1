var amount;
var category;
var difficulty;
var type;

function apiValues() {

    amount = $("#amount option:selected").data("amount");
    category = $("#category option:selected").data("category");
    difficulty = $("#difficulty option:selected").data("difficulty");
    type = $("#type option:selected").data("type");

    console.log(amount);
    console.log(category);
    console.log(difficulty);
    console.log(type);
}

function timeDelay() {
    setTimeout(function() {

        window.location.href = "quiz.html";

    }, 6000);
}

function apiRequest() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("#question").innerHTML = this.responseText;
        }


    };

    xhr.open("GET", `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);

    xhr.send();

    console.log(xhr);
}
