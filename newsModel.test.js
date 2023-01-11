const NewsModel = require('./src/newsModel');

describe('NewsModel', () => {
  it('returns an empty list of articles when constructed', () => {
    const model = new NewsModel();
    expect(model.getArticles()).toEqual(null);
  });

  it('adds a single article to articles list', () => {
    const model = new NewsModel();
    model.setArticles(["Sample article"]);
    expect(model.getArticles()).toEqual(["Sample article"]);
  });
})