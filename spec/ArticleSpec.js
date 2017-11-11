(function() {
  console.log("Testing Article model: ");

  (function() {
    console.log(" it can be instantiated with a headline");
    var articleModel = new ArticleModel("Al Gore: 'I tried my best' but Trump can't be educated on climate change");
    assert.isTrue(articleModel.headline === "Al Gore: 'I tried my best' but Trump can't be educated on climate change");
  })();

  (function() {
    console.log(" it can be instantiated with a url for the full story");
    var articleModel = new ArticleModel("Al Gore: 'I tried my best'", 'www.guardian.co.uk/awesome_story');
    assert.isTrue(articleModel.url === 'www.guardian.co.uk/awesome_story');
  })();

})();
