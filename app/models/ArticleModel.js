(function(exports) {

  var articleCounter = 0;

  exports.ArticleModel = function(headline, url, body) {
    var _body = body;
    var _id = articleCounter;
    articleCounter++;

    var id = function() {
      return _id;
    }

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
      id: id, 
      headline: headline,
      url: url,
      summary: summary
    };
  };

})(this);
