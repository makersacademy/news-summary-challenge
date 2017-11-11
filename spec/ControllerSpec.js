(function() {
  console.log("Testing Controller: ");

  var mockPromoListModel = {
    addArticleCalledCount: 0,
    articleHeadlines: [],
    addArticle: function(headline) {
      this.articleHeadlines.push(headline);
      this.addArticleCalledCount++;
    }
  }

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
    responseText: `{"response":{"status":"ok","userTier":"developer","total":1993184,"startIndex":1,"pageSize":10,"currentPage":1,"pages":199319,"orderBy":"newest","results":[{"id":"sport/live/2017/nov/11/australia-v-england-womens-ashes-test-match-day-three-live","type":"liveblog","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-11-11T10:12:00Z","webTitle":"headline one","webUrl":"https://www.theguardian.com/sport/live/2017/nov/11/australia-v-england-womens-ashes-test-match-day-three-live","apiUrl":"https://content.guardianapis.com/sport/live/2017/nov/11/australia-v-england-womens-ashes-test-match-day-three-live","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},{"id":"sport/2017/nov/11/kevin-brown-warrington-england-world-cup-chance","type":"article","sectionId":"sport","sectionName":"Sport","webPublicationDate":"2017-11-11T10:01:22Z","webTitle":"headline two","webUrl":"https://www.theguardian.com/sport/2017/nov/11/kevin-brown-warrington-england-world-cup-chance","apiUrl":"https://content.guardianapis.com/sport/2017/nov/11/kevin-brown-warrington-england-world-cup-chance","isHosted":false,"pillarId":"pillar/sport","pillarName":"Sport"},{"id":"books/2017/nov/11/writing-day-antonia-fraser-forced-to-learn-typing","type":"article","sectionId":"books","sectionName":"Books","webPublicationDate":"2017-11-11T10:01:22Z","webTitle":"headline three","webUrl":"https://www.theguardian.com/books/2017/nov/11/writing-day-antonia-fraser-forced-to-learn-typing","apiUrl":"https://content.guardianapis.com/books/2017/nov/11/writing-day-antonia-fraser-forced-to-learn-typing","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},{"id":"society/2017/nov/11/periods-menstruation-liberation-women-activists-abigail-radnor","type":"article","sectionId":"society","sectionName":"Society","webPublicationDate":"2017-11-11T10:00:22Z","webTitle":"'We're having a menstrual liberation': how periods got woke","webUrl":"https://www.theguardian.com/society/2017/nov/11/periods-menstruation-liberation-women-activists-abigail-radnor","apiUrl":"https://content.guardianapis.com/society/2017/nov/11/periods-menstruation-liberation-women-activists-abigail-radnor","isHosted":false},{"id":"music/2017/nov/11/whisperpop-why-stars-choosing-breathy-intensity-over-vocal-paint-stripping","type":"article","sectionId":"music","sectionName":"Music","webPublicationDate":"2017-11-11T10:00:22Z","webTitle":"‘Whisperpop’: why stars are choosing breathy intensity over vocal paint-stripping","webUrl":"https://www.theguardian.com/music/2017/nov/11/whisperpop-why-stars-choosing-breathy-intensity-over-vocal-paint-stripping","apiUrl":"https://content.guardianapis.com/music/2017/nov/11/whisperpop-why-stars-choosing-breathy-intensity-over-vocal-paint-stripping","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},{"id":"technology/2017/nov/11/amazon-uk-development-centre-cambridge-new-offices-alexa-prime-air-drone-deliveries","type":"article","sectionId":"technology","sectionName":"Technology","webPublicationDate":"2017-11-11T10:00:22Z","webTitle":"Amazon makes Cambridge heart of Alexa and drone innovation with new offices","webUrl":"https://www.theguardian.com/technology/2017/nov/11/amazon-uk-development-centre-cambridge-new-offices-alexa-prime-air-drone-deliveries","apiUrl":"https://content.guardianapis.com/technology/2017/nov/11/amazon-uk-development-centre-cambridge-new-offices-alexa-prime-air-drone-deliveries","isHosted":false},{"id":"books/2017/nov/11/folk-song-in-england-by-steve-roud","type":"article","sectionId":"books","sectionName":"Books","webPublicationDate":"2017-11-11T10:00:22Z","webTitle":"Folk Song in England by Steve Roud review – the music of the common people?","webUrl":"https://www.theguardian.com/books/2017/nov/11/folk-song-in-england-by-steve-roud","apiUrl":"https://content.guardianapis.com/books/2017/nov/11/folk-song-in-england-by-steve-roud","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"},{"id":"world/2017/nov/11/husband-of-uk-woman-laura-plummer-held-in-egypt-has-evidence-to-prove-her-innocence","type":"article","sectionId":"world","sectionName":"World news","webPublicationDate":"2017-11-11T09:59:05Z","webTitle":"Husband of UK woman held in Egypt 'has evidence to prove her innocence'","webUrl":"https://www.theguardian.com/world/2017/nov/11/husband-of-uk-woman-laura-plummer-held-in-egypt-has-evidence-to-prove-her-innocence","apiUrl":"https://content.guardianapis.com/world/2017/nov/11/husband-of-uk-woman-laura-plummer-held-in-egypt-has-evidence-to-prove-her-innocence","isHosted":false},{"id":"lifeandstyle/2017/nov/11/celeriac-smoked-tofu-kale-gado-gado-salad-recipe-vegan-meera-sodha","type":"article","sectionId":"lifeandstyle","sectionName":"Life and style","webPublicationDate":"2017-11-11T09:30:21Z","webTitle":"Meera Sodha’s vegan recipe for celeriac, tofu and crispy kale gado gado","webUrl":"https://www.theguardian.com/lifeandstyle/2017/nov/11/celeriac-smoked-tofu-kale-gado-gado-salad-recipe-vegan-meera-sodha","apiUrl":"https://content.guardianapis.com/lifeandstyle/2017/nov/11/celeriac-smoked-tofu-kale-gado-gado-salad-recipe-vegan-meera-sodha","isHosted":false,"pillarId":"pillar/lifestyle","pillarName":"Lifestyle"},{"id":"tv-and-radio/2017/nov/11/michelle-dockery-widow-downton-abbey-actor-harvey-weinstein","type":"article","sectionId":"tv-and-radio","sectionName":"Television & radio","webPublicationDate":"2017-11-11T09:00:21Z","webTitle":"Michelle Dockery: 'I consider myself a widow'","webUrl":"https://www.theguardian.com/tv-and-radio/2017/nov/11/michelle-dockery-widow-downton-abbey-actor-harvey-weinstein","apiUrl":"https://content.guardianapis.com/tv-and-radio/2017/nov/11/michelle-dockery-widow-downton-abbey-actor-harvey-weinstein","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"}]}}`
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
    ["headline one", "headline two", "headline three"].forEach(function(headline, index) {
      assert.isTrue(mockPromoListModel.articleHeadlines[index] === headline);
    });
  })();

  (function() {
    console.log(" it opens and sends an asynchronous get request to the Guardian news api");
    assert.isTrue(mockRequestInstance.openCalledCount === 1);
    assert.isTrue(mockRequestInstance.methodCalled === "GET");
    assert.isTrue(mockRequestInstance.asynchronousBoolean === true);
    assert.isTrue(mockRequestInstance.location === "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search");
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
