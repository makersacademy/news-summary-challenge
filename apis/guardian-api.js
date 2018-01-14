(function(exports) {
  function GuardianAPI(headlineList) {
    var headlineList = headlineList;

  function makeRequest(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var articles = JSON.parse(xhttp.responseText).response.results;
        createHeadlineList(articles);
        if(callback) {
          callback();
        };
      };
    };
    xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all");
    xhttp.send();
  };
  makeRequest(displayHeadlines);

  function createHeadlineList(articles) {
    articles.forEach(function(article) {
      headlineList.createArticle(article.webTitle, article.webUrl, article.fields.body);
      });
    };
  }

  exports.GuardianAPI = GuardianAPI;
})(this);
