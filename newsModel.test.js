const NewsModel = require("./newsModel");

describe(' NewsModel class', () => {
  let model;

  beforeEach(() => {
    model = new NewsModel;
  })

  it('constructs', () => {
    expect(model).toBeTruthy();
    expect(model).toHaveProperty('stories', [])
  })

  it('returns the stories property with getStories method', () => {
    const stories = model.getStories();
    expect(stories).toEqual([]);
  })

  it('sets the stories property with setStories method', () => {
    const newStories = ['fake story'];
    model.setStories(newStories);

    expect(model.getStories()).toEqual(newStories);
  })
})
