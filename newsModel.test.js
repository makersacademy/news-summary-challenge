const NewsModel = require('./newsModel');

describe('NewsModel', () => {
  const model = new NewsModel;

  it('is constructed with an empty array for storing headlines', () => {
    expect(model.getHeadlines()).toEqual([]);
  });

  describe('#addHeadlines', () => {
    it('add headlines to the array', () => {

      const headlines = [
        {webTitle: 'Everton win the Premier League'},
        {webTitle: 'Unbelievable: Everton win the Champions League too!'},
        {webTitle: 'Lampard denies juicing allegations'}
      ]

      model.addHeadlines(headlines)
      expect(model.getHeadlines()).toEqual(headlines)
    });
  });
});