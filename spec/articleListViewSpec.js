describe('ArticleListView', () => {

  class ArticleDouble {
    constructor(headline, body) {
      this.headline = headline
      this.body = body
    }
  }

  class ArticleListDouble {
    constructor() {
      this.articles = []
    }
    addArticle(article) {
      this.articles.push(article)
    }
   }

   const article = new ArticleDouble('article1', 'this is an article');
   const articleList = new ArticleListDouble();
   articleList.addArticle(article);
   const articleListView = new ArticleListView(articleList);

  describe('this.articleList', () => {
    it('instantiates with a ArticleList object', () => {
      expect(articleListView.articleList.articles.length).toEq(1);
    })
  })

  describe('.getArticle', () => {
    it('returns a list of articles', () => {
      expect(articleListView.getArticles(0)).toEq('article1');
    })
  })

  describe('.outputHTML', () => {
    it('returns string of html', () => {
      expect(articleListView.outputHTML()).toEq('<div><h1>article1</h1><p>this is an article</p></div>') 
    })
  })
})

