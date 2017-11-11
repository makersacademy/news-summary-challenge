(function() {
  console.log("Testing PromoList model: ");

  (function() {
    console.log(" it can have articles added to it");
    var mockArticle = {};
    var promoListModel = new PromoListModel();
    promoListModel.addArticle(mockArticle);
    assert.isTrue(promoListModel.articles().indexOf(mockArticle) > -1);
  })();

})();
