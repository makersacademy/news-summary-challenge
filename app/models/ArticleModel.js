(function(exports) {

  exports.ArticleModel = function(headline, url, body) {
    var _body = body;

    var summary = function() {
      var storyBody = document.createElement("div");
      storyBody.innerHTML = _body;
      var summary = document.createElement("div");
      for (var i=0; i<3; i++) {
        summary.appendChild(storyBody.getElementsByTagName("p")[i].cloneNode(true));
      }; 
      return summary.innerHTML;
    };

    return {
      headline: headline,
      url: url,
      summary: summary
    };
  };

})(this);
