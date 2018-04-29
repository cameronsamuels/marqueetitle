/* MarqueeTitle v3.0 | Cameron Samuels License | git.io/vQZbs */

// c = text, a = text separator, m = scroll speed
function MarqueeTitle(c, a, m) {
	window.title = (c || document.title) + " " + (a || " ") + " ";
	setInterval(function() {
		var x = window.title.split("");
		x.push(x[0]);
		x.shift();
		window.title = x.join("");
		document.title = window.title;
	}, m || 300);
}
