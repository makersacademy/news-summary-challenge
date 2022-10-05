const ArticlesModel = require("./articlesModel");
const mockArticles = require("../mockArticleObjects");

describe("ArticlesModel", () => {
  it("stores article data", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getArticles();
    expect(articles).toEqual(mockArticles);
  });
});
