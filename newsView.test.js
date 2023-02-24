/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const Model = require('./newsModel');
const Client = require('./newsClient');
const View = require('./newsView');
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
require('jest-fetch-mock').enableMocks();

jest.mock('./newsClient');

const newsModel = new Model();
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
    const newsView = new View(newsModel, mockClient);
    newsView.displayArticles();
    expect(document.querySelectorAll("div").length).toBe(4)
    expect(document.querySelectorAll(".article").length).toBe(2)
  });

  it("Displays articles from the mocked Guardian API", (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const newsView = new View(newsModel, mockClient);
    newsView.displayArticlesFromApi().then(() => {
      const articles = document.querySelectorAll(".article");
      expect(articles.length).toBe(2);
      expect(articles[0].textContent).toContain("Story 1")
      done();
    });
  });

  it("Resets and displays only the articles relative to a search when button clicked", (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockClient = {
      loadTopicArticles: jest.fn().mockResolvedValue(
        { 
          response: { 
            results: [
              { id: 1,
                fields: { headline: "Tech story 1", thumbnail: "link", webUrl: "link" }},
              { id: 2,
                fields: { headline: "Tech story 2", thumbnail: "link", webUrl: "link" }}
            ]
          }}
      )
    }
    const newsView = new View(newsModel, mockClient);
    newsView.displayTopicArticles("topic").then(() => {
      const articles = document.querySelectorAll(".article");
      expect(articles.length).toBe(2);
      expect(articles[0].textContent).toContain("Tech story 1")
      done();
    });
  });

  it("Displays an error message when api call fails", (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockClient = {
      loadArticles: jest.fn().mockRejectedValue('error message')
    }
    const newsView = new View(newsModel, mockClient);
    newsView.displayArticlesFromApi().then(() => {
      const errorMessage = document.querySelector(".error-message")
      expect(errorMessage.textContent).toContain("Oopsy daisy")
      done();
    })
  });

  it("Displays an error message when topic api call fails", (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const mockClient = {
      loadTopicArticles: jest.fn().mockRejectedValue('error message')
    }
    const newsView = new View(newsModel, mockClient);
    newsView.displayTopicArticles("topic").then(() => {
      const errorMessage = document.querySelector(".error-message")
      expect(errorMessage.textContent).toContain("Oopsy daisy")
      done();
    })
  });
})


