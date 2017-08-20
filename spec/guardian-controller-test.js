'use strict';

describe("Guardian Controller", function() {
  var mockElement, mockWindow, HTMLString, mockRequest;
  var mockArticleCollection, headlineViewMock;
  var guardianController, headlineParserMock;

  mockElement = {};
  mockWindow = new MockObject('window', ['addEventListener'])
  HTMLString = "<div>An HTML string</div>";
  mockRequest = new MockObject('request', ['open', 'send']);
  mockRequest.readyState = 4;
  mockRequest.status = 200;
  mockRequest.response = JSON.stringify("example");

  mockArticleCollection = new MockObject('articleCollection', ['createArticle']);

  headlineViewMock = new MockObject('headlineView', ['returnHTML']);
  headlineViewMock.returnHTML().returnValue(HTMLString)

  headlineParserMock = new MockObject('headlineParser', ['extractArticles']);
  guardianController = new GuardianController(mockWindow,
                                              mockElement,
                                              mockArticleCollection,
                                              headlineViewMock,
                                              headlineParserMock,
                                              mockRequest);

  guardianController.setupHashListener()
  it("sets up the listener", function() {
    assert.isTrue(mockWindow.addEventListenerCallCount === 1);
  });
  it("asks it to listen for a hashchange", function() {
    assert.isTrue(mockWindow.addEventListenerArguments[0] === "hashchange");
  });

  it("accepts a request to carry out the API calls", function() {
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
