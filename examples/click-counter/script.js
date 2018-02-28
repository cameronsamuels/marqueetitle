var time, score, running, loop;
var button = document.querySelector("button");
var text = document.querySelector("h2");

button.addEventListener("click", function() {
  if (!running) {
    time = 10;
    score = 0;
    button.style.background = "";
    button.style.borderColor = "";
    text.textContent = "10";
    running = true;
    MarqueeTitle.start(); //animate tab title
    loop = setInterval(function() {
      text.textContent = --time > 0 ? time : "Times up!!";
      if (!time) {
        clearInterval(loop);
        running = "cooldown";
        setTimeout(function(){ running = false }, 2000);
        MarqueeTitle.pause(); //stop tab title animation
        button.style.background = "#d00";
        button.style.borderColor = "#a00";
      }
    }, 1000);
  }
  if (running == true) button.textContent = ++score;
});
