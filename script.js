//script.js is used just for testing purposes

console.log("hello world");

let num = 0;
let n2 = 0.5

let string = 'hi';
let s2 = "helo";
let s3 = "bolo";

console.log(typeof(num));
console.log(typeof(n2));
console.log(typeof(string));
console.log(typeof(s2));
console.log(typeof(s3));

if (s3 == 0) {
  console.log("it is true");
} else {
  console.log("its not true");
}

for (var i = 0; i < s3.length; i++) {
  s3[i]
  console.log(s3[i]);
}

s3 = window.prompt("Enter ur name ");
alert ("Ur new name is " + s3);

console.log(s3);

var folk = [1, 2, 4, 5, 6, "lame", "hoe"];

console.log(folk[0]);
console.log(folk[6]);

var s4 = [];
let s5 = [];
s4[0] = window.prompt("enter sumthin");
document.write(s4[0] + "<br>");
s4[1] = window.prompt("enter another");
document.write(s4[1] + "<br>");
s5[0] = window.prompt("enter another");
document.write(s5[1] + "<br>");
if ((s4[0] || s4[1]) == "undefined") {
  document.write("ok why does this say undefined");
}

function Sagepointomyarse(id) {
  this.id = id;
  this.color = blue;
  this.label = "homo";
}
