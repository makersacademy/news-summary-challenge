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
  };

  const view = new NewsView(fakeModel, fakeClient);

  describe("#loadTodaysNews", () => {
    it("loads and displays todays news headlines", () => {
      view.loadTodaysNews();
      expect(document.querySelectorAll(".headline").length).toEqual(1);
      expect(document.querySelectorAll(".headline")[0].firstChild.textContent).toEqual("A headline");
    });

    it("displays a relevant picture next to each news article", () => {
      view.loadTodaysNews();
      const firstHeadline = document.querySelectorAll(".headline")[0];

      expect(firstHeadline.childNodes.length).toBe(2);
      expect(firstHeadline.childNodes[1].getAttribute("src")).toEqual("image.png");
    });

    it("links to the original article when you click the headline", () => {
      view.loadTodaysNews();
      const firstHeadline = document.querySelectorAll(".headline")[0];
      expect(firstHeadline.firstChild.tagName).toEqual("A");
      expect(firstHeadline.firstChild.getAttribute("href")).toEqual("url");
    });
  });
});
