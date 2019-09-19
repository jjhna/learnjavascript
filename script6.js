//debugger will stop the process
var u = 15 * 5;
//debugger;
console.log(u);

//JSON - JavaScript Object Notation
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//This .parse will convert the text into a JavaScript object
var obj = JSON.parse(text);
for (var i = 0; i < obj.employees.length; i++) {
  console.log(obj.employees[i].firstName + " " + obj.employees[i].lastName);
}
