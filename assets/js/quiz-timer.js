var amount = sessionStorage.getItem('amount');

var counter = {};
window.addEventListener("load", function() {
  // COUNTDOWN IN SECONDS
  // EXAMPLE - 5 MINS = 5 X 60 = 300 SECS
  if (amount == 5) {
    counter.end = 60;
  }
  if (amount == 10) {
    counter.end = 120;
  }
  if (amount == 15) {
    counter.end = 180;
  }
  if (amount == 20) {
    counter.end = 240;
  }
  // Get the containers
  counter.min = document.getElementById("cd-min");
  counter.sec = document.getElementById("cd-sec");

  // Start if not past end date 
  if (counter.end > 0) {
    counter.ticker = setInterval(function() {
      // Stop if passed end time
      counter.end--;
      if (counter.end <= 0) {
        clearInterval(counter.ticker);
        counter.end = 0;
      }

      // Calculate remaining time
      var secs = counter.end;
      var mins = Math.floor(secs / 60); // 1 min = 60 secs
      secs -= mins * 60;
      
      // Update HTML
      counter.min.innerHTML = mins;
      counter.sec.innerHTML = secs;
      
      if (counter.end == 0) {
        window.location.href = "leaderboard.html";
      }
      
    }, 1000);
  }
});
