/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NewsView = require("./newsView");
const NewsApi = require("./newsApi");
const NewsModel = require("./newsModel");

jest.mock("./newsModel");
jest.mock("./newsApi");

describe(NewsView, () => {
  beforeEach(() => {
    NewsModel.mockClear();
    NewsApi.mockClear();
    document.body.innerHTML = fs.readFileSync("./index.html");
    mockModel = new NewsModel();
    mockApi = new NewsApi();
    view = new NewsView(mockModel, mockApi);
  });

  it("gets notes from the model and displays it as a new div element with class 'article'", () => {
    view.model.getArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
      },
    ]);

    view.displayArticles();

    expect(document.querySelectorAll("div.article").length).toBe(1);
  });

  it("displayArticlesFromApi loads headlines from the server and displays them", () => {
    view.model.getArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
      },
    ]);

    view.model.setArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
      },
    ]);

    view.api.loadArticles.mockImplementation((search, callback) =>
      callback({
        response: {
          results: [
            {
              fields: {
                headline: "News Flash!",
                thumbnail:
                  "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
              },
            },
          ],
        },
      })
    );

    view.displayArticlesFromApi();
    expect(view.api.loadArticles).toHaveBeenCalledTimes(1);
    expect(view.model.setArticles).toHaveBeenCalledTimes(1);
    expect(view.model.getArticles).toHaveBeenCalledTimes(1);
    expect(document.querySelector("a.headline").innerText).toBe("News Flash!");
  });

  it("adds an image to the page", () => {
    view.model.getArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
      },
    ]);

    view.model.setArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
      },
    ]);

    view.api.loadArticles.mockImplementation((search, callback) =>
      callback({
        response: {
          results: [
            {
              fields: {
                headline: "News Flash!",
                thumbnail:
                  "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
              },
            },
          ],
        },
      })
    );

    view.displayArticlesFromApi();
    expect(view.api.loadArticles).toHaveBeenCalledTimes(1);
    expect(view.model.setArticles).toHaveBeenCalledTimes(1);
    expect(view.model.getArticles).toHaveBeenCalledTimes(1);
    expect(document.querySelector("img.thumbnail").src).toBe(
      "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg"
    );
  });

  it("adds a url to an article headline", () => {
    view.model.getArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
        webUrl:
          "https://www.theguardian.com/football/live/2022/may/08/manchester-city-v-newcastle-united-premier-league-live",
      },
    ]);

    view.model.setArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
        webUrl:
          "https://www.theguardian.com/football/live/2022/may/08/manchester-city-v-newcastle-united-premier-league-live",
      },
    ]);

    view.api.loadArticles.mockImplementation((search, callback) =>
      callback({
        response: {
          results: [
            {
              fields: {
                headline: "News Flash!",
                thumbnail:
                  "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
              },
              webUrl:
                "https://www.theguardian.com/football/live/2022/may/08/manchester-city-v-newcastle-united-premier-league-live",
            },
          ],
        },
      })
    );

    view.displayArticlesFromApi();
    expect(view.api.loadArticles).toHaveBeenCalledTimes(1);
    expect(view.model.setArticles).toHaveBeenCalledTimes(1);
    expect(view.model.getArticles).toHaveBeenCalledTimes(1);
    expect(document.querySelector("a.headline").href).toBe(
      "https://www.theguardian.com/football/live/2022/may/08/manchester-city-v-newcastle-united-premier-league-live"
    );
  });

  it("clears all articles on the page", () => {
    view.model.getArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
        webUrl:
          "https://www.theguardian.com/football/live/2022/may/08/manchester-city-v-newcastle-united-premier-league-live",
      },
    ]);

    view.model.setArticles.mockImplementation(() => [
      {
        fields: {
          headline: "News Flash!",
          thumbnail:
            "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
        },
        webUrl:
          "https://www.theguardian.com/football/live/2022/may/08/manchester-city-v-newcastle-united-premier-league-live",
      },
    ]);

    view.api.loadArticles.mockImplementation((search, callback) =>
      callback({
        response: {
          results: [
            {
              fields: {
                headline: "News Flash!",
                thumbnail:
                  "https://media.guim.co.uk/1f5a49b8c3621abad6be2b626928bff446eeb70b/65_152_2434_1460/500.jpg",
              },
              webUrl:
                "https://www.theguardian.com/football/live/2022/may/08/manchester-city-v-newcastle-united-premier-league-live",
            },
          ],
        },
      })
    );

    view.displayArticlesFromApi();
    view.clearArticles();
    expect(view.api.loadArticles).toHaveBeenCalledTimes(1);
    expect(view.model.setArticles).toHaveBeenCalledTimes(1);
    expect(view.model.getArticles).toHaveBeenCalledTimes(1);
    expect(document.querySelector("div.article")).toBeNull();
  });

  it("displays an error on the page when the fetch (for Api) fails", () => {
    view.displayError();
    expect(document.querySelector("div.error").innerText).toBe(
      "Oops, something went wrong!"
    );
  });
});
