# 🏓 PING PONG TEST 🏓

This is a super-lightweight testing library for unit testing pure javascript models.

### How to use

- Clone the repo into your project folder
- Add your sources to the PingPongSpecRunner.html file
- Write your tests using the syntax below
- Add your test files to the PingPongSpecRunner.html file
- $ open PingPongSpecRunner.html
- Check the console in your browser for results
- Test results will be visible in the console and failed tests will throw error with details

```
(function(exports) {
  function exampleTest() {
    var exampleTest = new PingPongSpec(); // Create a new instance of the test class
    var yourObject = new YourObject(); // This is the object you want to test
    exampleTest.it("Expects something"); // Write what you want to test as an arg
    exampleTest.expect(yourObject.SomeMethod()); // Input the method you want to test as an arg
    exampleTest.expectToEqual(Some_expected_output); // Input the expected output as an arg
  }

exampleTest();
})(this);
```
### Collaborators

- James Stubbs 
- Rory Hodgson 
- Mengchen Wang
- Zoe Hopkins 
