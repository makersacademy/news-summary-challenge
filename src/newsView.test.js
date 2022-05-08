/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const { hasUncaughtExceptionCaptureCallback, addListener } = require("process");
const { isTypedArray } = require("util/types");
const newsApi = require("./newsApi");
const newsModel = require("./newsModel");
const newsView = require("./newsView");
jest.mock("./newsModel");
jest.mock("./newsApi");

describe(newsView, () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    newsModel.mockClear();
    newsApi.mockClear();
    model = new newsModel();
    api = new newsApi();
    view = new newsView(model, api);
  });
  it("creates a new instance of the newsModel class", () => {
    expect(view.model).toBeInstanceOf(newsModel);
  });

  it("creates a new instance of the newsApi class", () => {
    expect(view.api).toBeInstanceOf(newsApi);
  });

  it("displayNews gets the list of headlines from the model", () => {
    model.getNews.mockImplementation(() => [
      {
        fields: {
          headline:
            "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
          byline: "Andy Bull",
          thumbnail:
            "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg",
        },
      },
    ]);
    view.displayNews();
    expect(document.querySelectorAll("a.headline").length).toEqual(1);
  });

  it("loads the news taken from the api", () => {
    view.model.getNews.mockImplementation(() => [
      {
        fields: {
          headline:
            "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
          byline: "Andy Bull",
          thumbnail:
            "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg",
        },
      },
    ]);
    view.model.setNews.mockImplementation(() => [
      {
        fields: {
          headline:
            "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
          byline: "Andy Bull",
          thumbnail:
            "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg",
        },
      },
    ]);

    view.api.loadNews.mockImplementation("", (callback) => {
      callback({
        response: {
          results: {
            fields: {
              headline:
                "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
              byline: "Andy Bull",
              thumbnail:
                "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg",
            },
          },
        },
      });

      view.displayNotesFromApi();
      expect(view.model.getNews).toHaveBeenCalledTimes(1);
      expect(view.model.setNews).toHaveBeenCalledTimes(1);
      expect(document.querySelectorAll("a.headline").length).toEqual(1);
    });
  });
});
it("clearDuplicateNews removes the duplicate list of headlines from the model", () => {
  model.getNews.mockImplementation(() => [
    {
      fields: {
        headline:
          "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
        byline: "Andy Bull",
        thumbnail:
          "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg",
      },
    },
  ]);
  model.getNews.mockImplementation(() => [
    {
      fields: {
        headline:
          "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
        byline: "Andy Bull",
        thumbnail:
          "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg",
      },
    },
  ]);

  view.clearDuplicateNews();
  view.displayNews();
  expect(document.querySelectorAll("a.headline").length).toEqual(1);
});

it("displays the relevent search results", () => {
  const newsSearchEL = document.querySelector("#news-search");
  newsSearchEL.value = "America";
  const newsSearchSubmitEL = document.querySelector("#news-search-submit");
  newsSearchSubmitEL.click();
  expect(document.querySelectorAll("#a.headline")).not.toBeNull();
});
