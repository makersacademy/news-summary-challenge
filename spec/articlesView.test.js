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
  it("Creates a new div for an article when loaded from model class", () => {
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

  it('displays articles returned from the api', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const newsView = new ArticlesView(newsModel, mockClient)
    newsView.getArticlesFromApi().then(() => {
      const articles = document.querySelectorAll(".article-div")
      expect(articles.length).toBe(4)
      expect(articles[0].innerHTML).toContain('Story 1')
      done()
    })
  })

  it('resets the page and then displays articles returned from search', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockClient = {
      searchArticles: jest.fn().mockResolvedValue(
        { 
          response: { 
            results: [
              { id: 1,
                fields: { headline: "Sports Headline 1", thumbnail: "link", webUrl: "link" }},
              { id: 2,
                fields: { headline: "Sports Headline 2", thumbnail: "link", webUrl: "link" }}
            ]
          }}
      )
    }
    const newsView = new ArticlesView(newsModel, mockClient);
    newsView.searchArticles("sports").then(() => {
      const articles = document.querySelectorAll(".article-div");
      expect(articles.length).toBe(2);
      expect(articles[0].textContent).toContain("Sports Headline 1")
      done();
    });
  })

  it('checks the search button has been clicked and value is cleared', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockClient = {
      searchArticles: jest.fn().mockResolvedValue(
        { 
          response: { 
            results: [
              { id: 1,
                fields: { headline: "Sports Headline 1", thumbnail: "link", webUrl: "link" }},
              { id: 2,
                fields: { headline: "Sports Headline 2", thumbnail: "link", webUrl: "link" }}
            ]
          }}
      )
    }
    const newsView = new ArticlesView(newsModel, mockClient);
    const searchButton = document.querySelector('#search-button')
    const searchTerm = document.querySelector('#search-term')
    searchTerm.value = "Sports"
    searchButton.click()
    expect(searchTerm.value).toBe("")
  })
})