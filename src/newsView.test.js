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

  it("displays articles on the web page", () => {
    view.model.getArticles.mockImplementation(() => ["News Flash!"]);

    view.displayArticles();

    expect(document.querySelectorAll("div.article").length).toBe(1);
  });
});
