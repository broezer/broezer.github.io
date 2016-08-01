// Contents of functions.js
$(function(){
  'use strict';

  // grab an element
  var myElement = document.getElementById("nav-projects");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(myElement);
  // initialise
  headroom.init();

});
