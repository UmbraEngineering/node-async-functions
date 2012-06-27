
Function.prototype.async = function() {
	return this.asyncApply(arguments);
};

Function.prototype.asyncApply = function(args) {
	process.nextTick(function() {
		this.apply(this, args);
	}.bind(this));
};

