(function(exports) {
  function NewsController(newsListModel) {
    this.newsListModel = newsListModel
    this.getArticles()
    this.showArticleOnLinkClick()
    var self = this

    setTimeout(function() { 
      self.displayHeadlines(); 
    }, 500);
  }

  NewsController.prototype = {
    getArticles: function() {
      this.newsListModel.getAPIData()
    },
    displayHeadlines: function() {
      var headlinesView = new HeadlinesView(this.newsListModel)
      this.changeHTML(headlinesView.displayHeadlines())  
    },
    changeHTML: function(headline) {
      var element = document.getElementById("app");
      element.innerHTML = headline;
    },
    showArticleOnLinkClick: function() {
      var model = this.newsListModel

      window.onhashchange = function() {
        var articleID = location.hash.split("#articles/")[1]
        var summary = new NewsSummary(model.list[articleID])
        summary.getSummaryAPIData()
        var summaryView = new SummaryView(summary.details)
        setTimeout(function() { 
          document
            .getElementById("app")
            .innerHTML = summaryView.displayArticle(); 
        }, 500);
        
      }
    },
  }

  exports.NewsController = NewsController
})(this)