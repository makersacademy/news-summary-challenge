/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");

require("jest-fetch-mock").enableMocks();

describe("NewsView", () => {
  let newsView;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const newsModel = new NewsModel();
    const newsClient = new NewsClient();
    newsView = new NewsView(newsModel, newsClient);
  });

  it("Displays the news", async () => {
    // todo mock client
    fetch.mockResponseOnce(
      JSON.stringify({
        response: {
          results: [
            {
              webTitle: "Wales v Ireland: Six Nations 2023 – live",
            },
            {
              webTitle:
                "US shoots down suspected Chinese spy balloon over east coast",
            },
          ],
        },
      })
    );

    await newsView.displayNewsFromApi();

    expect(document.querySelectorAll("div").length).toBe(3);
    expect(document.querySelectorAll("div.news").length).toEqual(2);
    expect(document.querySelectorAll("div.news")[0].textContent).toEqual(
      "Wales v Ireland: Six Nations 2023 – live"
    );
  });

  it("Append an error message to the main container", () => {
    newsView.displayError("Error 123");
    const errorEl = document.querySelector("#error-message");
    expect(errorEl).not.toBeNull();
    expect(errorEl.textContent).toBe("Something went wrong: Error 123");
  });
});
