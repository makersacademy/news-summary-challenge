(function (exports){

var guardianKey = config.GUARDIAN_KEY;
var aylienEndpoint = config.AYLIEN_ENDPOINT;
var div = document.getElementById('app')

  function ArticleController (articleListView = new ArticleListView){
    this.articleListView_ = articleListView
  }

  ArticleController.prototype.addArticle = function(id, headline, summary, url, thumbnail){
    this.articleListView_.articleList_.addArticle(id, headline, summary, url, thumbnail)
  }

  ArticleController.prototype.renderToWindow = function() {
    div.innerHTML = this.articleListView_.renderHTML();
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
      div.innerHTML = singleArticleView.renderHTML()
    })
  }

  ArticleController.prototype.xhttpRequest = function () {
    var self = this;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        results = JSON.parse(this.responseText).response.results;
        results.forEach(function(result){
          var title = result.webTitle
          var url = result.webUrl
          xhttp2 = new XMLHttpRequest();

          xhttp2.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              var summary = JSON.parse(this.responseText).sentences.join(' ');
              self.addArticle(1, title, summary ,url, 1 )
            }
          }
          xhttp2.open("GET", aylienEndpoint + url, true);
          xhttp2.send();
        })
      };
    };
    xhttp.open("GET", "https://content.guardianapis.com/search?business&api-key=" + guardianKey, true);
    xhttp.send()
  }

  exports.ArticleController = ArticleController

}(this))
