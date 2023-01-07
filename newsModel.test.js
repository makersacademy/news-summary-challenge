const NewsModel = require('./newsModel');

describe ('NewsModel',() => {
  it ('returns the story array', () => {
    const model = new NewsModel();
    expect(model.allStories()).toEqual([])
  })
})