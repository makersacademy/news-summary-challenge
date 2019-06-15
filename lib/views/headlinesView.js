(function(exports) {  
  function HeadlinesView(newsService) {
    this._newsService = newsService;
  };

  HeadlinesView.prototype = {
    createHTML: function() {
      var htmlString = "";

      this._newsService.getHeadlines(function(headlines) {
        htmlString += "<ul>";

        for (var i = 0; i < headlines.length; i++) {
          htmlString += `<li><div>${headlines[i].getText()}</div></li>`;
        };
    
        htmlString += "</ul>"
      })

      return htmlString;
    }
  };

  exports.HeadlinesView = HeadlinesView;
})(this);