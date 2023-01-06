const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  const newsItemOne = "Egypt says wreckage from flight found in Mediterranean";
  const newsItemTwo =
    "Humans damaging planet faster than it can recover, report finds";

  let model;
  beforeEach(() => {
    model = new NewsModel();
  });

  it("returns an empy array", () => {
    expect(model.getNews()).toEqual([]);
  });
  it("returns an correct list", () => {
    model.addNewsItem(newsItemOne);
    model.addNewsItem(newsItemTwo);

    expect(model.getNews()).toEqual([newsItemOne, newsItemTwo]);
  });
  it("resets the array", () => {
    model.addNewsItem(newsItemOne);
    model.reset();

    expect(model.getNews()).toEqual([]);
  });

  it("setNews replaces news in the list", () => {
    model.addNewsItem(newsItemOne);
    model.setNews([newsItemOne, newsItemTwo]);

    expect(model.getNews()).toEqual([newsItemOne, newsItemTwo]);
  });
});
