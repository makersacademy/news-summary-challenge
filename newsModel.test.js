const NewsModel = require("./newsModel");

describe("NewsModel class", () => {
  it("adds article titles to model using addTitles function", () => {
    model = new NewsModel();

    model.addArticles([
      { webTitle: "title 1" },
      { webTitle: "title 2" },
      { webTitle: "title 3" },
    ]);

    expect(model.showArticles()).toEqual([
      { webTitle: "title 1" },
      { webTitle: "title 2" },
      { webTitle: "title 3" },
    ]);
  });
});
