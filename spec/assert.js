var describe = function(description, it) {
	console.log(description);
	it();
};

var it = function(description, testFunction) {
	console.log(description);
	testFunction();
};

(function(exports) {
	function Jotun() {
    this.subject;
	}

	Jotun.prototype = {
		expect: function(subject) {
			this.subject = subject;
			return this;
		},

		isTrue: function() {
			if (this.subject) {
				return("Pass: " + this.subject + "is true");
			} else {
				return("Fail: " + this.subject + "is not true");
			}
		},

		isEqual: function(textToCheck) {
			if(this.subject === textToCheck){
				return `Pass:  is ${textToCheck}`;
			} else {
				return ("Fail: " + this.subject + " is not " + textToCheck);
			}
		},

		isNotEqual: function(textToCheck) {
			if(this.subject !== textToCheck){
				return("Pass: " + this.subject + " is not " + textToCheck);
			} else {
				return("Fail: " + this.subject + " is " + textToCheck);
			}
		},

		isEmpty: function() {
			if (this.subject.length === 0 ) {
				return("Pass: " + this.subject.constructor.name + " is empty");
			} else {
				return("Fail: " + this.subject.constructor.name + " is not empty");
			}
		},

		isNotEmpty: function() {
			if (this.subject.length !== 0 ) {
				return("Pass: " + this.subject + " is not empty");
			} else {
				return("Fail: " + this.subject + " is empty");
			}
		},

		isEmptyArray: function() {
			if (this.subject.constructor.name === "Array" && this.subject.length === 0) {
				return ("Pass: is an empty array.");
			} else if (this.subject.constructor.name != "Array") {
				return ("Fail: is not an array");
			} else if (this.subject.constructor.name === "Array" && this.subject.length != 0) {
				return ("Fail: array is not empty");
			}
		},

		isNotEmptyArray: function() {
			if (this.subject.constructor.name === "Array" && this.subject.length >= 1) {
				return("Pass: is an array which is not empty.")
			} else if (this.subject.constructor.name != "Array") {
				return ("Fail: is not an array");
			} else if (this.subject.constructor.name === "Array" && this.subject.length === 0) {
				return ("Fail: array is empty");
			}
		},

		includesObject: function(objectToCheck) {
			if (this.subject.includes(objectToCheck)){
				return("Pass: " + objectToCheck.constructor.name + " is in " + this.subject.constructor.name);
			} else {
				return("Fail: " + objectToCheck.constructor.name + " is not in " + this.subject.constructor.name);
			}
		},

		notIncludeObject: function(objectToCheck) {
			if (!this.subject.includes(objectToCheck)){
				return("Pass: " + objectToCheck.constructor.name + " is not in " + this.subject.constructor.name);
			} else {
				return("Fail: " + objectToCheck.constructor.name + " is in " + this.subject.constructor.name);
			}
		},
	};

	exports.jotun = new Jotun();
})(this);
