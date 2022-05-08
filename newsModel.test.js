const NewsModel = require('./newsModel')

describe('newsModel', () => {
  const model = new NewsModel();

  it("getNews intially returns an empty array", () => {
    expect(model.getNews()).toEqual([]);

  });

  it("adds a news", () => {
    const model = new NewsModel();
    model.addNews('todays Headlines');

    expect(model.getNews()).toEqual(['todays Headlines'])
  });

  it("resets the list of Headlines", () => {
    const model = new NewsModel();
    model.addNews('todays Headlines');
    model.resetNews();

    expect(model.getNews()).toEqual([])
  })

});