(function(exports) {
	var assert = {
		truthy: function(assertion, description) {
			if (!assertion) {
				error = new Error
				document.getElementById("tests").innerHTML += ("❌ ... is an incorrect assertion!<br><br>");
				document.getElementById("tests").innerHTML += error.stack;
				console.log(error)
			} else {
				document.getElementById("tests").innerHTML += ("✅ ... is a correct assertion!<br>");
			};
		}
	};

	var describe = function(description, test) {
		console.log(description)
		document.getElementById("tests").innerHTML += ("<h3>" + description + "</h3<br>")
		test();
	};

	var it = function(description, test) {
		console.log("  " + description);
		document.getElementById("tests").innerHTML += (description + ":<br>")
		test();
	};

	exports.assert = assert;
	exports.describe = describe;
	exports.it = it;
})(this);
