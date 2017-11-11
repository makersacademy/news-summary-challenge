(function(exports) {

  exports.Controller = function(promoListView) {
    var promoListViewHtml = promoListView.toHtml();
    document.getElementById("app")
      .innerHTML = promoListViewHtml; 
    return {
    };
  };

})(this);
