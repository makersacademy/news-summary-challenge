/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NewsView = require("./newsView");
const NewsApi = require("./newsApi");
const NewsModel = require("./newsModel");

jest.mock("./newsModel");
jest.mock("./newsApi");

describe(NewsView, () => {
  beforeEach(() => {
    NewsModel.mockClear();
    NewsApi.mockClear();
    document.body.innerHTML = fs.readFileSync("./index.html");
    mockModel = new NewsModel();
    mockApi = new NewsApi();
    view = new NewsView(mockModel, mockApi);
  });

  it("gets notes from the model and displays it as a new div element with class 'article'", () => {
    view.model.getArticles.mockImplementation(() => ["News Flash!"]);

    view.displayArticles();

    expect(document.querySelectorAll("div.article").length).toBe(1);
  });

  it("displayArticlesFromApi loads headlines from the server and displays them", () => {
    view.model.getArticles.mockImplementation(() => ["News Flash!"]);
    view.model.setArticles.mockImplementation(() => undefined);
    view.api.loadArticles.mockImplementation((callback) =>
      callback(["News Flash!"])
    );

    view.displayArticlesFromApi();
    expect(view.api.loadArticles).toHaveBeenCalledTimes(1);
    expect(view.model.setArticles).toHaveBeenCalledTimes(1);
    expect(view.model.getArticles).toHaveBeenCalledTimes(1);
    expect(document.querySelector("div.article").innerText).toBe("News Flash!");
  });
});
