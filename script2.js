console.log("this is script2");

//This shows how URL encodin works, messages are encoded with code ? => %3F
console.log("Yes being encoded: " + encodeURIComponent("Yes?"));
console.log("Yes being decoded: " + decodeURIComponent("Yes%3F"));

//function example
function poopypants(a, b) {
  return a + b;
}

console.log("the function poopypants comes out to: " + poopypants(5, 5));

//object example with method (the function inside the method)
//this refers to the object definition, so car = this
var car = {
  type: "honda",
  year: 1969,
  model: "civic",
  make: "S class",
  insurance: function() {
    return this.type + " " + this.model + " " + this.make;
    //this = car
  },
  moreinsurance: function() {
    return this.insurance() + " do u want more?";
  }
}

let sample = car.type;
console.log("the car type is: " + sample);
console.log("the car insurance needs the info: " + car.insurance());
console.log("more more info: " + car.moreinsurance());
console.log("cum on guis its not great to\nno how to walk around the shoreline!");

//non-returnable function
function noreturn(a, b) {
  var c = a + b;
}
console.log(noreturn(2,3));

//function with no parameters
function noparam() {
  return 5;
}
console.log(noparam());

//
