var game = {
   on: true, time: 10, score: 0,
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
   game.button.textContent = game.score; //update the button text to show the score
   timeText.textContent = game.time; //update the time text to show the time left
},
game.over = function() {
  alert('Game over: you earned ' + game.score + 'points!'); //notifiy for the game to be over
  game.on = false; //pause the game
},
game.refresh = function() {
  if (game.on == false) return; //stop execution if paused
  game.time--; //subtract 1 from time left
  if (game.time == 0) game.over(); //call game over if ran out of time
  game.update(); //update the UI
}
game.click = function() {
  if (game.on == false) return; //stop execution if paused
  game.score++; //add 1 to score
  game.update(); //update the text of the button instantly before the interval executes
},
game.interval = setInterval(game.refresh, 1000); //set repeating to every 1 second to call game.refresh()
game.button.addEventListener('click', game.click); //add click listeners to earn points
