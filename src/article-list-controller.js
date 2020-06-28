(function (exports) {
  class ArticleListController {
    constructor(articleList = new ArticleList(), articleListView = new ArticleListView(ArticleList), request = new XMLHttpRequest()) {
      this._articleList = articleList;
      this._articleListView = articleListView;
      this._apiRequest = apiRequest;
    };

    fetchData() {
      let self = this;
      let apiRequestUrl = "https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest"
      self._apiRequest.open('GET', apiRequestUrl, true);
      self._apiRequest.onload = function() {

        JSON.parse(this.response).response.results.forEach(function(data) {
        let title = data.webTitle;
        let url = data.webUrl;
        self._articleList.addArticle(title, url);
      })
    };
        self._apiRequest.send();
    };

      renderData() {
        this._articleListView.updateArticleList(this._articleList);
        document.getElementById('article-list-view').innerHTML = this._articleListView.ReturnHtml();
      };
    };

exports.ArticleListController = ArticleListController;
})(this);
