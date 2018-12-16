
window.addEventListener('load', function() {

  var newsList = new NewsList(News)
  var newsListView = new NewsListView(newsList)
  var newsController = new NewsController(newsList, newsListView, NewsView)

  var html = newsListView.display()

  newsController.display(html)

});
