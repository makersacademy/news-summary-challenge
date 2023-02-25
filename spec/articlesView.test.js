/**
 * @jest-environment jsdom
 */ 

const fs = require('fs')
const ArticlesModel = require('../lib/articlesModel')
const ArticlesView = require('../lib/articlesView')
const ArticlesClient = require('../lib/articlesClient')
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
require('jest-fetch-mock').enableMocks();

jest.mock('../lib/articlesClient')

const newsModel = new ArticlesModel();
const mockClient = {
  loadArticles: jest.fn().mockResolvedValue(
    { 
      response: { 
        results: [
          { id: 1,
            fields: { headline: "Story 1", thumbnail: "link", webUrl: "link" }},
          { id: 2,
            fields: { headline: "Story 2", thumbnail: "link", webUrl: "link" }}
        ]
      }}
  )
}

describe("NewsClient", () => {
  it("Creates a new div for an article when from model class", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const articles = { 
      response: { 
        results: [
          { id: 1,
            fields: { headline: "Story 1", thumbnail: "link", webUrl: "link" }},
          { id: 2,
            fields: { headline: "Story 2", thumbnail: "link", webUrl: "link" }}
        ]
      }}
    newsModel.setArticles(articles);
    const newsView = new ArticlesView(newsModel, mockClient);
    newsView.displayArticles();
    expect(document.querySelectorAll("div").length).toBe(5)
    expect(document.querySelectorAll(".article-div").length).toBe(2)
  });
})