var expect = {
    toEqual: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Test failed: " + assertionToCheck + " is not true.");
        } else {
            console.log("Test passed!")
        }
    }
};