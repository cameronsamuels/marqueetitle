MarqueeTitle is a JavaScript library for easily turning `document.title` into scrolling text (a marquee).
# Why use this?
- Simple, easy, user-friendly, and powerful
- Highly customizeable with many changeable settings
- No effect on load and request times (it's super lightweight)
- When too long, see all of the title instead of never seeing the end
- See the whole entire title at all times (when not too long)
- Instant setup
- Works when not actively on the tab (most browsers)
- Still in development with many updates to come
- And all the below features
# Features
- Start, stop, pause, resume, loop, and cycle the marquee
- [Slim version](bin/marquee.slim.js) for even more lightweight code
- Full [documentation](http://github.com/CameronSamuels/marqueetitle/wiki) for methods and properties
- Choose the scroling speed, direction of shifting, and separation character between end and beginning
- Manually shift the title
- Choose how many cycles it loops to
- Pause the scrolling and then resume back to where it left off
- Stop the scrolling and reset to the normal position
# Get started
First download [bin/marquee.js](bin/marquee.js) to your code folder. Then use this code relatively in your app for basic usage:
### HTML
```html
<script src="marquee.js"></script>
```
### JavaScript
```javascript
MarqueeTitle.start(); //call this function to start marquee
```
Learn about more methods and properties in the [documentation](http://github.com/CameronSamuels/marqueetitle/wiki).
# Compatibility
### Desktop
|Chrome|Internet Explorer|Edge
|---|---|---
|Yes|Yes|Yes
### Mobile
|Safari|Chrome iOS
|---|---
|Yes|Yes (when active)
# About
This library was made by [Cameron Samuels](http://cameronsamuels.com).
### License
MarqueeTitle in licensed under the [MIT License](LICENSE) but with many major edits.
