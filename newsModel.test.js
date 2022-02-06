const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  describe('get headlines', () => {
    it('returns a new model', () => {
      const news = new NewsModel;
      
      expect(news.getHeadlines()).toEqual([]);
    })
  })

  describe('add links', () => {
    it('adds a link', () => {
      const news = new NewsModel;
      stories = [ { webUrl: 'https://www.testing.com' } ];
      news.addLinks(stories);
      
      expect(news.getLinks()).toEqual(['https://www.testing.com']);
    });
  });

  describe('add images', () => {
    it('adds an image', () => {
      const news = new NewsModel;
      stories = [ { fields: { thumbnail: 'testing.png' } }];
      news.addImages(stories);
      
      expect(news.getImages()).toEqual(['testing.png']);
    })
  })

  describe('reset', () => {
    it('resets a new', () => {
      const news = new NewsModel;
      stories = [ { webTitle: 'Extra, extra, read all about it!' } ]
      news.addHeadlines(stories);
      news.reset();
      
      expect(news.getHeadlines()).toEqual([]);
    })
  })
})