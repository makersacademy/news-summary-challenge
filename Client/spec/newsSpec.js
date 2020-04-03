console.log("hello");

let assert = { 
  isTrue: function(assertionToCheck) {
    if(!assertionToCheck) {
      throw new Error("Assertion Failed: " + assertionToCheck + " is not truthy");
    } 
    console.log("  ======> test passed"); 
  }
};

function testingTheTest() {
  console.log("testing my test framework");
  assert.isTrue(true === true)
}


testingTheTest()
