(function(exports) {

  exports.Controller = function(PromoListModel, PromoListView) {
    var _promoListModel = new PromoListModel();
    var _promoListView = new PromoListView(_promoListModel);
    var promoListViewHtml = _promoListView.toHtml();
    document.getElementById("app")
      .innerHTML = promoListViewHtml;
    return {
    };
  };

})(this);
