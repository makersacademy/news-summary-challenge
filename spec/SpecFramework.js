let assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is not true");
        }
    },

    isArrayEqual: function(comparitor1, comparitor2) {
        if (comparitor1.length !== comparitor2.length) {
            throw new Error("Assertion failed: array are different lengths");
        }
        for (let i = 0; i < comparitor1.length ; i++) {
            if (comparitor1[i] !== comparitor2[i]) {
                throw new Error("Assertion failed: array elements are different");
            }
        }
    }

};
