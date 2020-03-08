(function(exports) {
  function ArticleController(articleList) {
    this.articleList = articleList
    this.articleListView = new ArticleListView(articleList)
  }

  ArticleController.prototype = {
    insertHtml: function() {
      var elem = document.getElementById('app');
      elem.innerHTML = this.articleListView.returnHTML();
    },

    showSummary: function() {
      var summary = this.articleList.articles[location.hash.split('#articles/')[1]].showSummary()
      document.getElementById('app').innerHTML = summary;

      // var x = document.getElementsByClassName('non-note-text')
      // for(var i = 0; i < x.length; i++) {
      //   x[i].style.visibility='hidden';
      // }
      // document.getElementById('go-homepage').innerText = 'Go back';
    },

    makeUrlChangeShowSummaryForPage: function() {
      window.addEventListener("hashchange", this.showSummary);
    }
  }

  exports.ArticleController = ArticleController
})(this)

var articleList = new ArticleList()

var getHttp = new APIData()
var info = getHttp.makeRequest('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/sport/2020/feb/11/uk-sport-launches-review-into-uk-athletics')

console.log(info.text)

var getHttp = new APIData()
var info = getHttp.makeRequest('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=uk&from-date=2020-03-08&show-fields=thumbnail,body%27').response.results
for(let i = 0; i < info.length; i++ ) {
  articleList.addArticle(new Article(info[i].webTitle))
  var summaryRequest = new APIData()
  var summaryText = summaryRequest.makeRequest(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${info[i].webUrl}`)
  articleList.articles[i].summary = summaryText.text
}

// articleList.addArticle(new Article("art1"))
// articleList.addArticle(new Article("art2"))
var articleController = new ArticleController(articleList)
articleController.insertHtml()
articleController.makeUrlChangeShowSummaryForPage();
