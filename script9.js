'use strict';

class Car {
  constructor(type, year) {
    this.type = type;
    this.year = year;
  }
  //getters don't have any parameters cause they're trying to get the properties in the 1st place
  get adder() {
    return this.type + ' built in ' + this.year;
  }
  set adder(value) {
    var words =   value.split(' ');
    this.type = words[0] || '';
    this.year = words[1] || '';
  }
}

var mike1 = new Car();
mike1.adder = 'ford 1969';
console.log(mike1.type);
console.log(mike1.year);

class Names {
  constructor(urname) {
    this._urname = urname;
  }
  get property() {
    return this._urname;
  }
  set property(value) {
    this._urname = value;
  }
}

var mike2 = new Car('mista');
console.log(mike2);
mike2.urname = 'mistey';
console.log(mike2.urname);
