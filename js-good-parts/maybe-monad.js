function MONAD(modifier) {
	var prototype = Object.create(null);
	function unit(value) {
		var monad = Object.create(prototype);
		monad.bind = function (func, args) {
			return func(value, ...args);
		};
		if (typeof modifier === 'function') {
			modifier(monad, value);
		}
		return monad;
	}
	return unit;
}
var monad = maybe(null);
monad.bind(alert);