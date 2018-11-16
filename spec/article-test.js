describe("Article", function() {
  it("takes the text of an article when object is created", function() {
    var article = new Article("Pound drops again");
    expect(article.headline).toEqual("Pound drops again");
  });

  it("gives article unique id when object is created", function() {
    var article = new Article("This is the news", 0);
    expect(article.id).toEqual(0);
  });
});
