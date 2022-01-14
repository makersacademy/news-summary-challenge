const ArticleModel = require('../articleModel');

describe('ArticleModel', () => {
  let model;

  beforeEach(() => {
    model = new ArticleModel();
  });

  it('returns an empty array', () => {
    expect(model.getArticles()).toEqual([]);
  });
});
