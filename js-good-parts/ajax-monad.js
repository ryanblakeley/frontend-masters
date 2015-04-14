function MONAD() {
	var prototype = Object.create(null);
	function unit(value) {
		var monad = Object.create(prototype);
		monad.bind = function (func, args) {
			return func(value, ...args);
		};
		return monad;
	}

	unit.lift = function (name, func) {
		prototype[name] = function (...args) {
			return unit(this.bind(func, args));
		};
		return unit;
	};
	return unit;
}
var ajax = MONAD()
	.lift('alert', alert);
var monad = ajax("Hello world.");
monad.bind(alert);
monad.alert();
