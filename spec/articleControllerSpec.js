describe('ArticleController', () => {

  class ArticleListViewDouble{
  }

  describe('this.articlelistview', () => {
    it('instantiates with an ArticleListView', () => {
      articlelistview = new ArticleListViewDouble();
      articleController = new ArticleController(articlelistview);
      expect(articleController.listView instanceof ArticleListViewDouble).toEq(true)
    })
  })
})