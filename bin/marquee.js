var MarqueeTitle = {};
MarqueeTitle.chars = []; //define global variable

/*=====
Call the MarqueeTitle.start() function to start the animation
Paramaters:
	-title = 	String, text on the title
	-speed = 	Integer, speed in milleseconds
					of the interval to cal the
					cycle function
	-seperator  String, the divider between the
	                beginning and end
=====*/

MarqueeTitle.start = function(title, speed, seperator) {
	title += " " + seperator + " ";
	MarqueeTitle.chars = title.split('');
	setInterval(MarqueeTitle.cycle, speed);
};

/* This function is called every (speed) milliseconds.
	This makes the title marquee */
MarqueeTitle.cycle = function() {
	MarqueeTitle.chars.push(MarqueeTitle.chars[0]);
	MarqueeTitle.chars.shift();
	document.title = MarqueeTitle.chars.join("");
};
