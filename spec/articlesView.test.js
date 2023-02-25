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

beforeEach(() => {
  model = new ArticlesModel()
  client = {
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
  view = new ArticlesView(model, client)
})

describe('articlesView', () => {
  it('adds a new div for an article', () => {
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
    model.setArticles(articles);
    const view = new View(model, mockClient);
    view.displayArticles();
    expect(document.querySelectorAll("div").length).toBe(4)
    expect(document.querySelectorAll(".article-div").length).toBe(2)
  })
})