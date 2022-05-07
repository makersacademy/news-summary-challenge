const ArticlesModel = require('./articlesModel');

describe('ArticlesModel', () => {
  beforeEach(() => {
    model = new ArticlesModel();
  });

  it('starts off with an empty list of articles', () => {
    expect(model.getArticles()).toEqual([]);
  });

  it('addArticle adds an article with a headline to this.articles', () => {
    const article = {
      headline: 'Real Madrid reach the Champions League final'
    }
    model.addArticle(article);
    expect(model.getArticles()).toEqual([article]);
  });
});