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

    var topButton = newsView.getTopButton();
    if (topButton) {
      topButton.addEventListener('click', function(event) {
        goToTop();
      })
    } else {}

    window.addEventListener('scroll', function(event) {
      maybeShow();
    })

    function maybeShow() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    }

    function goToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


  })

};

NewsController.prototype.render = function(html) {
  document.getElementById('news').innerHTML = html;
  this._setup();
};