(function(exports) {
  function NewsController(newsListModel) {
    this.newsListModel = newsListModel
    
    this.displayHeadlines()
  }

  NewsController.prototype = {
    addArticle: function(article) {
      this.newsListModel.addArticle(article)
    },
    displayHeadlines: function() {
      var headlinesView = new HeadlinesView(this.newsListModel)
      this.changeHTML(headlinesView.displayHeadlines())  
    },
    changeHTML: function(headline) {
      var element = document.getElementById("app");
      element.innerHTML = headline;
    },
  }

  exports.NewsController = NewsController
})(this)