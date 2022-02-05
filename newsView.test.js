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
    
    const data = [ 
      {webTitle: "headline 1", webUrl: "example.com", fields: {thumbnail: "pic"}},
      {webTitle: "headline 2", webUrl: "example.com", fields: {thumbnail: "pic"}}
    ]
    
    view.displayHeadlines(data);
    expect(document.querySelectorAll("div.headline").length).toBe(2)
  });
})
})