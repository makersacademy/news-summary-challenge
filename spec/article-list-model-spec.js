"use strict";

showOff("ArticleList", function(){
  var articles = new ArticleList();
  var articleObj = "article stub";

  theThingy(".addArticle adds an article to the list, returnArticleByIndex returns that article stored in 0 position", function(){
    articles.addArticle(articleObj);
    hope(articles.returnArticleByIndex(0)).toEqual("article stub");

  });

});