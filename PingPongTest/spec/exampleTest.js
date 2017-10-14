(function(exports) {
  function exampleTest() {
    var exampleTest = new PingPongSpec(); // Create a new instance of the test class
    var exampleModel = new ExampleModel(); // This is the object you want to test
    exampleTest.it("should test returnValue"); // Write what you want to test as an arg
    exampleTest.expect(exampleModel.returnValue("string")); // Input the method you want to test as an arg
    exampleTest.expectToEqual("string"); // Input the expected output as an arg
  }

  exampleTest(); //call your testMethod here
})(this);
