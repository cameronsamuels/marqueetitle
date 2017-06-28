/* MarqueeTitle v2.0pre | MIT License | git.io/vQZbs */
var MarqueeTitle = {}; MarqueeTitle.chars = [], MarqueeTitle.title = "", MarqueeTitle.speed = 250, MarqueeTitle.direction = 0,
MarqueeTitle.shifts = 1,
MarqueeTitle.start = function(title, speed, seperator) {
	title = (title || MarqueeTitle.title || document.title) + " " + (seperator||" ") + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.speed = speed || MarqueeTitle.speed || 250;
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed),
	MarqueeTitle.callbackInterval = setInterval(MarqueeTitle.callback||function(){}, MarqueeTitle.speed * MarqueeTitle.title.length);
	MarqueeTitle.title = title.replace(" " + (seperator||" ") + " ", "");
},
MarqueeTitle.stop = function() {
	clearInterval(MarqueeTitle.interval), clearInterval(MarqueeTitle.callbackInterval);
	document.title = MarqueeTitle.title;
},
MarqueeTitle.loop = function(times, title, speed, seperator) {
	times = times || 1;
	title = (title || MarqueeTitle.title || document.title) + " " + (seperator||" ") + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.speed = speed || MarqueeTitle.speed || 250;
	setTimeout(MarqueeTitle.stop, MarqueeTitle.speed * MarqueeTitle.title.length * times);
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed);
	MarqueeTitle.title = title.replace(" " + (seperator||" ") + " ", "");
},
MarqueeTitle.pause = function() { clearInterval(MarqueeTitle.interval), clearInterval(MarqueeTitle.callbackInterval) },
MarqueeTitle.resume = function() { MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, MarqueeTitle.speed), MarqueeTitle.callbackInterval = setInterval(MarqueeTitle.callback||function(){}, MarqueeTitle.speed * MarqueeTitle.title.length) },
MarqueeTitle.cycle = function(times) {
	times = times || MarqueeTitle.shifts || 1;
	do {
		if (MarqueeTitle.direction) MarqueeTitle.chars.unshift(MarqueeTitle.chars[MarqueeTitle.chars.length-1]), MarqueeTitle.chars.pop();
		else MarqueeTitle.chars.push(MarqueeTitle.chars[0]), MarqueeTitle.chars.shift();	
		document.title = MarqueeTitle.chars.join("");
		times--;
	} while (times > 0);
}
