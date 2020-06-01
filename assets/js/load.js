function formCompletion() {
    var total = $('select[required]').length;
    var selected = 0;

    if ($('#amount option:selected').data('amount') > 0) { //increments selected when the amount is picked
        selected++;
    }
    if ($('#category option:selected').data('category') > 0) { //increments selected when the category is picked
        selected++;
    }
    if ($('#difficulty option:selected').data('difficulty') === "easy" || $('#difficulty option:selected').data('difficulty') === "medium" || $('#difficulty option:selected').data('difficulty') === "hard") {
        selected++; //increments selected when the difficulty is picked
    }
    
    console.log(total);
    console.log(selected);
    
    if (selected == total) {
        document.getElementById("start-button").removeAttribute('disabled'); //removes disabled attribute when selected is equal to total
    }
}
