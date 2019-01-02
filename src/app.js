window.addEventListener('load', function() {

  // var apirequest = new ApiRequest();
  // ApiRequest.returnRequest();

  var guardian = new ApiRequest();

  var newsList = new NewsList();
  newsList.storeNews(guardian.rawlist); // make newslist from raw list
  console.log(newsList.newslist);

  var newsListView = new NewsListView();
  var html = newsListView.render(newsList.newslist)

  var newsController = new NewsController(newsList, NewsView); // NewsView is an empty NewsView
  newsController.render(html);
  // console.log(guardian.rawlist[0].webTitle)

})
