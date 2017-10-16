(function(exports) {
  function testingNewsGrabber() {
    var firstTest = new PingPongSpec(); // Create a new instance of the test class
    var newsGrabber = new NewsGrabber('http://echo.jsontest.com/LightYagami/Kira/L/LLawliet'); // This is the object you want to test
    firstTest.it("should record the responseText of a call"); // Write what you want to test as an arg
    newsGrabber.apiCallRecord()
    console.log(newsGrabber.apiCallRecorded)
    firstTest.expect(newsGrabber.parseCall()); // Input the method you want to test as an arg
    firstTest.expectToEqual('b'); // Input the expected output as an arg
  }

  testingNewsGrabber(); //call your testMethod here
})(this);
