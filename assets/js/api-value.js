var amount;
var category;
var difficulty;
var type;

function apiValues() {

    amount = $("#amount option:selected").data("amount");
    category = $("#category option:selected").data("category");
    difficulty = $("#difficulty option:selected").data("difficulty");
    type = $("#type option:selected").data("type");

    sessionStorage.setItem('amount', amount);
    sessionStorage.setItem('category', category);
    sessionStorage.setItem('difficulty', difficulty);
    sessionStorage.setItem('type', type);

}

function timeDelay() {
    setTimeout(function() {

        window.location.href = "quiz.html";

    }, 6000);
}

console.log(amount);