window.addEventListener('load', function() {

  // var apirequest = new ApiRequest();
  // ApiRequest.returnRequest();

  var newsList = new NewsList();
  // newsList.storeNews(newsList.rawlist); // make newslist from raw list
  // console.log(newsList.newslist);

  var newsListView = new NewsListView();
  var html = newsListView.render(newsList.newslist)

  var newsController = new NewsController(newsList, newsListView, NewsView); // NewsView is an empty NewsView
  newsController.render(html);

})
