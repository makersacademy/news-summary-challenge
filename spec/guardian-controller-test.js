describe("Guardian Controller", function() {
  var mockElement = {};
  var HTMLString = "<div>An HTML string</div>";
  var mockRequest = new MockObject('request', ['open', 'send']);
  mockRequest.readyState = 4;
  mockRequest.status = 200;
  mockRequest.response = JSON.stringify("example");

  var headlineViewMock = new MockObject('headlineView', ['returnHTML']);
  headlineViewMock.returnHTML().returnValue(HTMLString)

  var headlineParserMock = new MockObject('headlineParser', []);
  guardianController = new GuardianController(mockElement,
                                              headlineViewMock,
                                              headlineParserMock,
                                              mockRequest);

  it("accepts a requester to carry out the API calls", function() {
    assert.isTrue(guardianController.request === mockRequest);
  });

  guardianController.setupAPIListener();
  it("specifies a function to run when requester state changes", function() {
    assert.isTrue(typeof mockRequest.onreadystatechange === "function");
  });

  guardianController.makeAPIRequest();
  it("sets up a get request to the API", function() {
    assert.isTrue(mockRequest.openArguments[0] === "GET");
  });

  it("sends the request", function() {
    assert.isTrue(mockRequest.sendCallCount === 1);
  });

  guardianController.request.onreadystatechange()
  it("updates the inner html property of the element", function() {
    assert.isTrue(mockElement.innerHTML === HTMLString);
  });
});
