describe('ArticleController', () => {

  class ArticleListViewDouble{
    constructor() {
      this.outputCount = 0;
    }

    outputHTML() {
      return this.outputCount ++;
    }
  }

  const articlelistview = new ArticleListViewDouble();
  const articleController = new ArticleController(articlelistview);

  describe('this.articlelistview', () => {
    it('instantiates with an ArticleListView', () => {
      expect(articleController.listView instanceof ArticleListViewDouble).toEq(true)
    })
  })

  describe('.getHTML', () => {
    it('returns list of html elements', () => {
      articleController.getHtml();
      expect(articlelistview.outputCount).toEq(1);
      articlelistview.outputCount = 0;
    })
  })

  describe('.insertHTML', () => {
    it('calls the getHTML method to insert content into page', () => {
      articleController.insertHtml();
      expect(articlelistview.outputCount).toEq(1);
      articlelistview.outputCount = 0; 
    })
  })

  // describe('.getArticles', () => {
  //   it('makes call to api and returns "This is a news article"', () => {
  //     articleController.environment = 'test';
  //     expect(articleController.getArticles() instanceof Array).toEq(true);
  //   })
  // })

  console.log(articleController.getArticles())
})