/**
 * @jest-environment jsdom
 */

const ArticlesController = require("../articlesController");
const ArticlesModel = require("../articlesModel");
const ArticlesView = require("../articlesView");
const mockArticles = require("../mockArticles");
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

  it("logs the error when loading articles", async () => {
    global.console = { log: jest.fn() };
    const model = new ArticlesModel();
    const view = new ArticlesView();
    const api = {
      getArticles: () => {
        jest.fn().mockRejectedValue(new Error());
      },
    };
    const controller = new ArticlesController(model, view, api);
    await controller.loadArticles();
    expect(console.log).toBeCalled();
  });

  it("loads search articles", (done) => {
    const model = new ArticlesModel();
    const view = new ArticlesView();
    const api = {
      getArticles: jest.fn().mockResolvedValue(mockArticles),
    };
    const controller = new ArticlesController(model, view, api);
    const searchButton = document.querySelector("#search-button");
    const searchInput = document.querySelector("#search-query");
    searchInput.value = "thousands";
    searchButton.click();
    let articles;
    setTimeout(() => {
      articles = document.querySelectorAll(".card");
      expect(articles.length).toEqual(1);
      done();
    }, 0);
  });

  it("logs the error when loading search articles", (done) => {
    global.console = { log: jest.fn() };
    const model = new ArticlesModel();
    const view = new ArticlesView();
    const api = {
      getArticles: jest.fn().mockRejectedValue(new Error()),
    };
    const controller = new ArticlesController(model, view, api);
    const searchButton = document.querySelector("#search-button");
    const searchInput = document.querySelector("#search-query");
    searchInput.value = "thousands";
    searchButton.click();
    setTimeout(() => {
      expect(console.log).toBeCalled();
      done();
    }, 0);
  });
});
