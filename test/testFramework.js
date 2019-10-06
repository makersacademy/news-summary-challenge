var assert = {
	isTrue: function(assertion) {
		if (!assertion) {
		throw new Error("- failed");
		}
		else console.log("- passed");
	}
};

function describe(element){
	console.log("--- " + element + " ---");
}
