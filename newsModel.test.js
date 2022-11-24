const NewsModel = require('./src/newsModel');

describe('NewsModel', () => {
  it('returns an empty list of articles when constructed', () => {
    const model = new NewsModel();
    expect(model.getArticles()).toEqual([]);
  });
})