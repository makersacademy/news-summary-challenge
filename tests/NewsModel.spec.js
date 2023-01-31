const NewsModel = require('../src/newsModel');

describe('NewsModel', () => {
  let newsModel;

  beforeEach(() => {
    newsModel = new NewsModel();
  });

  describe('getNews', () => {
    it('should return an empty array by default', () => {
      expect(newsModel.getNews()).toEqual([]);
    });
  });

  describe('setNews', () => {
    it('should set the news property to the given response', () => {
      const response = [
        { title: 'News 1', content: 'News 1 content' },
        { title: 'News 2', content: 'News 2 content' },
      ];
      newsModel.setNews(response);
      expect(newsModel.getNews()).toEqual(response);
    });
  });
});
