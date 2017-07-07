var game = {
  on: false, time: 10, score: 0,
  button: document.querySelector('button'), timeText: document.querySelector('h2')
}; //initial variables
game.pause = function(){
  game.on = false; //pause the game
  MarqueeTitle.pause(); //pause the marquee animation
},
game.resume = function() {
  game.on = true; //resume the game
  MarqueeTitle.resume(); //resume the marquee animation
},
game.update = function() {
  if (game.on == false) return; //stop executing if game is not running
  game.button.innerHTML = game.score; //update the button text to show the score
  game.timeText.textContent = game.time; //update the time text to show the time left
},
game.over = function() {
  game.pause(); //pause the game
  game.timeText.textContent = "Times up!!"; //notifiy that the game is over
  game.button.style.background = game.score > 50 ? "#0d0" : "#d00"; //set the button's backgroud to a user-friendly color
  game.button.style.border = "10px solid " + (game.score > 50 ? "#0a0" : "#a00"); //set the button's border to a user-friendly color
},
game.refresh = function() {
  if (game.on == false) return; //stop execution if paused
  game.time--; //subtract 1 from time left
  if (game.time == 0) game.over(); //call game over if ran out of time
  game.update(); //update the UI
},
game.start = function() {
  MarqueeTitle.start(); //start the marquee tab title animation
  game.on = true; //enable game refresh
  game.interval = setInterval(game.refresh, 1000); //set repeating to every 1 second to call game.refresh()
},
game.click = function() {
  if (game.score == 0) game.start();
  if (game.on == false) return; //stop execution if paused
  game.score++; //add 1 to score
  game.update(); //update the text of the button instantly before the interval executes
},
game.button.addEventListener('click', game.click); //add click listeners to earn points
