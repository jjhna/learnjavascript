"use strict";
//Note this arrow only works with function with one statement
var hello = () => "Hello World!";
console.log(hello());
//instead of:
var world = function() {
  return "Hello World!";
}
console.log(world());
