var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + testName + " is not truthy");
    } else {
      console.log(testName + " passed")
    }
  }
};

// function describe(assertion, testFunction){
//   console.log(assertion);
//   testFunction();
// }
//
// function toBeEqual(test, expectation) {
//   return function(){
//     if (test() === expectation) {
//       console.log(test + " passed")
//     } else {
//       throw new Error("Expected " + test + " to equal " + expectation);
//     };
//   };
// };


(function(exports) {
	function Stub(obj, functionName, newFunction) {
		this.obj = obj;
		this.functionName = functionName;
		this.originalFunction = obj[functionName];
		obj[functionName] = newFunction;
	}

	Stub.prototype.restore = function restore() {
		this.obj[this.functionName] = this.originalFunction;
	}

	exports.Stub = Stub;
})(this);
