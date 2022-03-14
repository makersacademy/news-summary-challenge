import NewsModel from './newsModel';

describe('NewsModel', () => {
  describe('get headlines', () => {
    it('returns a new model', () => {
      const news = new NewsModel;
      
      expect(news.getHeadlines()).toEqual([]);
    })
  })

  describe('add info', () => {
    it('adds everything', () => {
      const news = new NewsModel;
      stories = [ { webTitle: 'Extra, extra, read all about it! Test coverage exceeding 100%!!', webUrl: 'https://www.testing.com', fields: { thumbnail: 'testing.png' } }];
      
      news.addInfo(stories);

      expect(news.getHeadlines()).toEqual(['Extra, extra, read all about it! Test coverage exceeding 100%!!']);
      expect(news.getLinks()).toEqual(['https://www.testing.com']);
      expect(news.getImages()).toEqual(['testing.png']);
    })
  })

  describe('reset', () => {
    it('resets a new', () => {
      const news = new NewsModel;
      stories = [ { webTitle: 'Extra, extra, read all about it! Test coverage exceeding 100%!!', webUrl: 'https://www.testing.com', fields: { thumbnail: 'testing.png' } } ]
      news.addInfo(stories);
      news.reset();
      
      expect(news.getHeadlines()).toEqual([]);
    })
  })
})