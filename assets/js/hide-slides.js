var amount = sessionStorage.getItem('amount');

//function that hides unused slides depending on how many questions is chosen
function hideUnusedSlides() {
    if (amount == 15) {
        document.getElementById("slide-20").remove();
        document.getElementById("slide-19").remove();
        document.getElementById("slide-18").remove();
        document.getElementById("slide-17").remove();
        document.getElementById("slide-16").remove();
    }
    else if (amount == 10) {
        document.getElementById("slide-20").remove();
        document.getElementById("slide-19").remove();
        document.getElementById("slide-18").remove();
        document.getElementById("slide-17").remove();
        document.getElementById("slide-16").remove();
        document.getElementById("slide-15").remove();
        document.getElementById("slide-14").remove();
        document.getElementById("slide-13").remove();
        document.getElementById("slide-12").remove();
        document.getElementById("slide-11").remove();
    }
    else if (amount == 5) {
        document.getElementById("slide-20").remove();
        document.getElementById("slide-19").remove();
        document.getElementById("slide-18").remove();
        document.getElementById("slide-17").remove();
        document.getElementById("slide-16").remove();
        document.getElementById("slide-15").remove();
        document.getElementById("slide-14").remove();
        document.getElementById("slide-13").remove();
        document.getElementById("slide-12").remove();
        document.getElementById("slide-11").remove();
        document.getElementById("slide-10").remove();
        document.getElementById("slide-9").remove();
        document.getElementById("slide-8").remove();
        document.getElementById("slide-7").remove();
        document.getElementById("slide-6").remove();
    }
}