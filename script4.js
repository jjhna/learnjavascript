"use strict";
console.log("john".constructor);

var x = 5 | 1;
console.log(x);

//Javascript declarations can be hoisted, meaning variables don't need to be declared at the top
a = 20;
console.log(a);
var a;
console.log(a);
a = [2, 3];
console.log(a[0] + " " + a[1]);

//Use strict, prevents usage of var's and undeclared var's
//"use strict"; must be declared at the beginning
//abe = 4.5; //make sure to comment this out when continuing

var per1 = {
  fullname: function() {
    return this.firstName + " " + this.lastName;
  }
}
var per2 = {
  firstName: "Me",
  lastName: "harambe",
}
var all = per1.fullname.call(per2);
console.log(all);

//let has more disadvantages than var, let can only be used in windows & scopes
//const can be used similarly like let however it cannot be changed
const cantchange = 5;
console.log(cantchange);
//below will cause an error
// cantchange = 2;
// console.log(cantchange);
