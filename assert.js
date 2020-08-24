(function(exports) { 
    
    var assert = {
        isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      
        }
        else {
            return console.log(".");

        }
    }
};
exports.assert = assert; // open a window for .assert it is equal the object assert
})(this);