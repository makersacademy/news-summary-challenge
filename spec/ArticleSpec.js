(function() {
  console.log("Testing Article model: ");

  (function() {
    console.log(" it can be instantiated with a headline");
    var article = new Article("Al Gore: 'I tried my best' but Trump can't be educated on climate change");
    assert.isTrue(article.headline === "Al Gore: 'I tried my best' but Trump can't be educated on climate change");
  })();

  
})();
