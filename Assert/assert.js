var assert = {
  isTrue: function(description, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }else{
    console.log('test passed: ' + description);
    }
  };
};
