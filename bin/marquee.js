/* MarqueeTitle v2.0pre | MIT License | git.io/vQZbs */
var MarqueeTitle = {}; MarqueeTitle.chars = [], MarqueeTitle.title = "", MarqueeTitle.speed = 250, MarqueeTitle.direction = 0,
MarqueeTitle.separator = " ", MarqueeTitle.shifts = 1,
MarqueeTitle.start = function(title, speed, separator) {
	MarqueeTitle.separator = separator || MarqueeTitle.separator || " ";
	title = (title || MarqueeTitle.title || document.title) + " " + MarqueeTitle.separator + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.speed = speed || MarqueeTitle.speed || 250;
	clearInterval(MarqueeTitle.interval);
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed);
	MarqueeTitle.title = title.replace(" " + MarqueeTitle.separator + " ", "");
},
MarqueeTitle.stop = function() {
	clearInterval(MarqueeTitle.interval);
	document.title = MarqueeTitle.title;
},
MarqueeTitle.loop = function(times, title, speed, separator) {
	times = times || 1;
	MarqueeTitle.separator = separator || MarqueeTitle.separator || " ";
	title = (title || MarqueeTitle.title || document.title) + " " + MarqueeTitle.separator + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.speed = speed || MarqueeTitle.speed || 250;
	setTimeout(MarqueeTitle.stop, MarqueeTitle.speed * MarqueeTitle.title.length * times);
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed);
	MarqueeTitle.title = title.replace(" " + MarqueeTitle.separator + " ", "");
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
MarqueeTitle.separate = function(separator) {
	MarqueeTitle.separator = separator;
	MarqueeTitle.start();
}
