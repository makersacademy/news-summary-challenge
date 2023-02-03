const Model = require('./newsModel');

describe("NewsModel", () => {
  it("gets news articles from the model", () => {
    const model = new Model;
    expect(model.getArticles()).toStrictEqual([])
  });

  it("sets news articles into the model", () => {
    const model = new Model;
    const articles = ['This is a test story', 'This is a test story too'];
    model.setArticles(articles);
    expect(model.getArticles().length).toBe(2)
    expect(model.getArticles()[0]).toBe('This is a test story')
  });
});