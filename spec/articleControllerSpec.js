describe('ArticleController', () => {

  class ArticleListViewDouble{
    constructor() {
      this.outputCount = 0;
    }

    outputHTML() {
      return this.outputCount ++;
    }
  }

  describe('this.articlelistview', () => {
    it('instantiates with an ArticleListView', () => {
      articlelistview = new ArticleListViewDouble();
      articleController = new ArticleController(articlelistview);
      expect(articleController.listView instanceof ArticleListViewDouble).toEq(true)
    })
  })

  describe('.getHTML', () => {
    it('returns list of html elements', () => {
      articlelistview = new ArticleListViewDouble();
      articleController = new ArticleController(articlelistview);
      articleController.getHtml();
      expect(articlelistview.outputCount).toEq(1);
      articlelistview.outputCount = 0;
    })
  })

  describe('.insertHTML', () => {
    it('calls the getHTML method to insert content into page', () => {
      articlelistview = new ArticleListViewDouble();
      articleController = new ArticleController(articlelistview);
      articleController.insertHtml();
      expect(articlelistview.outputCount).toEq(1);
      articlelistview.outputCount = 0; 
    })
  })
})