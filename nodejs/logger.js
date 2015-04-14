exports.info = function (message) {
	console.log(new Date() + ': ' + message);
};
exports.error = function (message) {
	console.error(message);
};
