(function (exports){

  function NewsHeadlinesView(newsHeadlines){
    this.newsHeadlines = newsHeadlines
  };

  NewsHeadlinesView.prototype.htmlAllHeadlines = function(){
    var html = []

    if(this.newsHeadlines.allHeadlines().length === 0){
      html.push("Something is probably wrong");
    } else {
      html = this.newsHeadlines.allHeadlines().map(function(headline){
        return`<div><img src="${headline.image}"><a href="#${headline.id}"><h1>${headline.headline}</h1></a></div>`
      });
    }
    return html.join();
  };

  exports.NewsHeadlinesView = NewsHeadlinesView

})(this)