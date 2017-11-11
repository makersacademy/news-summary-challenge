"use strict";



var executeAfterFetchingData = function () {
  var titles = guardianParser.getTitles();
  var urls = guardianParser.getUrls();
  var bodies = guardianParser.getBodies();
  var thumbnails = guardianParser.getThumbnails();
  console.log("titles", titles);
  console.log(titles.length)
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
  var articlesView = new ArticleListView(articles);
  articlesView.renderPage();

}

//this must be changed to 
// guardianParser.parseJsonFromUrl("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all", executeAfterFetchingData );
/*************/
var guardianParser = new JsonParser();
guardianParser.parseJsonFromVar(jsonP, executeAfterFetchingData);