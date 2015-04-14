(function () {
	A();

	function C() {
		return;
	}

	function E(f) {
		console.log("E");
		var f = F;
		f();
	}

	function A() {
		console.log("A");
		B();
	}

	var C;

	function G() {
		console.log("G");
		H();

		function H() {
			console.log("H");
			I();
		};
	}

	var D = d;

	function d() {
		console.log("D");
		E();
	}

	function I() {
		console.log("I");
		J();
		J();
	}

	function B() {
		console.log("B");
		C();
	}

	var F = function () {
		console.log("F");
		G();
	};

	var rest = "KLMNOPQRSTUVWXYZ".split(""); fns = {};
	for (var i=0; i<rest.length; i++) {
		(function (i){
			// define the current function
			fns[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					fns[rest[i+1]]();
				}
			};
		})(i);
	}

	var J = function() {
		J = function() {
			console.log("J");
			fns.K();
		};
	};

	C = (function() {
		console.log("C");
		D();
	}());

}());