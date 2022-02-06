/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NewsView = require('./newsView.js')

describe("NewView class", () => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  it("adds article titles to home page with .addTitles", () => {
    view = new NewsView();

    view.addTitle("Woman forgets baby in the train");
    expect(document.querySelectorAll(".article-title").length).toEqual(1);
  });
})