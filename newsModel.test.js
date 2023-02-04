const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  let newsModel;

  beforeEach(() => {
    newsModel = new NewsModel();
  });

  it("sets and return the news", () => {
    newsModel.set(["This is a news", "This is another news"]);

    expect(newsModel.get()).toEqual(["This is a news", "This is another news"]);
  });

  it("resets the news", () => {
    newsModel.set(["This is a news", "This is another news"]);
    newsModel.reset();

    expect(newsModel.get()).toEqual([]);
  });
});
