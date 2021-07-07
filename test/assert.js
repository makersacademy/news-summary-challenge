var assert = {
  isTrue: function(expressionToCheckIfTrue){
    if(!expressionToCheckIfTrue) {
      throw new Error("Assertion failed: " + expressionToCheckIfTrue+ " is not truthy");
    } else {console.log("passed")}
  }
}
