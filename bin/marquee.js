var MarqueeTitle = {};
MarqueeTitle.chars = []; //define global variable
MarqueeTitle.sate = true;
MarqueeTitle.start = function(title, speed, seperator) {
	title += " " + seperator + " ";
	MarqueeTitle.chars = title.split('');
	MarqueeTitle.interval = setInterval(MarqueeTitle.cycle, speed);
};
MarqueeTitle.cycle = function() {
	if (!MarqueeTitle.state) return;
	MarqueeTitle.chars.push(MarqueeTitle.chars[0]);
	MarqueeTitle.chars.shift();
	document.title = MarqueeTitle.chars.join("");
};
