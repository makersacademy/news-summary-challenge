describe('Feature Testing', () => {

  // const page = window.open('../index.html')
  // const pageContent = page.document.body.textContent
  describe('page displays articles', () => {
    it('page includes article1', () => {
      article = new Article('article1', 'this is an article')
      articleList = new ArticleList();
      articleList.addArticle(article);
      articleListView = new ArticleListView(articleList);
      controller = new ArticleController(articleListView);
      controller.insertHtml();
      expect(document.body.textContent).toHaveContent('article1');
    })
  })

})