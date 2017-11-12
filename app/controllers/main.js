(function(exports) {

  exports.Controller = function(PromoListModel, PromoListView, RequestClass=XMLHttpRequest) {
    var _promoListModel = new PromoListModel();
    var _promoListView = new PromoListView(_promoListModel);

    function doRequest() {
      var _httpRequest = new RequestClass();
      _httpRequest.onreadystatechange = function() {
        if (_httpRequest.readyState === RequestClass.DONE) {
          if (_httpRequest.status === 200) {
            var results = JSON.parse(_httpRequest.responseText).response.results
            updatePromoListModel(results);
          }
        }
      };
      _httpRequest.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all", true);
      _httpRequest.send();
    };
    doRequest();

    function updatePromoListModel(results) {
      results.forEach(function(result) {
        _promoListModel.addArticle(new ArticleModel(result.webTitle, result.webUrl, result.fields.body, result.fields.main));
      });
      displayPromoList();
    }

    function displayPromoList() {
      var promoListViewHtml = _promoListView.toHtml();
      document.getElementById("app")
        .innerHTML = promoListViewHtml;
    };

    function showArticleSummary() {
      var articleId = getArticleIdFromUrl();
      if (articleId) {
        var article = _promoListModel.getArticleById(articleId);
        var articleSummaryView = new ArticleSummaryView(article);
        document.getElementById("app")
          .innerHTML = articleSummaryView.toHtml();
      } else {
        displayPromoList();
      }
    };

    var getArticleIdFromUrl = function() {
      return window.location.hash.split("#articles/")[1];
    };

    function makeUrlChangeShowArticleSummary() {
      window.addEventListener("hashchange", showArticleSummary);
    };
    makeUrlChangeShowArticleSummary();
  };

})(this);
