/**
 * @jest-environment jsdom
 */

const ArticlesView = require("./articlesView");
const fs = require("fs");
const mockArticles = require("../mockData");

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
});

describe("ArticlesView", () => {
  it("displays all articles", () => {
    const view = new ArticlesView();
    view.displayArticles(mockArticles);
    const articles = document.querySelectorAll(".card");
    expect(articles.length).toEqual(4);
  });
});
