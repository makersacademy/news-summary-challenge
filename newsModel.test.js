const NewsModel = require('./newsModel')

describe('NewsModel', () => {
  beforeEach(() => {
    newsModel = new NewsModel();
  })

  it('initially returns an empty array', () => {
    expect(newsModel.getNews()).toEqual([]);
  })
})