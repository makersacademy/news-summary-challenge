const testApi = require('./apiExample') 
const ArticleModel = require('./articleModel');

describe('ArticleModel', () => {
  describe('#getArticleInfo', () => {
    it('returns null if nothing set', () => {
      const articles = new ArticleModel();
      expect(articles.getArticleInfo()).toEqual(null);
    });
  }); 
    it('returns article API when set', () => {
      const articles = new ArticleModel();
      articles.setArticleInfo(testApi)
      expect(articles.getArticleInfo()).toEqual(testApi);
      
    });
  describe('#getArticleHeadlines', () => {
    it('returns an array of article headlines', () =>{
      const articles = new ArticleModel();
      articles.setArticleInfo(testApi);
      expect(articles.getArticleHeadlines()[0]).toEqual("Hand creams: 10 of the best")
    })
  })  
});