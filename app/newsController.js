(function (exports){

  function NewsController(newsHeadlines = NewsHeadlinesModel, newsHeadlinesView = NewsHeadlinesView, element = document.getElementById('headlines')){
    this.newsHeadlines = new newsHeadlines();
    this.newsHeadlinesView = new newsHeadlinesView(this.newsSummary);
    this._renderAllHeadlines(element);
  };

  NewsController.prototype._renderAllHeadlines = function(element){
    html = this.newsHeadlinesView._htmlAllHeadlines()
    element.innerHTML = html;
  };

  exports.NewsController = NewsController

})(this);