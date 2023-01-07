const NewsModel = require('./newsModel');

describe ('NewsModel',() => {
  it ('returns the story array', () => {
    const model = new NewsModel();
    expect(model.allStories()).toEqual([])
  })

  it ('adds a story and displays it ', () => {
    const model = new NewsModel();
    model.add('new story')
    expect(model.allStories()).toEqual(['new story'])
  })
})