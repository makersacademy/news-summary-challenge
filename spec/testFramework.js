'use strict';
var test = {
    isTrue: function (testName, assertionToCheck) {
        if (!assertionToCheck) {
            console.log("FAILED: " + testName);
        } else {
            console.log("PASSED: " + testName);
        }
    },
    contains: function(testName, string1, string2) {
        if (!(string1.includes(string2))){
            console.log("FAILED: " + testName);
        } else {
            console.log("PASSED: " + testName);
        }
    }
};