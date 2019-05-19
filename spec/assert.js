var assert = {
    isTrue: function(checkIfTrue){
      if(!checkIfTrue) {
        throw new Error("Assertion failed: " + checkIfTrue+ " is not true");
      } else {console.log("Test passes!")}
    }
  }