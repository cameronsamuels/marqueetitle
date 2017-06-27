var MarqueeTitle = {};
MarqueeTitle.chars = [],
MarqueeTitle.title = "";
MarqueeTitle.start = function(title, speed, seperator) {
	title = (title || MarqueeTitle.title || document.title) + " " + (seperator||" ") + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, speed||250);
	MarqueeTitle.title = title.replace(" " + (seperator||" ") + " ", "");
},
MarqueeTitle.stop = function() {
	clearInterval(MarqueeTitle.interval);
	document.title = MarqueeTitle.title;
},
MarqueeTitle.cycle = function() {
	MarqueeTitle.chars.push(MarqueeTitle.chars[0]);
	MarqueeTitle.chars.shift();
	document.title = MarqueeTitle.chars.join("");
}
