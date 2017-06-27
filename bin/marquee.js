/* MarqueeTitle v2.0pre | MIT License | git.io/vQZbs */
var MarqueeTitle = {}; MarqueeTitle.chars = [], MarqueeTitle.title = "", MarqueeTitle.speed = 250, MarqueeTitle.direction = 0,
MarqueeTitle.loops = -1,
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
MarqueeTitle.loop = function(times, title, speed, seperator) {
	MarqueeTitle.loops = times || MarqueeTitle.loops || -1;
	title = (title || MarqueeTitle.title || document.title) + " " + (seperator||" ") + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.speed = speed || MarqueeTitle.speed || 250;
	MarqueeTitle.interval = setInterval(function(){if(MarqueeTitle.loops){MarqueeTitle.cycle();MarqueeTitle.loops--}}, MarqueeTitle.speed);
	MarqueeTitle.title = title.replace(" " + (seperator||" ") + " ", "");
},
MarqueeTitle.pause = function() { clearInterval(MarqueeTitle.interval) },
MarqueeTitle.resume = function() { MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed) },
MarqueeTitle.cycle = function(times) {
	times = times || 1;
	do {
		if (MarqueeTitle.direction) MarqueeTitle.chars.unshift(MarqueeTitle.chars[MarqueeTitle.chars.length-1]), MarqueeTitle.chars.pop();
		else MarqueeTitle.chars.push(MarqueeTitle.chars[0]), MarqueeTitle.chars.shift();	
		document.title = MarqueeTitle.chars.join("");
		times--;
	} while (times > 0);
}
