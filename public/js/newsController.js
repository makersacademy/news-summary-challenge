(function(exports) {
  function NewsController(newsList) {
    this.newsList = newsList
    this.getArticles()
    this.showArticleOnLinkClick()
    var self = this

    setTimeout(function() { 
      self.displayHeadlines(); 
    }, 500);
  }

  NewsController.prototype = {
    getArticles: function() {
      this.newsList.getAPIData()
    },
    displayHeadlines: function(headlinesView = new HeadlinesView(this.newsList)) {
      var headlinesView = headlinesView
      this.changeHTML(headlinesView.displayHeadlines())  
    },
    changeHTML: function(headline) {
      var element = document.getElementById("app");
      element.innerHTML = headline;
    },
    showArticleOnLinkClick: function() {
      var newsList = this.newsList
      window.onhashchange = function() {
        var articleID = location.hash.split("#articles/")[1]
        var summary = new NewsSummary(newsList.list[articleID])
        var summaryView
        setTimeout(function() {
          summary.getSummaryAPIData()
          summaryView = new SummaryView(summary.details)
        }, 5000)
        
        // setTimeout(function() { 
        //   this.changeHTML(summaryView.displayArticle())
        // }, 2002);
      }
    },
  }

  exports.NewsController = NewsController
})(this)