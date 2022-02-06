/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NewsView = require('./newsView');

describe("NewView class", () => {
  // doubles for the api and model classes
    const api = { loadArticles: () => console.log("this is a double") };
    const model = { showTitles: () => ["title", "title2", "title3"] };

  it("adds article titles to home page with .addTitles", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new NewsView(model, api); 

    view.createArticles()
    expect(document.querySelectorAll(".article-title").length).toEqual(3);
    expect(document.querySelectorAll(".article-title")[2].innerText).toEqual("title3");
  });
})