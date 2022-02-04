const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  describe('get headlines', () => {
    it('returns a new model', () => {
      const news = new NewsModel;
      
      expect(news.getHeadlines()).toEqual([]);
    })
  })

  describe('add headlines', () => {
    it('adds a headline', () => {
      const news = new NewsModel;
      news.addHeadlines('Extra, extra, read all about it!');
      
      expect(news.getHeadlines()).toEqual(['Extra, extra, read all about it!'])
    })
  })

  describe('reset', () => {
    it('resets a new', () => {
      const news = new NewsModel;
      news.addHeadlines('Burgerking Carrotstick to star in new sprawling BBC drama!');
      news.reset();
      
      expect(news.getHeadlines()).toEqual([]);
    })
  })
})