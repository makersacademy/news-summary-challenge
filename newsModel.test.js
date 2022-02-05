const NewsModel = require('./newsModel.js')

describe('class NewsModel', () => {
  it('getHeadlines returns an empty array at first', () => {
    const model = new NewsModel();
    expect(model.getNewsInfo()).toEqual([]);
  });
  it('addHeadline adds to the headlines array', () => {
    const model = new NewsModel();
    model.addNewsInfo('Boris has a party')
    expect(model.getNewsInfo()).toEqual(['Boris has a party']);
  })
})