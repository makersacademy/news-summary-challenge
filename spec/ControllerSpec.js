(function() {
  console.log("Testing Controller: ");

  var mockPromoListModel = {
    addArticleCalledCount: 0,
    articles: [],
    addArticle: function(article) {
      this.articles.push(article);
      this.addArticleCalledCount++;
    }
  };

  var MockPromoListModel = function() {
    return mockPromoListModel;
  };

  var mockPromoListView = {
    toHtmlCalledCount: 0,
    toHtml: function() {
      this.toHtmlCalledCount++;
      return "<div>Litany of fascinating article headlines</div>";
    }
  };

  var MockPromoListView = function(promoListModel) {
    mockPromoListView.promoListModel = promoListModel;
    return mockPromoListView;
  };

  var mockRequestInstance = {
    openCalledCount: 0,
    sendCalledCount: 0,
    open: function(method, location, asynchronousBoolean) {
      this.methodCalled = method;
      this.location = location;
      this.asynchronousBoolean = asynchronousBoolean;
      this.openCalledCount++;
    },
    send: function() {
      this.sendCalledCount++;
    },
    readyState: 'yep',
    status: 200,
    responseText: sampleJson
  };

  var MockRequestClass = function() {
    return mockRequestInstance;
  };

  MockRequestClass.DONE = 'yep';

  var controller = new Controller(MockPromoListModel, MockPromoListView, MockRequestClass);

  (function() {
    console.log(" it delivers an instance of PromoListModel to PromoListView on instantiation");
    assert.isTrue(mockPromoListView.promoListModel === mockPromoListModel);
  })();

  (function() {
    console.log(" it sets an onreadystatechange handler for the request instance");
    assert.isTrue(mockRequestInstance.onreadystatechange instanceof Function);
  })();

  (function() {
    console.log(" it adds 10 articles to the model when the request comes back");
    mockRequestInstance.onreadystatechange();
    assert.isTrue(mockPromoListModel.addArticleCalledCount === 10);
  })();

  (function() {
    console.log(" it delivers the correct headlines to the model");
    [
      "Australia beat Ireland in international rules, Melbourne City v Western Sydney: sportwatch â€“ live!",
      "Sumie: Lost in Light review â€“ oddly beautiful but wilfully wan",
      "Yung Lean: Stranger review â€“ hypnotic soundscapes"
    ].forEach(function(headline, index) {
      assert.isTrue(mockPromoListModel.articles[index].headline === headline);
    });
  })();

  (function() {
    console.log(" it delivers the correct urls to the model");
    [
      "https://www.theguardian.com/sport/live/2017/nov/12/international-rules-rlwc-melbourne-city-v-western-sydney-sportwatch-live",
      "https://www.theguardian.com/music/2017/nov/12/sumie-lost-in-light-review-oddly-beautiful-buy-wilfully-wan",
      "https://www.theguardian.com/music/2017/nov/12/yung-lean-stranger-review-bravado-harrowing-insights"
    ].forEach(function(url, index) {
      assert.isTrue(mockPromoListModel.articles[index].url === url);
    });
  })();

  (function() {
    console.log(" it opens and sends an asynchronous get request to the Guardian news api");
    assert.isTrue(mockRequestInstance.openCalledCount === 1);
    assert.isTrue(mockRequestInstance.methodCalled === "GET");
    assert.isTrue(mockRequestInstance.asynchronousBoolean === true);
    assert.isTrue(mockRequestInstance.location === "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=all");
    assert.isTrue(mockRequestInstance.sendCalledCount === 1);
  })();

  (function() {
    console.log(" it calls promoListView.toHtml on return of request");
    var callsBeforeRequest = mockPromoListView.toHtmlCalledCount;
    mockRequestInstance.onreadystatechange();
    var callsAfterRequest = mockPromoListView.toHtmlCalledCount;
    assert.isTrue(callsAfterRequest - callsBeforeRequest === 1);
  })();

  (function() {
    console.log(" it renders the prmoListView html in the app div");
    var appDiv = document.getElementById("app");
    assert.isTrue(appDiv.innerHTML === mockPromoListView.toHtml());
  })();

})();
