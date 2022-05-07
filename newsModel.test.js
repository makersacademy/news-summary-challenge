const NewsModel = require('./newsModel');

describe(NewsModel, () => {
  it("returns an array with getItems()", () => {
    const model = new NewsModel();
    expect(model.getItems()).toEqual([]);
  });

  it("set the items array with setItems()", () => {
    const model = new NewsModel();
    model.setItems(['Definitely a real piece of news', 'also real news']);
    expect(model.getItems()).toEqual(['Definitely a real piece of news', 'also real news'])
  });

  it("clears the items array with resetItems()", () => {
    const model = new NewsModel();
    model.setItems(['Definitely a real piece of news', 'also real news']);
    model.resetItems();
    expect(model.getItems()).toEqual([])
  });
})