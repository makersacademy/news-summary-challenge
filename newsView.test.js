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

describe("#displayHeadlines", () => {
  it("displays the headlines", () => {

    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NewsModel();
    const view = new NewsView(model);
    
    const data = [ 
      {webTitle: "headline 1", webUrl: "example.com", fields: {thumbnail: "pic1"}},
      {webTitle: "headline 2", webUrl: "example.com", fields: {thumbnail: "pic2"}}
    ]
    
    view.displayHeadlines(data);
    expect(document.querySelectorAll("div.headline").length).toBe(2)
  });

  it ("displays an image", () => {

    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NewsModel();
    const view = new NewsView(model);
    
    const data = [ 
      {webTitle: "headline 1", webUrl: "example.com", fields: {thumbnail: "test-pic.jpg"}}
    ]

    view.displayHeadlines(data);

    headline = document.querySelector("div.headline")
    expect(headline.querySelectorAll("img.article-img").length).toBe(1)
    expect(headline.querySelector("img.article-img").src).toBe("http://localhost/test-pic.jpg")
  });

  it("displays a Headline which is a link", () => {

    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NewsModel();
    const view = new NewsView(model);

    const data = [
      {webTitle: "Breaking News! Test Hadline!", webUrl: "www.news.com", fields: {thumbnail: "tet-pic.jpg"}}
    ]

    view.displayHeadlines(data)

    headline = document.querySelector("div.headline")
    console.log(headline.innerHTML)
    expect(headline.querySelectorAll("a.article-link").length).toBe(1)
    expect(headline.querySelector("a.article-link").href).toBe("http://localhost/www.news.com")
    
  }) 
    
})
})