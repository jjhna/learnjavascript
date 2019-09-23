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

var bad = false || 0;
console.log(bad);

function makeblank(alpha, beta) {
	var that = {};
	var y = beta || 0;
	var s = y;

	function lowpass(v) {
		y = v;
		s = alpha * v + (1 - alpha) * s;
		return s;
	}

	that.filter = function(v) {
		y = v;
		s = v;
		that.filter = lowpass;
		return s;
	};

	that.filterWithAlpha = function(v, a) {
		alpha = a;
		return that.filter(v);
	};

	that.hasLastRawValue = function() {
		return that.filter === lowpass;
	};

	that.lastRawValue = function() {
		return y;
	};

	return that;
}

console.log(makeblank(5, 6));
