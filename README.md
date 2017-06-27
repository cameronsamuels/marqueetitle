MarqueeTitle is a JavaScript library for easily turning `document.title` into scrolling text (a marquee).

# Get started

First download [bin/marquee.js](bin/marquee.js) to your code folder. Then use this code relatively in your app:

### HTML
```html
<script src="marquee.js"></script>
```
### JavaScript
```javascript
var title = "User-friendly marquee title example";//set title
var speed = 250;//set speed: milleseconds
var seperator = "|";//set seperator for end to beginning
MarqueeTitle.start(title, speed, seperator);//call function to start cycle
```

*Be aware of the **[license](LICENSE)** for MarqueeTitle*

# About

This library was made by [Cameron Samuels](http://cameronsamuels.com).
