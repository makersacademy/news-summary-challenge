describe("Newspaper", function() {
  it("Adds an article to the collection", function() {
    var articleDouble = {};

    newspaper.addArticle(articleDouble);
    console.log(jotun.expect(newspaper.articleList).includesObject(articleDouble));
  });
});
