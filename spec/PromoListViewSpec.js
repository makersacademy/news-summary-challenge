(function() {
  console.log("Testing PromoList view: ");

  (function() {
    console.log(" it renders HTML correctly");
    var mockArticleOne = {
      id: function() {
        return 0;
      },
      headline: "Cheeky seagull nabs crisps",
      url: "https://www.buzzfeed.com/patricksmith/the-most-british-headlines-of-the-modern-age"
    };
    var mockArticleTwo = {
      id: function() {
        return 1;
      },
      headline: "Chutney blew up my fridge",
      url: "https://www.buzzfeed.com/patricksmith/the-most-british-headlines-of-the-modern"
    };
    var mockArticleThree = {
      id: function() {
        return 2;
      },
      headline: "Council's wheelie bin snub for mum",
      url: "https://www.buzzfeed.com/patricksmith/the-most-british-headlines"
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
          "<li>",
            "<div>",
              "<h3><a href='#articles/0'>Cheeky seagull nabs crisps</a></h3>",
              "<p><a href='https://www.buzzfeed.com/patricksmith/the-most-british-headlines-of-the-modern-age'>Full story</a></p>",
            "</div>",
          "</li>",
          "<li>",
            "<div>",
              "<h3><a href='#articles/1'>Chutney blew up my fridge</a></h3>",
              "<p><a href='https://www.buzzfeed.com/patricksmith/the-most-british-headlines-of-the-modern'>Full story</a></p>",
            "</div>",
          "</li>",
          "<li>",
            "<div>",
              "<h3><a href='#articles/2'>Council's wheelie bin snub for mum</a></h3>",
              "<p><a href='https://www.buzzfeed.com/patricksmith/the-most-british-headlines'>Full story</a></p>",
            "</div>",
          "</li>",
        "</ul>",
      "</div>"].join("");
    assert.isTrue(promoListView.toHtml() === expectedHtml);
  })();

})();
