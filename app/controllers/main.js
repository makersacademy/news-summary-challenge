(function(exports) {
  'use strict';

  exports.Controller = function(PromoListModel, PromoListView, RequestClass) {
    var _promoListModel = new PromoListModel();
    var _promoListView = new PromoListView(_promoListModel);
    var _RequestClass = RequestClass || XMLHttpRequest;

    var _requestController = new RequestController(_promoListModel, _promoListView, _RequestClass);
    var _listController = new ListController(_promoListView);
    var _articleSummaryController = new ArticleSummaryController(_promoListModel, _promoListView);

    function makeUrlChangeShowArticleSummary() {
      window.addEventListener("hashchange", _articleSummaryController.showArticleSummary);
    }
    makeUrlChangeShowArticleSummary();
  };

})(this);
