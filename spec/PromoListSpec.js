(function() {
  console.log("Testing PromoList model: ");

  (function() {
    console.log(" it can have articles added to it");
    var mockArticle = {};
    var promoListModel = new PromoListModel();
    promoListModel.addArticle(mockArticle);
    assert.isTrue(promoListModel.articles().indexOf(mockArticle) > -1);
  })();

  (function() {
    console.log(" it has a way to retrieve an article by id");
    var mockArticle = {
      id: function() {
        return 7;
      }
    };
    var promoListModel = new PromoListModel();
    promoListModel.addArticle(mockArticle);
    assert.isTrue(promoListModel.getArticleById(7) === mockArticle);
  })();

})();
