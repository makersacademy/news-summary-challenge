const NewsModel = require("./newsModel");
const fakeJson = require('./fakeJson.json');

describe("NewsModel", () => {
  it("dispays notes that have been added", () => {
    const model = new NewsModel();
    model.add([{id: "Something here for now"}]);
    expect(model.getNews()).toEqual([{id: "Something here for now"}]);
  });

  it("only shows news items that contain a single search term", () => {
    const model = new NewsModel();
    model.add(fakeJson.response.results);
    expect(model.filter('covid')).toEqual([fakeJson.response.results[0]])
  });

  it("only shows news items that contain a single search term", () => {
    const model = new NewsModel();
    model.add(fakeJson.response.results);
    expect(model.filter('covid robot')).toEqual([fakeJson.response.results[0], fakeJson.response.results[8]])
  });
});
