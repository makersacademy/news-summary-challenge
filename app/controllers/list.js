(function(exports) {
  'use strict';

  exports.ListController = function(promoListView) {
    var _promoListView = promoListView;

    function displayPromoList() {
      var promoListViewHtml = _promoListView.toHtml();
      document.getElementById("app")
        .innerHTML = promoListViewHtml;
    }

    return {
      displayPromoList: displayPromoList
    };

  };

})(this);
