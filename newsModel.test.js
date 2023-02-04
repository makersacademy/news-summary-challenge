const Model = require('./newsModel');

describe("NewsModel", () => {
  it("gets news articles from the model", () => {
    const model = new Model;
    expect(model.getArticles()).toStrictEqual([])
  });

  it("sets news articles into the model", () => {
    const model = new Model;
    const articles = { 
      response: { 
        results: [
          { headline: "Story 1" },
          { headline: "Story 2" }
        ]
      }}
    model.setArticles(articles);
    expect(model.getArticles().length).toBe(2)
    expect(model.getArticles()[0].headline).toBe('Story 1')
  });

  it("resets news articles in the model after some had been loaded", () => {
    const model = new Model;
    const articles = { 
      response: { 
        results: [
          { headline: "Story 1" },
          { headline: "Story 2" }
        ]
      }}
    model.setArticles(articles);
    expect(model.getArticles().length).toBe(2)
    model.reset();
    expect(model.getArticles().length).toBe(0)
  });
});