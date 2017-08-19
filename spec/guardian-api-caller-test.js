describe("Guardian API Caller", function() {
  var mockRequester = new MockObject('requester', ['open', 'send'])

  var guardianAPICaller = new GuardianAPICaller(mockRequester);
  console.log(guardianAPICaller)
  it("accepts a requester to carry out the API calls", function() {
    assert.isTrue(guardianAPICaller.requester === mockRequester);
  });

  guardianAPICaller.setupAPIListener();
  it("specifies a function to run when requester state changes", function() {
    assert.isTrue(typeof mockRequester.onreadystatechange === "function");
  });

  guardianAPICaller.makeAPIRequest();
  it("sets up a get request to the API", function() {
    assert.isTrue(mockRequester.openArguments[0] === "GET");
  });
  it("sends the request", function() {
    assert.isTrue(mockRequester.sendCallCount === 1);
  });
});
