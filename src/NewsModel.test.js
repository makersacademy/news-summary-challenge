const NewsModel = require("./newsModel");

describe(NewsModel, () => {
  it("returns the articles in an array", () => {
    const model = new NewsModel();

    expect(model.getArticles()).toEqual([]);
  });

  it("adds a new article into an array", () => {
    const model = new NewsModel();

    model.setArticles(["News Flash!", "Break News!"]);

    expect(model.getArticles()).toEqual(["News Flash!", "Break News!"]);
  });
});
