/* MarqueeTitle v2.0pre | MIT License | git.io/vQZbs */
var MarqueeTitle = {}; MarqueeTitle.chars = [], MarqueeTitle.title = "", MarqueeTitle.speed = 250, MarqueeTitle.direction = 0,
MarqueeTitle.seperator = " ", MarqueeTitle.shifts = 1,
MarqueeTitle.start = function(title, speed, seperator) {
	MarqueeTitle.seperator = seperator || MarqueeTitle.seperator || " ";
	title = (title || MarqueeTitle.title || document.title) + " " + MarqueeTitle.seperator + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.speed = speed || MarqueeTitle.speed || 250;
	clearInterval(MarqueeTitle.interval);
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed);
	MarqueeTitle.title = title.replace(" " + MarqueeTitle.seperator + " ", "");
},
MarqueeTitle.stop = function() {
	clearInterval(MarqueeTitle.interval);
	document.title = MarqueeTitle.title;
},
MarqueeTitle.loop = function(times, title, speed, seperator) {
	times = times || 1;
	MarqueeTitle.seperator = seperator || MarqueeTitle.seperator || " ";
	title = (title || MarqueeTitle.title || document.title) + " " + MarqueeTitle.seperator + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.speed = speed || MarqueeTitle.speed || 250;
	setTimeout(MarqueeTitle.stop, MarqueeTitle.speed * MarqueeTitle.title.length * times);
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed);
	MarqueeTitle.title = title.replace(" " + MarqueeTitle.seperator + " ", "");
},
MarqueeTitle.pause = function() { clearInterval(MarqueeTitle.interval) },
MarqueeTitle.resume = function() { MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed) },
MarqueeTitle.cycle = function(times) {
	times = times || MarqueeTitle.shifts || 1;
	do {
		if (MarqueeTitle.direction) MarqueeTitle.chars.unshift(MarqueeTitle.chars[MarqueeTitle.chars.length-1]), MarqueeTitle.chars.pop();
		else MarqueeTitle.chars.push(MarqueeTitle.chars[0]), MarqueeTitle.chars.shift();	
		document.title = MarqueeTitle.chars.join("");
		times--;
	} while (times > 0);
},
MarqueeTitle.reverse = function() { MarqueeTitle.direction = MarqueeTitle.direction == 0?1:0 },
MarqueeTitle.seperate = function(seperator) {
	MarqueeTitle.seperator = seperator;
	MarqueeTitle.start();
}
