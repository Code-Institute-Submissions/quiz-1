function formCompletion() {
    var total = $('select[required]').length;
    var selected = 0;

    if ($('#amount option:selected').data('amount') > 0) {
        selected++;
    }
    if ($('#category option:selected').data('category') > 0) {
        selected++;
    }
    if ($('#difficulty option:selected').data('difficulty') === "easy" || $('#difficulty option:selected').data('difficulty') === "medium" || $('#difficulty option:selected').data('difficulty') === "hard") {
        selected++;
    }
    
    console.log(total);
    console.log(selected);
    
    if (selected == total) {
        document.getElementById("start-button").removeAttribute('disabled');
    }
}
