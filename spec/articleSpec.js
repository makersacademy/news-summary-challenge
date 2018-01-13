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

(function(exports) {
  function testDatePublishedIsAnEmptyString() {
    var article = new Article();

    if (article.datePublished !== "") {
      throw new Error("Date published is not an empty string");
    } else {
      console.log("Date published is an empty string; your test passed");
    }
  };

  testDatePublishedIsAnEmptyString();
})(this);

(function(exports) {
  function testSummaryIsAnEmptyString() {
    var article = new Article();

    if (article.summary !== "") {
      throw new Error("Summary is not an empty string");
    } else {
      console.log("Summary is an empty string; your test passed");
    }
  };

  testSummaryIsAnEmptyString();
})(this);
