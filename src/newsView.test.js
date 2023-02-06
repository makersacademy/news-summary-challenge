/**
 * @jest-environment jsdom
 */

const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");
const fs = require("fs");
require("jest-fetch-mock").enableMocks();

jest.mock("./newsClient.js");
jest.mock("./newsModel.js");

describe("NewsView", () => {
  let model, view, client;

  beforeEach(() => {
    client = new NewsClient();
    model = new NewsModel();
    view = new NewsView(model, client);
    NewsClient.mockClear();
    NewsModel.mockClear();
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("should call loadNews on the newsClient", (done) => {
    view.loadNewsFromApi();
    expect(client.loadNews).toHaveBeenCalled();
    done();
  });

  it("should display news stories", async () => {
    view.loadNewsFromApi = jest.fn().mockResolvedValue(undefined);

    model.getNews = jest.fn().mockResolvedValue([
      {
        fields: {
          thumbnail: "image1.jpg",
        },
        webTitle: "Story 1",
      },
      {
        fields: {
          thumbnail: "image2.jpg",
        },
        webTitle: "Story 2",
      },
      {
        fields: {
          thumbnail: "image3.jpg",
        },
        webTitle: "Story 3",
      },
    ]);

    await view.displayNewsStories();
    expect(view.loadNewsFromApi).toHaveBeenCalled();
    expect(model.getNews).toHaveBeenCalled();
  });
});
