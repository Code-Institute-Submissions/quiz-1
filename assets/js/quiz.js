function apiRequest() {
    
    var amount = sessionStorage.getItem('amount');
    var category = sessionStorage.getItem('category');
    var difficulty = sessionStorage.getItem('difficulty');
    var type = sessionStorage.getItem('type');
    
    console.log(amount);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("question").innerHTML = this.responseText;
        }


    };

    xhr.open("GET", `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`);

    xhr.send();

    console.log(xhr);
}