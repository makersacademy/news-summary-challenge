(function() {
  console.log("Testing PromoList view: ");

  (function() {
    console.log(" it renders HTML correctly");
    var mockArticleOne = {
      headline: "Cheeky seagull nabs crisps"
    };
    var mockArticleTwo = {
      headline: "Chutney blew up my fridge"
    };
    var mockArticleThree = {
      headline: "Council's wheelie bin snub for mum"
    };
    var mockPromoListModel = {
      articles: function() {
        return [mockArticleOne, mockArticleTwo, mockArticleThree]
      }
    };
    var promoListView = new PromoListView(mockPromoListModel);
    var expectedHtml = [
      "<div>",
        "<ul>",
          "<li><h3>Cheeky seagull nabs crisps</h3></li>",
          "<li><h3>Chutney blew up my fridge</h3></li>",
          "<li><h3>Council's wheelie bin snub for mum</h3></li>",
        "</ul>",
      "</div>"].join(""); 
    assert.isTrue(promoListView.toHtml() === expectedHtml);
  })();

})();
