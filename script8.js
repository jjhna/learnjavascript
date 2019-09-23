class Car {
  constructor(type, year) {
    this.type = type;
    this.year = year;
  }
  sound(vroom) {
    console.log(`This ${this.type} built in ${this.year} makes a ${vroom} sound`);
  }
  skill(lvl) {
    if (lvl == 10) {
      return console.log('prety gud');
    } else if (lvl == 5) {
      return console.log('meh ok');
    } else {
      return console.log('wtf');
    }
  }
}

var mike1 = new Car('toyota', 1969);
console.log(mike1);

var mike2 = new Car('ford', 1989).sound('voom');

var mike4 = new Car('mcqueen', 2000).skill(5);

class Size extends Car {
  constructor(previous, length, width) {
    // super() is used to call the parents constructor function
    //super() method refers to parent class, access parent properties and methods
    super(previous);
    this.length = length;
    this.width = width;
  }
  show() {
    return this.sound() + ' and is about ' + this.length + ' and ' + this.width;
  }
}

var mike5 = new Size('kia', 5, 9);
console.log(mike5.show());
