/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

jest.mock("./NewsClient");

describe("A test for my web page", () => {
  // We can use the beforeEach() hook
  // to set the jest `document` HTML before each test

  const newsItemOne = "Egypt says wreckage from flight found in Mediterranean";
  const newsItemTwo =
    "Humans damaging planet faster than it can recover, report finds";

  let model, view;
  beforeEach(() => {
    NewsClient.mockClear();
    document.body.innerHTML = fs.readFileSync("./index.html");
    client = new NewsClient();
    model = new NewsModel();
    view = new NewsView(model, client);
  });

  it("displays a news items", () => {
    model.addNewsItem(newsItemOne);
    model.addNewsItem(newsItemTwo);
    view.displayNewsItems();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
  });

  it("only displays a news items once when called twice", () => {
    model.addNewsItem(newsItemOne);
    model.addNewsItem(newsItemTwo);
    view.displayNewsItems();
    view.displayNewsItems();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
  });

  it("display news from Api", () => {
    client.loadHeadlines.mockImplementation((callback) => {
      callback({
        response: { results: [{ test }, { test }] },
      });
    });

    view.displayNewsFromApi();

    expect(client.loadHeadlines).toHaveBeenCalled();
    expect(model.getNews()).toEqual([{ test }, { test }]);
  });
});
