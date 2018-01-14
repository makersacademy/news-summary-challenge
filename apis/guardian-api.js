(function(exports) {

  function GuardianAPI() {};

  GuardianAPI.prototype.makeRequest = function() {
    var request = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var articles = JSON.parse(request.responseText)
        createHeadlineList(articles);
      };
    };
    xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search");
    xhttp.send();
  };

  GuardianAPI.prototype.createHeadlineList = function(articles) {
    articles.forEach((article) => {
      headlineList.createArticle(article.webTitle, article.webUrl, article.fields.body);
    });
  };

  exports.GuardianAPI = GuardianAPI;
})(this);
