var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      console.log('*');
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('.')
    }
  }
}
