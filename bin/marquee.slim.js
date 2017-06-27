/* MarqueeTitle Slim v2.0pre | MIT License | git.io/vQZbs */
var mqt = {
  start : function(a, b, c) {
    mqt.d = ((a || document.title) + " " + (c||"") + " ").split('');
    setInterval(function(){mqt.d.push(mqt.d[0]), mqt.d.shift();document.title = mqt.d.join("")}, b || 250);
  }
}
