const NewsModel = require('./newsModel');

describe(NewsModel, () => {
  it("returns an array with getItems()", () => {
    const model = new NewsModel();
    expect(model.getItems()).toEqual([]);
  });

  it("adds to the items array with addItem()", () => {
    const model = new NewsModel();
    model.addItem('Definitely a real piece of news');
    expect(model.getItems()).toEqual(['Definitely a real piece of news'])
  });

  it("clears the items array with resetItems()", () => {
    const model = new NewsModel();
    model.addItem('Definitely a real piece of news');
    model.resetItems();
    expect(model.getItems()).toEqual([])
  });
})