$('#amount, #category, #difficulty').bind('keyup', function() {
    if(allFilled()) $('#start-button').removeAttr('disabled');
});

function allFilled() {
    var filled = true;
    $('body select').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}