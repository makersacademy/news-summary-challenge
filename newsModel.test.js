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

  it ('returns an error if the add is called with something that isnt a string or object ', () => {
    const model = new NewsModel();
    try {
      model.add(3);
    } catch (error) {
      expect(error.message).toBe('Oops! Something went wrong');
    }
    expect(model.allStories()).toEqual([])
  })
})