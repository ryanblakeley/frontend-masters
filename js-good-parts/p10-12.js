// Write a function twice that takes a binary
// function and returns a unary function that
// passes its argument to the binary function twice.
function twice(binary) {
	return function (a) {
		return binary(a, a);
	};
}
var double = twice(add);
console.log( double(11) ); // 22
var square = twice(mul);
console.log( square(11) ); // 121

// Write a function composeu that takes
// two unary functions and returns a
// unary function that calls the both
function composeu(f, g) {
	return function (a) {
		return g(f(a));
	};
}
function square(a) {
	return a * a;
}
console.log( composeu(double, square)(3) ); // 36

// Write a function composeb that takes
// two binary functions and returns a
// function that calls them both.
function composeb(f, g) {
	return function (a, b, c) {
		return g(f(a, b), c);
	};
}
console.log( composeb(add, mul)(2, 3, 5) ); // 25