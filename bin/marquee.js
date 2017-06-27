/* MarqueeTitle v2.0pre | MIT License | git.io/vQZbs */
var MarqueeTitle = {};
MarqueeTitle.chars = [], MarqueeTitle.title = "", MarqueeTitle.speed = 250,
MarqueeTitle.start = function(title, speed, seperator) {
	title = (title || MarqueeTitle.title || document.title) + " " + (seperator||" ") + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.speed = speed || MarqueeTitle.speed || 250;
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed);
	MarqueeTitle.title = title.replace(" " + (seperator||" ") + " ", "");
},
MarqueeTitle.stop = function() {
	clearInterval(MarqueeTitle.interval);
	document.title = MarqueeTitle.title;
},
MarqueeTitle.pause = function() { clearInterval(MarqueeTitle.interval) },
MarqueeTitle.cycle = function() {
	MarqueeTitle.chars.push(MarqueeTitle.chars[0]);
	MarqueeTitle.chars.shift();
	document.title = MarqueeTitle.chars.join("");
}
