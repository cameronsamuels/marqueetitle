MarqueeTitle is a JavaScript library for easily turning `document.title` into scrolling text (a marquee).

# Features
- Simple, easy, user-friendly, and powerful
- Instant setup
- Highly customizeable
- No effect on load and request times (it's super lightweight)
- Full [documentation](http://github.com/CameronSamuels/marqueetitle/wiki) for methods and properties
- Works when not actively on the tab
- Choose the seperation character between end and beginning
- Choose the scrolling speed
- Start, stop, pause, resume, and cycle the marquee
- Still in development with many updates to come

# Get started

First download [bin/marquee.js](bin/marquee.js) to your code folder. Then use this code relatively in your app:

### HTML
```html
<script src="marquee.js"></script>
```
### JavaScript
```javascript
var title = "User-friendly marquee title example"; //set title
var speed = 250; //set speed in milleseconds
var seperator = "|"; //set seperator for end to beginning
MarqueeTitle.start(title, speed, seperator); //call function to start marquee
```

*Be aware of the **[license](LICENSE)** for MarqueeTitle*

# About

This library was made by [Cameron Samuels](http://cameronsamuels.com). It is made in JavaScript.
