(function (exports){

  function NewsController(newsHeadlines = NewsHeadlinesModel, newsHeadlinesView = NewsHeadlinesView, headlineJSON, element = document.getElementById('headlines')){
    this.newsHeadlines = new newsHeadlines(headlineJSON);
    this.newsHeadlinesView = new newsHeadlinesView(this.newsHeadlines);
    this._renderAllHeadlines(element);
  };

  NewsController.prototype._renderAllHeadlines = function(element){
    html = this.newsHeadlinesView.htmlAllHeadlines()
    element.innerHTML = html;
  };

  exports.NewsController = NewsController

})(this);