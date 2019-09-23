class Car {
  constructor(type, year) {
    this.type = type;
    this.year = year;
  }
  sound(vroom) {
    console.log(`The ${this.type} was built in ${this.year} makes a '${vroom}' sound`);
  }
  doesitdrift(cond) {
    if (cond == true) {
      return console.log('this car can drift');
    } else {
      return console.log("this car can't drift");
    }
  }
}

var mike1 = new Car('toyota', 1992);
console.log(mike1);

var mike2 = new Car('ford', 1969).sound('kachow');

var mike3 = new Car('tesla', 2010).doesitdrift(true);

//This don't work...
//var mike4 = new Car('mqueen', 2000).sound('cumchow').doesitdrift(true);

class Boo {
  constructor(alpha) {
    this.alpha = alpha;
  }
  static funky(beta) {
    return  'ok mista ' + beta.alpha;
  }
}
var boo1 = new Boo('papa');
console.log(Boo.funky(boo1));
//calling boo1.funky(beta); will give an error because its a static
