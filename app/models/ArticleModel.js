(function(exports) {

  var articleCounter = 0;

  exports.ArticleModel = function(headline, url, body, main) {
    var _id = articleCounter;
    articleCounter++;
    
    var storyBody = document.createElement("div");
    storyBody.innerHTML = body;
    var storyMain = document.createElement("div");
    storyMain.innerHTML = main;

    var id = function() {
      return _id;
    }

    var summary = function() {
      var summary = document.createElement("div");
      for (var i=0; i<3; i++) {
        summary.appendChild(storyBody.getElementsByTagName("p")[i].cloneNode(true));
      };
      return summary.innerHTML;
    };

    var imageUrl = function() {
      var mainImages = storyMain.getElementsByTagName("img");
      var bodyImages = storyBody.getElementsByTagName("img");
      if (mainImages.length > 0) {
        return mainImages[0].currentSrc;
      }
      if (bodyImages.length > 0) {
        return bodyImages[0].currentSrc;
      }
      return "";
    };

    return {
      id: id,
      headline: headline,
      url: url,
      summary: summary,
      imageUrl: imageUrl
    };
  };

})(this);
