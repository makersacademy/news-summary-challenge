/**
 * @jest-environment jsdom
 */

const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");
const fs = require("fs");
require("jest-fetch-mock").enableMocks();

jest.mock("./newsClient.js");

describe("NewsView", () => {
  let model, view, client;

  beforeEach(() => {
    client = new NewsClient();
    model = new NewsModel();
    view = new NewsView(model, client);
    NewsClient.mockClear();
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("should call loadNews on the newsClient", (done) => {
    view.loadNewsFromApi();
    expect(client.loadNews).toHaveBeenCalled();
    done();
  });
});
