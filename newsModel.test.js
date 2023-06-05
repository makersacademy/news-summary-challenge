const NewsModel = require('./newsModel')

describe('newsModel class', () => {
  let model;

  beforeEach(() => {
    model = new NewsModel();
  });

  it('returns an empty string', () => {
    expect(model.allNews()).toEqual([])
  })

  it('adds news and returns it', () => {
    model.addNews('News article data');
    expect(model.allNews()).toEqual('News article data');
  })

})