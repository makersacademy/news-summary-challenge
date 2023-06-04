/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsView = require("./newsView");

describe("NewsView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  describe("#loadTodaysNews", () => {
    it("loads and displays todays news", () => {
      const fakeModel = {
        setNews: () => {},
        getNews: () => [{ headline: "A headline" }],
      };

      const fakeClient = {
        fetchTodaysNews: callback => callback(),
      };

      const view = new NewsView(fakeModel, fakeClient);
      view.loadTodaysNews();
      expect(document.querySelectorAll(".headline").length).toEqual(1);
      expect(document.querySelectorAll(".headline")[0].firstChild.textContent).toEqual("A headline");
    });
  });
});
