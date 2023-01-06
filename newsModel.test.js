const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  let model;
  beforeEach(() => {
    model = new NewsModel();
  });

  it("returns an empy array", () => {
    expect(model.getNews()).toEqual([]);
  });
  it("returns an correct list", () => {
    const newsItemOne =
      "Egypt says wreckage from flight found in Mediterranean";
    const newsItemTwo =
      "Humans damaging planet faster than it can recover, report finds";
    model.addNewsItem(newsItemOne);
    model.addNewsItem(newsItemTwo);

    expect(model.getNews()).toEqual([newsItemOne, newsItemTwo]);
  });
  it("resets the array", () => {
    const newsItemOne =
      "Egypt says wreckage from flight found in Mediterranean";

    model.addNewsItem(newsItemOne);
    model.reset();

    expect(model.getNews()).toEqual([]);
  });
});
