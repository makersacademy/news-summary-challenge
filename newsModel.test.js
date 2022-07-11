const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  it('sets and retrieves two articles', () => {
    const model = new NewsModel()
    model.setArticle('News Article');
    model.setArticle('News Article 2');
  
    expect(model.getArticle()).toEqual(['News Article', 'News Article 2']);
  });
  it('clears all articles from the model', () => {
    const model = new NewsModel();
    model.setArticle('News Article');
    model.setArticle('News Article 2');

    model.clear();
    expect(model.getArticle().length).toEqual(0);
  });
});