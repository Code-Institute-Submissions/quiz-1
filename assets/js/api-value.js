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
    
    console.log(sessionStorage);
    
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


