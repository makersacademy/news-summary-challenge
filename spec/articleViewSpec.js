"use strict";

(function () {

  function FakeArticle(id, sectionID, title, imageURL, body) {
    this._id = id;
    this._sectionID = sectionID;
    this._articleTitle = title;
    this._imageURL = imageURL;
    this._body = body
  }

  FakeArticle.prototype.getBody = function () {
    return this._body;
  }

  var fakeArticle= new FakeArticle("test", "test", "test title", "test", "test body")

  var articleView = new ArticleView(fakeArticle);

  runner.register(function testGetArticle() {
    return assert.returns(articleView.getArticle(), fakeArticle)
  })

  runner.register(function testGetArticleHTML() {
    return assert.returns(articleView.getArticleHTML(), `<h2>Current Article</h2><div>${fakeArticle.getBody()}</div>`)
  })

  runner.register(function testGetArticleHeaderHTML() {
    return assert.returns(articleView.getArticleHeaderHTML(), '<h2>Current Article</h2>')
  })

})()
