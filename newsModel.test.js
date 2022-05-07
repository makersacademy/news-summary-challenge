const NewsModel = require('./newsModel')

describe('NewsModel', () => {
  let newsModel = new NewsModel();
  
  it('initially returns an empty array', () => {
    expect(newsModel.getNews()).toEqual([]);
  })

  describe('#addNews', () => {
    it('can add a news headline into the news array', () => {
      newsModel.addNews('This is a news article');
      expect(newsModel.getNews()).toEqual(['This is a news article']);
    })
  })
})