const NewsModel = require('./newsModel.js')

describe('class NewsModel', () => {
  it('getHeadlines returns an empty array at first', () => {
    const model = new NewsModel();
    expect(model.getHeadlines()).toEqual([]);
  });
  it('addHeadline adds to the headlines array', () => {
    const model = new NewsModel();
    model.addHeadline('Boris has a party')
    expect(model.getHeadlines()).toEqual(['Boris has a party']);
  })
})