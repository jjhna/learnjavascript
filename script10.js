
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("name must be filled out");
    return false;
  }
}
//This creates a new object, only!
var person1 = {
  firstN: "john",
  lastN: "Doe",
  language: "en",
}
// you can add new property to objects
person1.country = "china";
console.log(person1.country);
//This is a constructor function
//Note you can invoke functions as a method, or constructor function
function person2(first, last, age, eye) {
  this.firstN = first;
  this.lastN = last;
  this.age = age;
  this.eye = eye;
}
//you cannot add new property to constructor function
person2.country = "japan";
console.log(person2.country);
var pepole = new person2("kim", "jong", 69, "black");
console.log(pepole.country);

var person3 = {
  fullName: function(city, country) {
    return this.firstN + " " + this.lastN + " lives in " + city + " and " + country;
  }
}

var person4 = {
  firstN:"kong",
  lastN: "king"
}
// call method to get write a method that can be used on different objects
var xx = person3.fullName.call(person4, "pyongyang", "nk")
console.log(xx);
// or apply() which uses an array instead
var xxx = person3.fullName.apply(person4, ["beijing", "jing"])
console.log(xxx);

//This is a self-invoking function exammple:
var add = (function () {
  var counter = 0;
  console.log(counter);
  return function() { counter += 1; return counter}
}) ();
//in other words var counter becomes the functions private variable
