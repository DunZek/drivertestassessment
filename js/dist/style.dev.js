"use strict";

var nav = document.querySelector('nav');
var main = document.querySelector('main');
var body = document.querySelector('body'); // Change panel group and color scheme

body.addEventListener('mousemove', function (mouseEvent) {
  // Technical
  var margin = 0.15;
  var margin_left = margin * window.innerWidth;
  var margin_right = window.innerWidth - margin * window.innerWidth;
  var xpos, ypos;

  if (mouseEvent) {
    //Viewport
    xpos = mouseEvent.screenX;
    ypos = mouseEvent.screenY;
  } else {
    //IE
    xpos = window.event.screenX;
    ypos = window.event.screenY;
  } // Detect mouse on areas


  var keyframed = [nav, main, body];

  if (xpos <= margin_left) {
    for (e in keyframed) {
      keyframed[e].classList.add('to_blue');
    }
  } else if (xpos >= margin_right) {
    for (e in keyframed) {
      keyframed[e].classList.remove('to_blue');
    }
  }

  console.log(xpos, ypos);
});