"use strict";

var guardianParser = new JsonParser();

var executeAfterFetchingData = function () {
  var titles = guardianParser.getTitles();
  var urls = guardianParser.getUrls();
  var bodies = guardianParser.getBodies();
  var thumbnails = guardianParser.getThumbnails();
  
  var articles = new ArticleList();
  var article;
  
  for (var i = 0; i < titles.length; i++) {
    article = new Article();
    
    article.setTitle(titles[i]);
    article.setBody(bodies[i]);
    article.setThumbnail(thumbnails[i]);
    article.setUrl(urls[i]);
    
    articles.addArticle(article);
  }
  console.log(articles.getArticleByIndex(0).getBody());
  var articlesView = new ArticleListView(articles);
  articlesView.renderPage();
  
  
  
  function displayArticleListener() {
    window.addEventListener("hashchange", displayClickedArticle);
  };
  
  function displayClickedArticle() {
    var articleId = window.location.hash.split("#")[1];
    
    var clickedArticle = articles.getArticleByIndex(articleId);
    var singleArticleView = new ArticleView(clickedArticle, articleId);
    console.log(singleArticleView);
    
    document
    .getElementById("description")
    .innerHTML = singleArticleView.renderWholeArticle();
    var link = document.getElementById("title" + articleId);
    link.click();
  }
  
  displayArticleListener();
  
}

//this must be changed to 
guardianParser.parseJsonFromUrl("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all", executeAfterFetchingData );
/*************/

// guardianParser.parseJsonFromVar(jsonP, executeAfterFetchingData);