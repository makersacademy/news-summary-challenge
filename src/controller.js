(function(exports) {
  function NewsController() {
    this.articleList = new ArticleList()
  }

  NewsController.prototype.makeUrlChangeShowArticleForCurrentPage = function() {
    window.addEventListener("hashchange", this.showSummaryForCurrentPage);
  };

  NewsController.prototype.showSummaryForCurrentPage = function() {
    this.newsController.showArticle(this.newsController.getIdFromUrl(window.location))
  }

  NewsController.prototype.showArticle = function(id) {
    var articleUrl = this.articleList.getUrlById(id) // need to get into all articles here
    var summarizedArticle = new SummarizedArticle(articleUrl)
    document.querySelector('ul').innerHTML = summarizedArticle.getSummary();
  };

  NewsController.prototype.getIdFromUrl = function(location) {
    return location.hash.split("#articles/")[1];
  };

  NewsController.prototype.render = function() {
    fetch("https://content.guardianapis.com/search?api-key=aabcd544-37ed-434f-a275-e2af9055b42b")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data)
      console.log(this.newsController)
      this.newsController.articleList.add(data);
      var articleListView = new ArticleListView(this.newsController.articleList);
      var element = document.querySelector('ul')
      var id = data.response.results.id;
      element.innerHTML = articleListView.getHTML();
    })
  }

  exports.NewsController = NewsController
})(this);
