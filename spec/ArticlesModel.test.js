const ArticlesModel = require("../src/ArticlesModel.js");

describe("ArticlesModel", () => {
  it("returns empty array", () => {
    const model = new ArticlesModel();
    expect(model.getArticles()).toEqual([]);
  });

  it("returns not empty array", () => {
    const model = new ArticlesModel();
    model.addArticle("Boris Johnson a big bumbahole");
    model.addArticle("Mostly bad stuff");
    expect(model.getArticles()).toEqual([
      "Boris Johnson a big bumbahole",
      "Mostly bad stuff",
    ]);
  });

  it("returns empty array after reset", () => {
    const model = new ArticlesModel();
    model.addArticle("Boris Johnson a big bumbahole");
    model.addArticle("Mostly bad stuff");
    model.reset();
    expect(model.getArticles()).toEqual([]);
  });
});
