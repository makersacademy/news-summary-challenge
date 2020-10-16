describe('ArticleListView', () => {

  class ArticleListDouble {
    constructor() {
      this.articles =['article1']
    }
   }

  describe('this.articleList', () => {
    it('instantiates with a ArticleList object', () => {
      articleList = new ArticleListDouble();
      articleListView = new ArticleListView(articleList);
      expect(articleListView.articleList.articles.length).toEq(1);
    })
  })
})

