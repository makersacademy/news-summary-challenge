'use strict';

describe("Aylien controller", function() {
  var mockElement, mockWindow, mockArticleCollection;
  var mockArticleView, HTMLString, mockArticle;

  HTMLString = "<div>string of text</div>"

  mockElement = {};
  mockWindow = new MockObject('window', ['addEventListener']);
  mockArticleCollection = new MockObject('articleCollection', []);

  mockArticleView = new MockObject('articleView', ['returnHTML']);
  mockArticleView.returnHTML().returnValue(HTMLString);
  mockArticle = new MockObject('article', ['url', 'addSummary']);

  function MockRequester() {
    this.sendCallCount = 0;
    this.readyState = 4;
    this.status = 200;
    this.response = JSON.stringify({ text: "string of text" });
  }
  MockRequester.prototype = {
    open: function() {},
    send: function() {
      this.sendCallCount++;
    }
  };
  var aylienController = new AylienController(mockWindow,
                                              mockElement,
                                              mockArticleCollection,
                                              mockArticleView,
                                              MockRequester);

  aylienController.setupHashListener()
  it("sets up the listener", function() {
    assert.isTrue(mockWindow.addEventListenerCallCount === 1);
  });
  it("asks it to listen for a hashchange", function() {
    assert.isTrue(mockWindow.addEventListenerArguments[0] === "hashchange");
  });

  aylienController.sendAPICall(mockArticle)
  it("sets up a GET request to API", function() {
    assert.isTrue(aylienController.currentRequest instanceof MockRequester)
  });
  it("sends the request", function() {
    assert.isTrue(aylienController.currentRequest.sendCallCount === 1);
  });
  it("sets a function to trigger when status changes", function() {
    assert.isTrue(aylienController.currentRequest.onreadystatechange instanceof Function);
  });

  aylienController.currentRequest.onreadystatechange()
  it("changes content of HTML element", function() {
    assert.isTrue(mockElement.innerHTML === HTMLString)
  });
});
