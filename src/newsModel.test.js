const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  beforeEach(() => {
    model = new NewsModel();
  });

  it("gets all news stories", () => {
    expect(model.getAllNews()).toEqual([]);
  });
});
