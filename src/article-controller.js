(function (exports){

var guardianKey = config.GUARDIAN_KEY;

  function ArticleController (articleListView = new ArticleListView){
    this.articleListView_ = articleListView
  }

  ArticleController.prototype.addArticle = function(id, headline, summary, url, thumbnail){
    this.articleListView_.articleList_.addArticle(id, headline, summary, url, thumbnail)
  }

  ArticleController.prototype.renderToWindow = function() {
    document.getElementById('app').innerHTML = this.articleListView_.renderHTML();
  }

  ArticleController.prototype.singleArticle = function (id) {
    return this.articleListView_.articleList_.list()[id]
  }

  ArticleController.prototype.changeOnUrlChange = function () {
    var self = this;
    window.addEventListener("hashchange", function(){
      var articleId = location.hash.split('/')[1]
      var article = self.singleArticle(articleId)
      var singleArticleView = new ArticleView(article)
      document.getElementById('app').innerHTML = singleArticleView.renderHTML()
    })
  }

  ArticleController.prototype.xhttpRequest = function () {
    var self = this;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        results = JSON.parse(this.responseText).response.results;
        results.forEach(function(result){
          self.addArticle(1, result.webTitle, 1 ,result.webUrl, 1 )
        })
      };
    };
    xhttp.open("GET", "https://content.guardianapis.com/search?business&api-key=" + guardianKey, true);
    xhttp.send()
  }

  exports.ArticleController = ArticleController

}(this))
