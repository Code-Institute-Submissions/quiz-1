var amount;
var myQuestions;
var incorrectAns;
var correctAns;
var answers;
var allAnswers;

function apiRequest(type, cb) {

    // gets api parameters from load.html
    amount = sessionStorage.getItem('amount');
    var category = sessionStorage.getItem('category');
    var difficulty = sessionStorage.getItem('difficulty');

    var xhr = new XMLHttpRequest();

    // api url
    xhr.open("GET", `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function displayQuestions(type) {
    apiRequest(type, function(data) {
        //stores api response in myQuestions variable
        myQuestions = data.results;
        sessionStorage.setItem('myQuestions', myQuestions);
        myQuestions.forEach(function() {
            // displays questons if there is only 5 questions chosen
            if (amount == 5) {
                document.getElementById("question-1").innerHTML = "Q1. " + myQuestions[0].question;
                document.getElementById("question-2").innerHTML = "Q2. " + myQuestions[1].question;
                document.getElementById("question-3").innerHTML = "Q3. " + myQuestions[2].question;
                document.getElementById("question-4").innerHTML = "Q4. " + myQuestions[3].question;
                document.getElementById("question-5").innerHTML = "Q5. " + myQuestions[4].question;
            }
            // displays questions if there is 10 questions chosen
            else if (amount == 10) {
                document.getElementById("question-1").innerHTML = "Q1. " + myQuestions[0].question;
                document.getElementById("question-2").innerHTML = "Q2. " + myQuestions[1].question;
                document.getElementById("question-3").innerHTML = "Q3. " + myQuestions[2].question;
                document.getElementById("question-4").innerHTML = "Q4. " + myQuestions[3].question;
                document.getElementById("question-5").innerHTML = "Q5. " + myQuestions[4].question;
                document.getElementById("question-6").innerHTML = "Q6. " + myQuestions[5].question;
                document.getElementById("question-7").innerHTML = "Q7. " + myQuestions[6].question;
                document.getElementById("question-8").innerHTML = "Q8. " + myQuestions[7].question;
                document.getElementById("question-9").innerHTML = "Q9. " + myQuestions[8].question;
                document.getElementById("question-10").innerHTML = "Q10. " + myQuestions[9].question;
            }
            // displays questions if there 15 is questions chosen
            else if (amount == 15) {
                document.getElementById("question-1").innerHTML = "Q1. " + myQuestions[0].question;
                document.getElementById("question-2").innerHTML = "Q2. " + myQuestions[1].question;
                document.getElementById("question-3").innerHTML = "Q3. " + myQuestions[2].question;
                document.getElementById("question-4").innerHTML = "Q4. " + myQuestions[3].question;
                document.getElementById("question-5").innerHTML = "Q5. " + myQuestions[4].question;
                document.getElementById("question-6").innerHTML = "Q6. " + myQuestions[5].question;
                document.getElementById("question-7").innerHTML = "Q7. " + myQuestions[6].question;
                document.getElementById("question-8").innerHTML = "Q8. " + myQuestions[7].question;
                document.getElementById("question-9").innerHTML = "Q9. " + myQuestions[8].question;
                document.getElementById("question-10").innerHTML = "Q10. " + myQuestions[9].question;
                document.getElementById("question-11").innerHTML = "Q11. " + myQuestions[10].question;
                document.getElementById("question-12").innerHTML = "Q12. " + myQuestions[11].question;
                document.getElementById("question-13").innerHTML = "Q13. " + myQuestions[12].question;
                document.getElementById("question-14").innerHTML = "Q14. " + myQuestions[13].question;
                document.getElementById("question-15").innerHTML = "Q15. " + myQuestions[14].question;
            }
            // displays questions if there is 20 questions chosen
            else if (amount == 20) {
                document.getElementById("question-1").innerHTML = "Q1. " + myQuestions[0].question;
                document.getElementById("question-2").innerHTML = "Q2. " + myQuestions[1].question;
                document.getElementById("question-3").innerHTML = "Q3. " + myQuestions[2].question;
                document.getElementById("question-4").innerHTML = "Q4. " + myQuestions[3].question;
                document.getElementById("question-5").innerHTML = "Q5. " + myQuestions[4].question;
                document.getElementById("question-6").innerHTML = "Q6. " + myQuestions[5].question;
                document.getElementById("question-7").innerHTML = "Q7. " + myQuestions[6].question;
                document.getElementById("question-8").innerHTML = "Q8. " + myQuestions[7].question;
                document.getElementById("question-9").innerHTML = "Q9. " + myQuestions[8].question;
                document.getElementById("question-10").innerHTML = "Q10. " + myQuestions[9].question;
                document.getElementById("question-11").innerHTML = "Q11. " + myQuestions[10].question;
                document.getElementById("question-12").innerHTML = "Q12. " + myQuestions[11].question;
                document.getElementById("question-13").innerHTML = "Q13. " + myQuestions[12].question;
                document.getElementById("question-14").innerHTML = "Q14. " + myQuestions[13].question;
                document.getElementById("question-15").innerHTML = "Q15. " + myQuestions[14].question;
                document.getElementById("question-16").innerHTML = "Q16. " + myQuestions[15].question;
                document.getElementById("question-17").innerHTML = "Q17. " + myQuestions[16].question;
                document.getElementById("question-18").innerHTML = "Q18. " + myQuestions[17].question;
                document.getElementById("question-19").innerHTML = "Q19. " + myQuestions[18].question;
                document.getElementById("question-20").innerHTML = "Q20. " + myQuestions[19].question;
            }
        });
        allAnswers = [];
        // for loop that pulls the correct and incorrect answers from myQuestions and pushes and joins them into answers
        for (let i = 0; i < myQuestions.length; i++) {
            correctAns = myQuestions[i].correct_answer;
            incorrectAns = myQuestions[i].incorrect_answers;
            answers = incorrectAns.concat(correctAns);
            shuffleAns(answers);
            // pushes the shuffled answers into an array called allAnswers
            allAnswers.push(answers);
        }
        displayAnswers();

        // function that shuffles the answers 
        function shuffleAns(answers) {
            for (let i = answers.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [answers[i], answers[j]] = [answers[j], answers[i]];
            }
        }
        
        // function that displays answers
        function displayAnswers() {
            if (amount == 5) {
                // writes the first answer to the first radio button
                document.getElementById("q1-choice-a").innerHTML = allAnswers[0][0];
                // changes the value attribute of the first radio button to correspond to the answer
                document.getElementById("q1-input-a").value = allAnswers[0][0];
                document.getElementById("q1-choice-b").innerHTML = allAnswers[0][1];
                document.getElementById("q1-input-b").value = allAnswers[0][1];
                document.getElementById("q1-choice-c").innerHTML = allAnswers[0][2];
                document.getElementById("q1-input-c").value = allAnswers[0][2];
                document.getElementById("q1-choice-d").innerHTML = allAnswers[0][3];
                document.getElementById("q1-input-d").value = allAnswers[0][3];
                document.getElementById("q2-choice-a").innerHTML = allAnswers[1][0];
                document.getElementById("q2-input-a").value = allAnswers[1][0];
                document.getElementById("q2-choice-b").innerHTML = allAnswers[1][1];
                document.getElementById("q2-input-b").value = allAnswers[1][1];
                document.getElementById("q2-choice-c").innerHTML = allAnswers[1][2];
                document.getElementById("q2-input-c").value = allAnswers[1][2];
                document.getElementById("q2-choice-d").innerHTML = allAnswers[1][3];
                document.getElementById("q2-input-d").value = allAnswers[1][3];
                document.getElementById("q3-choice-a").innerHTML = allAnswers[2][0];
                document.getElementById("q3-input-a").value = allAnswers[2][0];
                document.getElementById("q3-choice-b").innerHTML = allAnswers[2][1];
                document.getElementById("q3-input-b").value = allAnswers[2][1];
                document.getElementById("q3-choice-c").innerHTML = allAnswers[2][2];
                document.getElementById("q3-input-c").value = allAnswers[2][2];
                document.getElementById("q3-choice-d").innerHTML = allAnswers[2][3];
                document.getElementById("q3-input-d").value = allAnswers[2][3];
                document.getElementById("q4-choice-a").innerHTML = allAnswers[3][0];
                document.getElementById("q4-input-a").value = allAnswers[3][0];
                document.getElementById("q4-choice-b").innerHTML = allAnswers[3][1];
                document.getElementById("q4-input-b").value = allAnswers[3][1];
                document.getElementById("q4-choice-c").innerHTML = allAnswers[3][2];
                document.getElementById("q4-input-c").value = allAnswers[3][2];
                document.getElementById("q4-choice-d").innerHTML = allAnswers[3][3];
                document.getElementById("q4-input-d").value = allAnswers[3][3];
                document.getElementById("q5-choice-a").innerHTML = allAnswers[4][0];
                document.getElementById("q5-input-a").value = allAnswers[4][0];
                document.getElementById("q5-choice-b").innerHTML = allAnswers[4][1];
                document.getElementById("q5-input-b").value = allAnswers[4][1];
                document.getElementById("q5-choice-c").innerHTML = allAnswers[4][2];
                document.getElementById("q5-input-c").value = allAnswers[4][2];
                document.getElementById("q5-choice-d").innerHTML = allAnswers[4][3];
                document.getElementById("q5-input-d").value = allAnswers[4][3];
            }
            if (amount == 10) {
                document.getElementById("q1-choice-a").innerHTML = allAnswers[0][0];
                document.getElementById("q1-input-a").value = allAnswers[0][0];
                document.getElementById("q1-choice-b").innerHTML = allAnswers[0][1];
                document.getElementById("q1-input-b").value = allAnswers[0][1];
                document.getElementById("q1-choice-c").innerHTML = allAnswers[0][2];
                document.getElementById("q1-input-c").value = allAnswers[0][2];
                document.getElementById("q1-choice-d").innerHTML = allAnswers[0][3];
                document.getElementById("q1-input-d").value = allAnswers[0][3];
                document.getElementById("q2-choice-a").innerHTML = allAnswers[1][0];
                document.getElementById("q2-input-a").value = allAnswers[1][0];
                document.getElementById("q2-choice-b").innerHTML = allAnswers[1][1];
                document.getElementById("q2-input-b").value = allAnswers[1][1];
                document.getElementById("q2-choice-c").innerHTML = allAnswers[1][2];
                document.getElementById("q2-input-c").value = allAnswers[1][2];
                document.getElementById("q2-choice-d").innerHTML = allAnswers[1][3];
                document.getElementById("q2-input-d").value = allAnswers[1][3];
                document.getElementById("q3-choice-a").innerHTML = allAnswers[2][0];
                document.getElementById("q3-input-a").value = allAnswers[2][0];
                document.getElementById("q3-choice-b").innerHTML = allAnswers[2][1];
                document.getElementById("q3-input-b").value = allAnswers[2][1];
                document.getElementById("q3-choice-c").innerHTML = allAnswers[2][2];
                document.getElementById("q3-input-c").value = allAnswers[2][2];
                document.getElementById("q3-choice-d").innerHTML = allAnswers[2][3];
                document.getElementById("q3-input-d").value = allAnswers[2][3];
                document.getElementById("q4-choice-a").innerHTML = allAnswers[3][0];
                document.getElementById("q4-input-a").value = allAnswers[3][0];
                document.getElementById("q4-choice-b").innerHTML = allAnswers[3][1];
                document.getElementById("q4-input-b").value = allAnswers[3][1];
                document.getElementById("q4-choice-c").innerHTML = allAnswers[3][2];
                document.getElementById("q4-input-c").value = allAnswers[3][2];
                document.getElementById("q4-choice-d").innerHTML = allAnswers[3][3];
                document.getElementById("q4-input-d").value = allAnswers[3][3];
                document.getElementById("q5-choice-a").innerHTML = allAnswers[4][0];
                document.getElementById("q5-input-a").value = allAnswers[4][0];
                document.getElementById("q5-choice-b").innerHTML = allAnswers[4][1];
                document.getElementById("q5-input-b").value = allAnswers[4][1];
                document.getElementById("q5-choice-c").innerHTML = allAnswers[4][2];
                document.getElementById("q5-input-c").value = allAnswers[4][2];
                document.getElementById("q5-choice-d").innerHTML = allAnswers[4][3];
                document.getElementById("q5-input-d").value = allAnswers[4][3];
                document.getElementById("q6-choice-a").innerHTML = allAnswers[5][0];
                document.getElementById("q6-input-a").value = allAnswers[5][0];
                document.getElementById("q6-choice-b").innerHTML = allAnswers[5][1];
                document.getElementById("q6-input-b").value = allAnswers[5][1];
                document.getElementById("q6-choice-c").innerHTML = allAnswers[5][2];
                document.getElementById("q6-input-c").value = allAnswers[5][2];
                document.getElementById("q6-choice-d").innerHTML = allAnswers[5][3];
                document.getElementById("q6-input-d").value = allAnswers[5][3];
                document.getElementById("q7-choice-a").innerHTML = allAnswers[6][0];
                document.getElementById("q7-input-a").value = allAnswers[6][0];
                document.getElementById("q7-choice-b").innerHTML = allAnswers[6][1];
                document.getElementById("q7-input-b").value = allAnswers[6][1];
                document.getElementById("q7-choice-c").innerHTML = allAnswers[6][2];
                document.getElementById("q7-input-c").value = allAnswers[6][2];
                document.getElementById("q7-choice-d").innerHTML = allAnswers[6][3];
                document.getElementById("q7-input-d").value = allAnswers[6][3];
                document.getElementById("q8-choice-a").innerHTML = allAnswers[7][0];
                document.getElementById("q8-input-a").value = allAnswers[7][0];
                document.getElementById("q8-choice-b").innerHTML = allAnswers[7][1];
                document.getElementById("q8-input-b").value = allAnswers[7][1];
                document.getElementById("q8-choice-c").innerHTML = allAnswers[7][2];
                document.getElementById("q8-input-c").value = allAnswers[7][2];
                document.getElementById("q8-choice-d").innerHTML = allAnswers[7][3];
                document.getElementById("q8-input-d").value = allAnswers[7][3];
                document.getElementById("q9-choice-a").innerHTML = allAnswers[8][0];
                document.getElementById("q9-input-a").value = allAnswers[8][0];
                document.getElementById("q9-choice-b").innerHTML = allAnswers[8][1];
                document.getElementById("q9-input-b").value = allAnswers[8][1];
                document.getElementById("q9-choice-c").innerHTML = allAnswers[8][2];
                document.getElementById("q9-input-c").value = allAnswers[8][2];
                document.getElementById("q9-choice-d").innerHTML = allAnswers[8][3];
                document.getElementById("q9-input-d").value = allAnswers[8][3];
                document.getElementById("q10-choice-a").innerHTML = allAnswers[9][0];
                document.getElementById("q10-input-a").value = allAnswers[9][0];
                document.getElementById("q10-choice-b").innerHTML = allAnswers[9][1];
                document.getElementById("q10-input-b").value = allAnswers[9][1];
                document.getElementById("q10-choice-c").innerHTML = allAnswers[9][2];
                document.getElementById("q10-input-c").value = allAnswers[9][2];
                document.getElementById("q10-choice-d").innerHTML = allAnswers[9][3];
                document.getElementById("q10-input-d").value = allAnswers[9][3];
            }
            if (amount == 15) {
                document.getElementById("q1-choice-a").innerHTML = allAnswers[0][0];
                document.getElementById("q1-input-a").value = allAnswers[0][0];
                document.getElementById("q1-choice-b").innerHTML = allAnswers[0][1];
                document.getElementById("q1-input-b").value = allAnswers[0][1];
                document.getElementById("q1-choice-c").innerHTML = allAnswers[0][2];
                document.getElementById("q1-input-c").value = allAnswers[0][2];
                document.getElementById("q1-choice-d").innerHTML = allAnswers[0][3];
                document.getElementById("q1-input-d").value = allAnswers[0][3];
                document.getElementById("q2-choice-a").innerHTML = allAnswers[1][0];
                document.getElementById("q2-input-a").value = allAnswers[1][0];
                document.getElementById("q2-choice-b").innerHTML = allAnswers[1][1];
                document.getElementById("q2-input-b").value = allAnswers[1][1];
                document.getElementById("q2-choice-c").innerHTML = allAnswers[1][2];
                document.getElementById("q2-input-c").value = allAnswers[1][2];
                document.getElementById("q2-choice-d").innerHTML = allAnswers[1][3];
                document.getElementById("q2-input-d").value = allAnswers[1][3];
                document.getElementById("q3-choice-a").innerHTML = allAnswers[2][0];
                document.getElementById("q3-input-a").value = allAnswers[2][0];
                document.getElementById("q3-choice-b").innerHTML = allAnswers[2][1];
                document.getElementById("q3-input-b").value = allAnswers[2][1];
                document.getElementById("q3-choice-c").innerHTML = allAnswers[2][2];
                document.getElementById("q3-input-c").value = allAnswers[2][2];
                document.getElementById("q3-choice-d").innerHTML = allAnswers[2][3];
                document.getElementById("q3-input-d").value = allAnswers[2][3];
                document.getElementById("q4-choice-a").innerHTML = allAnswers[3][0];
                document.getElementById("q4-input-a").value = allAnswers[3][0];
                document.getElementById("q4-choice-b").innerHTML = allAnswers[3][1];
                document.getElementById("q4-input-b").value = allAnswers[3][1];
                document.getElementById("q4-choice-c").innerHTML = allAnswers[3][2];
                document.getElementById("q4-input-c").value = allAnswers[3][2];
                document.getElementById("q4-choice-d").innerHTML = allAnswers[3][3];
                document.getElementById("q4-input-d").value = allAnswers[3][3];
                document.getElementById("q5-choice-a").innerHTML = allAnswers[4][0];
                document.getElementById("q5-input-a").value = allAnswers[4][0];
                document.getElementById("q5-choice-b").innerHTML = allAnswers[4][1];
                document.getElementById("q5-input-b").value = allAnswers[4][1];
                document.getElementById("q5-choice-c").innerHTML = allAnswers[4][2];
                document.getElementById("q5-input-c").value = allAnswers[4][2];
                document.getElementById("q5-choice-d").innerHTML = allAnswers[4][3];
                document.getElementById("q5-input-d").value = allAnswers[4][3];
                document.getElementById("q6-choice-a").innerHTML = allAnswers[5][0];
                document.getElementById("q6-input-a").value = allAnswers[5][0];
                document.getElementById("q6-choice-b").innerHTML = allAnswers[5][1];
                document.getElementById("q6-input-b").value = allAnswers[5][1];
                document.getElementById("q6-choice-c").innerHTML = allAnswers[5][2];
                document.getElementById("q6-input-c").value = allAnswers[5][2];
                document.getElementById("q6-choice-d").innerHTML = allAnswers[5][3];
                document.getElementById("q6-input-d").value = allAnswers[5][3];
                document.getElementById("q7-choice-a").innerHTML = allAnswers[6][0];
                document.getElementById("q7-input-a").value = allAnswers[6][0];
                document.getElementById("q7-choice-b").innerHTML = allAnswers[6][1];
                document.getElementById("q7-input-b").value = allAnswers[6][1];
                document.getElementById("q7-choice-c").innerHTML = allAnswers[6][2];
                document.getElementById("q7-input-c").value = allAnswers[6][2];
                document.getElementById("q7-choice-d").innerHTML = allAnswers[6][3];
                document.getElementById("q7-input-d").value = allAnswers[6][3];
                document.getElementById("q8-choice-a").innerHTML = allAnswers[7][0];
                document.getElementById("q8-input-a").value = allAnswers[7][0];
                document.getElementById("q8-choice-b").innerHTML = allAnswers[7][1];
                document.getElementById("q8-input-b").value = allAnswers[7][1];
                document.getElementById("q8-choice-c").innerHTML = allAnswers[7][2];
                document.getElementById("q8-input-c").value = allAnswers[7][2];
                document.getElementById("q8-choice-d").innerHTML = allAnswers[7][3];
                document.getElementById("q8-input-d").value = allAnswers[7][3];
                document.getElementById("q9-choice-a").innerHTML = allAnswers[8][0];
                document.getElementById("q9-input-a").value = allAnswers[8][0];
                document.getElementById("q9-choice-b").innerHTML = allAnswers[8][1];
                document.getElementById("q9-input-b").value = allAnswers[8][1];
                document.getElementById("q9-choice-c").innerHTML = allAnswers[8][2];
                document.getElementById("q9-input-c").value = allAnswers[8][2];
                document.getElementById("q9-choice-d").innerHTML = allAnswers[8][3];
                document.getElementById("q9-input-d").value = allAnswers[8][3];
                document.getElementById("q10-choice-a").innerHTML = allAnswers[9][0];
                document.getElementById("q10-input-a").value = allAnswers[9][0];
                document.getElementById("q10-choice-b").innerHTML = allAnswers[9][1];
                document.getElementById("q10-input-b").value = allAnswers[9][1];
                document.getElementById("q10-choice-c").innerHTML = allAnswers[9][2];
                document.getElementById("q10-input-c").value = allAnswers[9][2];
                document.getElementById("q10-choice-d").innerHTML = allAnswers[9][3];
                document.getElementById("q10-input-d").value = allAnswers[9][3];
                document.getElementById("q11-choice-a").innerHTML = allAnswers[10][0];
                document.getElementById("q11-input-a").value = allAnswers[10][0];
                document.getElementById("q11-choice-b").innerHTML = allAnswers[10][1];
                document.getElementById("q11-input-b").value = allAnswers[10][1];
                document.getElementById("q11-choice-c").innerHTML = allAnswers[10][2];
                document.getElementById("q11-input-c").value = allAnswers[10][2];
                document.getElementById("q11-choice-d").innerHTML = allAnswers[10][3];
                document.getElementById("q11-input-d").value = allAnswers[10][3];
                document.getElementById("q12-choice-a").innerHTML = allAnswers[11][0];
                document.getElementById("q12-input-a").value = allAnswers[11][0];
                document.getElementById("q12-choice-b").innerHTML = allAnswers[11][1];
                document.getElementById("q12-input-b").value = allAnswers[11][1];
                document.getElementById("q12-choice-c").innerHTML = allAnswers[11][2];
                document.getElementById("q12-input-c").value = allAnswers[11][2];
                document.getElementById("q12-choice-d").innerHTML = allAnswers[11][3];
                document.getElementById("q12-input-d").value = allAnswers[11][3];
                document.getElementById("q13-choice-a").innerHTML = allAnswers[12][0];
                document.getElementById("q13-input-a").value = allAnswers[12][0];
                document.getElementById("q13-choice-b").innerHTML = allAnswers[12][1];
                document.getElementById("q13-input-b").value = allAnswers[12][1];
                document.getElementById("q13-choice-c").innerHTML = allAnswers[12][2];
                document.getElementById("q13-input-c").value = allAnswers[12][2];
                document.getElementById("q13-choice-d").innerHTML = allAnswers[12][3];
                document.getElementById("q13-input-d").value = allAnswers[12][3];
                document.getElementById("q14-choice-a").innerHTML = allAnswers[13][0];
                document.getElementById("q14-input-a").value = allAnswers[13][0];
                document.getElementById("q14-choice-b").innerHTML = allAnswers[13][1];
                document.getElementById("q14-input-b").value = allAnswers[13][1];
                document.getElementById("q14-choice-c").innerHTML = allAnswers[13][2];
                document.getElementById("q14-input-c").value = allAnswers[13][2];
                document.getElementById("q14-choice-d").innerHTML = allAnswers[13][3];
                document.getElementById("q14-input-d").value = allAnswers[13][3];
                document.getElementById("q15-choice-a").innerHTML = allAnswers[14][0];
                document.getElementById("q15-input-a").value = allAnswers[14][0];
                document.getElementById("q15-choice-b").innerHTML = allAnswers[14][1];
                document.getElementById("q15-input-b").value = allAnswers[14][1];
                document.getElementById("q15-choice-c").innerHTML = allAnswers[14][2];
                document.getElementById("q15-input-c").value = allAnswers[14][2];
                document.getElementById("q15-choice-d").innerHTML = allAnswers[14][3];
                document.getElementById("q15-input-d").value = allAnswers[14][3];
            }
            if (amount == 20) {
                document.getElementById("q1-choice-a").innerHTML = allAnswers[0][0];
                document.getElementById("q1-input-a").value = allAnswers[0][0];
                document.getElementById("q1-choice-b").innerHTML = allAnswers[0][1];
                document.getElementById("q1-input-b").value = allAnswers[0][1];
                document.getElementById("q1-choice-c").innerHTML = allAnswers[0][2];
                document.getElementById("q1-input-c").value = allAnswers[0][2];
                document.getElementById("q1-choice-d").innerHTML = allAnswers[0][3];
                document.getElementById("q1-input-d").value = allAnswers[0][3];
                document.getElementById("q2-choice-a").innerHTML = allAnswers[1][0];
                document.getElementById("q2-input-a").value = allAnswers[1][0];
                document.getElementById("q2-choice-b").innerHTML = allAnswers[1][1];
                document.getElementById("q2-input-b").value = allAnswers[1][1];
                document.getElementById("q2-choice-c").innerHTML = allAnswers[1][2];
                document.getElementById("q2-input-c").value = allAnswers[1][2];
                document.getElementById("q2-choice-d").innerHTML = allAnswers[1][3];
                document.getElementById("q2-input-d").value = allAnswers[1][3];
                document.getElementById("q3-choice-a").innerHTML = allAnswers[2][0];
                document.getElementById("q3-input-a").value = allAnswers[2][0];
                document.getElementById("q3-choice-b").innerHTML = allAnswers[2][1];
                document.getElementById("q3-input-b").value = allAnswers[2][1];
                document.getElementById("q3-choice-c").innerHTML = allAnswers[2][2];
                document.getElementById("q3-input-c").value = allAnswers[2][2];
                document.getElementById("q3-choice-d").innerHTML = allAnswers[2][3];
                document.getElementById("q3-input-d").value = allAnswers[2][3];
                document.getElementById("q4-choice-a").innerHTML = allAnswers[3][0];
                document.getElementById("q4-input-a").value = allAnswers[3][0];
                document.getElementById("q4-choice-b").innerHTML = allAnswers[3][1];
                document.getElementById("q4-input-b").value = allAnswers[3][1];
                document.getElementById("q4-choice-c").innerHTML = allAnswers[3][2];
                document.getElementById("q4-input-c").value = allAnswers[3][2];
                document.getElementById("q4-choice-d").innerHTML = allAnswers[3][3];
                document.getElementById("q4-input-d").value = allAnswers[3][3];
                document.getElementById("q5-choice-a").innerHTML = allAnswers[4][0];
                document.getElementById("q5-input-a").value = allAnswers[4][0];
                document.getElementById("q5-choice-b").innerHTML = allAnswers[4][1];
                document.getElementById("q5-input-b").value = allAnswers[4][1];
                document.getElementById("q5-choice-c").innerHTML = allAnswers[4][2];
                document.getElementById("q5-input-c").value = allAnswers[4][2];
                document.getElementById("q5-choice-d").innerHTML = allAnswers[4][3];
                document.getElementById("q5-input-d").value = allAnswers[4][3];
                document.getElementById("q6-choice-a").innerHTML = allAnswers[5][0];
                document.getElementById("q6-input-a").value = allAnswers[5][0];
                document.getElementById("q6-choice-b").innerHTML = allAnswers[5][1];
                document.getElementById("q6-input-b").value = allAnswers[5][1];
                document.getElementById("q6-choice-c").innerHTML = allAnswers[5][2];
                document.getElementById("q6-input-c").value = allAnswers[5][2];
                document.getElementById("q6-choice-d").innerHTML = allAnswers[5][3];
                document.getElementById("q6-input-d").value = allAnswers[5][3];
                document.getElementById("q7-choice-a").innerHTML = allAnswers[6][0];
                document.getElementById("q7-input-a").value = allAnswers[6][0];
                document.getElementById("q7-choice-b").innerHTML = allAnswers[6][1];
                document.getElementById("q7-input-b").value = allAnswers[6][1];
                document.getElementById("q7-choice-c").innerHTML = allAnswers[6][2];
                document.getElementById("q7-input-c").value = allAnswers[6][2];
                document.getElementById("q7-choice-d").innerHTML = allAnswers[6][3];
                document.getElementById("q7-input-d").value = allAnswers[6][3];
                document.getElementById("q8-choice-a").innerHTML = allAnswers[7][0];
                document.getElementById("q8-input-a").value = allAnswers[7][0];
                document.getElementById("q8-choice-b").innerHTML = allAnswers[7][1];
                document.getElementById("q8-input-b").value = allAnswers[7][1];
                document.getElementById("q8-choice-c").innerHTML = allAnswers[7][2];
                document.getElementById("q8-input-c").value = allAnswers[7][2];
                document.getElementById("q8-choice-d").innerHTML = allAnswers[7][3];
                document.getElementById("q8-input-d").value = allAnswers[7][3];
                document.getElementById("q9-choice-a").innerHTML = allAnswers[8][0];
                document.getElementById("q9-input-a").value = allAnswers[8][0];
                document.getElementById("q9-choice-b").innerHTML = allAnswers[8][1];
                document.getElementById("q9-input-b").value = allAnswers[8][1];
                document.getElementById("q9-choice-c").innerHTML = allAnswers[8][2];
                document.getElementById("q9-input-c").value = allAnswers[8][2];
                document.getElementById("q9-choice-d").innerHTML = allAnswers[8][3];
                document.getElementById("q9-input-d").value = allAnswers[8][3];
                document.getElementById("q10-choice-a").innerHTML = allAnswers[9][0];
                document.getElementById("q10-input-a").value = allAnswers[9][0];
                document.getElementById("q10-choice-b").innerHTML = allAnswers[9][1];
                document.getElementById("q10-input-b").value = allAnswers[9][1];
                document.getElementById("q10-choice-c").innerHTML = allAnswers[9][2];
                document.getElementById("q10-input-c").value = allAnswers[9][2];
                document.getElementById("q10-choice-d").innerHTML = allAnswers[9][3];
                document.getElementById("q10-input-d").value = allAnswers[9][3];
                document.getElementById("q11-choice-a").innerHTML = allAnswers[10][0];
                document.getElementById("q11-input-a").value = allAnswers[10][0];
                document.getElementById("q11-choice-b").innerHTML = allAnswers[10][1];
                document.getElementById("q11-input-b").value = allAnswers[10][1];
                document.getElementById("q11-choice-c").innerHTML = allAnswers[10][2];
                document.getElementById("q11-input-c").value = allAnswers[10][2];
                document.getElementById("q11-choice-d").innerHTML = allAnswers[10][3];
                document.getElementById("q11-input-d").value = allAnswers[10][3];
                document.getElementById("q12-choice-a").innerHTML = allAnswers[11][0];
                document.getElementById("q12-input-a").value = allAnswers[11][0];
                document.getElementById("q12-choice-b").innerHTML = allAnswers[11][1];
                document.getElementById("q12-input-b").value = allAnswers[11][1];
                document.getElementById("q12-choice-c").innerHTML = allAnswers[11][2];
                document.getElementById("q12-input-c").value = allAnswers[11][2];
                document.getElementById("q12-choice-d").innerHTML = allAnswers[11][3];
                document.getElementById("q12-input-d").value = allAnswers[11][3];
                document.getElementById("q13-choice-a").innerHTML = allAnswers[12][0];
                document.getElementById("q13-input-a").value = allAnswers[12][0];
                document.getElementById("q13-choice-b").innerHTML = allAnswers[12][1];
                document.getElementById("q13-input-b").value = allAnswers[12][1];
                document.getElementById("q13-choice-c").innerHTML = allAnswers[12][2];
                document.getElementById("q13-input-c").value = allAnswers[12][2];
                document.getElementById("q13-choice-d").innerHTML = allAnswers[12][3];
                document.getElementById("q13-input-d").value = allAnswers[12][3];
                document.getElementById("q14-choice-a").innerHTML = allAnswers[13][0];
                document.getElementById("q14-input-a").value = allAnswers[13][0];
                document.getElementById("q14-choice-b").innerHTML = allAnswers[13][1];
                document.getElementById("q14-input-b").value = allAnswers[13][1];
                document.getElementById("q14-choice-c").innerHTML = allAnswers[13][2];
                document.getElementById("q14-input-c").value = allAnswers[13][2];
                document.getElementById("q14-choice-d").innerHTML = allAnswers[13][3];
                document.getElementById("q14-input-d").value = allAnswers[13][3];
                document.getElementById("q15-choice-a").innerHTML = allAnswers[14][0];
                document.getElementById("q15-input-a").value = allAnswers[14][0];
                document.getElementById("q15-choice-b").innerHTML = allAnswers[14][1];
                document.getElementById("q15-input-b").value = allAnswers[14][1];
                document.getElementById("q15-choice-c").innerHTML = allAnswers[14][2];
                document.getElementById("q15-input-c").value = allAnswers[14][2];
                document.getElementById("q15-choice-d").innerHTML = allAnswers[14][3];
                document.getElementById("q15-input-d").value = allAnswers[14][3];
                document.getElementById("q16-choice-a").innerHTML = allAnswers[15][0];
                document.getElementById("q16-input-a").value = allAnswers[15][0];
                document.getElementById("q16-choice-b").innerHTML = allAnswers[15][1];
                document.getElementById("q16-input-b").value = allAnswers[15][1];
                document.getElementById("q16-choice-c").innerHTML = allAnswers[15][2];
                document.getElementById("q16-input-c").value = allAnswers[15][2];
                document.getElementById("q16-choice-d").innerHTML = allAnswers[15][3];
                document.getElementById("q16-input-d").value = allAnswers[15][3];
                document.getElementById("q17-choice-a").innerHTML = allAnswers[16][0];
                document.getElementById("q17-input-a").value = allAnswers[16][0];
                document.getElementById("q17-choice-b").innerHTML = allAnswers[16][1];
                document.getElementById("q17-input-b").value = allAnswers[16][1];
                document.getElementById("q17-choice-c").innerHTML = allAnswers[16][2];
                document.getElementById("q17-input-c").value = allAnswers[16][2];
                document.getElementById("q17-choice-d").innerHTML = allAnswers[16][3];
                document.getElementById("q17-input-d").value = allAnswers[16][3];
                document.getElementById("q18-choice-a").innerHTML = allAnswers[17][0];
                document.getElementById("q18-input-a").value = allAnswers[17][0];
                document.getElementById("q18-choice-b").innerHTML = allAnswers[17][1];
                document.getElementById("q18-input-b").value = allAnswers[17][1];
                document.getElementById("q18-choice-c").innerHTML = allAnswers[17][2];
                document.getElementById("q18-input-c").value = allAnswers[17][2];
                document.getElementById("q18-choice-d").innerHTML = allAnswers[17][3];
                document.getElementById("q18-input-d").value = allAnswers[17][3];
                document.getElementById("q19-choice-a").innerHTML = allAnswers[18][0];
                document.getElementById("q19-input-a").value = allAnswers[18][0];
                document.getElementById("q19-choice-b").innerHTML = allAnswers[18][1];
                document.getElementById("q19-input-b").value = allAnswers[18][1];
                document.getElementById("q19-choice-c").innerHTML = allAnswers[18][2];
                document.getElementById("q19-input-c").value = allAnswers[18][2];
                document.getElementById("q19-choice-d").innerHTML = allAnswers[18][3];
                document.getElementById("q19-input-d").value = allAnswers[18][3];
                document.getElementById("q20-choice-a").innerHTML = allAnswers[19][0];
                document.getElementById("q20-input-a").value = allAnswers[19][0];
                document.getElementById("q20-choice-b").innerHTML = allAnswers[19][1];
                document.getElementById("q20-input-b").value = allAnswers[19][1];
                document.getElementById("q20-choice-c").innerHTML = allAnswers[19][2];
                document.getElementById("q20-input-c").value = allAnswers[19][2];
                document.getElementById("q20-choice-d").innerHTML = allAnswers[19][3];
                document.getElementById("q20-input-d").value = allAnswers[19][3];
            }
        }
    });
}

