(function (exports){

  function ArticleController (articleListView = new ArticleListView){
    this.articleListView_ = articleListView
  }

  ArticleController.prototype.addArticle = function(id, headline, summary, url, thumbnail){
    this.articleListView_.articleList_.addArticle(id, headline, summary, url, thumbnail)
  }

  ArticleController.prototype.xhttp = function () {
    var self = this;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        results = JSON.parse(this.responseText).response.results;
        results.forEach(function(result){
          var headline = result.webTitle
          var url = result.webUrl
          console.log(result);
          self.addArticle(1, headline,1, url, 1 )
        })
      };
    };
    xhttp.open("GET", "https://content.guardianapis.com/search?business&api-key=53f2b43f-aa5f-4910-8a62-d5a63d730359", true);
    xhttp.send()
  }

  exports.ArticleController = ArticleController

}(this))
