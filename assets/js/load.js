function formCompletion() {
    var total = $('select[required]').length;
    var selected = 0;
    
    //increments selected when the amount is picked
    if ($('#amount option:selected').data('amount') > 0) { 
        selected++;
    }
    //increments selected when the category is picked
    if ($('#category option:selected').data('category') > 0) { 
        selected++;
    }
    //increments selected when the difficulty is picked
    if ($('#difficulty option:selected').data('difficulty') === "easy" || $('#difficulty option:selected').data('difficulty') === "medium" || $('#difficulty option:selected').data('difficulty') === "hard") {
        selected++; 
    }
    
    console.log(total);
    console.log(selected);
    
    //removes disabled attribute when selected is equal to total
    if (selected == total) {
        document.getElementById("start-button").removeAttribute('disabled'); 
    }
}
