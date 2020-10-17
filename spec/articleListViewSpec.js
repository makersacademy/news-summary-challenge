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

  describe('this.articleList', () => {
    it('instantiates with a ArticleList object', () => {
      article = new ArticleDouble('article1', 'this is an article');
      articleList = new ArticleListDouble();
      articleList.addArticle(article);
      articleListView = new ArticleListView(articleList);
      expect(articleListView.articleList.articles.length).toEq(1);
    })
  })

  describe('.getArticle', () => {
    it('returns a list of articles', () => {
      article = new ArticleDouble('article1', 'this is an article');
      articleList = new ArticleListDouble();
      articleList.addArticle(article);
      articleListView = new ArticleListView(articleList);
      expect(articleListView.getArticles(0)).toEq('article1');
    })
  })

  describe('.outputHTML', () => {
    it('returns string of html', () => {
      article = new ArticleDouble('article1', 'this is an article');
      articleList = new ArticleListDouble();
      articleList.addArticle(article);
      articleListView = new ArticleListView(articleList);
      expect(articleListView.outputHTML()).toEq('<div><h1>article1</h1><p>this is an article</p></div>') 
    })
  })
})

