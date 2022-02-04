/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NewsView = require('./newsView')
const NewsModel = require('./newsModel')

describe("NewsView Class", () => {
  it("has a main-container", () => {

    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new NewsView();
    expect(document.querySelectorAll("#main-container").length).toBe(1)
  })

describe("displayHeadlines", () => {
  it("displays the headlines", () => {

    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NewsModel();
    const view = new NewsView(model);
    model.addHeadline("Headline1");
    model.addHeadline("Headline2");

    view.displayHeadlines();

    expect(document.querySelectorAll("div.headline").length).toBe(2)
  });
})
})