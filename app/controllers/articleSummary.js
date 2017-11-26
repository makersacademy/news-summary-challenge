(function(exports) {
  'use strict';

  exports.ArticleSummaryController = function(promoListModel, promoListView) {
    var _promoListModel = promoListModel;
    var _promoListView = promoListView;
    var _listController = new ListController(_promoListView);

    function showArticleSummary() {
      var articleId = getArticleIdFromUrl();
      if (articleId) {
        var article = _promoListModel.getArticleById(articleId);
        var articleSummaryView = new ArticleSummaryView(article);
        document.getElementById("app")
          .innerHTML = articleSummaryView.toHtml();
      } else {
        _listController.displayPromoList();
      }
    }

    var getArticleIdFromUrl = function() {
      return window.location.hash.split("#articles/")[1];
    };

    return {
      showArticleSummary: showArticleSummary
    };

  };

})(this);
