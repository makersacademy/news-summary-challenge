(function(exports) {
  function ArticleController(articleListView, doc = document) {
    this.articleListView = articleListView;
    this.doc = doc;
    this.apiKey = config.APIKEY;
  }

  ArticleController.prototype.insert = function(divId = "app") {
    var message = this.articleListView.htmlIfy();
    var element = this.doc.getElementById(divId);
    element.innerHTML = message;
  };

  ArticleController.prototype.getArticles = function() {
    var that = this;
    var request = new XMLHttpRequest();

    request.open(
      "GET",
      `https://content.guardianapis.com/search?api-key=${this.apiKey}&show-fields=thumbnail,body`,
      true
    );

    request.onload = function() {
      data = JSON.parse(this.response);

      if (request.status >= 200 && request.status < 300) {
        var articles = data.response.results;

        for (var index = 0; index < articles.length; index++) {
          var id = that.articleListView.articleList.listOfArticles.length;
          that.articleListView.articleList.listOfArticles.push(
            new Article(
              articles[index].webTitle,
              id,
              articles[index].webUrl,
              articles[index].fields.thumbnail
            )
          );
        }

        that.insert();
      } else {
        throw new Error("Request failed");
      }
    };
    request.send();
  };

  exports.ArticleController = ArticleController;
})(this);
