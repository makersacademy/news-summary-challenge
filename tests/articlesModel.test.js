const { ArticlesModel } = require("../src/articlesModel");
const { mockArticles } = require("../src/mockArticles");

describe("ArticlesModel", () => {
  it("stores article data", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getArticles();
    expect(articles).toEqual(mockArticles);
  });

  it("returns one articles matching search input", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getSearchArticles("Haven");
    expect(articles).toEqual([mockArticles[0]]);
  });

  it("returns three articles matching search input", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getSearchArticles("Russia");
    expect(articles.length).toEqual(3);
  });

  it("sets input string to empty string if searchInput is null", () => {
    const model = new ArticlesModel();
    model.setArticles(mockArticles);
    const articles = model.getSearchArticles(null);
    expect(articles.length).toEqual(4);
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
