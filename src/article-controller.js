(function (exports){

var guardianKey = config.GUARDIAN_KEY;
var aylienKey = config.AYLIEN_KEY;
var aylienId = config.AYLIEN_ID;



  function ArticleController (articleListView = new ArticleListView, articleView = new ArticleView){
    this.articleListView_ = articleListView
    this.articleView_ = articleView
  }

  ArticleController.prototype.addArticle = function(id, headline, summary, url, thumbnail){
    this.articleListView_.articleList_.addArticle(id, headline, summary, url, thumbnail)
  }

  ArticleController.prototype.renderToWindow = function() {
    var index = document.getElementById('app');
    index.innerHTML = this.articleListView_.renderHTML();
  }

  ArticleController.prototype.xhttp = function () {
    var self = this;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        results = JSON.parse(this.responseText).response.results;
        results.forEach(function(result){
          xhttpSummary = new XMLHttpRequest();
          var headline = result.webTitle
          var url = result.webUrl
          console.log(result);
          self.addArticle(1, headline,1, url, 1 )

          xhttpSummary.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              results = JSON.parse(this.responseText)
              console.log(results)
            }
          }
          xhttpSummary.open("GET", "https://api.aylien.com/api/v1/summarize?" + url + aylienId + aylienKey )
            // -H "X-AYLIEN-TextAPI-Application-ID: AYLIEN_ID"  \
            // -H "X-AYLIEN-TextAPI-Application-Key: AYLIEN_KEY", true)
          xhttpSummary.send()
        })
      };
    };
    xhttp.open("GET", "https://content.guardianapis.com/search?business&api-key=" + guardianKey, true);
    xhttp.send()
  }

  exports.ArticleController = ArticleController

}(this))
