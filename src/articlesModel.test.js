const ArticlesModel = require("./articlesModel");
const mockArticles = require("../mockArticleObjects");

describe("ArticlesModel", () => {
  it("stores article data", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getArticles();
    expect(articles).toEqual(mockArticles);
  });

  it("returns articles matching search input", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getSearchArticles("Haven");
    expect(articles).toEqual([mockArticles[0]]);
  });

  it("returns articles matching search input", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getSearchArticles("Russia");
    expect(articles.length).toEqual(3);
  });

  it("is case insnesitive for search input", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getSearchArticles("russia");
    expect(articles.length).toEqual(3);
  });

  it("is searches also for abstract contents", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getSearchArticles("determined");
    expect(articles.length).toEqual(1);
  });
});
