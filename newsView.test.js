/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');

const NewsApi = require('./newsApi')
jest.mock('./newsApi');

// const NewsModel = require('./newsModel');
// jest.mock('./newsModel');


require('jest-fetch-mock').enableMocks();

describe("News View", () => {
  const mockApi = new NewsApi;
  mockApi.loadStory.mockImplementation(() => {});

  // const mockModel = new NewsModel;
  // mockApi.showStory.mockImplementation(() => {});


  const mockModel = {
    showStory: () => {
      return [
        {
          webTitle: "Example",
          webUrl: "https://example.com"
        },
        {
          webTitle: "Test",
          webUrl: "https://test.com"
        },
      ];
    },
  };

  it("loads story titles to home page", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const newsView = new NewsView(mockModel, mockApi);

    newsView.createStory();
    expect(document.querySelectorAll(".story-title").length).toEqual(2);
    expect(document.querySelectorAll(".story-title")[1].innerText).toEqual(
      "Test"
    );
  });


  it("article titles are linked to original article", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const newsView = new NewsView(mockModel, mockApi);

    newsView.createStory();
    expect(document.querySelector(".story-title").parentElement.href).toEqual(
      "https://example.com/");
  });
});
