(function(exports) {
  function testArticleHeadlineIsEmptyString() {
    var article = new Article();

    if (article.headline !== "") {
      throw new Error("Headline is not an empty string");
    } else {
      console.log("Headline is an empty string; your test passed");
    }
  };

  testArticleHeadlineIsEmptyString();
})(this);

(function(exports) {
  function testArticleBodyIsEmptyString() {
    var article = new Article();

    if (article.body !== "") {
      throw new Error("Body is not an empty string");
    } else {
      console.log("Body is an empty string; your test passed");
    }
  };

  testArticleBodyIsEmptyString();
})(this);
