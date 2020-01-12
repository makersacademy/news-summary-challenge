describe("ArticleListView", () => {
  describe(".createHtml", () => {
    it("should create the html to display a list of notes ", () => {
      articleList = new ArticleList ()
      articleList.addArticle(guardian_api_seed[0])
      articleList.addArticle(guardian_api_seed[1])

      noteListView = new NoteListView (articleList)

      id1 = 0

      article1ListItem = '<li><img src="https://media.guim.co.uk/627be5c20c09e4c908231a72f6ec9c6c86b56d50/0_152_5300_3180/500.jpg" alt="image"><a href="#articles/0">Film: Lullaby review – a no-thrills thriller</a></li>'
      article2ListItem = '<li><img src="https://media.guim.co.uk/4fe3ce5411249888cb3606cb68d1b9f39b9a1045/0_91_4116_2470/500.jpg" alt="image"><a href="#articles/1">World news: Nordic countries at odds with EU over minimum wage</a></li>'
      exepected = '<ul>' + article1ListItem + article2ListItem + '</ul>'
      expect(noteListView.createHtml()).toEq(expected)
    });
  });

});