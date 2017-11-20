"use strict";

showOff("ArticleView", function () {
  var article = new Article();
  article.setBody("<p>articles body</p> some more text");
  article.setTitle("Article's Title");
  article.setThumbnail("http://example.com/thumb.jpg");
  article.setUrl("http://example.com");

  var articleView = new ArticleView(article, 0)

  theThingy(".renderArticle should return the html of a single article for preview", function () {
    hope(articleView.renderArticle()).toEqual("<div class='article'><img class='thumb' src='http://example.com/thumb.jpg'><h3><a href='#0' id='title0'>Article's Title</a></h3><p>articles body</p><a href='#0'>read more</a></div>");
  });

  theThingy(".renderWholeArticle should return the html of a single article", function () {
    hope(articleView.renderWholeArticle()).toEqual("<div id='0'><h3><a href='#0' id='title0'>Article's Title</a></h3><div class='article-body'><p>articles body</p> some more text</div></div><a href='#titles'>Back to Top</a>");
  });

  showOff("ArticleListView", function () {

    var articleList = new ArticleList();

    articleList.addArticle(article);
    articleList.addArticle(article);

    var articleListView = new ArticleListView(articleList);
    theThingy(".renderPage should set the html of all article previews to the page", function () {
      //don't know how to test

    });

  });

});