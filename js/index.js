"use strict";



var executeAfterFetchingData = function () {
  var titles = guardianParser.getTitles();
  var urls = guardianParser.getUrls();
  var bodies = guardianParser.getBodies();
  var thumbnails = guardianParser.getThumbnails();
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
  console.log(articles.getArticleByIndex(0).getBody());
  var articlesView = new ArticleListView(articles);
  articlesView.renderPage();




  makeUrlChangeShowAnimalForCurrentPage();
  
        function makeUrlChangeShowAnimalForCurrentPage() {
          window.addEventListener("hashchange", showAnimalForCurrentPage);
        };
  
        function showAnimalForCurrentPage() {
          showAnimal(getAnimalFromUrl(window.location));
        };
  
        function getAnimalFromUrl(location) {
          return location.hash.split("#")[1];
        };
  
        function showAnimal(animal) {
          var clickedArticle = articles.getArticleByIndex(animal);
          var singleArticleView = new ArticleView(clickedArticle, animal);
          console.log(singleArticleView);
          
          document
            .getElementById("description")
            .innerHTML = singleArticleView.renderWholeArticle();
        };






}

//this must be changed to 
// guardianParser.parseJsonFromUrl("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all", executeAfterFetchingData );
/*************/
var guardianParser = new JsonParser();
guardianParser.parseJsonFromVar(jsonP, executeAfterFetchingData);