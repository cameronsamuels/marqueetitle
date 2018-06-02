(function() {
  "use strict";

  if (!window.addEventListener) return;

  var options = INSTALL_OPTIONS;
  var title;

  function app() {
  	title = (options.title || document.title) + " " + (options.separator || "-") + " ";
  	if (options.enabled) setInterval(function() {
  	  if (options.direction == "right") title = title.charAt(title.length - 1) + title.substring(0, title.length - 1);
  	  else title = title.substring(1) + title.charAt(0);
  		document.title = title;
  	}, options.speed || 300);
  }

  window.INSTALL_SCOPE = {
    setOptions: function setOptions(newOptions) {
      options = newOptions;
      app();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", app);
  else app();
}());
