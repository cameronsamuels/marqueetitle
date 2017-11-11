# MarqueeTitle
MarqueeTitle is a JavaScript library for easily turning `document.title` into scrolling text (a marquee).

## Why use this?
- Simple, user-friendly, and powerful
- Highly customizeable with many changeable settings
- No effect on page load times
- When too long, see the entire title
- Quick & easy setup
- Works when not actively on the tab (most browsers)
- Still in development with many updates to come

## Features
- Start, stop, pause, resume, loop, and cycle the marquee
- [Slim version](bin/marquee.slim.js) for even more lightweight code
- Full [documentation](https://git.io/vFVR4) for methods and properties
- Choose the scroling speed, direction of shifting, and separation character between end and beginning
- Manually shift the title
- Choose how many cycles it loops to
- Pause the scrolling and then resume back to where it left off
- Stop the scrolling and reset to the normal position

## Get started
First download [bin/marquee.js](bin/marquee.js) to your code folder. Then use this code relatively in your app for basic usage:
### HTML
```html
<script src="marquee.js"></script>
```
### JavaScript
```javascript
MarqueeTitle.start(); //call this function to start marquee
```
Learn about more methods and properties in the [documentation](https://git.io/vFVR4).

## Compatibility
### Desktop
|Chrome|Firefox|Internet Explorer|Edge
|---|---|---|---
|Yes|Yes|Yes|Yes
### Mobile
|Safari|Chrome
|---|---
|Yes|Yes (when active)

## License
MarqueeTitle is licensed under the [Cameron Samuels License](LICENSE).
