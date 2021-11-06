const Article = require('../article');

describe (Article, () => {
  it('should store the article ID', () => {
    newArticle = new Article(1);
    expect(newArticle.id).toEqual(1);
  });
})