const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  describe('get headlines', () => {
    it('returns a new model', () => {
      const news = new NewsModel;
      
      expect(news.getNews()).toEqual([]);
    })
  })

  describe('add info', () => {
    it('adds everything', () => {
      const model = new NewsModel;
      stories = [{ webTitle: 'Extra, extra, read all about it! Test coverage exceeding 100%!!', webUrl: 'https://www.testing.com', fields: { thumbnail: 'testing.png' } }];
      
      model.addNews(stories);
      news = model.getNews();

      expect(news[0].headline).toEqual('Extra, extra, read all about it! Test coverage exceeding 100%!!');
      expect(news[0].link).toEqual('https://www.testing.com');
      expect(news[0].image).toEqual('testing.png');
    })
  })

  describe('reset', () => {
    it('resets a new', () => {
      const news = new NewsModel;
      stories = [ { webTitle: 'Extra, extra, read all about it! Test coverage exceeding 100%!!', webUrl: 'https://www.testing.com', fields: { thumbnail: 'testing.png' } } ]
      news.addNews(stories);
      news.reset();
      
      expect(news.getNews()).toEqual([]);
    })
  })
})