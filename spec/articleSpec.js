var article = new Article("Is Your Cat a Dog?", "www.example.com");

describe("Article", function() {
  it("displays a headline", function() {
    console.log(jotun.expect(article.showHeadline()).isEqual("Is Your Cat a Dog?"));
  });

  it("displays a url", function() {
    console.log(jotun.expect(article.showURL()).isEqual("www.example.com"));
  });
});
