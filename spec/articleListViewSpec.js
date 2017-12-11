"use strict";

(function() {

  function FakeArticle(id, sectionID, title, imageURL) {
    this._id = id;
    this._sectionID = sectionID
    this._articleTitle = title
    this._imageURL = imageURL
  }

  FakeArticle.prototype.getId = function () {
    return this._id;
  }

  FakeArticle.prototype.getArticleTitle = function () {
    return this._articleTitle;
  }

  FakeArticle.prototype.getImageURL = function () {
    return this._imageURL;
  }


  function FakeArticleList() {
    this._articles = []
  }

  FakeArticleList.prototype.getArticles = function() {
    return this._articles
  }

  FakeArticleList.prototype.addArticle = function(id, sectionID, title, imageURL, constructor = Article) {
    this._articles.push(new constructor(id, sectionID, title, imageURL))
  }

  runner.register(function testArticleListViewInstanceOf() {
    var articleListView= new ArticleListView
    return assert.isTrue(articleListView instanceof ArticleListView)
  })

  runner.register(function testGetListHTML1Article() {
    var fakeArticleList = new FakeArticleList()
    fakeArticleList.addArticle("test", "test", "test title", "test", FakeArticle)
    var articleListView = new ArticleListView(fakeArticleList)
    return assert.returns(articleListView.getListHTML(), "<ul><li><img src=test></img><br /><a href=#test>test title</a></li></ul>")
  })

  runner.register(function testGetListHTML2Articles() {
    var fakeArticleList = new FakeArticleList()
    fakeArticleList.addArticle("test", "test", "test title", "test", FakeArticle)
    fakeArticleList.addArticle("test2", "test2", "test title2", "test2", FakeArticle)
    var articleListView = new ArticleListView(fakeArticleList)
    return assert.returns(articleListView.getListHTML(), "<ul><li><img src=test></img><br /><a href=#test>test title</a></li><li><img src=test2></img><br /><a href=#test2>test title2</a></li></ul>")
  })
})()
