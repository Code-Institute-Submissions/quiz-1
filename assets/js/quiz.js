function apiRequest(type, cb) {

    var amount = sessionStorage.getItem('amount');
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
            var questions = {};
            questions[obj.key] = obj.question;
            console.log(questions);
        });
        rObj = data.map(obj => {
            var incorrectAns = {};
            incorrectAns[obj.key] = obj.incorrect_answers;
            console.log(incorrectAns);
        });
        rObj = data.map(obj => {
            var correctAns = {};
            correctAns[obj.key] = obj.correct_answer;
            console.log(correctAns);
        });
    });
}


