var assert = {
  isTrue: function(describe, assertionToCheck){
      if(!assertionToCheck){
        throw new Error("assertion failed:" + assertionToCheck + "is not truthy");
      } else {
        console.log(describe)
      }
  },

  isInstanceOf: function(describe, value, objectType){
    if(value instanceof objectType){
      console.log(describe)
    } else {
     throw new Error("assertion failed:" + value + "is not an instance of " + objectType);
   }
 },

  isObjectType: function(describe, value1, value2){
    if(value1.constructor === value2.constructor){
      console.log(describe)
    } else {
      throw new Error("assertion failed:" + value1 + "is not an object type of" + value2)
    }
  },

  isEqual: function(describe, value1, value2){
    if(value1 === value2){
      console.log(describe)
    } else {
      throw new Error("assertion failed:" + value1 + "does not equal to" + value2)
    }
  }
};
