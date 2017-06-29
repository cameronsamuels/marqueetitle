MarqueeTitle is a JavaScript library for easily turning `document.title` into scrolling text (a marquee).

# Why use this?
- Simple, easy, user-friendly, and powerful
- Instant and highly customizeable setup
- No effect on load and request times (it's super lightweight)
- See the whole entire title at all times
- Works when not actively on the tab
- Still in development with many updates to come
- And all the below features

# Features
- Start, stop, pause, resume, loop, and cycle the marquee
- [Slim version](bin/marquee.slim.js) for even more lightweight code
- Full [documentation](http://github.com/CameronSamuels/marqueetitle/wiki) for methods and properties
- Choose the scroling speed, direction of shifting, and seperation character between end and beginning
- Manually shift the title
- Choose how many cycles it loops to
- Pause the scrolling and then resume back to where it left off
- Stop the scrolling and reset to the normal position


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

Learn about more methods and properties in the [documentation](http://github.com/CameronSamuels/marqueetitle/wiki).

# Compatibility
### Desktop
| Chrome | Internet Explorer | Edge
|---|---|---
| Yes | 8 (maybe more) | Yes
### Mobile
| Safari | Chrome iOS
|---|---
| Yes | Yes\*

***More browsers and version codes coming soon***

When a browser has a "\*" (says above), the marquee doesn't shift when the tab is not active

Make sure to tell me if it works or not if it is not on this list. Thanks!


# About

This library was made by [Cameron Samuels](http://cameronsamuels.com). It is made in JavaScript.

MarqueeTitle in licensed under the [MIT License](LICENSE) but with many major edits.
