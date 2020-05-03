import {amount, category, difficulty, type} from "./api-value.js";

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("#amount").innerHTML = this.responseText;
    }
};

xhr.open("GET", `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);

xhr.send();

console.log(xhr);