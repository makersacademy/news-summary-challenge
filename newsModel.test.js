const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  it("returns an empy array", () => {
    const model = new NewsModel();

    expect(model.getNews()).toEqual([]);
  });
  it("returns an correct list", () => {
    const model = new NewsModel();

    const newsItemOne =
      "Egypt says wreckage from flight found in Mediterranean";
    const newsItemTwo =
      "Humans damaging planet faster than it can recover, report finds";
    model.addNewsItem(newsItemOne);
    model.addNewsItem(newsItemTwo);

    expect(model.getNews()).toEqual([newsItemOne, newsItemTwo]);
  });
  it("resets the array", () => {
    const model = new NewsModel();
    const newsItemOne =
      "Egypt says wreckage from flight found in Mediterranean";

    model.addNewsItem(newsItemOne);
    model.reset();

    expect(model.getNews()).toEqual([]);
  });
});
