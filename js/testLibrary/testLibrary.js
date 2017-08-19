(function(exports) {
	var assert = {
		isTrue: function(assertion) {
			if (!assertion) {
				throw new Error("Incorrect assertion: " + assertion + " is not true");
			} else {
				console.log("    Correct assertion" );
			};
		}
	};

	var describe = function(description, test) {
		console.log(description)
		test();
	};

	var it = function(description, test) {
		console.log("  " + description);
		test();
	};

	exports.assert = assert;
	exports.describe = describe;
	exports.it = it;
})(this);
