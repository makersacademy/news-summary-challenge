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
  loadArticles: jest.fn().mockResolvedValue(['Man Bites Dog', 'Dog Bites Man'])
}

describe("NewsClient", () => {
  it("Creates a new div for an article when from model class", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    newsModel.setArticles(['Story 1', 'Story 2']);
    const newsView = new View(newsModel, mockClient);
    newsView.displayArticles();
    expect(document.querySelectorAll("div").length).toBe(3)
    expect(document.querySelectorAll(".article").length).toBe(2)
  });

  it("Displays articles from the mocked Guardian API", (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const newsView = new View(newsModel, mockClient);
    newsView.displayArticlesFromApi().then(() => {
      const articles = document.querySelectorAll(".article");
      expect(articles.length).toBe(2);
      expect(articles[0].textContent).toBe("Man Bites Dog")
      done();
    })

  })
})


