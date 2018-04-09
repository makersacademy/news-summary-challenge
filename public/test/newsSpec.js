describe("News", function() {

  function before() {
    news = new News();
    article1 = { title: "Title 1", body: "News body 1" };
    article2 = { title: "Title 2", body: "News body 2" };
  };

  describe("#add", function() {
    it("adds an article to the _stories array", function() {
      before();
      news.add(article1);
      return expect(news._stories[0]).toHaveObjectValues(["Title 1", "News body 1"]);
    });
  });

  describe("#all", function() {
    it("returns all elements in the news array", function() {
      before();
      news.add(article1);
      news.add(article2);
      let allStories = news.all();
      return expect(allStories).toHaveObjectKeys(["0", "1"]);
    });
  });

});
