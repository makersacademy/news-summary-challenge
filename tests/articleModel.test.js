const ArticleModel = require('../articleModel');

describe('ArticleModel', () => {
  const model = new ArticleModel();

  it('returns an empty array', () => {
    expect(model.getArticles()).toEqual([]);
  });

  it('can add an article', () => {
    model.addArticle('an article');
    model.addArticle('another article');

    expect(model.getArticles()).toEqual(['an article', 'another article']);
  });

  it('can clear all articles', () => {
    model.reset();

    expect(model.getArticles()).toEqual([]);
  });
});
