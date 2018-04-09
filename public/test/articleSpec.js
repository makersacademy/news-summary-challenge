describe("Article", function() {

  function before() {
    article = new Article("This is my title", "This is my body text");
  };

  describe("#getTitle", function() {
    it("returns the title of the article", function() {
      before();
      title = article.getTitle();
      return expect(title).toEqual("This is my title");
    });
  });

  describe("#getBody", function() {
    it("returns the body of the article", function() {
      before();
      body = article.getBody();
      return expect(body).toEqual("This is my body text");
    });
  });

});
