(function() {
  console.log("Testing PromoList model: ");

  (function() {
    console.log(" it can have articles added to it");
    var mockArticle = {};
    var promoList = new PromoList();
    promoList.addArticle(mockArticle);
    assert.isTrue(promoList.articles().indexOf(mockArticle) > -1);
  })();

})();
