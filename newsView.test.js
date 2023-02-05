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
              fields: {
                thumbnail:
                  "https://media.guim.co.uk/cde7e745cf818ac1b08ad1006a9a5d4b8e3e91ce/0_201_3000_1800/500.jpg",
              },
            },
            {
              webTitle:
                "US shoots down suspected Chinese spy balloon over east coast",
              fields: {
                thumbnail:
                  "https://media.guim.co.uk/f2e10a5f40f1fa3b9e0d633aaab601fef6932300/230_0_7592_4557/500.jpg",
              },
            },
          ],
        },
      })
    );

    await newsView.displayNewsFromApi();

    expect(document.querySelectorAll("div").length).toBe(3);
    expect(document.querySelectorAll("div.news").length).toEqual(2);
    const news = document.querySelectorAll("div.news")[0];
    const title = news.querySelector("h2");
    expect(title.innerHTML).toEqual("Wales v Ireland: Six Nations 2023 – live");
  });

  it("Append an error message to the main container", () => {
    newsView.displayError("Error 123");
    const errorEl = document.querySelector("#error-message");
    expect(errorEl).not.toBeNull();
    expect(errorEl.textContent).toBe("Something went wrong: Error 123");
  });
});
