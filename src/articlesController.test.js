/**
 * @jest-environment jsdom
 */

const ArticlesController = require("./articlesController");
const ArticlesModel = require("./articlesModel");
const ArticlesView = require("./articlesView");
const mockArticles = require("../mockArticleObjects");
const fs = require("fs");

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
});

describe("ArticlesController", () => {
  it("loads articles", async () => {
    const model = new ArticlesModel();
    const view = new ArticlesView();
    const api = {
      getArticles: jest.fn().mockResolvedValue(mockArticles),
    };
    const controller = new ArticlesController(model, view, api);
    await controller.loadArticles();
    const articles = document.querySelectorAll(".card");
    expect(articles.length).toEqual(4);
  });
});
