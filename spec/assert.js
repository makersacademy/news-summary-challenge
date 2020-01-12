var passedTests = 0;

var assert = {
    isTrue: function (assertionToCheck) {

        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
        }
        passedTests ++;
    }
    
};

