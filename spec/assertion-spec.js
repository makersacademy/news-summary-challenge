var assert = {
  isTrue: function(description, assertionToCheck){
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + description + " is not truthy");
    }
    else console.log(description + " is truthy!");
  }
};
