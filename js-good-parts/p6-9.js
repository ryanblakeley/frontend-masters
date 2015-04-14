// Write a function that takes a function and an argument,
// and returns a function that can supply a second argument.
// add3 = curry(add, 3);
// add3(4) // 7
// curry(mul, 5)(6) // 30

function add(x, y) {
	return x + y;
}
function mul(x, y) {
	return x * y;
}
function curry(func, first) {
	return function(second) {
		return func(first, second);
	}
}
// var add3 = curry(add, 3);
// alert(add3(4));
// alert(curry(mul, 5)(6));

// Without writing any new functions, show three ways to create the inc function.
// inc(5) // 6
// inc(inc(5)) // 7

var inc;
inc = addf(1);
inc = applyf(add)(1);
inc = curry(add, 1);

// Write methodize, a function that converts a binary function to a method.
// Number.prototype.add = methodize(add);
// (3).add(4) // 7

Number.prototype.add = methodize(add);
function methodize(func) {
	return applyf(func)(this);
}
function methodize(func) {
	return function (y) {
		return func(this, y);
	};
}
// alert((3).add(4));

// Write demethodize, a function that converts a method to a binary function.
// demethodize(Number.prototype.add)(5, 6) // 11

function demethodize(func) {
	return function (that, y) {
		return func.call(that, y);
	};
}
// alert(demethodize(Number.prototype.add)(5, 6));