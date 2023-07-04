/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsView = require("./newsView");

describe("NewsView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  const fakeModel = {
    setNews: () => {},
    getNews: () => [{ headline: "A headline", thumbnail: "image.png", url: "url" }],
  };

  const fakeClient = {
    fetchTodaysNews: callback => callback(),
    fetchNewsBySearchQuery: (query, callback) => callback(),
  };

  describe("#loadTodaysNews", () => {
    it("loads and displays todays news headlines", () => {
      const view = new NewsView(fakeModel, fakeClient);
      view.loadTodaysNews();
      expect(document.querySelectorAll(".headline").length).toEqual(1);
      expect(document.querySelectorAll(".headline")[0].childNodes[1].textContent).toEqual("A headline");
    });

    it("displays a relevant picture next to each news article", () => {
      const view = new NewsView(fakeModel, fakeClient);
      view.loadTodaysNews();
      const firstHeadline = document.querySelectorAll(".headline")[0];

      expect(firstHeadline.childNodes.length).toBe(2);
      expect(firstHeadline.firstChild.getAttribute("src")).toEqual("image.png");
    });

    it("links to the original article when you click the headline", () => {
      const view = new NewsView(fakeModel, fakeClient);
      view.loadTodaysNews();
      const firstHeadline = document.querySelectorAll(".headline")[0];
      expect(firstHeadline.childNodes[1].tagName).toEqual("A");
      expect(firstHeadline.childNodes[1].getAttribute("href")).toEqual("url");
    });
  });

  describe("#loadNewsFromSearch", () => {
    it("changes the header to include search term and displays relevant news", () => {
      const view = new NewsView(fakeModel, fakeClient);
      view.loadNewsFromSearch("wimbledon");
      const heading = document.querySelector("#news-heading");
      expect(heading.textContent).toEqual("News about: wimbledon");
    });

    it("displays news items relevant to search query", () => {
      const view = new NewsView(fakeModel, fakeClient);
      const input = document.querySelector("#search-input");
      const buttonEl = document.querySelector("#search-button");
      input.value = "headline";
      buttonEl.click();
      expect(document.querySelectorAll(".headline")[0].childNodes[1].textContent).toEqual("A headline");
    });

    it("removes existing news stories from display before displaying searched ones", () => {
      const view = new NewsView(fakeModel, fakeClient);
      const input = document.querySelector("#search-input");
      const buttonEl = document.querySelector("#search-button");
      input.value = "headline";
      buttonEl.click();
      expect(document.querySelectorAll(".headline").length).toEqual(1);
    });

    it("adds a back button to go back to today's news", () => {
      const view = new NewsView(fakeModel, fakeClient);
      const input = document.querySelector("#search-input");
      const buttonEl = document.querySelector("#search-button");
      input.value = "headline";
      buttonEl.click();
      expect(document.querySelector("#back-button").textContent).toEqual("Back to today's headlines");
    });
  });
});
