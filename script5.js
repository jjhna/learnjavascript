"use strict";
//Note this arrow only works with function with one statement
var hello = () => "Hello World!";
console.log(hello());
//instead of:
var world = function() {
  return "Hello World!";
}
console.log(world());
//arrow with parameters:
var hello2 = (val, val2) => "Hello " + val + val2
console.log(hello2('aholes', ' piece of shet'));
//Classes
class Car {
  constructor(brand) {
    Car.carname = brand;
  }
  present(x) {
    return x + ", I have a " + Car.carname;
  }
}
var mycar = new Car("Ford");
console.log(mycar.present("Hello"));
//OR, notice how the this replaces the Car class
class Car2 {
  constructor(brand) {
    this.carname = brand;
  }
  present(x) {
    return x + ", I have a " + this.carname;
  }
}
var mycar2 = new Car2("toyota");
console.log(mycar2.present("Hello"));
