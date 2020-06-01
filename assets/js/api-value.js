var amount;
var category;
var difficulty;

function apiValues() {

    amount = $("#amount option:selected").data("amount");
    category = $("#category option:selected").data("category");
    difficulty = $("#difficulty option:selected").data("difficulty");

    sessionStorage.setItem('amount', amount);
    sessionStorage.setItem('category', category);
    sessionStorage.setItem('difficulty', difficulty);
    // gets api paramaters from dropdown list and saves them to session storage
}

function timeDelay() {
    setTimeout(function() {

        window.location.href = "quiz.html";

    }, 6000);
    //function that takes user to quiz page with a delay of seconds to let modal timer finish
}

function getUsername() {
    var username = document.getElementById("username").value;
    console.log(username);
    localStorage.setItem("username", username);
    // gets the value of the user name and saves it to session storage to use in leaderboard.html
}