const NewsModel = require('./newsModel')

describe('News model class', () => {
  it('starts with no hedlines', () => {
    const news = new NewsModel();
    expect(news.getHeadlines()).toEqual([]);
  })
})