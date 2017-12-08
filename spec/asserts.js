var assert = {
  isTrue: function(describe, assertionToCheck){
    if (!assertionToCheck){
      throw new Error("assertion failed: " + assertionToCheck + "is not truthy");
    } else{
      console.log(describe)
    }
  },

  isEqual: function(one, two) {
    if(one !== two) {
      return(`Assertion failed:` + one + `is not equal to` + two );
    } else {
      return(`Assertion passed:` + one + `is equal to` + two )
    }
  }

}
