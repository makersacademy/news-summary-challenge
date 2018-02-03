var assert = {
 isTrue: function(assertionToCheck, testName){
   if (!assertionToCheck) {
     throw new Error("Assertion failed: " + testName + " is not working");
   } else {
     console.log(testName + ": Passed");
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
