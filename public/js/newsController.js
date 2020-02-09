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
        var summaryView = new SummaryView(model.list[articleID])
        // console.log(view)
        // var articleBody = model.list[articleID].body
        document
          .getElementById("app")
          .innerHTML = summaryView.displayArticle()
      }
    },
  }

  exports.NewsController = NewsController
})(this)