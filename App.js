
window.addEventListener('load', function() {

  var newsList = new NewsList(News)
  var newsListView = new NewsList(newsList)
  var newsController = new NewsController(newsList, newsListView, newsView)

  newsController.display("headlines")

});
