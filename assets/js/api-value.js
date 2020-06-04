var amount;
var category;
var difficulty;

 // gets api paramaters from dropdown list and saves them to session storage
function apiValues() {

    amount = $("#amount option:selected").data("amount");
    category = $("#category option:selected").data("category");
    difficulty = $("#difficulty option:selected").data("difficulty");
    // saves api parameters to session storage
    sessionStorage.setItem('amount', amount);
    sessionStorage.setItem('category', category);
    sessionStorage.setItem('difficulty', difficulty);
}

 //function that takes user to quiz page with a delay of seconds to let modal timer finish
function timeDelay() {
    setTimeout(function() {
        window.location.href = "quiz.html";
    }, 6000);
}

// gets the value of the user name and saves it to session storage to use in leaderboard.html
function getUsername() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
}