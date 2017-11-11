(function() {
  console.log("Testing Controller: ");

  var mockPromoListModel = {}

  var MockPromoListModel = function() {
    return mockPromoListModel;
  }

  var mockPromoListView = {
    toHtmlCalledCount: 0,
    toHtml: function() {
      this.toHtmlCalledCount++;
      return "<div>Litany of fascinating article headlines</div>"
    }
  }

  var MockPromoListView = function(promoListModel) {
    mockPromoListView.promoListModel = promoListModel;
    return mockPromoListView;
  }

  var controller = new Controller(MockPromoListModel, MockPromoListView);

  (function() {
    console.log(" it delivers an instance of PromoListModel to PromoListView on instantiation");
    assert.isTrue(mockPromoListView.promoListModel === mockPromoListModel);
  })();

  (function() {
    console.log(" it calls promoListView.toHtml on instantiation");
    assert.isTrue(mockPromoListView.toHtmlCalledCount === 1);
  })();

  (function() {
    console.log(" it renders the prmoListView html in the app div");
    var appDiv = document.getElementById("app");
    assert.isTrue(appDiv.innerHTML === mockPromoListView.toHtml());
  })();

})();
