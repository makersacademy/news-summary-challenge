test.constructorName = "NewsList Controller";

// Doubles
var news  = { headline: "This is headline 1" };
var news2 = { headline: "This is headline 2" };
var newslist0 = { getAllNews: function(){ return [] } };
var newslist1 = { getAllNews: function(){ return [news] } };
var newslist2 = { getAllNews: function(){ return [news, news2] } };

(function(){
  test.description = "It should create newsList";
  NewsListController.createNewsList()
  assert.isTrue( NewsListController.newsList );
})();

(function(){
  test.description = "It should show a headline";
  NewsListController.newsList = newslist1
  NewsListController.displayNewsList()
  var element = document.getElementById("news-headline")
  assert.isTrue( element.innerHTML.includes("This is headline 1") );
})();

(function(){
  test.description = "It should show two headlines";
  NewsListController.newsList = newslist2
  NewsListController.displayNewsList()
  var element = document.getElementById("news-headline")
  assert.isTrue( element.innerHTML.includes("This is headline 1") );
  assert.isTrue( element.innerHTML.includes("This is headline 2") );
})();

(function(){
  test.description = "It should not show any headlines there is no news";
  NewsListController.newsList = newslist0
  NewsListController.displayNewsList()
  var element = document.getElementById("news-headline")
  assert.isTrue( element.innerHTML === "<ul></ul>" );
})();