const NewsModel = require('./newsModel.js')

describe('class NewsModel', () => {
  it('getHeadlines returns an empty array at first', () => {
    const model = new NewsModel()
    expect(model.getHeadlines()).toEqual([])
  })
})