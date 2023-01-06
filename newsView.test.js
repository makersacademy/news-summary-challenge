/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

describe("A test for my web page", () => {
  // We can use the beforeEach() hook
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays a news items", () => {
    const model = new NewsModel();
    const view = new NewsView(model);

    const newsItemOne =
      "Egypt says wreckage from flight found in Mediterranean";
    const newsItemTwo =
      "Humans damaging planet faster than it can recover, report finds";
    model.addNewsItem(newsItemOne);
    model.addNewsItem(newsItemTwo);
    view.displayNewsItems();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
  });
});
