// Write a function that allows another function to only be called once.
function once(func) {
	return function () {
		var f = func;
		func = null;
		return f.apply(
			this, 
			arguments
		);
	};
}
var add_once = once(add);
console.log( add_once(3, 4) ); // 7
// console.log( add_once(3, 4) ); // throw!

// Write a factory function that
// returns two functions that 
// implement an up/down counter.
function counterf(value) {
	return {
		inc: function () {
			value += 1;
			return value;
		},
		dec: function () {
			value -= 1;
			return value;
		}
	};
}
var counter = counterf(10);
console.log( counter.inc() ); // 11
console.log( counter.dec() ); // 10

// Make a revocable function that takes a nice function,
// and returns a revoke function that denies access to
// the nice function, and an invoke function that can
// invoke the nice function until it is revoked.
function revocable(nice) {
	return {
		invoke: function () {
			return nice.apply(
				this,
				arguments
			);
		},
		revoke: function () {
			return nice = null;
		}
	}
}
var temp = revocable(alert);
temp.invoke(7); // alert: 7
temp.revoke();
temp.invoke(8); // throw!