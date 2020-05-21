function score() {
    var score = localStorage.getItem('score');
    var amount = sessionStorage.getItem('amount');
    
    console.log(score);
    console.log(amount);
    
    var scorePercent = (score/amount)*100;
    console.log(scorePercent);
    
    document.getElementById("scorePercent").innerHTML = scorePercent +"%";
}


