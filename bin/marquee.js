/* MarqueeTitle v3.0 | Cameron Samuels License | git.io/vQZbs */
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
