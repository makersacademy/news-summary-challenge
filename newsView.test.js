/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsClient = require("./newsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

jest.mock("./NewsClient");

describe("A test for my web page", () => {
  // We can use the beforeEach() hook
  // to set the jest `document` HTML before each test

  const newsItemOne = {
    webTitle:
      "At last, the inventors of modern skiing have something to cheer: Dave Ryding | Andy Bull",
    fields: {
      thumbnail:
        "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg",
    },
  };
  const newsItemTwo = {
    webTitle:
      "Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
    fields: {
      thumbnail:
        "https://media.guim.co.uk/aee3b3b05ea2a37acdadc91095c163fd381eba4a/0_24_3500_2100/500.jpg",
    },
  };

  let model, view, client;
  beforeEach(() => {
    NewsClient.mockClear();
    document.body.innerHTML = fs.readFileSync("./index.html");
    client = new NewsClient();
    model = new NewsModel();
    view = new NewsView(model, client);
  });

  it("displays a news items", () => {
    model.addNewsItem(newsItemOne);
    model.addNewsItem(newsItemTwo);
    view.displayNewsItems();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
  });

  it("only displays a news items once when called twice", () => {
    model.addNewsItem(newsItemOne);
    model.addNewsItem(newsItemTwo);
    view.displayNewsItems();
    view.displayNewsItems();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
  });

  it("display news from Api", () => {
    client.loadHeadlines.mockImplementation((callback) => {
      callback({
        response: { results: [newsItemOne, newsItemTwo] },
      });
    });

    view.displayNewsFromApi();

    expect(client.loadHeadlines).toHaveBeenCalled();
    expect(model.getNews()).toEqual([newsItemOne, newsItemTwo]);
  });

  it("displays error message on page", () => {
    view.displayError();
    expect(document.querySelector("#error").textContent).toBe(
      "Oops, something went wrong!"
    );
  });

  it("display webTitle from Api on page", () => {
    client.loadHeadlines.mockImplementation((callback) => {
      callback({
        response: {
          results: [newsItemOne, newsItemTwo],
        },
      });
    });

    view.displayNewsFromApi();

    expect(document.querySelectorAll(".news-item").length).toBe(2);
    expect(document.querySelectorAll(".news-item")[0].textContent).toEqual(
      "At last, the inventors of modern skiing have something to cheer: Dave Ryding | Andy Bull"
    );
    expect(document.querySelectorAll(".news-item")[1].textContent).toEqual(
      "Ofgem to unveil new household energy bill price cap on Thursday morning – business live"
    );
  });

  it("display picture from Api on page", () => {
    client.loadHeadlines.mockImplementation((callback) => {
      callback({
        response: {
          results: [newsItemOne, newsItemTwo],
        },
      });
    });

    view.displayNewsFromApi();

    expect(document.querySelectorAll(".news-thumbnail").length).toBe(2);
    expect(document.querySelectorAll(".news-thumbnail")[0].src).toEqual(
      "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg"
    );
    expect(document.querySelectorAll(".news-thumbnail")[1].src).toEqual(
      "https://media.guim.co.uk/aee3b3b05ea2a37acdadc91095c163fd381eba4a/0_24_3500_2100/500.jpg"
    );
  });
});
