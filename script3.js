//Arrays are objects
var cararray = ["toyota", "mazda", "ford", "tesla"];

console.log(cararray[1]);
cararray[1] = "old piece of trash";
console.log(cararray[1]);
console.log(cararray);
//Objects are also arrays
var caryear = {toyota: 1969, mazda: 1900, ford: 1999, tesla: 2000};
console.log(caryear.toyota);
console.log(caryear);
//Push only works with array
cararray.push("kea");
console.log(cararray);
cararray[5] = "lemoncar";
console.log(cararray);
//how to add to objects (not arrays)
var stuf = {};
stuf['poop'] = 'value';
console.log(stuf);
stuf['crap'] = 'toliet';
console.log(stuf);

function thisArray(a) {
  return a.constructor.toString().indexOf("Array") > -1;
}
if (thisArray(cararray) == false) {
  console.log("the car array isn't an array!");
} else {
  console.log('the car array is an array');
}

//Compare function
//A function that compares between a, b and returns either a -1, 0, 1
//function(a,b) {return a - b}
var sortme = ['a', 'e', 'i', 'b', 'o', 'd', 'o', 'u'];
sortme.sort();
console.log(sortme);
var numsort = [2, 5, 1, 78, 0.6, 8, 3, 0.111, 6, 0.1];
numsort.sort(function(a, b) {return a - b});
console.log(numsort);

//forEach()
numsort.forEach(function(value) {
  value -= 0.1;
  console.log(value);
});
console.log(numsort);
//Interesting even after I changed the value for each element
//it comes out back to the original, so lets use a for loop
var result = [];
for (var i = 0; i < numsort.length; i++) {
  result[i] = numsort[i] - 0.1;
  numsort[i] = result[i];
}
console.log(numsort);
