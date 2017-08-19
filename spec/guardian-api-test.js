describe("Guardian API Caller", function() {
  var mockRequest = new MockObject('request', ['open',
                                                   'send'
                                                 ]);
  mockRequest.readyState = 4;
  mockRequest.status = 200;
  mockRequest.responseText = 'exampleURL';

  var guardianAPI = new GuardianAPI(mockRequest);
  it("accepts a requester to carry out the API calls", function() {
    assert.isTrue(guardianAPI.request === mockRequest);
  });

  guardianAPI.setupAPIListener();
  it("specifies a function to run when requester state changes", function() {
    assert.isTrue(typeof mockRequest.onreadystatechange === "function");
  });

  guardianAPI.makeAPIRequest();
  it("sets up a get request to the API", function() {
    assert.isTrue(mockRequest.openArguments[0] === "GET");
  });
  it("sends the request", function() {
    assert.isTrue(mockRequest.sendCallCount === 1);
  });
  it("saves results as a property of the API Caller", function() {
    guardianAPI.request.onreadystatechange()
    assert.isTrue(guardianAPI.results() === 'exampleURL');
  });
});
