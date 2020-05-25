var amount;
var category;
var difficulty;
var type;

function apiValues() {

    amount = $("#amount option:selected").data("amount");
    category = $("#category option:selected").data("category");
    difficulty = $("#difficulty option:selected").data("difficulty");

    sessionStorage.setItem('amount', amount);
    sessionStorage.setItem('category', category);
    sessionStorage.setItem('difficulty', difficulty);

}

function timeDelay() {
    setTimeout(function() {

        window.location.href = "quiz.html";

    }, 6000);
}

function getUsername() {
    var username = document.getElementById("username").value;
    console.log(username);
    localStorage.setItem("username", username);
}