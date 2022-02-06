/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsView = require("./newsView");

describe("NewView class", () => {
  // doubles for the api and model classes
  const api = { loadArticles: () => console.log("this is a double") };

  const model = {
    showArticles: () => {
      return [
        {
          webTitle: "title1",
          fields: {
            thumbnail: "src1",
          },
        },
        {
          webTitle: "title2",
          fields: {
            thumbnail: "src2",
          },
        },
      ];
    },
  };

  it("loads articles titles to home page", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new NewsView(model, api);

    view.createArticles();
    expect(document.querySelectorAll(".article-title").length).toEqual(2);
    expect(document.querySelectorAll(".article-title")[1].innerText).toEqual(
      "title2"
    );
  });

  it("loads article images to home page", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new NewsView(model, api);

    view.createArticles();
    expect(document.querySelectorAll(".article-image").length).toEqual(2);
    expect(document.querySelectorAll(".article-image")[1].src).toEqual(
      "http://localhost/src2"
    );
  });
});
