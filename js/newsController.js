(function(exports) {
  function NewsController(newsListModel) {
    this.newsListModel = newsListModel
    this.getArticles()
    var self = this
    
    setTimeout(function() { 
      self.displayHeadlines(); 
    }, 3000);
      
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
  }

  exports.NewsController = NewsController
})(this)