const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  it("getHeadline initially returns null", () => {
    const newsModel = new NewsModel();
    expect(newsModel.getHeadline()).toEqual(null);
  });

  it("getThumbnail initially returns null", () => {
    const newsModel = new NewsModel();
    expect(newsModel.getThumbnail()).toEqual(null);
  });

  it("getUrl initially returns null", () => {
    const newsModel = new NewsModel();
    expect(newsModel.getUrl()).toEqual(null);
  });

  it("sets the headline when setHeadline is called", () => {
    const newsModel = new NewsModel();

    newsModel.setHeadline("A headline");
    expect(newsModel.getHeadline()).toEqual("A headline");
  });

  it("sets the thumbnail when setThumbnail is called", () => {
    const newsModel = new NewsModel();

    newsModel.setThumbnail("image.png");
    expect(newsModel.getThumbnail()).toEqual("image.png");
  });

  it("sets the url when setUrl is called", () => {
    const newsModel = new NewsModel();

    newsModel.setUrl("headline.com");
    expect(newsModel.getUrl()).toEqual("headline.com");
  });

  it("returns undefined if you try to access property directly", () => {
    const newsModel = new NewsModel();
    newsModel.setHeadline("A headline");
    expect(newsModel.headline).toEqual(undefined);
  });
});
