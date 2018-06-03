(function(exports) {
  function NewsController(newslist) {
    this.newsList = newslist
    this.newslistview = new NewsListView(this.newsList)
  }

  NewsController.prototype.GetNewsDivElement = function(doc = document) {
    var newsDiv = doc.getElementById('news')
    return newsDiv
  }

  NewsController.prototype.ChangeNewsDivContent = function(text, doc = document) {
    var content = this.GetNewsDivElement(doc).innerHTML = text
    return content
  }

  NewsController.prototype.GetGuardianNewsAPI = function() {
    var guardianAPI = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/world?show-fields=thumbnail"
    var request = new XMLHttpRequest();
    request.open("GET", guardianAPI, false);
    request.send(null);
    return request.responseText;
  }

  NewsController.prototype.GuardianJSONObject = function() {
    var guardianJSONobject = JSON.parse(this.GetGuardianNewsAPI())
    return guardianJSONobject
  }

  NewsController.prototype.ParseGuardianResponseJSON = function() {
    var newslist = new NewsListModel();
    var data = this.GuardianJSONObject().response.results
    arrayOfNews = data.map(function(news) {
      return new News(
        news.webTitle,
        news.webUrl,
        'summary',
        news.fields.thumbnail,
        news.id)
    })
    arrayOfNews.forEach(function(article) {
      newslist.AddNewsArticle(article)
    })
    return newslist
  }

  NewsController.prototype.DisplayNews = function() {
    var news = this.ParseGuardianResponseJSON();
    var listview = new NewsListView(news);
    html = listview.NewsListToHTML();
    this.ChangeNewsDivContent(html);
  }

  new NewsController().DisplayNews();



  exports.NewsController = NewsController
})(this);
