(function (exports){

var guardianKey = config.GUARDIAN_KEY;
var aylienKey = config.AYLIEN_KEY;
var aylienId = config.AYLIEN_ID;

  function ArticleController (articleListView = new ArticleListView){
    this.articleListView_ = articleListView
  }

  ArticleController.prototype.addArticle = function(id, headline, summary, url, thumbnail){
    this.articleListView_.articleList_.addArticle(id, headline, summary, url, thumbnail)
  }

  ArticleController.prototype.renderToWindow = function() {
    var index = document.getElementById('app');
    index.innerHTML = this.articleListView_.renderHTML();
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


  ArticleController.prototype.xhttp = function () {
    var self = this;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        results = JSON.parse(this.responseText).response.results;
        results.forEach(function(result){
          var headline = result.webTitle
          var url = result.webUrl
          var body  = result.body
          console.log(result);
          self.addArticle(1, headline,body, url, 1 )
        })
      };
    };
    xhttp.open("GET", "https://content.guardianapis.com/search?business&api-key=" + guardianKey, true);
    xhttp.send()
  }

  exports.ArticleController = ArticleController

}(this))
