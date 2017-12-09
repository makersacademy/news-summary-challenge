var assert = {
  isTrue: function(describe, assertionToCheck){
    if(!assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + "is not truthy")
    } else {
      console.log(describe)
    }
  },

  isObjectType: function(describe, val1, val2){
    if(val1.constructor !== val2.constructor){
      throw new Error("Assertion failed: "  + val1 + " is not an object type as " + val2)
    } else {
      console.log(describe)
    }
  },

  isInstanceOf: function(describe, val, objectType){
    if(val instanceof objectType){
      console.log(describe)
    } else {
      throw new Error("Assertion failed: " + val + " is not an instance of " + objectType)
    }
  },

  isEqual: function(describe, val1, val2){
    if(val1 != val2){
      throw new Error("Assertion failed: " + val1 + " is not equal to " + val2)
    } else {
      console.log(describe)
    }
  }
}
