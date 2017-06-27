var MarqueeTitle = {};
MarqueeTitle.chars = []; //define global variable
MarqueeTitle.start = function(title, speed, seperator) {
	title += " " + seperator + " ";
	MarqueeTitle.chars = title.split('');
	setInterval(MarqueeTitle.cycle, speed);
};
MarqueeTitle.cycle = function() {
	MarqueeTitle.chars.push(MarqueeTitle.chars[0]);
	MarqueeTitle.chars.shift();
	document.title = MarqueeTitle.chars.join("");
};
