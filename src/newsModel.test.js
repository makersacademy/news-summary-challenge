const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  it("sets the headline when setHeadline is called", () => {
    const newsModel = new NewsModel();

    newsModel.setHeadline("A headline");
    expect(newsModel.headline).toEqual("A headline");
  });

  it("sets the thumbnail when setThumbnail is called", () => {
    const newsModel = new NewsModel();

    newsModel.setThumbnail("image.png");
    expect(newsModel.thumbnail).toEqual("image.png");
  });

  it("sets the url when setUrl is called", () => {
    const newsModel = new NewsModel();

    newsModel.setUrl("headline.com");
    expect(newsModel.url).toEqual("headline.com");
  });

  it("returns the news headline when getHeadline is called", () => {
    const newsModel = new NewsModel();

    newsModel.setHeadline("A headline");
    const headline = newsModel.getHeadline();
    expect(headline).toEqual("A headline");
  });

  it("returns the thumbnail when getThumbnail is called", () => {
    const newsModel = new NewsModel();

    newsModel.setThumbnail("image.png");
    const thumbnail = newsModel.getThumbnail();
    expect(thumbnail).toEqual("image.png");
  });

  it("returns the url when getUrl is called", () => {
    const newsModel = new NewsModel();

    newsModel.setUrl("headline.com");
    const url = newsModel.getUrl();
    expect(url).toEqual("headline.com");
  });
});
