
Function.prototype.async = function() {
	var func = this;
	var args = arguments;
	process.nextTick(function() {
		func.apply(this, args);
	});
};

