const NewsModel = require("./newsModel");

describe("NewsModel", () => {
  it("dispays notes that have been added", () => {
    const model = new NewsModel();
    model.add("Something here for now");
    expect(model.getNews()).toEqual(["Something here for now"]);
  });
});
