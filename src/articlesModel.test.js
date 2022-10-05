const ArticlesModel = require("./articlesModel");
const mockArticles = require("../mockArticleObjects");

describe("ArticlesModel", () => {
  it("stores article data", () => {
    const model = new ArticlesModel();
    const articles = model.setArticles(mockArticles);
    expect(articles).toEqual(mockArticles);
  });
});
