function NewsController(newsList, newsView) {
  this.newsList = newsList;
  this.newsView = newsView;
}

NewsController.prototype._setup = function() {

  var self = this;


  window.addEventListener('hashchange', function() {

    var newsId = window.location.hash.split('#news/')[1];

    var news = self.newsList.findById(newsId)

    var newsView = new self.newsView()

    var html = newsView.render(news)

    self.render(html)

  })
  
};

NewsController.prototype.render = function(html) {
  document.getElementById('news').innerHTML = html;
  this._setup();
};