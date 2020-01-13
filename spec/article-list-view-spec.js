describe("ArticleListView", () => {
  describe(".createHtml", () => {
    it("should create the html to display a list of notes ", () => {
      var articleList = new ArticleList ()
      articleList.addArticle(guardian_api_seed[0])
      articleList.addArticle(guardian_api_seed[1])

      var articleListView = new ArticleListView (articleList)

      id1 = articleList.getArticles()[0].getId()
      id2 = articleList.getArticles()[1].getId()

      var article1ListItem = `<li><img src="https://media.guim.co.uk/009ead9ae11d4c5d56bd8684d5559b4b51adf0da/0_319_4783_2870/500.jpg" alt="image"><a href="#articles/${id1}">UK news: Harry and Meghan seek global trademark for 'Sussex Royal' brand</a></li>`
      var article2ListItem = `<li><img src="https://media.guim.co.uk/6bbb9da43fab99a678b7686dc4db1f0165fecea3/0_84_4019_2411/500.jpg" alt="image"><a href="#articles/${id2}">World news: Iran deploys riot police as backlash against government grows</a></li>`
      var expected = '<ul>' + article1ListItem + article2ListItem + '</ul>'
      expect(articleListView.createHtml()).toEq(expected)
    });
  });

});
