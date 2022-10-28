const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  describe('#getNews', () => {
    xit('returns null', () => {
      const model = new NewsModel();
      expect(model.getRepoInfo()).toEqual(null);
    });
  });
});